<template>
  <div class="container">
    <div class="left-part" v-show="screenWidth > 980">
      <ISideBar :signInStatus="signInStatus" @needSignInEvent="needSignIn" @signOut="signOut"></ISideBar>
    </div>
    <div class="main-part">
      <IMain @needSignInEvent="needSignIn"></IMain>
    </div>
    <vs-button
        icon
        v-if="screenWidth <= 980"
        style="position: absolute;right: 12px;top: 12px;height: 32px;"
      >
      <i v-show="signInStatus" class='bx bx-log-out' 
        @click="signOut"></i>
      <i v-show="!signInStatus" class='bx bx-log-in' 
        @click="needSignIn"></i>
      </vs-button>
    <SignInDialog @signInSuccess="signInSuccess" :activeSignInDialog="activeSignInDialog" @resetSignInDialogStatus="resetSignInDialogStatus" />
  </div>
</template>
<script>
import ISideBar from './components/SideBar.vue';
import IMain from './components/Main.vue';
import SignInDialog from './components/SignInDialog.vue'

export default {
  components: { ISideBar, IMain, SignInDialog },

  data: () => ({
    activeSignInDialog: false,
    signInStatus: false,
    screenWidth: document.documentElement.clientWidth
  }),
  methods: {
    needSignIn(val) {
      this.activeSignInDialog = val
    },
    resetSignInDialogStatus(val){
      this.activeSignInDialog = val
    },
    signOut(){
      this.signInStatus = false
      localStorage.setItem('token', '')
      var color = 'success';
      var position = 'top-center'
      this.$vs.notification({
        color,
        position,
        text: 'Sign Out Success, Bye'
      })
    },
    signInSuccess(){
      this.signInStatus = true
    }
    // getWidth() {
    //   this.width = document.body.clientWidth
    //   console.log(this.width)
    // },
    // created() {
    //   console.log(this.width)
    // },
    // destroyed() {
    //   window.removeEventListener('resize', this.getWidth)
    // }
  },
  mounted () {
    const that = this
    window.onresize = () => {
        return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
            // console.log(that.screenWidth)
        })()
    }
}

}
</script>
<style>
.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
}

.left-part {
  min-width: 300px;
}

.main-part {
  min-width: 600px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  overflow: scroll;
}
</style>