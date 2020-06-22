<template>
  <div class="home-layout">
    <div class="home-layout-content">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />
    </div>
    <div class="home-layout-tabbar">
      <van-tabbar :fixed="true" route >
        <van-tabbar-item 
          icon="home-o" 
          replace 
          to="/offline"
        >线下商户</van-tabbar-item>
        <van-tabbar-item 
          icon="shop-o" 
          replace 
          to="/online"
        >线上商户</van-tabbar-item>
        <van-tabbar-item 
          icon="manager-o" 
          replace 
          to="/center"
        >个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLayout'
}
</script>

<style lang="less" scoped>
.home-layout {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  &-content {
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-tabbar {
    width: 100%;
  }
}
</style>
