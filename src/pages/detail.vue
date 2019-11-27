<template>
<div v-if="loading" class="imgLoad">
  <img src="../assets/img/loading.gif" />
</div>
<div v-else class="container">
    <cardCategory :data="detail"></cardCategory>
  <div class="text-center">
    <div @click="$router.go(-1)">Back</div>
</div>
</div>
</template>
<script>
import { mixinGetData } from '../mixins/getData'
import cardCategory from '@/components/cardCategory'
export default {
  name: 'Detail',
  components: {
    cardCategory
  },
  data () {
    return {
      loading: true,
      detail: [],
      test: 'https://i.ytimg.com/vi/SLby22wANEI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4_909bivZDDHqS3iugk-B6AnWMA',
      months: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des']
    }
  },
  mixins: [mixinGetData],
  created () {
    let numb = this.$route.params.id
    this.getDetailCategory(numb)
      .then(resp => {
        this.detail = resp.data.data.items
        this.loading = false
        })
      .catch(err => console.log(err))
      }
  }
</script>
