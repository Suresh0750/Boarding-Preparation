

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


