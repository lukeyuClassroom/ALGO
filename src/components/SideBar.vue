<template>
  <div class="hidden">
    <vs-sidebar style="width: calc(100% - 25px);" absolute v-model="activeMenu" open>
      <template #logo>
        <img src="../assets/algo-logo.png" alt="algo-logo" style="max-width: 60%;max-height: 100%;">
      </template>
      <vs-sidebar-item id="home">
        <template #icon>
          <i class='bx bx-home'></i>
        </template>
        Home
      </vs-sidebar-item>
      <vs-sidebar-item id="market">
        <template #icon>
          <i class='bx bx-grid-alt'></i>
        </template>
        Market Overview
      </vs-sidebar-item>
      <vs-sidebar-item id="Music">
        <template #icon>
          <i class='bx bxs-music'></i>
        </template>
        Music
      </vs-sidebar-item>
      <vs-sidebar-item id="donate">
        <template #icon>
          <i class='bx bxs-donate-heart'></i>
        </template>
        Donate
      </vs-sidebar-item>
      <vs-sidebar-item id="drink">
        <template #icon>
          <i class='bx bx-drink'></i>
        </template>
        Drink
      </vs-sidebar-item>
      <vs-sidebar-item id="shopping">
        <template #icon>
          <i class='bx bxs-shopping-bags'></i>
        </template>
        Shopping
      </vs-sidebar-item>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class='bx bx-chat'></i>
        </template>
        Chat
      </vs-sidebar-item>
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar @click="activeDialog = !activeDialog">
            <img src="../avatars/avatar-5.png" alt="">
          </vs-avatar>

          <vs-avatar badge-color="warning" badge-position="top-right"
            @click="notificationNumber > 0 ? notificationNumber-- : 0">
            <i class='bx bx-bell'></i>

            <template #badge>
              {{ notificationNumber }}
            </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
    <vs-dialog v-bind:loading="loading" blur not-close overflow-hidden v-model="activeDialog">
      <template #header>
        <h4 class="not-margin">
          Welcome to <b>Vuesax</b>
        </h4>
      </template>


      <div class="con-form">
        <vs-input v-model="input1" label-placeholder="Email">
          <template #icon>
            @
          </template>
        </vs-input>
        <vs-input type="password" v-model="input2" label-placeholder="Password">
          <template #icon>
            <i class='bx bxs-lock'></i>
          </template>
        </vs-input>
        <div class="flex">
          <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
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
  </div>
</template>
<script>
export default {
  data: () => ({
    activeMenu: 'home',
    activeDialog: false,
    loading: false,
    input1: '',
    input2: '',
    checkbox1: false,
    notificationNumber: 0
  }),
  watch: {
    activeDialog: function () {
      this.loading = false
    }
  },
  methods: {
    signIn: function () {
      this.loading = true
      this.notificationNumber += 1
      setTimeout(() => this.activeDialog = false, 1000)
    }
  }
}
</script>

<style>
.hidden {
  height: 100vh;
}

.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}

.con-form {
  width: 100%;
}

.con-form .flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.con-form .flex a {
  font-size: 0.8rem;
  opacity: 0.7;
}

.con-form .flex a:hover {
  opacity: 1;
}

.con-form .vs-checkbox-label {
  font-size: 0.8rem;
}

.con-form .vs-input-content {
  margin: 10px 0px;
  width: calc(100%);
}

.con-form .vs-input-content .vs-input {
  width: 100%;
}

.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: calc(100%);
}

.footer-dialog .new {
  margin: 0px;
  margin-top: 20px;
  padding: 0px;
  font-size: 0.7rem;
}

.footer-dialog .new a {
  color: rgba(var(--vs-primary), 1) !important;
  margin-left: 6px;
}

.footer-dialog .new a:hover {
  text-decoration: underline;
}

.footer-dialog .vs-button {
  margin: 0px;
}
</style>
