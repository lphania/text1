<template>
  <ul>
    <li>news001</li>
    <input type="text" name="" id="">
    <li>news002</li>
    <input type="text" name="" id="">
    <li>news003</li>
    <input type="text" name="" id="">
  </ul>
</template>

<script>
export default {
    name:'News',
    activated() {
      this.timer = setInterval(() => {
        console.log('@');
      }, 100);
    },
    deactivated() {
      clearTimeout(this.timer)
       
    },
};
</script>

<style>
</style>
