# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Advice generator app solution](#frontend-mentor---advice-generator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./images/myprojectimage.png)

### Links

- Solution URL: [https://github.com/Jasminvillatoro/Advice-Generator]
- Live Site URL: [https://jasminvillatoro.github.io/Advice-Generator/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow
- Rest Api's
- JavaScript DOM

### What I learned

```css
learned css variables * {
  margin: 0;
  padding: 0;
  /* Primary */
  --light-cyan: hsl(193, 38%, 86%);
  --neon-green: hsl(150, 100%, 66%);
  /* Neutral */
  --dark-grayish-blue: hsl(217, 19%, 24%);
  --dark-blue: hsl(218, 23%, 16%);
}
```

```js
const getAdvice = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then(displayAdvice);
};
Learned about working with APIs
```

- Website - [Portfolio](https://www.jasminvillatoroportfolio.com/)

- Twitter - [Jas_codes](https://www.twitter.com/Jas_codes)
