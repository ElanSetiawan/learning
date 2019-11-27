<template>
<div v-if="loading" class="imgLoad">
  <img src="../assets/img/loading.gif" />
</div>
<div v-else class="container text-center">
  <div class="login">
    <!-- <div class="f3">fake login</div>
    <div class="text-center my-3">
      <b-button @click="login">LOGIN</b-button>
    </div> -->
    <form class="login" @submit.prevent="login">
        <div class="form-group mb-3 input-group input-group-alternative">
            <div class="input-group-prepend"><span class="input-group-text"><i class="ni ni-email-83"></i></span></div>
            <input class="form-control" required v-model="email" type="email" placeholder="Name" />
        </div>
      <div class="form-group mb-3 input-group input-group-alternative">
            <div class="input-group-prepend"><span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span></div>
            <input class="form-control" required v-model="password" type="password" placeholder="Password" />
        </div>
        <div class="text-center">
            <button class="btn my-4 btn-primary" type="submit">Sign in</button>
        </div>
        <div class="clearfix"></div>
    </form>
  </div>
</div>
</template>
<style lang="scss">
.login {
    padding: 20px;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      loading: true,
      email: 'asep.saepulloh@gmail.com',
      password: 'sopikan0109'
    }
  },
  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn }
  },
  methods: {
    login: function () {
          this.loading = true
          // let documentClasses = document.body.classList
          let email = this.email
          let password = this.password
          this.$store.dispatch('login', {email, password})
              .then(resp => {
                  // this.message = resp.data.message
                  let token = resp.data.data
                  let code = resp.data.code
                  if (resp.data.code === 1000) {
                      this.$router.push('/')
                      sessionStorage.setItem('token', token)
                      axios.defaults.headers.common['Authorization'] = token
                      this.$store.commit('auth_success', token, code)
                  }
                  // console.log(this.$store.getters.authStatus)
              }
          )
          .catch(() => this.$router.push('/login'))
      }
  },
  created () {
     if (this.$store.getters.isLoggedIn) {
        this.$router.push('/')
    }
    this.loading = false
  }
}
</script>
