# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# useRef 

    Store a reference that does not cause re-renders when its value changes. It helps the components remembers some information.

    Common Uses:
    Accessing or interacting with Dom elements
    Managing focus, animations and transitions.
    Handling timers and itervalse.


# single page web application and multi page web application.

    A Single Page Application is a web application that loads a single HTML page and dynamically updates content on the page without refreshing the browser. It behaves more like a desktop application, providing a smooth and fast user experience.

    A Multi-Page Application is a traditional web application where each action or page load triggers a new HTML page to be fetched from the server. Every time the user navigates to a new page, the browser reloads the entire content.


# Client-Side Rendering (CSR).

    In Client-Side Rendering, the browser downloads a minimal HTML file and uses JavaScript to render the content dynamically. Rendering happens on the user's browser after the page is loaded.

# Server-Side Rendering (SSR)

    In Server-Side Rendering, the content is rendered on the server before it is sent to the browser. The user receives a fully rendered HTML page from the server.


# Higher order component (HOC)

    A Higher Order Component is a function that takes a component as an argument and returns a new component with additional functionality.     
    HOCs allow you to share logic across multiple components without duplicating code.


# library and framework
    
**library**

  * A library is a collection of reusable functions or tools.
  * You have full control over when and where to use the library.
  * You call the library in your code whenever you need it. 
  * **React.js, Lodash, jQuery.**

**framework**

  * A framework provides a complete structure for your application.
  * The framework calls your code instead of you calling it.
  * It gives rules and conventions that you follow.
  * Example: Angular, Next.js, Vue.js.

# Babel

    Babel is a JavaScript transpiler used in React.js to convert modern JavaScript (ES6+) and JSX syntax into older, browser-compatible JavaScript (ES5).

# What is a Transpiler?

    A transpiler is a tool that converts source code written in one programming language into another language (or version of the same language).

# props
    
    Props ways to pass the value to one component to another component.

# state

    In React, when we say state is an object, we are referring to the data structure that holds the state values. While React’s useState can hold any type of data—primitive types (like strings, numbers), arrays, or even objects—the internal React state management often works as an object under the hood.

# component 

    In React.js, a component is a reusable and self-contained building block of a user interface (UI). Components are the core concept in React, allowing you to break down your UI into smaller, manageable pieces that can be composed together to create complex UIs. They are responsible for rendering a part of the UI and handling their own logic and state.

# function component
    Functional components are simpler and more concise. They are written as JavaScript functions that accept props as arguments and return JSX (React’s syntax extension).

# class component

    Class components are the more traditional way of defining React components. They are defined as ES6 classes that extend React.Component and must have a render() method that returns JSX.


# pure component :

    A Pure Component in React is a component that only re-renders if its props or state have changed. It automatically performs a shallow comparison of props and state to determine if it should re-render, which helps to optimize performance by avoiding unnecessary renders. 

# controlled component and uncontrolled component

     In a controlled component, the value of the input field is controlled by React state. It provides better control and flexibility for handling form data, validation, and changes.

    In an uncontrolled component, the input field maintains its value internally, and React does not control it. Instead, you use refs to access the value when needed. It is simpler but less flexible than controlled components.

# React profiler

    In React, the React Profiler is a tool that helps developers measure the performance of their React application. It provides detailed information about the performance of React components, such as how long each component takes to render and how often it re-renders. The React Profiler is part of the React Developer Tools and is essential for identifying performance bottlenecks in your application.

# react-router-dom

    react-router-dom is a popular library for routing in React applications, allowing developers to manage navigation between different components or views in a React app.

# custome Hook

    In React, custom hooks are user-defined functions that allow you to extract and reuse stateful logic across multiple components. They enable you to share logic without repeating code, making your components cleaner and easier to maintain.


# fragment 

    In React, Fragments are a way to group multiple elements without adding extra nodes to the DOM. They allow you to return multiple elements from a component without wrapping them in a single parent element (like a div or section).

# Prop drilling

    Prop drilling is the practice of passing data from parent to child through intermediate components, which can become unwieldy as the component tree deepens. To solve this problem, React provides tools like the Context API, and state management libraries like Redux, which can help manage data more efficiently and avoid the need for passing props through many layers of the component tree.

# Hooks

    In React, Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to allow functional components to have side effects, manage local state, context, refs, and more, without needing to convert them into class components.

# Synthetic events

    Synthetic events in React provide a uniform and optimized way of handling DOM events across all browsers. React's synthetic event system abstracts away browser inconsistencies, improving performance and developer experience.

# Stateful Components 

    A stateful component is a component that manages its own internal state. These components can change their behavior over time by modifying their state. Stateful components are typically more interactive because they handle events and update the UI accordingly.

# Stateless Components

    A stateless component is a component that does not manage any internal state. It is primarily concerned with rendering UI based on the props it receives. Stateless components receive data through props and simply display it, without modifying the data or having any dynamic behavior.

# Clean up function 

    A cleanup function is a function that is used to clean up resources, subscriptions, or side effects when a component is unmounted or when certain dependencies change in a React functional component. It's typically used within the useEffect hook to prevent memory leaks or unintended side effects.

  * why we use

    In React, when a component is mounted, side effects (like fetching data, setting up subscriptions, or timers) might be triggered. However, if the component is unmounted before these side effects are completed, it can lead to unwanted behavior such as memory leaks or errors.

    The cleanup function ensures that any side effect is properly cleaned up when the component is unmounted or when dependencies change, preventing such issues.

# What are the limitations of react?

    SEO Challenges
    Heavy Initial Load
    Complex State Management
    Learning Curve for Beginners
    Too Much Boilerplate

# Arrow function

    Arrow function are more concise way to write a function expression  in javascript.

# map

    In JavaScript, the map() method is used to transform each element of an array and return a new array.

# Destructuring 

    Destructuring in JavaScript is a feature introduced in ES6 that allows you to extract values from arrays or properties from objects and assign them to variables in a concise way.

# filter

    The filter() method in JavaScript is used to create a new array containing elements that satisfy a specific condition. It does not modify the original array.

# reduce
  
    In JavaScript, the reduce() method itself accepts 2 parameters, and its callback function can have 4 parameters.


# Import/Export


    asynchronus behavior
    strict mood
    module js

# lifecycle methods

    lifecycle methods are hooks that run at various stages of a component's life, such as when it's created, updated, or destroyed.

# Error Boundary

    An Error Boundary is a special React component that catches JavaScript errors in its child components during rendering, in lifecycle methods, and in constructors. Instead of crashing the app when an error occurs, it displays a fallback UI (like an error message).

# pointer events 

    Pointer Events are a part of the Pointer Events API in web development, designed to handle user interactions across different devices such as a mouse, touchscreens, and stylus input. They provide a unified way to manage various types of input events, making it easier to create responsive and accessible applications.


# useContext

    In React, useContext is a Hook that allows you to access and share values (such as state, functions, or any data) across different components without having to pass props down manually through each component in the component tree. 
    It is commonly used with React Context to enable global state management.