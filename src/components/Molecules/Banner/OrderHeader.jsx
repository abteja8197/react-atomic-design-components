import './OrderHeader.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Atoms/Title/Heading';
import Info from '../../Atoms/Text/Info';
import Icon from '../../Atoms/Image/Icon';

const OrderHeader = ({ title, subtitle }) => (
  <div className="order-header">
    <div className="order-header__link-image">
      <Icon name={'chevron-thin-left'} width={"27"} height={"27"} />
    </div>

    <div className="order-header__text">
        <Heading size={'h2'} text={title} />
        <Info body={subtitle} />
    </div>

    <div className="order-header__print-image">
      <Icon name={'printer'} width={"50"} height={"50"} />
    </div>
  </div>
);

OrderHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
};

export default OrderHeader;
