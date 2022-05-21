<template>
  <div>
    <h2>我是About的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link class="list-group-item" active-class="active" to="/about/news">News</router-link>
      </li>
      <li>
        <router-link class="list-group-item" active-class="active" to="/about/message">Message</router-link>
      </li>
    </ul>
    <keep-alive include="News">
    <router-view></router-view>
    </keep-alive>
     
  </div>
 
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
</style>