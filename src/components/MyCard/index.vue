<template>
  <div class="m-card">
    <div class="m-card-wrapper">
      <div class="m-card-img">
        <van-image 
          :src="item.brandPicture | formatSrc"
          width="100%"
          height="100%"
          fit="cover"
          lazy-load
        >
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>
            <van-icon name="shop-o" size="40" />
          </template>
        </van-image>
      </div>
      <div class="m-card-info">
        <span class="m-card-info__txt m-card-info__title">{{item.name}}</span>
        <span class="m-card-info__txt m-card-info__address">地址：{{item.site}}</span>
        <span v-show="item.brand" class="m-card-info__txt m-card-info__logo">品牌名：{{item.brand}}</span>
        <span v-show="item.groupPurchaseWay" class="m-card-info__txt m-card-info__way">团购方式：{{item.groupPurchaseWay}}</span>
        <span v-show="item.preferentialContent" class="m-card-info__txt m-card-info__time">{{item.preferentialContent}}</span>
        <span v-show="item.distance" class="m-card-info__txt m-card-info__distance">{{ item.distance | formatDistance }}KM</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },

  filters: {
    formatDistance(val) {
      const d = parseFloat(val) / 1000;
      return d.toFixed(1);
    },

    formatSrc(val) {
      const brand = val ? val.split('|')[0] : '';
      console.log('brand', brand);
      return brand;
    },
  },
}
</script>

<style lang="less">
@px: 16rem;
@bgWidth: 100/@px;
.m-card {
  position: relative;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 14/@px;

  &-wrapper {
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    min-height: @bgWidth;
  }

  &-img {
    width: @bgWidth;
    height: @bgWidth;
    overflow: hidden;
    border-radius: 4/@px;
    background-color: #ddd;
  }
  &-info {
    width: 200/@px;
    min-height: @bgWidth;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    margin-left: 10/@px;

    &__txt {
      display: inline-block;
      width: 100%;
      font-size: 12/@px;
      color: #7D7D80;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      margin-bottom: 3/@px;
    }

    &__title {
      font-size: 16/@px;
      color: #333;
      font-weight: bold;
    }
    &__time {
      color: #FA405A;
      font-size: 14/@px;
    }
    &__distance {
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
    }

  }
}
</style>

