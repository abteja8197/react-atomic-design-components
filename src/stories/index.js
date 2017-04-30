import React from 'react';
import { storiesOf } from '@kadira/storybook';

import Icon from '../components/Atoms/Image/Icon';
import Heading from '../components/Atoms/Title/Heading';
import Info from '../components/Atoms/Text/Info';
import Label from '../components/Atoms/Text/Label';

import OrderHeader from '../components/Molecules/Banner/OrderHeader';
import OrderCustomer from '../components/Molecules/Info/OrderCustomer';

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
