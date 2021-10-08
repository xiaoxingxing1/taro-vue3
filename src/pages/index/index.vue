<template>
  <view class="index">
    <img class="bg_img" src="https://z3.ax1x.com/2021/09/27/429yMn.jpg" alt="" border="0" />
    <view class="title animate__animated animate__zoomIn">
      <view class="txt">欢迎来到妙妙的成长乐园</view>
    </view>
    <view class="btn">
      <nut-button 
        class="open_btn animate__animated animate__swing" 
        color="linear-gradient(to right, rgb(224, 130, 131), rgb(210, 82, 127))" 
        @click="toList"
      >
        一键开启
      </nut-button>
    </view> 
  </view>
</template>

<script lang="ts">
import Taro from "@tarojs/taro";

export default {
  name: 'Index',
  components: {
    
  },
  setup(){

    const toList = () => {
      Taro.navigateTo({ url: '/pages/list/index' })
    }

    return {
      toList
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .bg_img{
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .title {
    display: flex;
    justify-content: center;
    .txt {
      font-family: 'titlefont';
      font-size: 56rpx;
      padding-top: 14%;
      color: rgb(242, 120, 75);
    }
  }
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 8%;
    .open_btn {
      border: 0;
      // color: linear-gradient(to right, rgb(224, 130, 131), rgb(210, 82, 127));
    }
  }
}
</style>
