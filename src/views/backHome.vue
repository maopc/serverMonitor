<template>
  <div class="page">
    <mt-navbar v-model="selected" class="xx" style="background-color:#090c1d">
      <mt-tab-item id="server"><router-link to="/server">系统管理</router-link></mt-tab-item>
      <mt-tab-item id="log"><router-link to="/log">操作日志</router-link></mt-tab-item>
      <mt-tab-item id="about"><router-link to="/about">关于</router-link></mt-tab-item>
    </mt-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "server"
    };
  },
  computed: {},
  methods: {}
};
</script>


<style scoped>
/* .xx{
   color:blue; 

} */
a:visited {color: white}
a {
    text-decoration: none;
  }
    .router-link-active {
    text-decoration: none;
  }

</style>

