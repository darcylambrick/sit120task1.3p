<script>

export default {
    data () {
      return {
        str: "Hello World!",
        num: 42.75,
        arr: [1, 3, 5, 7, 9, 2, 4, 6, 8, 10],
        currentDate: new Date(),
        name: "Alice"
      }
    },
    methods:{
      add(){
        x = Math.floor(Math.random() * 11) + Math.floor(Math.random() * 11);
      }
    }
  }
</script>

<template>
  <!-- This project is from task 1.2p and the javascript has been edited to get working in vue -->

<div class="header">
  <h1>JavaScript</h1>
  <p>Hello {{ name }}!</p>
  <p id="add">{{ Math.floor(Math.random() * 11) + Math.floor(Math.random() * 11) }}</p>
</div>

<div class="row">
  <div class="col-3 col-s-3 menu">
    <ul>
      <li id="string0">{{ str }}</li>
      <li id="string1">{{ str.length }}</li>
      <li id="string2">{{ str.toUpperCase() }}</li>
      <li id="string3">{{ str.indexOf('World') }}</li>
      <li id="string4">{{ str.slice(7) }}</li>
    <li id="string5">{{ str.replace('Hello', 'Hi') }}</li>
    </ul>
  </div>

  <div class="col-5 col-s-9">
    <h1 id="num0">{{ num }}</h1>
    <p id="num1">{{ num.toFixed(1) }}</p>
    <p id="num2">{{ num.toString() }}</p>
    <p id="num3">{{ Number.isInteger(num) }}</p>
    <p id="num4">{{ Math.round(num) }}</p>
    <p id="num5">{{ Math.max(10, 20, 5) }}</p>
  </div>

  <div class="col-4 col-s-12">
    <div class="aside">
      <h2 id="arr0">{{ arr }}</h2>
      <p id="arr1">{{ arr.length }}</p>
      <p id="arr2">{{ arr.join('-') }}</p>
      <p id="arr3">{{ arr.indexOf(5) }}</p>
      <p id="arr4">{{ arr.slice(2, 5) }}</p>
      <p id="arr5">{{ arr.concat([11, 12]) }}</p>
    </div>
  </div>
</div>

<div class="footer">
  <p id="date0">{{ currentDate }}</p>
  <p id="date1">{{ currentDate.getFullYear() }}</p>
  <p id="date2">{{ currentDate.getMonth() + 1 }}</p>
  <p id="date3">{{ currentDate.getDate() }}</p>
  <p id="date4">{{ currentDate.getHours() }}</p>
  <p id="date5">{{ currentDate.getMinutes() }}</p>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

html {
  font-family: "Lucida Sans", sans-serif;
}

.header {
  background-color: #680000;
  color: #ffffff;
  padding: 15px;
}

.menu ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu li {
  padding: 8px;
  margin-bottom: 7px;
  background-color: #33b5e5;
  color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.menu li:hover {
  background-color: #0099cc;
}

.aside {
  background-color: #007f22;
  padding: 15px;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.footer {
  background-color: #585858;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  padding: 15px;
}

/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* For tablets: */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}
@media only screen and (min-width: 900px) {
  /* For desktop: */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
</style>
