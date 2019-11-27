<template>
<div v-if="loading" class="imgLoad">
  <img src="../assets/img/loading.gif" />
</div>
<div v-else class="container">
    <div :class="part.id">
        <b-row>
          <b-col cols="8">
            <div><b>{{ part.title }}</b></div>
            <div v-html="part.content"></div>
            <div class="video">
              <div v-bind:style="{ 'background': 'url(' + test + ') no-repeat', 'background-size':'contain', 'background-position':'center'}"></div>
              <!-- <div v-bind:style="{ 'background': 'url(' + part.video_embed + ') no-repeat', 'background-size':'cover', 'background-position':'center'}"></div> -->
            </div>
          </b-col>
          <b-col cols="4">question</b-col>
        </b-row>
    </div>
  <div class="text-center">
    <!-- <router-link :to="-1">test back</router-link> -->
    <div @click="$router.go(-1)">Back</div>
</div>
</div>
</template>
<script>
import { mixinGetData } from '../mixins/getData'
export default {
  name: 'Detail',
  data () {
    return {
      loading: true,
      part: [],
      test: 'https://i.ytimg.com/vi/SLby22wANEI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4_909bivZDDHqS3iugk-B6AnWMA',
      months: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des']
    }
  },
  mixins: [mixinGetData],
  created () {
    let numb = this.$route.params.id
    this.getPartCategory(numb)
      .then(resp => {
        this.part = resp.data.data
        this.loading = false
        })
      .catch(err => console.log(err))
      },
  methods:{
  }
  }
</script>
<style lang="css">
.video > * {
    height: 220px;
}
</style>
