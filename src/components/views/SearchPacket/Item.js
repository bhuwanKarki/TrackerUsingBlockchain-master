import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
  padding: 10px;
  box-shadow: 2px 3px 4px 0px rgba(0,0,0,0.75);
  background: #f9f9f9;
  margin: 7px 0 7px 0;
`;



const Title = styled.div`
  font-size: 16px;
  color: #000000;
`;

const List = styled.div`
  padding-top: 10px;
  width: 100%;
      font-family: sans-serif;
    font-weight: 565;
  display: flex;
   flex-direction: column-reverse;
  tex-decoration: none;
`;

export default ({showShippingPrice, item, showShippingTime}) =>

    <Item>
        <List>
          <Title>{item.title}</Title>
          <Title>{item.title1}</Title>
          <Title>{item.title2}</Title>
          <Title>{item.title3}</Title>
          <Title>{item.title4}</Title>
          {item.price && (
            <div>
              <label>PacketID: </label>
              <span>{item.price}</span>
            </div>
            )}
         
          {item.deliveryLocation && (
            <div>
              <label>Delivery Location: </label>
              <span>{item.deliveryLocation}</span>
            </div>
          )}

          {item.currentLocation && (
            <div>
              <label>Operator: </label>
              <span>{item.currentLocation}</span>
            </div>
          )}
          {showShippingPrice && (item.currentShipPrice ? (
            <div>
              <label>Shipping Price: </label>
              <span>{item.currentShipPrice}</span>
            </div>
          ) : null)}
          {showShippingTime && (item.shippingTime ? (
            <div>
              <label>Shipping Time: </label>
              <span>{item.shippingTime}</span>
            </div>
          ) : null)}
      </List>
    </Item>
;
