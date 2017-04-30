import React from 'react';
import PropTypes from 'prop-types';
import OrderItem from '../../Molecules/Info/OrderItem';

const OrderList = ({ items }) => (
  <div className="order-list">
    {items && items.length > 0 ? items.map((item, index) => (
      <OrderItem
        key={index}
        status={item.status}
        image={item.image}
        name={item.name}
        description={item.description} />
    )) : null}
  </div>
);

OrderList.propTypes = {
  items: PropTypes.arrayOf(
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

export default OrderList;
