import React from 'react';
import PropTypes from 'prop-types';
import OrderHeader from '../../Molecules/Banner/OrderHeader';
import OrderCustomer from '../../Molecules/Info/OrderCustomer';
import OrderState from '../../Molecules/Info/OrderState';
import OrderList from '../../Molecules/List/OrderList';

const Order = ({ orderHeader, orderCustomer, orderState, orderList }) => (
  <div className="order">
    <OrderHeader
      title={orderHeader.title}
      subtitle={orderHeader.subtitle}
    />
    <OrderCustomer
      dateTime={orderCustomer.dateTime}
      email={orderCustomer.email}
      telephone={orderCustomer.telephone}
    />
    <OrderState
      state={orderState.state}
      assignee={orderState.assignee}
      dateTime={orderState.dateTime}
    />

    <OrderList
      items={orderList}
    />
  </div>
);

Order.propTypes = {
  orderHeader: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
  }),
  orderCustomer: PropTypes.shape({
    dateTime: PropTypes.shape({
      label: PropTypes.string,
      text: PropTypes.string
    }),
    email: PropTypes.shape({
      label: PropTypes.string,
      text: PropTypes.string
    }),
    telephone: PropTypes.shape({
      label: PropTypes.string,
      text: PropTypes.string
    })
  }),
  orderState: PropTypes.shape({
    state: PropTypes.shape({
      label: PropTypes.string,
      items: PropTypes.arrayOf.string
    }),
    assignee: PropTypes.shape({
      label: PropTypes.string,
      text: PropTypes.string
    }),
    dateTime: PropTypes.shape({
      label: PropTypes.string,
      text: PropTypes.string
    })
  }),
  orderList: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.string,
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      }),
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
};

export default Order;
