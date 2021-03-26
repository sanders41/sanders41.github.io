<template>
  <footer class="footer">
    <div>
      <a class="social-icon mx-4" href="https://twitter.com/paul41">
        <font-awesome-icon :icon="['fab', 'twitter']" class="social-icon" />
      </a>
      <a class="social-icon mx-4" href="https://www.linkedin.com/in/paul-sanders-1367047/">
        <font-awesome-icon :icon="['fab', 'linkedin']" class="social-icon" />
      </a>
      <a class="social-icon mx-4" href="https://github.com/sanders41">
        <font-awesome-icon :icon="['fab', 'github']" class="social-icon" />
      </a>
    </div>
    <div id="copyrite" v-if="new Date().getFullYear() == 2021" class="top-pad">
      &copy; {{ new Date().getFullYear() }} Paul Sanders
    </div>
    <div id="copyrite" v-else class="top-pad">
      &copy; 2021 - {{ new Date().getFullYear() }} Paul Sanders
    </div>
  </footer>
</template>

<style scoped>
.footer {
  text-align: center;
  padding-top: 1rem;
}

.top-pad {
  padding-top: 1rem;
}

.social-icon {
  font-size: 30px;
}
</style>
