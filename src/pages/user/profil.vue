<template>
<div v-if="loading" class="imgLoad">
  <img src="../../assets/img/loading.gif" />
</div>
<div v-else>
    <div>
      Hi.. {{profil.first_name}}  {{profil.last_name}}
    </div>
    <hr class="my-4" />
    <div>gender : {{profil.gender}}</div>
    <div>Emial : {{profil.email}}</div>
    <div>Poiny : {{profil.point}}</div>
    <hr class="my-4" />
    <router-link to="changePass" class="btn btn-primary">Change password</router-link>
    <b-button variant="success" href="#">Do Something Else</b-button>
</div>
</template>

<script>
import { mixinGetData } from '../../mixins/getData'
export default {
  name: 'Profil',
  data () {
    return {
      profil: {},
      loading: true,
    }
  },
    mixins: [mixinGetData],
    created () {
        this.getProfil().then(resp => {
            this.profil = resp.data.data
            this.loading = false
        })
        .catch(err => console.log(err))
    }
}
</script>

<style scoped>
</style>
