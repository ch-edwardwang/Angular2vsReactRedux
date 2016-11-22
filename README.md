# AngularJS 2.x vs React + Redux
(Edit date: Oct 26, 2016)

This is a comparison of AngularJS 2 and React + Redux. The purpose of this comparison is to see the pros and cons of each framework.

Edits, comments, and insight are welcome.

## AngularJS 2
- https://angular.io/

### Languages 
- AngularJS 2 can be written in TypeScript, Dart, or Vinilla JavaScript.

#### TypeScript
- www.typescriptlang.org
- TypeScript ⊇ JavaScript
- Mistakes can be found during transpilation.

#### DART
- www.dartlang.org
- General purpose programming language.
- Class-based, single inheritance, object-oriented language with C-style Syntax which can be transcompiled into JS.

### AngularJS 2
[ insert picture of how these 8 things fit together ]
- Composed of 8 building blocks
 - Modules `// Functionally the root node of a set of components/services.`
 - Components `// Controller to a view`
 - Templates `// HTML`
 - Metadata `// decorators, which help angular understand a component/module`
 - Data binding `// The way which the DOM & Component communicate`
 - Directives `// Attributes on an HTML element`
 - Services `// A class with a narrow, well-defined purpose`
 - Dependency injection `// Which components/modules are needed`
 

## React
- Remove both asynchrony and direct DOM manipulation
- https://facebook.github.io/react/

### Languages 
- JSX and Vinilla JavaScript.

#### JSX
- React's version of html (camelCase instead of snake-case).
- JSX is treated like a JS object after compilation.


### React JS

#### Element
- The smallest buildin block of React apps.

#### Component
- Indpendent and reusuable UI pieces. Accept input in the form of `props`.
- May have it's own storage in the form of `state`.
- Has lifeCycle functions [pre-defined function interfaces which get called at different stages]
  - Example: `render()` gets every time `setState` is called or new `props` are passed to parent function.
  - Example: `componentWIllUnmount()` gets called after the component is unmounted from the dom. Use case would be to delete an interval function.

  ##### State
  - The component's local memory. Always use `setState()` when updating state.
  - If you don’t use the variables in render, it should not be in the state. State is similar to props, but it is private and fully controlled by the component.

  ##### Props
  - The variables passed in by the component's parent.
  - Read only, Components are “pure” functions. They do not modify the props that they’re passed

#### Event Handling
- Also for event handling to work, extra binding must be done. [https://facebook.github.io/react/docs/handling-events.html]
- To prevent default behavior you have to actually write an event handler function and call `e.preventDefault()`.

#### Conditional rendering
- Can be done inline in the JS where the JSX are just elements assigned to JS variables. Or it can be done in the JSX returned in render when surrounded with `{...}`. [https://facebook.github.io/react/docs/conditional-rendering.html]

#### Lifting state
- Unlike 2-way binding, you have to propergate an event handler down and call that handler to change the state of a parent (grandparent++). This means more boilerplate. But makes debugging easier.

##### Thinking in React / thinking in components
- A great resouce for thinking in components based off of UI [https://facebook.github.io/react/docs/thinking-in-react.html]

### Redux
- Get away from the complexity of mixing two concepts that are very hard for the human mind to reason about: mutation and asynchronicity.

#### Single Source of Truth
- Remember how each component in React had it's own state? Well not anymore!
- The whole state of your app is stored in a single object tree inside a single store.
- The only way to change the state tree is to emit an action (an obj which describes what happened)
- The way these actions transform the state tree is via pure reducers which you write.
```
{
  selectedSubreddit: 'frontend',
  postsBySubreddit: {
    frontend: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1439478405547,
      items: [
        {
          id: 42,
          title: 'Confusion about Flux and Relay'
        },
        {
          id: 500,
          title: 'Creating a Simple Application Using React JS and Flux Architecture'
        }
      ]
    }
  }
}
```
#### State is read-only
- The only way to change the state is to emit an action.
- This ensures that neither the views nor the network callbacks will ever write directly to the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

#### Changes are made with pure functions
- Pure functions will have the same result for a given input at any point. They are not effected by outside elements and don't mutate the arguments which are passed in.

#### Middleware
- In most frameworks, middleware is some code you can put between the framework receiving a request, and the framework generating a response.
- Redux middleware provides a third-party extension point between dispatching an action, and the moment it reaches the reducer. People use Redux middleware for logging, crash reporting, talking to an asynchronous API, routing, and more.

#### Async Actions (API)
- Use [Redux Thunk middleware](https://github.com/gaearon/redux-thunk)
- Or use [Redux Promise middleware](https://github.com/acdlite/redux-promise)

##### [React + Redux example app](http://redux.js.org/docs/advanced/ExampleRedditAPI.html)
