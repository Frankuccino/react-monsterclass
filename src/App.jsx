import Add from "./components/Add.jsx";
import BasicEffect from "./components/BasicEffect.jsx";
import Counter from "./components/Counter.jsx";
import CounterEffect from "./components/CounterEffect.jsx";
import FetchDataEffect from "./components/FetchDataEffect.jsx";
import Footer from "./components/Footer.jsx";
import Greet from "./components/Greet.jsx";
import Greeting from "./components/Greeting.jsx";
import Header from "./components/Header.jsx";
import IconComponent from "./components/IconComponent.jsx";
import JSXRules from "./components/JSXRules.jsx";
import MainContent from "./components/MainContent.jsx";
import Person from "./components/Person.jsx";
import Product from "./components/Product.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import ProductList from "./components/ProductList.jsx";
import Profile from "./components/Profile.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ShoppingList from "./components/ShoppingList.jsx";
import StyledCard from "./components/StyledCard.jsx";
import Styling from "./components/Styling.jsx";
import TodoList from "./components/TodoList.jsx";
import UserProvider from "./components/UserProvider.jsx";
import UserList from "./components/UserList.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserStatus from "./components/UserStatus.jsx";
import Weather from "./components/Weather.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
// Timestamp: 58:00 - 49 hrs left.
// Timestamp: 2:11:00 - 48 hrs left (Time spent: 2hrs & 50 minutes or ~3hrs)
// Timestamp: 2:45:00 -~47 hrs left (Time Spent: 2hrs ) (covered useState)
// Timestamp: 3:05:00 - 47 hrs left (Time Spend: 1hr) (covered useEffect)
const App = () => {
  return (
    <>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>

      <FetchDataEffect />
      <CounterEffect />
      <BasicEffect />

      <ShoppingList />
      <Profile />
      <TodoList />
      <Counter />

      <IconComponent />
      <ProfileCard />
      <StyledCard />
      <Styling />

      <Greeting timeOfDay={"afternoon"} />
      <UserStatus loggedIn={true} isAdmin={true} />
      <Weather temperature={12} />
      <Person name={"Frankuccino"} age={23} />
      <Product name={"iPhone"} price={"$999"} />

      <UserList />
      <ProductList />

      <Header />
      <ProductInfo />
      <WelcomeMessage />
      <JSXRules />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;

// When building components keep this in mind:
// 1.The first letter of your component should be uppercase
// 2. You can create a component using the function reserved keyword or arrow function syntax - you have to return some JSX with that component.

// JSX - JavaScript XML
// 1. Behind the scene we are working with JavaScript, but this allows it to be declarative isntead of the imperative coding styles, by using an HTML-like syntax.
// 2. React.js compiler will compile into pure JavaScript.

// JSX Rules
// 1. From one Component, you are allowed to return only one parent.
// 2. In JSX, you have to close all of your tags.
// 3. JSX Attributes are written using camelCase (className, htmlFor, etc.)

// Expressions in JSX
// with JSX you can write expressions inside curly braces. The expressions can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result.

// Lists in ReactJS
// In react, you will render lists with some type of loop. The JavaScript map() array method is generally the preferred method.

// Props
// Props/Properties are argumenties passed into React components
// Props allows us to pass data from parent component to a child component
// Props are passed to components via HTML attributes

// Conditional Rendering
// Conditional rendering allows us to dynamically display different UI components or content based on specific conditions. This enables us to create more interactive and responsive user experiences.

// -------------

// State
// State is a way to store and manage data that can change over time and affects how the component renders. We define state using the useState Hook, which allows you to set an initial value and provides a way to update that state.

// Hooks
// Hooks are a new addition in React 16.8; They let you use state and other react features without writing a class.

// useState()
// useState Hook allows us to track state in a functional component. State generally refers to data or properties that need to be tracking in an application.
// The reason it is important to use the setValue() function from the useState is because anytime there would be a change, it will re-render the component, which will allow the new value to appear in the UI.
// useState works on all Data Types Primitive and Reference Types + CB Fns
// 1. String, Boolean, Number
// 2. Array, Objects, Array of Objects
// 3. Callback Function
// -
// Sharing state to other components
// 1. Parent Component owns the useState variable value
// 2. Passing the variable value as props to child component
// 3. Any childs that received the useState value and function setter can use the useState coming from the parent.
// The source of truth/value ownership comes from the Parent component.
// -
// Callback functions
// Callback function will only run when the component first render, so any logic inside the callback function will only run on the first render.
// It runs only once on mount, best used for "expensive" operations
// It's ideal to use this for
// 1. reading from storage or
// 2. Heavy loops ist on a list with thousand of items
// : array.map(...).filer(...).reduce(...)
// 3. Data Processing: creating complex objects
// 4. Complex Math

// --------------

//  Portal
// Portal is a feature that allows you to render a child component into a DOM node that exists outside the hierarchy of the parent component. This can be useful for scenarios like modals, tooltips, or dropdowns, where you want to break out of the usual parent-child structure and render in a different part of the DOM.
// Using the createPortal from 'react-dom'

// Switcher - using a switcher on the input element, key property of a useState boolean value.

// --------------
// useEffect()
// useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM etc.
// Things to keep in mind with the useEffect()
// 1. Without the array -> fire on every single render. Everytime we don't specify the dependency array, so in that situation the callback function will call on on every single render.

// useEffect with conditional. You're going to have to use that inside the useEffect hook.

// Anytime you specify the empty dependency array forward useEffect, it will only fire that function which is available inside our useEffect hook on the initial render like when our component first renders, it will call that function, not when our component changes.
// But if we create some sort of a state and we provided the value of that state, so anytime that state changes, that component will re-render and that callback function will fire.

// We setup useEffect hook to run some code WHEN
// 1. Component renders for the first time
// 2. & WHENEVER it re-renders
// 3. & some data in our component changed.

// --------------

// Prop Drilling
// From a great great grand parent (app) component to the (date)component
// There's quite a lot of ways to do that which we're going to be learnign throughout the course like by using Zustand and also using the contextAPI and also Redux Toolkit (there's a lot of ways).

// Prop drilling, we are going to be drilling this data into multiple components, we are taking that data and passing that data in to all of the component using the props.

// ---------------

//  Context API - createContext() - for creating an instance
// Context API is a feature that allows you to manage and share state across your component tree without having to pass props down manually at every level. It's useful for scenarios where you need to share data or functions across many components, especially when these components are deeply nested.
// This is to used for passing data using the Context.Provider,
// and accessing the data using Context.Consumer

// useContext() hook
// useContext Hook allows us to access the context values provided by a Context directly within a funcitonal component. Context provides a way to pass data through the component tree without having to pass props down manually at every level.

// instead of accessing the data through the callback function of the Context.Consumer element wrapping to return the JSX.
// We can capture the value of the Context.Provider's passed data through binding it and by wrapping the Source exported createContext into a useContext to a variable.
// We pass data using the createContext Wrapper parent, and we are going to access that data through importing that wrapper parent and using the useContext to access and bind the value into a variable.
