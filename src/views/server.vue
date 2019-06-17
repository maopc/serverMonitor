<template>
  <div class="page mpc1">
    <div class="parentWrap">
      <div class="parent" style="background-color: lightgrey;">
        <div class="child" style="width:15%">状态</div>
        <div class="child" style="width:35%">系统名称</div>
        <div class="child" style="width:15%">地址</div>
        <div class="child" style="width:20%">管理员</div>
        <div class="child" style="width:15%">操作</div>
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
        <div class="child2" style="width:15%">
          <mt-button
            size="small"
            @click="toDo(item)"
            type="primary"
            style="height: 25px;font-size: 12px;"
          >修改</mt-button>
        </div>
      </div>
    </div>
    <mt-popup
      v-model="popupVisible"
      closeOnClickModal="false"
      position="top"
      style="margin-top:50px"
    >
      <div style="margin-top:10px">系统信息</div>
      <div style="width:300px;padding-top:10px">
        <mt-cell title="系统名">{{chosen.server_name}}</mt-cell>
        <mt-cell title="系统管理员">{{chosen.server_owner}}</mt-cell>
        <mt-cell title="系统状态">
          <mt-switch v-model="xx"/>
        </mt-cell>
        <mt-field label="操作描述" placeholder="请在此填写此次操作详情" type="textarea" rows="4" v-model="desc"></mt-field>
        <mt-button size="normal" type="primary" style="margin-bottom:10px" @click="submit1">提交</mt-button>
        <mt-button size="normal" type="default" style="margin-bottom:10px" @click="hidden">取消</mt-button>
      </div>
    </mt-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status2: 0,
      xx: false,
      desc: "",
      chosen: {},
      popupVisible: false,
      systemList: []
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
    toDo: function(item) {
      this.chosen = item;
      if (this.chosen.server_status == 1) {
        this.xx = true;
      } else {
        this.xx = false;
      }
      this.popupVisible = true;
      this.chosen = item;
      console.log(item);
    },
    hidden: function() {
      this.popupVisible = false;
    },
    submit1: function() {
      if (this.xx == false) {
        this.status2 = 0;
      } else {
        this.status2 = 1;
      }
      if (this.status2 == this.chosen.server_status) {
        alert("服务器状态未变化");
        return false;
      }
      if (!this.desc) {
        alert("操作描述不能为空");
        return false;
      }

      var cql = "update t_system set server_status = ? ,ext1 = ? where objectId = ?";
      var params = [this.status2, this.desc,this.chosen.objectId];
      this.$AV.Query.doCloudQuery(cql, params).then(
        function(data) {
          
        },
        function(error) {
        }
      );
      var cql =
            "INSERT INTO t_log (server_name, operation,user_name,tips) VALUES (?, ?,?,?)";
          var params = [
            this.chosen.server_name,
            this.status2 + "",
            "admin",
            this.desc
          ];
          this.$AV.Query.doCloudQuery(cql, params).then(
            function(data) {
                // alert(1);
                // this.popupVisible = false;
                // this.$router.push({ path:'/server'  });
                window.location.reload()
            },
            function(error) {}
          );
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

