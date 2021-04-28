
<template>
  <section class="services" id='service'>
    <div class="header">
      <h2>Service</h2>
      <h1>What we do</h1>
    </div>

    <div class="detals">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="s-card anim">
              <div class="img">
               <i class="flaticon-neuron"></i>
              </div>
              <h4>DATA COLLECTION</h4>
              <p>
                We collect data for organisations and individuals in the area of interest, we are involved in both qualitative and quantitative data collection, with us you are sure of integrity of the process ,reduced likelihood of errors ,collective data for decision making, save of cost and time. 
              </p>
            </div>
          </div>

          <div class="col-md-4 anim">
            <div class="s-card">
              <div class="img">
                <i class="flaticon-cyborg"></i>
              </div>
              <h4>DATA ANALYSIS</h4>
              <p>
                Having data is not enough , we help to inspect,clean,transform,and model your data to discover  useful information that informs your decisions and conclusions.
              </p>
            </div>
          </div>

          <div class="col-md-4">
            <div class="s-card anim">
              <div class="img">
                  <i class="flaticon-chip"></i>

              </div>
              <h4>TRAINING  ON DATA  ANALYSIS</h4>
              <p>
                Aspiring analysts and anyone that uses data can now get trained. Our training courses equip participants with time saving skills  and techniques to go from data to actionable insights information in the shortest possible time ,towards achieving the organisations objectives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
   mounted () {
    gsap.to('.how-card h4', 5, { x:-30, yoyo:true, repeat:-1 } );
      gsap.to('.how-card.right h4', 3, { x:30, yoyo:true, repeat:-1 } );
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('.anim',{
        scrollTrigger:{
          trigger:'.anim',
          toggleActions:"restart none none reverse"
        },
        ease:'back',
        y:'100',
        opacity:0,
        duration:0.3,
        stagger:1
      })
   }
};
</script>
<style lang="scss" scoped>
.services {
  .s-card {
        position: relative;
    z-index: 1;
    background: #f8f8f8;
    padding: 10px;
    margin:20px 0px;
    .img {
      height: 140px;
      width: 140px;
      line-height: 150px;
      -webkit-box-shadow: 0px 16px 32px rgb(7 28 31 / 6%);
      box-shadow: 0px 16px 32px rgb(7 28 31 / 6%);
      background: #fff;
      border-radius: 50%;
      color: #277eff;
      /* font-size: 50px; */
      border-radius: 50%;
      text-align: center;
      -webkit-transition: all 0.3s ease-out 0s;
      -o-transition: all 0.3s ease-out 0s;
      transition: all 0.3s ease-out 0s;
      position: relative;
      i{
        font-size:60px
      }
      &::after {
        content: "";
        height: 30px;
        width: 30px;
        border-radius: 50%;
        background: linear-gradient(#00299d 10%, #0078ee 100%);
        position: absolute;
        left: 0px;
        top: 0px;
        z-index:-1;
        
      }
    }
    &:hover {
      .img {
        background: linear-gradient(#00299d 10%, #0078ee 100%);
        color: #fff;
      }
    }

    h4 {
      font-weight: 500;
      line-height: 50px;
    }
    p {
      line-height: 25px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}

@media (max-width:640px){
  .services {
  .s-card {
    margin:10px 0px;
    .img {
      height: 100px;
      width: 100px;
      line-height: 100px;
      i{
        font-size:40px
      }
      
    }
    }

    h4 {
      font-weight: 500;
      line-height: 20px;
      font-size:20px
    }
    p {
      line-height: 20px;
      color: rgba(0, 0, 0, 0.7);
    }
  }
}
</style>

