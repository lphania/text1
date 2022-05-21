<template>
  <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
      <router-link :to="{
          path:'/about/message/detail',
          query:{
              id:m.id,
              title:m.title
          }
      }">
      {{m.title}}
      </router-link>
      <button @click="pushShow(m)">push查看</button>
      <button @click="replaceShow(m)">replace查看</button>
      </li>
     
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Messagess',
    data() {
        return {
            messages:[
                {id:'1',title:'风拳'},
                {id:'2',title:'火拳'}
            
            ]
        }
    },
    methods: {
      pushShow(m){
        this.$router.push({
           path:'/about/message/detail',
          query:{
              id:m.id,
              title:m.title
        }
        })
      },
      replaceShow(m){
         this.$router.replace({
           path:'/about/message/detail',
          query:{
              id:m.id,
              title:m.title
        }
        })
      }
    },
};
</script>

<style>
</style>