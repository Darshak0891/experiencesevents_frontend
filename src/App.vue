<template>
  <Login />
  <router-view />
</template>

<script>
import Login from './components/Login.vue';
import axios from 'axios';
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  padding: 0;
  margin: 0;
}
.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.login button {
    width: 320px;
    height: 50px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
