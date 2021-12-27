import React from 'react';
import styled from 'styled-components';
import Form from 'react-jsonschema-form';
import ItemDetail from './ItemDetail';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
`

const Button = styled.button`
  background: #f5f7f9;
  border: none;
  border-radius: 3px;
  height: 30px;
  width: 70px;
  color: black;
  display: block;
  margin-top: 10px;
  -webkit-appearance: button;
    cursor: pointer;
`

const BuyItemsComponent = ({items, match, itemInstances, history, refresh}) => {
  const itemIndex = match.params.itemIndex;
  const item = items[itemIndex];
  const instance = itemInstances[itemIndex];

  return (
    <Wrapper>
      <ItemDetail
        item={item}
      />
      <Form
        schema={{
          type: 'object',
          properties: {
            address: {
              title: 'Delivery Address',
              type: 'string'
            },
            shipPrice: {
              title: 'Shipping Price',
              type: 'number',
              minimum: 0
            },
            shipTime: {
              title: 'Shipping Deadline',
              type: 'number',
              minimum: 1,
            }
          },
          required: ['address', 'shipPrice', 'shipTime']
        }}
        uiSchema={{
          'ui:order': ['address', 'shipPrice', 'shipTime']
        }}
        onSubmit={({ formData }) => {
          axios.post('http://localhost:3010/buy', {
            instanceAddr: instance.address,
            ...formData,
          }).then().then(() => {
            refresh();
            history.push('/buy');
          })
        }}
      >
        <Button
          type="submit"
        >
          Change
        </Button>
      </Form>
    </Wrapper>
  );
}

export default BuyItemsComponent;
