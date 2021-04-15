<template>
  <div>
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<style lang="scss">
@import url("./assets/css/bootstrap.min.css");
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0px;
  padding: 0px;
}
ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  li {
    list-style: none;
  }
}

a {
  text-decoration: none;
  &:hover{
    text-decoration: none;

  }
}

.btn-custom {
  color: #fff;
  font-weight: 700;
  right: 30px;
  top: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 2;
  line-height: 1;
    font-size: 12px;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#00299d),
    to(#0078ee)
  );
  background: -o-linear-gradient(#00299d 0%, #0078ee 100%);
  background: linear-gradient(#00299d 0%, #0078ee 100%);

  &.sm {
    padding: 8px 18px;
  }

  &.md {
    padding: 10px 20px;
  }
  &.bg {
    padding: 14px 24px;
  
  }
}
</style>