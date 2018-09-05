# Queue't - Final project

## Problem
Waiting for a free table at a busy restaurant can be frustrating and boring. Sometimes there is limited information about the waiting time which can make you uncertain about whether or not to look for another place. You can not leave the restaurant in risk of losing your place in line, even though it can be crowded. To constantly be on hold prevents you from relaxing and enjoying your company during your wait. 

With the Queuet app you can monitor your queueing in your phone and get updates about your place in line and an estimated waiting time. You can safely leave the restaurant and have a stroll down the road while you wait. A short time before your table is ready you get a direct notification and can prepare to be seated. If you happen to find another place during your wait, you can easily cancel your queueing in the app without having to return to the restaurant.    


### Intended users
Guests at restaurants and restaurant staff. 


## Must-have functionality 
- Ability for a guest to be placed in line. 
- The guest can monitor her/his place in line and estimated waiting time. 
- Notification from the restaurant staff to the guest about when a free table is coming up.
- The guest is able to cancel her/his own queueing. 


## Nice-to-have functionality
- The guest can view the restaurant's menu.
- The guest can choose not to accept a free table and "move down" a step in line, leaving the table free for another guest.
- Ability for everyone in the company to monitor the queuing, through a "sharing" function.  
- Different language choices (English and Swedish).
- Information about free tables at close-by restaurants. 
- A rating function available for the guest after the the restaurant visit. 
- Different "user levels" depending on how many times the guest has visited the restaurant.
- Ability for a guest company to share the bill.

## Internal Communication
- Important documents, such as a translation guide, user stories, a guide to version control and more, can be found in the team's shared [Google Drive folder] (https://drive.google.com/open?id=1DIkqPwiQDiK0nnmSl-zfyD2jNo36Df8q). 
- The project's process is tracked on the team's [Trello board] (https://trello.com/b/OcwggZqN).

### Code standards 

**Use double quotes** 

**Place 1 space before the opening parenthesis** in control statements (`if`, `while` etc.). Place no space between the argument list and the function name in function calls and declarations. 

```javascript
// bad
if(isJedi) {
  fight ();
}

// good
if (isJedi) {
  fight();
}

// bad
function fight () {
  console.log ('Swooosh!');
}

// good
function fight() {
  console.log('Swooosh!');
}
```
**Set off operators with spaces.** 

```javascript
// bad
const x=y+5;

// good
const x = y + 5;
```


**Leave a blank line after blocks and before the next statement.**

```javascript
// bad
if (foo) {
  return bar;
}
return baz;

// good
if (foo) {
  return bar;
}

return baz;
```
**Do not pad your blocks with blank lines.** 

```javascript
// bad
function bar() {

  console.log(foo);

}

// bad
if (baz) {

  console.log(qux);
} else {
  console.log(foo);

}

// good
function bar() {
  console.log(foo);
}

// good
if (baz) {
  console.log(qux);
} else {
  console.log(foo);
}
```
**Do not add spaces inside parentheses.**

```javascript
// bad
function bar( foo ) {
  return foo;
}

// good
function bar(foo) {
  return foo;
}

// bad
if ( foo ) {
  console.log(foo);
}

// good
if (foo) {
  console.log(foo);
}
```
**Do not add spaces inside brackets or curly braces.**

```javascript
// bad
const foo = [ 1, 2, 3 ];
console.log(foo[ 0 ]);

// good
const foo = [1, 2, 3];
console.log(foo[0]);

// good
const foo = {clark: 'kent'};

// bad
const foo = { clark: 'kent' };

```

## JavaScript - Semicolons

Just include them, will you please? Don't ask why, just do it. If you must know why, then read this: [Automatic Semicolon Insertion](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion).

```javascript
// bad
const luke = {}
const leia = {}

// good
const luke = {};
const leia = {};
```


## JavaScript - Naming Conventions

Assigned names to references (variables, objects, arrays, etc) and functions should be as clear and descriptive as possible.

As a rule of thumb, a longer but more descriptive name is always better than a short, space-saving name that is less descriptive or even confusing.


**Use camelCase when naming objects, functions, and instances.**

```javascript
// bad
const OBJEcttsssss = {};
const this_is_my_object = {};
function c() {}

// good
const thisIsMyObject = {};
function thisIsMyFunction() {}
```
**Use PascalCase only when naming React/JSX functions and classes.** 

```javascript
// bad
const user = (props) => {
  // ...
}

// bad
class navbar extends Component {
  // ...
}

// good
const User = (props) => {
  // ...
}

// good
class NavBar extends Component {
  // ...
}
```
## React/JSX -  Stateless functional components

Stateless functional components should not support state or lifecycle methods.

Stateless functional components should be used for presentational components. They focus on UI rather than behavior, so it’s important to avoid using state in these components. Instead, state should be managed by higher-level “container” components. 

Stateless function components should always be written as an ES6 *Arrow Function*, and where `props` are present, they should always include defined *PropTypes* along with `isRequired` where appropriate:

```javascript
import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  return (
    <h1>{props.heading}</h1>
    <h2>{props.subheading}</h2>
  );
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  subheading: PropTypes.string
}

export default Header;
```
## React/JSX - Implicit Return

Although curly brackets aren't required for *arrow functions* if only one expression is present, a *stateless functional component* should for the sake of consistency include the *return* statement nonetheless, as well as the parentheses.

Maintaining this consistency will make the code easier and clearer to read, especially when we use varying *Return Types*, as covered below, and it allows for quicker editing without having to add or remove parentheses). It will also keep a more esthetic consistency across both _Stateless functional components_ and _Class components_.

```javascript
import React from 'react';
import PropTypes from 'prop-types';

// bad
const Footer = (props) => <h3>{props.title}</h3>;

// bad
const Footer = (props) => {
  <h3>{props.title}</h3>;
}

// bad
const Footer = (props) => {
  return <h3>{props.title}</h3>;
}

// bad
const Footer = (props) => {
  return (<h3>{props.title}</h3>);
}

// bad
const Footer = (props) => {
  return ( <h3>{props.title}</h3> );
}

// good
const Footer = (props) => {
  return (
    <h3>{props.title}</h3>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired
}

export default Footer;
```

