<template>
  <div class="mpc1">
    <div id="top">
      <div id="title" class="title">服务器状态</div>
      <div
        id="desc"
        class="desc"
      >如果您即将使用的服务器显示为停机，可能我们正在努力，尽快让它返回在线状态。</div>
    </div>
    <div class="parentWrap">
      <div class="parent" style="background-color: lightgrey;">
        <div class="child" style="width:15%">状态</div>
        <div class="child" style="width:35%">系统名称</div>
        <div class="child" style="width:15%">地址</div>
        <div class="child" style="width:20%">管理员</div>
        <div class="child" style="width:15%">故障</div>
      </div>
    </div>
    <div class="parentWrap" v-for="(item,index) in systemList" :key="item.ID">
      <div class="parent" style="background-color: lightgrey;">
        <div class="child2" style="width:15%">
          <img src="@/assets/error.png" class="imgx" v-show="item.server_status == 0">
          <img src="@/assets/success.png" class="imgx" v-show="item.server_status == 1">
        </div>
        <div class="child2" style="width:35%">{{item.server_name}}</div>
        <div class="child2" style="width:15%">
          <a href="https://www.baidu.com" style="color:white">链接</a>
        </div>
        <div class="child2" style="width:20%">{{item.server_owner}}</div>
        <div class="child2" style="width:15%"><mt-button v-show="item.server_status == 0"
            size="small"
            @click="toDo(item)"
            type="primary"
            style="height: 25px;font-size: 12px;"
          >查看</mt-button><span v-show="item.server_status == 1">无</span></div>
      </div>
    </div>


    
  </div>
</template>

<script>
export default {
  data() {
    return {
      systemList: [],
      xx: "1"
    };
  },
  mounted() {
    var _this = this;
    var cql = "select * from t_system";
    this.$AV.Query.doCloudQuery(cql).then(
      function(data) {
        var results = JSON.parse(JSON.stringify(data.results));
        console.log(results);
        _this.systemList = results;
        console.log(_this.systemList.length);
      },
      function(error) {}
    );
  },
  methods: {
      toDo:function(item){
          alert(item.ext1)
      }
  }
};
</script>

<style>
.imgx {
  height: 23px;
  width: 23px;
}
.mpc1 {
  
  padding: 0 20px;
}
.title {
  padding-top: 35px;
  font-weight: 700;
  font-size: 2.225rem;
  line-height: 1.5em;
  color: #fff;
  text-shadow: 0 0 1px transparent, 0 0 5px rgba(0, 0, 0, 0.8);
}
.desc {
  padding-top: 24px;
  font-weight: 400;
  font-size: 1.08rem;
  line-height: 1.5em;
  color: #ebdec2;
  text-shadow: 0 0 1px transparent, 0 1px 2px rgba(0, 0, 0, 0.8);
}
.child {
  color: #f8b700;
  padding-top: 10px;
  padding-bottom: 10px;
  float: left;
  width: 25%;
  background-clip: content-box;
  border-bottom: 1px solid #ebdec2;
}
.child2 {
  line-height: 35px;
  color: white;
  /* color: #b1997f;; */
  padding-top: 3px;
  padding-bottom: 3px;
  float: left;
  width: 25%;
  background-clip: content-box;
  border-bottom: 1px solid #ebdec2;
}
</style>
