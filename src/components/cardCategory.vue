<template>
<div>
  <div class="one_data detil" v-for="info in data" :key="info.id" >
      <div class="on_out">
      <div class="on_da d">
        <!-- <div class="center" v-bind:style="{ 'background-image': 'url(' + info.cover + ') no-repeat', 'background-size':'cover', 'background-position':'center'}"> -->
          <div v-bind:style="{ 'background': 'url(' + test + ') no-repeat', 'background-size':'cover', 'background-position':'center'}">
        </div>
          <div class="capt">
              <div class="Label">
              <router-link :to="{ path:'/part:'+info.slug , params:{id:info.slug} }">{{ info.title }}</router-link>
              </div>
              <div v-html="info.content"></div>
              <div class="autor"><span class="iconUser">
                <img  src="../assets/img/org.jpg" />
                  </span> <span><i> {{ new Date(info.created_at).getDate() }} {{ months[parseInt(new Date(info.created_at).getMonth()+1)] }} {{ new Date(info.created_at).getFullYear() }}</i></span></div>
              <span class="share">
                <img src="../assets/img/share.jpg" />
              </span>
              <div class="clearfix"></div>
          </div>
      </div>
      <div class="clearfix"></div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'card',
  data(){
      return{
          // info: {},
          test: 'https://i.ytimg.com/vi/SLby22wANEI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4_909bivZDDHqS3iugk-B6AnWMA',
          months: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des']
      }
  },
  props: ['data'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
