<template>
  <el-container>
    <el-header>
      <top></top>
    </el-header>
    <el-container>
      <el-aside>
        <left-bar></left-bar>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Top from '@/components/common/top'
  import LeftBar from '@/components/common/leftBar'
  export default {
    name: "home",
    components: {
      Top,
      LeftBar
    },
    data() {
      return {}
    },
    created() {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scoped>
  .el-container {
    height: 100%;
    .el-header {
      background: #b81b22;
    }
    .el-aside {
      background: gray;
      width: 180px!important;
    }
  }

</style>
