<template>
  <div>
    <div class="loading">
      <div class="loading__container">
        <van-loading color="black" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //
}
</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  &__container {
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 600px;
    width: 60px;
    height: 60px;
    padding: 30px;
    border-radius: 0.066667rem;
    color: white;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
  }
  .van-loading {
    width: 60px;
    height: 60px;
  }
} 
</style>
