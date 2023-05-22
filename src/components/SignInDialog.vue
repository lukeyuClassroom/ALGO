<template>
    <vs-dialog v-bind:loading="loading" blur not-close overflow-hidden v-model="activeDialog">
      <template #header>
        <h4 class="not-margin">
          Please Login
        </h4>
      </template>


      <div class="con-form">
        <vs-input v-model="loginForm.username" label-placeholder="Username">
          <template #icon>
            <i class='bx bxs-user'></i>
          </template>
        </vs-input>
        <vs-input type="password" v-model="loginForm.password" label-placeholder="Password">
          <template #icon>
            <i class='bx bxs-lock'></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="rememberMe">Remember me</vs-checkbox>
          <!-- <vs-switch /><span>Remember me</span> -->
          <a href="#">Forgot Password?</a>
        </div>
      </div>

      <template #footer>
        <div class="footer-dialog">
          <vs-button block @click="signIn">
            Sign In
          </vs-button>

          <div class="new">
            New Here? <a href="#">Create New Account</a>
          </div>
        </div>
      </template>
    </vs-dialog>
</template>

<script>
import axios from "axios"

export default{
  props:{
    activeSignInDialog: false,
  },
  data: () => ({
    activeDialog: false,
    loginForm: {
      username: '',
      password: ''
    },
    userToken: '',
    loading: false,
    rememberMe: false
  }),
  methods:{
    signIn() {
      let _this = this;
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        alert('账号或密码不能为空');
      } else {
        _this.loading = true;
        axios({
          method: 'post',
          url: 'http://8.142.88.250:8088/login',
          data: _this.loginForm
        }).then(res => {
          // console.log(res.headers['token']);
          _this.userToken = res.headers['token'];
          // 将用户token保存到vuex中
          localStorage.setItem('token', _this.userToken)
          _this.activeDialog = false
          this.$emit('signInSuccess','')
          var color = 'success';
          var position = 'top-center'
          this.$vs.notification({
            color,
            position,
            text: 'Sign In Success, Enjoy'
          })
        }).catch(error => {
          console.log(error)
          var color = 'danger';
          var position = 'top-center'
          this.$vs.notification({
            color,
            position,
            text: 'Wrong Username or Password, Please try again'
          })
        }).finally(() => {

          _this.loading = false;
        });
      }
    },
  },
  watch: {
    activeDialog: function () {
      this.loading = false
      this.$emit('resetSignInDialogStatus', this.activeDialog)
    },
    activeSignInDialog: function(val){
      this.activeDialog = val
    }
  },
}
</script>