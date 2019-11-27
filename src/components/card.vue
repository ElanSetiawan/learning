<template>
<div>
  <div class="one_data" v-for="info in data" :key="info.id">
      <div class="on_out">
      <div class="on_da d">
        <!-- <div class="center" v-bind:style="{ 'background-image': 'url(' + info.cover + ') no-repeat', 'background-size':'cover', 'background-position':'center'}"> -->
          <div v-bind:style="{ 'background': 'url(' + test + ') no-repeat', 'background-size':'cover', 'background-position':'center'}">
        </div>
          <div class="capt">
              <div class="Label">
              <router-link :to="{ path:'/halaqah:'+info.slug , params:{id:info.slug} }">{{ info.title }}</router-link>
              </div>
              <div v-html="info.content"></div>
              <div class="autor"><span class="iconUser">
                <img  src="../assets/img/org.jpg" />
                  </span> <span><div><b> {{info.category.name}}</b> </div><i> {{ new Date(info.updated_at).getDate() }} {{ months[parseInt(new Date(info.updated_at).getMonth()+1)] }} {{ new Date(info.updated_at).getFullYear() }}</i></span></div>
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
          info: {},
          test: 'https://i.ytimg.com/vi/8qBESgmbkTk/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAreq237gW4GTDSHSX7ZbPTzZ2fAA',
          months: ['jan', 'feb', 'mar', 'apr', 'mei', 'jun', 'jul', 'agu', 'sep', 'okt', 'nov', 'des']
      }
  },
  props: ['data'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
