<template>
  <div class="container">
    <div>
      <h1 class="title">
        Paul Sanders
      </h1>
      <img
        class="rounded-circle head-shot mx-auto"
        src="~/assets/images/paul.jpg"
        alt="Paul Sanders"
      >
      <p class="lead">
        Hi, I'm Paul.
      </p>
      <p>
        I have over 20 years experience as a programmer and data manager. Currently I am the manager
        of Programming and Data at Argenta. In my spare time I enjoy working on open source
        projects. I also enjoy teaching and mentoring new developers.
      </p>
      <p class="mt-8">
        Some open source projects of mine are:
      </p>
      <div class="projects mt-4">
        <ul class="list-disc">
          <li>
            <a href="https://github.com/sanders41/async-search-client">async-search-client</a>
            - This package is an asyncronus Python client for the
            <a href="https://www.meilisearch.com/">MeiliSearch</a> search engine. In additon to
            creating this async client, I am also a contributor on the official
            <a href="https://github.com/meilisearch/meilisearch-python">MeiliSearch Python</a>
            client, the
            <a href="https://github.com/meilisearch/meilisearch-rust">MeiliSearch Rust</a>
            client, the
            <a href="https://github.com/meilisearch/documentation">MeiliSearch Documentation</a>,
            and the core <a href="https://github.com/meilisearch/MeiliSearch">MeiliSearch</a>
            project.
          </li>
          <li>
            <a href="https://github.com/sanders41/sas7bdat-converter">sas7bdat-converter</a>
            - This Python package converts proprietary sas7bdat and/or xport files from SAS into
            formats such as csv, json, and Excel useable by other programs. These conversion can be
            done on individual files, or on batches of files. Credit goes to
            <a href="https://github.com/pandas-dev/pandas/">Pandas</a> for performing the conversion
            of the sas7bdat and xport into DataFrames.
          </li>
          <li>
            <a href="https://github.com/sanders41/split-schedule">split-schedule</a>
            - My sister is a high school teacher, and when Covid-19 her school was trying to figure
            out a way to split their current schedule across multiple days in order to ruduce
            class size. They asked if I could help with this because they were having trouble
            figuring it out manually so I created this program. I released it as an open source
            project in hopes that it would be useful to other schools.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
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

.projects {
  text-align: left;
}
</style>
