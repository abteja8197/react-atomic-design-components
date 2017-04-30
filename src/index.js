import orderCardData from './data/OrderCardData';

import React from 'react';
import ReactDOM from 'react-dom';
import OrderCard from './components/Templates/Order/OrderCard';

const { status, assignee, items, assignedAt, customer, placedAt } = orderCardData;

    const orderHeader = {
      "title": customer.name,
      "subtitle": customer.id
    };

    const orderCustomer = {
      "dateTime": {
        "label": "Aangevraagd om:",
        "text": placedAt
      },
      "email": {
        "label": "Email:",
        "text": customer.email
      },
      "telephone": {
        "label": "Telephone:",
        "text": customer.phoneNumber
      }
    };

    const orderState = {
      "state": {
        "label": "Status",
        "items": [status]
      },
      "assignee": {
        "label": "Door",
        "text": assignee.name
      },
      "dateTime": {
        "label": "Om",
        "text": assignedAt
      }
    };

    const orderList = [
      {
        "status": items[0].status,
        "image": {
          "src": items[0].product.imageUrl,
          "alt": items[0].product.name
        },
        "name": items[0].product.name,
        "description": items[0].product.description
      },
      {
        "status": items[1].status,
        "image": {
          "src": items[1].product.imageUrl,
          "alt": items[1].product.name
        },
        "name": items[1].product.name,
        "description": items[1].product.description
      },
      {
        "status": items[2].status,
        "image": {
          "src": items[2].product.imageUrl,
          "alt": items[2].product.name
        },
        "name": items[2].product.name,
        "description": items[2].product.description
      },
    ];

ReactDOM.render(
  <OrderCard
    orderHeader={orderHeader}
    orderCustomer={orderCustomer}
    orderState={orderState}
    orderList={orderList}
  />,
  document.getElementById('root')
);
