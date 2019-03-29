<template>
  <div class="layout">
    <Layout>
      <Header :style="{width: '100%'}">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="SelectItem">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="test">
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
          </div>
        </Menu>
      </Header>
      <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
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
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }
  .layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>


