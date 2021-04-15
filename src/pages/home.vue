<template>
   <div >
     <Hero />
     <Services />
     <About />
     <Industries />
     <Contact />

     <!-- <div class="socials">
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
          <div class="item"></div>
     </div> -->
   </div>
</template>

<script>

import Hero from './../components/Hero.vue'
import About from './../components/About.vue'
import Services from './../components/Services.vue'
import Industries from './../components/Industries.vue'
import Contact from './../components/Contact.vue'
export default {

   components: {
      Hero,
      About,
      Services,
      Industries,
      Contact
   }

}
</script>

<style lang="scss">
    .header{
       text-align: center;
       margin:50px 0px;
       
       &.dark{
          color:#fff;
       }

       &.left{
          text-align:left
       }
       h1{
          font-weight:700;
          margin:10px 0px
       }
       h2{
             background: rgb(0 0 0 / 80%);
               font-size: 18px;
               font-weight: 700;
               color: #ffffff;
               display: inline;
               text-transform: uppercase;
               padding: 10px;
       }
       
    }
    .socials{
       display:flex;
       flex-direction: column;
       position: fixed;
       right:10px;
       top:35vh;
       .item{
         height: 50px;
    width: 50px;
    background: red;
    margin: 5px;
    border-radius: 50%;
    z-index: 999;
    cursor: pointer;
       }
    }

    @media (max-width:640px){
  .header{
       margin:30px 0px;
       
       h1{
          font-size:30px;
          font-weight:700;
       }
       h2{
          font-size:16px;
          text-transform:uppercase;

       }
       
    }
}
</style>