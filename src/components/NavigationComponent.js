import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60px;
  
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
      display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
        flex: 0 0 25%;
    max-width: 25%;
`;

const NLink = styled(NavLink)`
  height: 40px;
  width: 180px;
  text-align: center;
  line-height: 42px;
  background: #c7c7c7;
  border-radius: 15px;
  color: black;
  text-decoration: none;
  margin-right: 20px;
  font-size: 20px;
     display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
  :hover {
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
  }
  :active, :focus {
    outline: none;
  }
`;

const activeStyle = {
  color: 'black',
};

export default () =>
  <Wrapper>
      <NLink activeStyle={activeStyle} to='/SearchPacket'>SearchPacket</NLink>
      <NLink activeStyle={activeStyle} to='/AddPacket'>AddPacket</NLink>
  </Wrapper>;
