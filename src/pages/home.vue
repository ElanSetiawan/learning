<template>
  <div class="bg-smoke padB3">
    <div class="mybaner">
      <div class="container">
        <b-jumbotron>
          <template slot="header" v-if="!isLoggedIn">{{ msg }}</template>
          <template slot="header" v-if="isLoggedIn">Welcome guest</template>
          <template slot="lead">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information.
          </template>
          <hr class="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
          </p>
          <!-- <b-button variant="primary" href="#">Do Something</b-button> -->
          <!-- <b-button variant="success" href="#">Do Something Else</b-button> -->
        </b-jumbotron>
      </div>
    </div>
    <div class="container">
      <div v-if="loading" class="imgLoad">
        <img src="../assets/img/loading.gif" />
      </div>
      <div v-else>
        <div class="col-12"><b class="label-head">Kategori Halaqah</b></div>
        <div class="row">
          <card :data="allHalaqoh" class="col-12 pad22"></card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixinGetData } from "@/mixins/getData";
import card from "@/components/card";
export default {
  name: "Home",
  components: {
    card
  },
  data() {
    return {
      loading: true,
      msg: "Halaqah ",
      allHalaqoh: []
    };
  },
  mixins: [mixinGetData],
  created() {
    this.getAllHalaqah()
      .then(resp => {
        this.allHalaqoh = resp.data.data.items;
        this.loading = false;
      })
      .catch(err => console.log(err));
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mybaner {
  background: url(/img/baner_khb.d924a6b4.jpg) no-repeat;
  background-size: cover;
  background-position: right;
  background: rgba(0, 62, 138, 1);
  background: -moz-linear-gradient(
    left,
    rgba(0, 62, 138, 1) 0%,
    rgba(0, 62, 138, 1) 38%,
    rgba(0, 62, 138, 0.17) 100%
  );
  background: -webkit-gradient(
    left top,
    right top,
    color-stop(0%, rgba(0, 62, 138, 1)),
    color-stop(38%, rgba(0, 62, 138, 1)),
    color-stop(100%, rgba(0, 62, 138, 0.17))
  );
  background: -webkit-linear-gradient(
    left,
    rgba(0, 62, 138, 1) 0%,
    rgba(0, 62, 138, 1) 38%,
    rgba(0, 62, 138, 0.17) 100%
  );
  background: -o-linear-gradient(
    left,
    rgba(0, 62, 138, 1) 0%,
    rgba(0, 62, 138, 1) 38%,
    rgba(0, 62, 138, 0.17) 100%
  );
  background: -ms-linear-gradient(
    left,
    rgba(0, 62, 138, 1) 0%,
    rgba(0, 62, 138, 1) 38%,
    rgba(0, 62, 138, 0.17) 100%
  );
  background: linear-gradient(
    to right,
    rgba(0, 62, 138, 1) 0%,
    rgba(0, 62, 138, 1) 38%,
    rgba(0, 62, 138, 0.17) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#003e8a', endColorstr='#003e8a', GradientType=1 );
}
hr {
  border-top: 1px solid rgba(255, 255, 255, 0.19);
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.jumbotron {
  margin-bottom: 0px;
  background-color: transparent;
  color: white;
  padding: 4rem 1rem;
}
</style>
