<template>
  <section class="hero-area hero-style-one">
        <div class="single-hero-slider">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-xl-4 col-lg-6 col-md-9 col-sm-11">
                        <div class="hero-text offset-left">
                            <span class="title-tag wow fadeInLeft anim1" data-wow-delay="300ms" style="visibility: visible; animation-delay: 300ms; animation-name: fadeInLeft;">Get Your Data Analized</span>
                            <h2 class="title wow fadeInLeft anim1" data-wow-delay="700ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInLeft;">
                                Turn <span class="emphasis">data</span> into insight with survey reports
                            </h2>
                            <div class="subscription-form wow fadeInUp anim1" data-wow-delay="700ms" style="visibility: visible; animation-delay: 700ms; animation-name: fadeInUp;">
                                    <button class="btn btn-custom bg" type="submit"><a style="color:#fff" target="_blank" href="https://api.whatsapp.com/send?phone=+2348030634841">Get in Touch</a> </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-8 col-lg-6 col-md-9 mx-auto">
                        <div class="hero-img text-right anim2" data-wow-delay="500ms" style="visibility: visible; animation-delay: 500ms; animation-name: fadeInRight;">
                            <img src="./../assets/images/hero-illustration.png" alt="Illustration">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import gsap from 'gsap'

export default {
   mounted () {
      gsap.from('.anim1', { x:-50,opacity:0, stagger:-1 } );
      gsap.from('.anim2', { x:100,opacity:0 } );
   }
}
</script>

<style lang="scss" scoped>
    .hero-text{
            padding-left: 50px;
    }
  .title-tag{
    font-size: 16px;
    font-weight: 700;
    color: #0c0b0b;
    line-height: 1.2;
    margin-bottom: 20px;

  }

  .title{
      letter-spacing: -0.03em;
    line-height: 1.1;
    font-size:3.3em;
    font-weight:600;
    margin:0px 0px 50px 0px;
  }

  .hero-img{
      img{
          max-width:100%
      }
      
  }

  .emphasis{
      color:#00299d;
      font-weight:700
  }

  @media (max-width:640px){
   .hero-text{
            padding-left: 10px;
            margin-top:50px
    }
}
</style>