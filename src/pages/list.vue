<template>
<div v-if="loading" class="imgLoad">
  <img src="../assets/img/loading.gif" />
</div>
<div v-else class="bg-smoke padB3">
  <div class="container">
    <div class="col-sm-12"><div class="label-head">{{ msg }}</div></div>
    <div>
      <card :data="allHalaqoh"></card>
    </div>
  </div>
</div>
</template>

<script>
import { mixinGetData } from '@/mixins/getData'
import card from '@/components/card'
export default {
  name: 'list',
  components: {
    card
  },
  data () {
    return {
      msg: 'All Halaqah',
      allHalaqoh: [],
      loading: true,
      test: 'https://i.ytimg.com/vi/SLby22wANEI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4_909bivZDDHqS3iugk-B6AnWMA',   
      months: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des']
      }
  },
  mixins: [mixinGetData],
  created () {
    this.getAllHalaqah().then(resp => {
        this.allHalaqoh = resp.data.data.items
        this.loading = false
      })
      .catch(err => console.log(err))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello .h3{
  padding-top: 20px;
}
.m-0 > p {
    margin: 0;
}
</style>
