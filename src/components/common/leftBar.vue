<template>
    <div class="aside">
        <el-menu>
          <el-menu-item v-for="item in menuList" router="true" :index="item.path">{{item.name}}</el-menu-item>
        </el-menu>
    </div>
</template>

<script>

    export default {
      name: "left-bar",
      data() {
        return {
          menuList: [
            {name: "首页", path: "/list"}
          ]
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
