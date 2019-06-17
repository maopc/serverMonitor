<template>
  <div id="app" style="height:100vh">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  
background-color: #090c1d !important; 
  background-image: url(https://cms.cnc.blzstatic.cn/cms/template_resource/WEA51EMAXNFB1474350114687.jpg);
      font-family: Arial,Helvetica,"微软雅黑","Microsoft YaHei","Hei SC",sans-serif;
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  background-repeat: no-repeat;


    z-index: -10;
}
</style>
