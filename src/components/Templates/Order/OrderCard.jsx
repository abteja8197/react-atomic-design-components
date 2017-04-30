import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Order from '../../Organisms/Card/Order';

class OrderCard extends Component {
  render() {
    const { orderHeader, orderCustomer, orderState, orderList } = this.props;

    return(
      <div className="order-card">
        <Order
          orderHeader={orderHeader}
          orderCustomer={orderCustomer}
          orderState={orderState}
          orderList={orderList}
        />
      </div>
    )
  }
}

Order.propTypes = {
    orderHeader: PropTypes.object,
    orderCustomer: PropTypes.object,
    orderState: PropTypes.object,
    orderList: PropTypes.object
};

export default OrderCard;
