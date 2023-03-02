<template>
  <div class="container mx-auto w-10/12 text-center">
    <h1 class="title">Paul Sanders</h1>
    <img
      class="rounded-circle head-shot mx-auto"
      src="~/assets/images/paul.jpg"
      alt="Paul Sanders"
    />
    <p class="lead">Hi, I'm Paul.</p>
    <p>
      I have over 20 years experience as a software engineer and data manager.
    </p>
    <p class="mt-8">Some open source projects of mine are:</p>
    <MyProjects />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #1e5caf;
  letter-spacing: 1px;
}

.lead {
  font-size: 1.5em;
  font-weight: 500;
  padding-bottom: 1rem;
}

.rounded-circle {
  border-radius: 50% !important;
}

.head-shot {
  width: 300px;
  height: 300px;
  margin-bottom: 1rem;
}
</style>
