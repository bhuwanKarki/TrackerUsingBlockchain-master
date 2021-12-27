import React, { Component } from 'react';
import { connect } from 'react-redux';
import ItemDetail from '../views/SearchPacket/ItemDetail';
import Form from 'react-jsonschema-form';

class TransferItem extends Component {
  render() {
    const itemIndex = this.props.match.params.itemIndex;
    const itemDetails = this.props.itemObjs[itemIndex];
    return (
      <div>
        <ItemDetail item={itemDetails} />
        <Form
          schema={{
            type: 'object',
            properties: {
              'address': {
                type: 'string',
                title: 'Current Address'
              },
              'price': {
                type: 'number',
                minimum: 0,
                exclusiveMinimum: true,
                title: 'Shipping Price',
                description: 'cannot be more than original shipping price'
              },
            },
            required: ['price', 'address']
          }}
          uiSchema={{
            'ui:order': ['address', 'price']
          }}
          onSubmit={({ formData }) => {
            this.props.itemInstances[itemIndex]
              .transferItem(formData.price, formData.address)
              .then(() => {
                this.props.refresh();
                this.props.history.push('/ship');
              })
          }}
        />
        <button
          type="submit"
        >
          Request Shipment Transfer
        </button>
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
)(TransferItem);
