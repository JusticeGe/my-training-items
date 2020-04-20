<template>
  <div class="container">
    <form name="login" action="https://baidu.com" target="_blank" id="login">
      <h1>手机号登录</h1>
      <label>
        手机号:
        <div class="content">
           <input pattern="^\d{11}$" maxlength="11" v-model="phone"/>
        <input type="button" value="获取验证码" class="code-btn" @click="getCode"/>
        </div>
      </label>
      <label class="code">
        验证码:
        <input class="content" maxlength="4" v-model="code"/>
      </label>
      <button type="submit" class="weui-btn weui-btn_primary">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      code: ''
    }
  },
  methods: {
    getCode () {

    },
    validateCode () {
      // const weui = weui || window.weui
      // if (this.phoneNum && this.code) {
      //   console.log('submit')
      // } else {
      //   weui.topTips('请输入手机或者手机验证码!')
      // }
    }
  },
  created () {
  },
  mounted () {
    const login = document.querySelector('#login')
    login.addEventListener('submit', function (e) {
      e.preventDefault()
    })
  },
  destroyed () {
    // !页面销毁前删除监听事件
    document.querySelector('#login').removeEventListener('submit', function (e) {
      e.preventDefault()
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form[name='login'] {
    width: 100%;
    padding: 20px;
    text-align: left;

    h1{
      margin-bottom: 40px;
    }

    label {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-size: 12px;
      height: 24px;
      line-height: 24px;
      padding: 10px 0;
      border-top: 1px #ccc solid;

      .content{
        width: 80%;
        display: flex;
        justify-content: space-between;

        .code-btn{
          line-height: 24px;
          font-size: 12px;
          height: 24px;
          margin-top:0 ;
          background: #fff;
          color: green;
          text-align: right;
          position: relative;
          padding: 0 5px;

          &::before{
            content: '|';
            display: inline-block;
            width: 10px;
            height: 10px;
          }
        }
      }

     &.code {
        border-bottom: 1px #ccc solid;

        input {
          width: 80%;
        }
      }

      input{
        width: 40%;
        border: 0;
        outline: 0;
      }

    }
    button{
      margin-top: 20px ;
    }
  }
}
</style>
