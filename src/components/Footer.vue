<template>
  <div class="footer-container">
      <div class="text-center" style="padding: 10px;">
            <p> Copyright &copy; {{date}}</p>
      </div>
  </div>
</template>


<script>
   export default {
     data() {
       return {
         date:new Date().getFullYear()
       }
     },
   
   }
</script>


<style lang="scss" scoped>
.footer-container {
  background: #222;

  p{
  color:rgba($color:#fff, $alpha: 0.7);
  }
}
</style>