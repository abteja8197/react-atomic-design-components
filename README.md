# Order Component

## Approach
This project is bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
`react` and `react-dom` are used to render the layout

Order component is built using Atomic Design patterns to promote re-usability with a clearly defined component structure.

Components are built from small to big in terms of complexity. Atoms are built to form molecules,
molecules to form a single `Order` organism and the organism is populated with static data in
`OrderCard` template.

Atoms are categorized as `Image`, `List`, `Text` and `Title` components.
Molecules are categorized as `Banner`, `Info` and `List` components.

`Order` is the only organism.

`OrderCard` is the only template.

## Development Detail
create-react-app is used to initially create the package.

Application entry point is `/src/index.js` as indicated in `/config/webpack.config.dev.js` and `/config/webpack.config.prod.js` files

Application is already ejected from react-scripts using `npm run eject` to extend webpack configuration with
`scss` loader.

`/.storybook/config.js` contains Storybook configuration
`/.storybook/webpack.config.js` extends webpack configuration for Storybook with `scss` loader.


## Available Scripts

- `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build`
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

- `npm test`
Launches the test runner in the interactive watch mode.

- `npm storybook`
Runs Storybook and shows all available components and their stories
Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.

- `npm build-storybook` Run build for Storybook

## Directory structure
```
  |-components
   |---Atoms
   |-----Image
   |-----List
   |-----Text
   |-----Title
   |---Molecules
   |-----Banner
   |-----Info
   |-----List
   |---Organisms
   |-----Card
   |---Templates
   |-----Order
   |-data
   |-fonts
   |-stories
   |-theming
```

`components` folder contains all the components structured in atomic design patterns
as atoms, molecules, organisms and templates taking into account the complexity of each component.

`data` folder contains the static data used to populate the components with sample data.

`font` folder contains the IcoMoon fonts file

`stories` folder contains the stories of all components in `index.js` file

## Components

### Atoms

#### Atoms > Image
- `CheckMark` is a class component that accepts `isSelected` `width` and `height` props and renders a either check mark or an empty box depending on `isSelected`.

  `OrderItem` has state that is initialized from its props and updated in `onToggleCheckMark` function.
    This function calls `onToggle` which is passed down by the parent component to pass either NEW or RESERVED depending on `isSelected`.

  ```
  <CheckMark isSelected width={"50"} height={"50"} />
  ```

- `Icon` is a stateless function component that accepts `name` `width` and `height` props and renders
  various icons depending on `name`.
  ```
  <Icon name={'printer'} width={"22"} height={"22"} />
  <Icon name={'chevron-thin-left'} width={"22"} height={"22"} />
  <Icon name={'chevron-thin-right'} width={"22"} height={"22"} />
  ```

- `Image` is a stateless function component that accepts `image` props and renders an image from a URL.
  ```
  <Image image={image} />
  ```

#### Atoms > List
- `TextList` is a stateless function component that accepts an `items` array props and renders
  an unordered list with `TextListItem` for each item.
  ```
  <TextList items={["Nieuw", "In behandeling"]} />
  ```

- `TextListItem` is a stateless function component that accepts a `text` props and renders
  a list item with the text.
  ```
  <TextListItem text={"In behandeling"} />
  ```

#### Atoms > Text
- `Info` is a staless function component that accepts `body` props and renders a `div` element with the text.
  ```
  <Info body={"In behandeling"} />
  ```

- `Label` is a staless function component that accepts `text` and `striking` props and renders a `strong`
  element either a striking or regular text depending on `striking`.
  ```
  <Label text={"Aangevraagd om"} />
  <Label text={"Aangevraagd om"} striking />
  ```

#### Atoms > Title
- `Heading`  is a staless function component that accepts `size` and `text` props and renders a span
  with the text in an appropriate size depending on `size`.
  ```
  <Heading size={'h1'} text={"Mevr de Boer"} />
  <Heading size={'h2'} text={"Mevr de Boer"} />
  <Heading size={'h3'} text={"Mevr de Boer"} />
  <Heading size={'h4'} text={"Mevr de Boer"} />
  ```

### Molecules

#### Molecules > Banner
- `OrderHeader` is a staless function component that accepts a `title` and `subtitle` props and renders
  `Heading`, `Info` and `Icon`.
  ```
  <OrderHeader title={orderHeader.title} subtitle={orderHeader.subtitle} />
  ```

#### Molecules > Info
- `OrderCustomer` is a staless function component that accepts `dateTime`, `email` and `telephone` props and renders
  `Label` and `Info`.
  ```
      <OrderCustomer
        dateTime={orderCustomer.dateTime}
        email={orderCustomer.email}
        telephone={orderCustomer.telephone}
      />
  ```

- `OrderItem` is a class component that accepts `image`, `name` and `description` props and renders
  `CheckMark`, `Image`, `Heading`, `Info` and `Icon` components.

  `OrderItem` has state that is initialized from its props and updated in `onToggleStatus` function.
  This function is passed down to and called by child component `CheckMark`
  ```
      <OrderItem
        image={firstOrderItem.image}
        name={firstOrderItem.name}
        description={firstOrderItem.description}
      />
  ```

- `OrderState` is a staless function component that accepts `state`, `assignee` and `dateTime` props and renders
  `Heading`, `Info` and `TextList` components.
  ```
      <OrderState
        state={orderState.state}
        assignee={orderState.assignee}
        dateTime={orderState.dateTime}
      />
  ```

#### List
- `OrderList` is a staless function component that accepts `items` array and renders a `OrderItem` component for each item.
  ```
  <OrderList items={orderList} />
  ```

### Organisms
#### Organisms > Card
- `Order` is a stateless function component that accepts `orderHeader`, `orderCustomer`, `orderState` and `orderList` and renders
  `OrderHeader`, `OrderCustomer`, `OrderState` and `OrderList` components.
  ```
      <Order
        orderHeader={orderHeader}
        orderCustomer={orderCustomer}
        orderState={orderState}
        orderList={orderList}
      />
  ```

### Templates
#### Templates > Order
- `OrderCard` is a class component that accepts `orderHeader`, `orderCustomer`, `orderState` and `orderList` and renders
  an `Order` component.
  ```
      <OrderCard
        orderHeader={orderHeader}
        orderCustomer={orderCustomer}
        orderState={orderState}
        orderList={orderList}
      />
  ```
