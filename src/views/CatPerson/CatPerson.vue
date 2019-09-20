<template>
  <div class="login_layout">
    <CatHeader name="登录中心" />
    <div class="login_wrapper">
      <div class="login_inp">
        <input class="login_text" type="text" placeholder="账户名/手机号/Email" />
      </div>
      <div class="login_inp">
        <input class="login_text" type="password" placeholder="请输入您的密码" />
      </div>
      <div class="login_btn">登录</div>
      <div class="login_box">
        <a href="#">立即找回</a>
        <a href="#">找回密码</a>
      </div>
    </div>
    <CatFooter />
  </div>
</template>
<script>
import CatHeader from "@/components/CatHeader/CatHeader";
import CatFooter from "@/components/CatFooter/CatFooter";
export default {
  components: {
    CatHeader,
    CatFooter
  }
};
</script>
<style lang="scss" scoped>
.login_layout {
  width: 100%;
  padding: 54px 10px 43px 10px;
  .login_wrapper {
    width: 100%;
    .login_inp {
      border-bottom: 1px solid #ccc;
    }
    .login_text {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      text-indent: 10px;
    }
    .login_btn {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: $c_red;
      border-radius: 3px;
      border: none;
      display: block;
      color: white;
      font-size: 20px;
      margin: 10px 0;
    }
    .login_box {
      margin: 0 5px;
      font-size: 12px;
      color: #e54847;
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: #e54847;
      }
    }
  }
}
</style>