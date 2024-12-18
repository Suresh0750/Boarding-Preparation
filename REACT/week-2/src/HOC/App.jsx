import React from 'react';

// Higher Order Component
function withLogging(WrappedComponent) {
    console.log(WrappedComponent)
  return function EnhancedComponent(props) {
    console.log('Rendering component:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}

// A simple component
function MyComponent() {
  return <div>Hello, World!</div>;
}

// Wrapping MyComponent with HOC
console.log(withLogging(MyComponent))
const MyComponentWithLogging = withLogging(MyComponent);

export default MyComponentWithLogging;
