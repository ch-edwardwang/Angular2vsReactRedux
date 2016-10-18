# Angular 2.x vs React + Redux
(Edit date: Oct 17, 2016)

This is a comparison of Angular 2 and React + Redux. The purpose of this comparison is to see the pros and cons of each framework.

Edits, comments, and insight are welcome.

## Angular 2.x

### Languages 
- Angular 2 can be written in TypeScript, Dart, or Vinilla JavaScript.

#### TypeScript
- TypeScript ⊇ JavaScript
- IDE support (Atom, Eclipse, Sublime, Visual Studio, Webstorm...).
- `$ tsc helloWorld.ts` to compile to plain JS. Code will be analyzed for mistakes during compile time.
- Supports Enums
```
function greeter(person: string) {
    return "Hello, " + person;
}
let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let color: string = "blue";
```
#### DART
- General purpose programming language.
- Class-based, single inheritance, object-oriented language with C-style Syntax which can be transcompiled into JS.
```
import 'dart:async';
import 'dart:math' show Random;

main() async {
  print('Compute π using the Monte Carlo method.');
  await for (var estimate in computePi()) {
    print('π ≅ $estimate');
  }
}
```

### Angular 2 Hello World
- Components manages a view.
```
(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>My First Angular App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
```

- Modules consolidate components, directives, and pipes into a cohesive block of functionality.
