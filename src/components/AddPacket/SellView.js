import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import { connect } from 'react-redux'
import Item from '../views/SearchPacket/Item';
import axios from 'axios';

class SellView extends Component {
  render() {
    return (
      <div>
        <h4>Open Orders</h4>
        <div>
          {this.props.itemInstances.map((instance, index) => {
            if (this.props.itemObjs[index] && (!this.props.itemObjs[index].isSold)) {
              return <Item key={index} item={this.props.itemObjs[index]} />
            }
            return null;
          })}
        </div>
        <h4>Add New Package</h4>
        <Form
          schema={{
            type: 'object',
            properties: {
              'address': {
                type: 'string',
                title: 'Operator'
              },
              'price': {
                type: 'number',
                minimum: 0,
                title: 'PacketID',

              },
          
                
              },
           
            required: ['price', 'address']
          }}
          uiSchema={{
            'ui:order': ['address', 'price']
          }}
          onSubmit={({ formData }) => {
            axios.post('http://localhost:3010/new-instance', formData).then(({ data }) => {
              this.props.itemContract.at(data).then((instance) => {
                this.props.addInstance(instance);
              });
            })
          }}
        />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    itemObjs: state.items.items,
    user: state.userWallet.userWalletAdress,
  }),
  {  }
)(SellView);
