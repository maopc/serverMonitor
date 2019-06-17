<template>
  <div class="mpc1">
    <div class="parentWrap">
      <div class="parent" style="background-color: lightgrey;">
        <div class="child" style="width:15%">操作</div>
        <div class="child" style="width:30%">系统名称</div>
        <div class="child" style="width:15%">操作人</div>
        <div class="child" style="width:20%">时间</div>
        <div class="child" style="width:20%">备注</div>
      </div>
    </div>
    <div class="parentWrap" v-for="(item,index) in logList" :key="item.ID">
      <div class="parent" style="background-color: lightgrey;">
        <div class="child2" style="width:15%">
            <div v-show ="item.operation =='1'">启动</div>
            <div v-show ="item.operation =='0'">关闭</div>
        </div>
        <div class="child2" style="width:30%">{{item.server_name}}</div>
        <div class="child2" style="width:15%">{{item.user_name}}</div>
        <div class="child2" style="width:20%"><mt-button 
            size="small"
            @click="toDo1(item)"
            type="primary"
            style="height: 25px;font-size: 12px;"
          >查看</mt-button></div>
        
        <div class="child2" style="width:20%" ><mt-button 
            size="small"
            @click = 'see(item)'
            type="primary"
            style="height: 25px;font-size: 12px;"
          >查看</mt-button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logList: []
    };
  },
  mounted() {
    var _this = this;
    var cql = "select * from t_log order by createdAt desc";
    this.$AV.Query.doCloudQuery(cql).then(
      function(data) {
        var results = JSON.parse(JSON.stringify(data.results));
        console.log(results);
        // for(var i =0;i<results.length;i++){
        //     tmp = results[i];
        //     console.log(tmp.updatedAt)  
        // }
        console.log(results);
        _this.logList = results;
        // console.log(_this.systemList.length);
      },
      function(error) {}
    );
  },
  methods: {
      see:function(item){
          alert(item.tips)
      },
      toDo1:function(item){
          alert(item.createdAt)
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
  color: #fff;
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
