import './OrderState.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Atoms/Title/Heading';
import Info from '../../Atoms/Text/Info';
import TextList from '../../Atoms/List/TextList';

const OrderState = ({ state, assignee, dateTime }) => {
  const dateTimeArray = dateTime.text.split(" ");
  const dateString = dateTimeArray[0];
  const timeString = dateTimeArray[1];

  return(
    <div className="order-state">
      <div className="order-state__state">
          <Heading size={'h3'} text={state.label} />
          <div className="order-state__state-text">
            <TextList items={state.items} />
          </div>
      </div>
      <div className="order-state__assignee">
          <Heading size={'h3'} text={assignee.label} />
          <div className="order-state__assignee-text">
            <Info body={assignee.text} />
          </div>
      </div>
      <div className="order-state__date-time">
          <Heading size={'h3'} text={dateTime.label} />
          <div className="order-state__dateTime-text">
            <div className="order-state__date-text">
              <Info body={`${timeString}`} />
            </div>&ensp;
            <Info body={`(${dateString})`} />
          </div>
      </div>
    </div>
  )
}

OrderState.propTypes = {
  state: PropTypes.shape({
    label: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string)
  }),
  assignee: PropTypes.shape({
    label: PropTypes.string,
    text: PropTypes.string
  }),
  dateTime: PropTypes.shape({
    label: PropTypes.string,
    text: PropTypes.string
  })
};

export default OrderState;
