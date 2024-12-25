

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# useCallback 

    useCallback is a React Hook that memoizes a callback function. It ensures that a function does not get recreated on every render unless its dependencies change.

# useMemo

    useMemo is a React Hook used to optimize performance in functional components by memoizing the result of a computation (i.e., it "remembers" the result) and recomputing it only when its dependencies change. It is primarily used to prevent expensive calculations from being repeated on every render.

#  React memo   

    React.memo is a higher-order component (HOC) for functional components in React. It is used to optimize performance by preventing unnecessary re-renders of a component when its props haven't changed. This is particularly useful when your component is rendering the same output for the same input (i.e., the props haven't changed), and you want to avoid re-rendering the component to improve efficiency.

# useContext

    The useContext hook and Context API are tools in React that allow you to share data across your component tree without the need to manually pass props down at every level. This is especially useful when you need to manage global or shared state in large applications.

# React.lazy

    React.lazy is used for code-splitting and lazy loading components.

# useRef

    useRef is a hook in React that creates a reference to store a mutable value that does not trigger re-renders when updated. It can also be used to access the DOM elements directly.

# Life cycle methods

    Lifecycle methods in React are special methods that allow developers to run code at specific points in a component's life, such as when the component is being created, updated, or destroyed. They are primarily used in class components, but similar behavior can be achieved using hooks in functional components.


# React profiler

    React Profiler is a tool built into React that helps you measure the performance of your React components. It allows you to record and analyze the rendering behavior of your components, helping you identify performance bottlenecks and optimize your application.

# reconciliation

    React then compares the new Virtual DOM with the previous version (this process is called reconciliation).

# shadow dom

    Shadow DOM is a web standard that allows developers to create a self-contained section of the DOM (Document Object Model) inside an element, where the content and styles are isolated from the rest of the document.


# fetch vs axios

    fetch 
        Built-in browser API,
        Doesn't throw on 404 or 500, needs manual checking
        Requires manual parsing (.json(), .text())
        No built-in support(request Interceptors)
    
    axios 
        External library (third-party)
        Throws on non-2xx status codes
        Automatically parses JSON response
        Built-in support for interceptors

# useParams

    In React, useParams is a hook provided by the react-router-dom library, which allows you to access the parameters of the current URL in a functional component. These parameters are typically dynamic segments of a URL, such as the id of a resource, which can be useful for routing and rendering dynamic content based on the URL.

# forwardRef

    forwardRef is used when you need to forward a ref from a parent component to a child component, especially when the child component is a functional component. It’s a way to allow functional components to work with refs that are typically used with class components.   

# PropTypes

    PropTypes is a feature in React used for type checking the props that a component receives. It ensures that the props passed to a component have the correct data types, helping to catch potential bugs and making your code more robust.

# Portals

    React Portals provide a way to render a child component outside the DOM hierarchy of its parent component while maintaining the React component tree.

# outlet

     Outlet is a special component used with React Router for rendering nested routes. It serves as a placeholder where child route components are rendered when working with nested routing.

# Limitation of redux

    Boilerplate Code
    Complexity in Large Applications
    Performance Overhead
    Verbose Debugging
    Global State

# why we need redux

     Centralized State Management
     Predictability of State
     Better Debugging
     Separation of Concerns

# Redux Thunk
 
    Redux Thunk is a middleware for Redux that allows you to write asynchronous logic in your Redux actions. It is commonly used to handle API calls, side effects, or any async operations in a Redux application.

# Redux-Saga

    Redux-Saga is a middleware library for managing side effects like asynchronous API calls in Redux applications. It uses generators (a special type of function in JavaScript) to handle asynchronous tasks in a more readable and testable way.
