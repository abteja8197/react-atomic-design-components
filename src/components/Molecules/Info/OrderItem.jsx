import './OrderItem.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckMark from '../../Atoms/Image/CheckMark';
import Image from '../../Atoms/Image/Image';
import Heading from '../../Atoms/Title/Heading';
import Info from '../../Atoms/Text/Info';
import Icon from '../../Atoms/Image/Icon';

class OrderItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: this.props.status
    }

    this.onToggleStatus = this.onToggleStatus.bind(this);
  }

  onToggleStatus(isSelected) {
    this.setState({
        status: isSelected ? 'NEW' : 'RESERVED'
    });
  }

  render() {
    const { image, name, description } = this.props;

    return (
      <div className="order-item">
        <div className="order-item__check-image">
          <CheckMark onToggle={this.onToggleStatus} width={"50"} height={"50"} />
        </div>

        <div className="order-item__photo-image">
          <Image image={image} />
        </div>

        <div className="order-item__text">
            <Heading size={'h2'} text={name} />
            <Info body={description} />
        </div>

        <div className="order-item__link-image">
          <Icon name={'chevron-thin-right'} width={"27"} height={"27"} />
        </div>
      </div>
    )
  }
}

OrderItem.propTypes = {
  status: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string
  }),
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default OrderItem;
