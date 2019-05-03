<template>
  <div class="layout">
    <Layout>
      <Header :style="{width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="SelectItem">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="itemOne">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="itemTwo">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="itemThree">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="itemFour">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
            <MenuItem name="datastatistic">
              <Icon type="ios-aperture"></Icon>
              Item 5
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '30px 200px 0'}">
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer-center">电商大数据分析系统</Footer>
    </Layout>
  </div>
</template>

<script>
  export default {
    name: "statistic",
    data() {
      return {

      }
    },
    methods: {
      SelectItem(name) {
        const that = this;
        this.$nextTick(() => {
          that.$router.push(name)
        })
      }
    }
  }
</script>

<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    /*background: #5b6270;*/
    background: #515A6E;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 520px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>


