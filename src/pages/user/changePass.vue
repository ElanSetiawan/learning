<template>
<div v-if="loading" class="imgLoad">
  <img src="../../assets/img/loading.gif" />
</div>
  <div v-else>
    <hr class="my-4" />
    <div>
      <input class="form-control" required v-model="oldpassword" type="password" placeholder="Old Password" />
      <input class="form-control" required v-model="password" type="password" placeholder="New Password" />
      <input class="form-control" required v-model="confpassword" type="password" placeholder="Retry Password" />
    </div>
    <hr class="my-4" />
    <div class="btn btn-danger" @click="cangepass">Save</div>
    <router-link to="/user/" class="btn btn-primary">profil</router-link>
  </div>
</template>

<script>
import { mixinGetData } from '../../mixins/getData'
export default {
  name: 'ChanngePass',
  data () {
      return {
          loading: false,
          oldpassword: '',
          password: '',
          confpassword: ''
      }
  },
    mixins: [mixinGetData],
    methods: {
        cangepass: function () {
            // this.loading = true
            this.changePassword( this.oldpassword,  this.password, this.confpassword
                ).then(() => this.$router.push('/profil')).catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
</style>
