<template >
    <div class="wrapper" style="width: 100%; height:1000px;">
      <div class="center">
        <h1>欢迎来到电商系统（汽车）</h1>
        <Button type="primary" to="statistic">
          进入系统
        </Button>
      </div>
    </div>
</template>

<script>

  export default{
    name: "index",
    data() {
      return {
        msg:'test!',
        name: 'statistic'
      }
    },
    method: {
      /*SelectButton() {
        const that = this
        this.$nextTick(() => {
          that.$router.push(name);
        })
      }*/
    }
  }

</script>

<style>
.wrapper {
  background: url("https://www.mercedes-benz.com.cn/content/dam/mb-cn/homepage/1440600cls.jpg") no-repeat;
  background-size: 100%;

}
</style>
