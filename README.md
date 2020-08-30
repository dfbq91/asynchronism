<h1 align="center">Asynchronism 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.1-blue.svg?cacheSeconds=2592000" />
  <a href="https://twitter.com/diegobtancourt" target="_blank">
    <img alt="Twitter: diegobtancourt" src="https://img.shields.io/twitter/follow/diegobtancourt.svg?style=social" />
  </a>
</p>

> This repository contains examples to understand how does asynchronism in JavaScript works

## Files Description

### asynchronism.js
Contains one function written with callbacks, promises and async-await. It was done
based on this video tutorial of [Asynchronism](https://www.youtube.com/watch?v=Q3HtXuDEy5s)

### sequential
There are two files in this folder.
#### tasks.js
Contains two functions. These functions are simple, their objective is just to prove
sequential asynchronism.
#### index.js
In this file, the functions of tasks.js are imported. In this file I do time measurement
of , taskOne duration is four seconds and taskTwo is 2 seconds.
So, if there are not errors, the execution time should be around of 6 seconds.
Given an error for example, in taskOne, the execution time should be 2 seconds.
Hence, taskTwo is esecuted after taskOne ends.

In this file, the tasks.js functions are imported. In this file I make the time measurement
of taskOne and taskTwo functions, the duration of taskOne is four seconds and taskTwo is two seconds.
Therefore, if there are no errors, the execution time should be about 6 seconds (taskOne + taskTwo).
If an error occurs, for example, in taskOne, the execution time should be 2 seconds.
Therefore, task Two is executed after task One is finished.

Run: `node index.js`

### pararell
It contains the same files as the sequential folder. Its purpose is to test
sequential asynchronism.
The difference is the code of the index.js file. I used Promise.all() to run taskOne and
taskTwo at the same time. Therefore, the time measurement should be 4 seconds (the time of
longer function)
Run: `node index.js`

## Author

👤 **Diego Betancourt**

* Website: https://www.linkedin.com/in/diegofernandobetancourtquintero/
* Twitter: [@diegobtancourt](https://twitter.com/diegobtancourt)
* Github: [@dfbq91](https://github.com/dfbq91)
* LinkedIn: [@diegofernandobetancourtquintero](https://linkedin.com/in/diegofernandobetancourtquintero)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_