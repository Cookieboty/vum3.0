<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body, html {
  -webkit-tap-highlight-color: transparent;
  margin: 0;
}
.demos-title,
.demos-sub-title {
  text-align: center;
  font-size: 1.4rem;
  color: #3cc51f;
  font-weight: normal;
  margin: .5rem 0;
}

.demos-sub-title {
  font-size: 1.2rem;
  margin: .4rem 0;
}

.demos-content-padded {
  padding: 15px;
}

.demos-second-title {
  text-align: center;
  font-size: 24px;
  color: #3cc51f;
  font-weight: 400;
  margin: 0 15%;
}

footer {
  text-align: center;
  font-size: 14px;
  padding: 20px;
}

footer a {
  color: #999;
  text-decoration: none;
}
</style>
