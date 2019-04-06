<template>
  <div>
    再看就把你吃掉！！！！
  </div>

</template>

<script>

  export default {
    name: "test",
    data() {
      return {
        name: 'test!',
        price: 'TEST',
        data: []
      }
    },
    mounted() {
      this.initData('初始化数据成功');
    },
    methods: {

      initData(msg) {
        fetch('/data')
          .then((response) => response.json())
          .then(json => {
            this.data = json;
            console.log(this.data)
            this.name = json[1].name;
            console.log(this.name)
            this.price = json[1].price;
            console.log(this.price)
          })
      }
    }
  }
</script>

<style>

</style>
