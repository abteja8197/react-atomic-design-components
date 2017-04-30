import './OrderCustomer.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Label from '../../Atoms/Text/Label';
import Info from '../../Atoms/Text/Info';

const OrderCustomer = ({ dateTime, email, telephone }) => {
  const dateTimeArray = dateTime.text.split(" ");
  const dateString = dateTimeArray[0];
  const timeString = dateTimeArray[1];

  return(
    <div className="order-customer">
      <div className="order-customer__date-time">
          <Label text={dateTime.label} />&ensp;
          <div className="order-customer__dateTime-text">
            <Info body={`${timeString}`} />&ensp;
            <Info body={`(${dateString})`} />
          </div>
      </div>
      <div className="order-customer__email">
        <Label text={email.label} />&ensp;
        <Info body={email.text} />
      </div>
      <div className="order-customer__telephone">
        <Label text={telephone.label} />&ensp;
        <Info body={telephone.text} />
      </div>
    </div>
  )
}

OrderCustomer.propTypes = {
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
}

export default OrderCustomer;
