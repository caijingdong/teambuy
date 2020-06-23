<template>
  <div class="offline">
    <div class="offline-dropdown">
      <van-dropdown-menu>
        <van-dropdown-item v-model="merchantCategoryKey" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
        <van-dropdown-item v-model="distance" :options="option3" />
      </van-dropdown-menu>
    </div>
    <div class="offline-wrapper">
      <div class="offline-list">
        <van-list>
          <van-card
            v-for="item in list1"
            :key="item.id"
            num="2"
            :price="item.value"
            desc="描述信息"
            :title="item.text"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
          >
            <template #tags>
              <van-tag plain type="danger">bia</van-tag>
              <van-tag plain type="danger">标签</van-tag>
            </template>
          </van-card>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
//import MyCard from '@/components/MyCard/index.vue';
import { GET } from "../../api/index";
import BASE from "../../base";

export default {
  name: "Offline",

  components: {
    //MyCard
  },

  data() {
    return {
      merchantCategoryKey: "",
      value2: "a",
      distance: "",
      option1: [
        { text: "类别", value: "" },
        { text: "生活", value: "0001" },
        { text: "娱乐", value: "0002" },
        { text: "餐饮", value: "1001" },
        { text: "住宿", value: "1002" },
        { text: "家具购物", value: "2" },
        { text: "教育培训", value: "3" },
        { text: "运动医疗", value: "4" }
      ],
      option2: [
        { text: "区域", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      option3: [
        { text: "距离", value: "" },
        { text: "距离最近", value: "b" },
        { text: "距离最远", value: "c" }
      ],
      list1: [
        { text: "卡通印花T恤纯棉宽松圆领短袖套头上衣女", value: "22" },
        { text: "UBAN自制 推荐！小香风复古粗花呢针织马甲背心V领 2020早春新款", value: "33" },
        { text: "微巴士车队APP 一款管理车队的应用软件", value: "553" },
        { text: "中长款T恤裙夏季2019新款女显瘦纯棉短袖裙子时尚火烈鸟连衣裙潮", value: "22" },
        { text: "距离最近", value: "33" },
        { text: "距离最远", value: "553" }
      ],

      list: [],
      page: 1,
      size: 8,
      loading: false,
      finished: false,
      error: false
    };
  },

  watch: {
    merchantCategoryKey() {
      this.reset();
    }
  },

  methods: {
    /**
     * 获取数据
     */
    fetchData() {
      const { page, size, list, merchantCategoryKey } = this;
      const { x, y } = BASE.point;
      GET("/gb/offlinemerchants/offlineMerchants/listDataOrderByDistance", {
        pageSize: size,
        pageNo: page,
        merchantCategoryKey,
        userLongitude: x,
        userLatitude: y
      })
        .then(res => {
          const { data } = res;
          const newList = (page === 1 ? [] : list).concat(data.list);

          this.list = newList;
          this.loading = false;
          this.finished = newList.length === data.count;
          this.page = page + 1;
        })
        .catch(err => {
          this.loading = false;
          this.error = true;
          this.$toast(`错误${err.status}，${err.statusText}`);
          console.log(err);
        });
    },

    reset() {
      this.page = 1;
      this.list = [];
      this.finished = false;
    }
  }
};
</script>

<style lang="less">
.offline {
  box-sizing: border-box;
  //padding-top: 60px;
  &-dropdown {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
  }
  &-wrapper {
    width: 100%;
  }
}
</style>
