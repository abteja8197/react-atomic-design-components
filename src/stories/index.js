import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Icon from '../components/Atoms/Image/Icon';
import Heading from '../components/Atoms/Title/Heading';
import Info from '../components/Atoms/Text/Info';

import Label from '../components/Atoms/Text/Label';

import TextListItem from '../components/Atoms/List/TextListItem';
import TextList from '../components/Atoms/List/TextList';

import CheckMark from '../components/Atoms/Image/CheckMark';
import Image from '../components/Atoms/Image/Image';

import OrderHeader from '../components/Molecules/Banner/OrderHeader';
import OrderCustomer from '../components/Molecules/Info/OrderCustomer';
import OrderState from '../components/Molecules/Info/OrderState';
import OrderItem from '../components/Molecules/Info/OrderItem';
import OrderList from '../components/Molecules/List/OrderList';

import Order from '../components/Organisms/Card/Order';

import OrderCard from '../components/Templates/Order/OrderCard';

const orderHeader = {
  "title": "Mevrouw de Boer",
  "subtitle": "5679594403"
};

const orderCustomer = {
  "dateTime": {
    "label": "Aangevraagd om:",
    "text": "2016-05-24 09:00"
  },
  "email": {
    "label": "Email:",
    "text": "mevrouwdeboer@gmail.com"
  },
  "telephone": {
    "label": "Telephone:",
    "text": "0691345432"
  }
};

const orderState = {
  "state": {
    "label": "Status",
    "items": ["In behandeling"]
  },
  "assignee": {
    "label": "Door",
    "text": "Mark"
  },
  "dateTime": {
    "label": "Om",
    "text": "2016-05-25 10:30"
  }
};

const image = {
  "src": "//placehold.it/57/#939393/000000",
  "alt": "Boltaart"
};

const firstOrderItem = {
  "status": "NEW",
  "image": image,
  "name": "Boltaart Bosbessen",
  "description": "Overheerlijke Boltaart met Bosbessen."
};

const secondOrderItem = {
  "status": "NEW",
  "image": image,
  "name": "Aarbeien Boltaart",
  "description": "Biscuitdeeg met aardbeienbavaroise."
};

const thirdOrderItem = {
  "status": "NEW",
  "image": image,
  "name": "Truffel Boltaart",
  "description": "Chocolade mousse en biscuitdeeg gevuld met koffierumsaus en feuilletine."
};

const orderList = [firstOrderItem, secondOrderItem, thirdOrderItem];

storiesOf('Icon', module)
  .add('printer', () => (
    <Icon name={'printer'} width={"22"} height={"22"} />
  ))
  .add('chevron-thin-left', () => (
    <Icon name={'chevron-thin-left'} width={"22"} height={"22"} />
  ))
  .add('chevron-thin-right', () => (
    <Icon name={'chevron-thin-right'} width={"22"} height={"22"} />
  ))

storiesOf('Heading', module)
  .add('h1', () => (
    <Heading size={'h1'} text={"Mevr de Boer"} />
  ))
  .add('h2', () => (
    <Heading size={'h2'} text={"Mevr de Boer"} />
  ))
  .add('h3', () => (
    <Heading size={'h3'} text={"Mevr de Boer"} />
  ))
  .add('h4', () => (
    <Heading size={'h4'} text={"Mevr de Boer"} />
  ));

  storiesOf('Info', module)
  .add('default', () => (
    <Info body={"In behandeling"} />
  ));

storiesOf('Label', module)
  .add('default', () => (
    <Label text={"Aangevraagd om"} />
  ))
    .add('striking', () => (
    <Label text={"Aangevraagd om"} striking />
  ));

storiesOf('TextListItem', module)
  .add('default', () => (
    <TextListItem text={"In behandeling"} />
  ));

storiesOf('TextList', module)
  .add('default', () => (
    <TextList items={["Nieuw", "In behandeling"]} />
  ));

storiesOf('CheckMark', module)
  .add('selected', () => (
    <CheckMark isSelected width={"50"} height={"50"} />
  ))
  .add('not selected', () => (
    <CheckMark width={"50"} height={"50"} />
  ));

storiesOf('Image', module)
  .add('default', () => (
    <Image image={image} />
  ));

storiesOf('OrderHeader', module)
  .add('default', () => (
    <OrderHeader title={orderHeader.title} subtitle={orderHeader.subtitle} />
  ));

storiesOf('OrderCustomer', module)
  .add('default', () => (
    <OrderCustomer
      dateTime={orderCustomer.dateTime}
      email={orderCustomer.email}
      telephone={orderCustomer.telephone}
    />
  ));

storiesOf('OrderState', module)
  .add('default', () => (
    <OrderState
      state={orderState.state}
      assignee={orderState.assignee}
      dateTime={orderState.dateTime}
    />
  ));

storiesOf('OrderItem', module)
  .add('default', () => (
    <OrderItem
      image={firstOrderItem.image}
      name={firstOrderItem.name}
      description={firstOrderItem.description}
    />
  ));

storiesOf('OrderList', module)
  .add('default', () => (
    <OrderList items={orderList} />
  ));

storiesOf('Order', module)
  .add('default', () => (
    <Order
      orderHeader={orderHeader}
      orderCustomer={orderCustomer}
      orderState={orderState}
      orderList={orderList}
    />
  ));

storiesOf('OrderCard', module)
  .add('default', () => (
    <OrderCard
      orderHeader={orderHeader}
      orderCustomer={orderCustomer}
      orderState={orderState}
      orderList={orderList}
    />
  ));
