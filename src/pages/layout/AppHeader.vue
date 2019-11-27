<template>
   <div class="header">
   <div class="container">
   <b-navbar toggleable="lg" variant="faded" type="light">
    <router-link to="/" class="navbar-brand">
    <img src="../../assets/img/khb_logo.png" class="d-inline-block align-top" alt="KHB"></router-link>
    <b-navbar-toggle target="nav_collapse" />
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <router-link to="/list" class="nav-link">All Halaqah</router-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <router-link to="/login" class="nav-link" v-if="!isLoggedIn">Daftar</router-link>
        <router-link to="/login" class="nav-link" v-if="!isLoggedIn">Login</router-link>
        <b-nav-item-dropdown right v-if="isLoggedIn">
          <template slot="button-content"><b>User</b></template>
          <router-link to="/user/" class="dropdown-item" v-if="isLoggedIn">Profil</router-link>
          <b-dropdown-item href="#" @click="logout">Signout</b-dropdown-item>          
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</div>
</template>

<script>
export default {
  data () {
      return {
        // user: {}
      }
    },
    computed: {
      isLoggedIn: function () { return this.$store.getters.isLoggedIn }
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
    },
      created: function () {
          // if (this.$store.getters.isLoggedIn) {}
    }
}
</script>

<style>

</style>