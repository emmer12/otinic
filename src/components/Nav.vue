<template>
  <div class="nav-container">
    <div class="top-section">
      <ul>
        <li><a href="#">Welcome to Otinics</a></li>
        <li><a href="tel:+2347017587192">07017587192</a></li>
        <li><a href="mailto:otinic@mail.com">otinic@mail.com</a></li>
      </ul>
    </div>
    <div class="bottom-section " :class="{added:sticky}">
      <div class="logo">
        <h2><img src="logo.jpg" alt="Otinic Logo" /> </h2>
      </div>

      <div class="left">
        <ul>


          <li class="active"><a href="">Home</a></li>
          <li @click="scrollNow('about')"><a>About</a></li>
          <li @click="scrollNow('service')"><a>Service</a></li>
          <li @click="scrollNow('contact')"><a>Contact</a></li>
        </ul>
      </div>

      <div class="action-area">
        <button class="btn btn-custom bg">Get A Quote</button>
      </div>

      <div class="bar" @click="toggleOpen" v-show="!open">
            <span></span>
            <span></span>
      </div>

      <svg class="svg">
        <defs>
          <clipPath id="clip">
            <circle
              class="one"
              cx="200"
              cy="600"
              r="700"
              transform="scale(0)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="sidebar">
      <div class="s-logo">
        <div class="logo"><img src="logo.jpg" alt="Otinic Logo" /></div>
        <div class="cancel" @click="closeed">
          <svg width="24" height="24" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
      </div>
        <ul>
          <li class="active"><a href="">Home</a></li>
          <li @click="scrollNow('about')"><a>About</a></li>
          <li @click="scrollNow('service')"><a>Service</a></li>
          <li @click="scrollNow('contact')"><a>Contact</a></li>
        </ul>
    </div>
  </div>
</template>

<script >
import {gsap,TweenMax} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import { defineProps, reactive,onMounted } from "vue";
  let x;
  let y;
export default {
  data() {
    return {
      open: false,
      sticky:false
    };
  },

  methods: {
    toggleOpen() {
      this.open=true
      y=TweenMax.from(".sidebar",1,{x:-300}).play();
      x=TweenMax.to(".one",1,{delay:0,scale: 1},"-=3");
    },
    closeed() {
      this.open=false
      x.reverse() 
    },
    scrollNow(sec){
          let section=document.getElementById(sec)
          let position=section.offsetTop
          window.scroll({top:position,behavior:'smooth'}) 
      this.open=false

        x.reverse() 
    }
  },
   created() {
    let tis = this;
    document.addEventListener("scroll", function() {
         tis.sticky = window.scrollY < 200 ? false : true;
    });
  },


};
</script>

<style lang="scss" scoped>
.nav-container {
  .top-section {
    display: inline-block;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#00299d),
      to(#0078ee)
    );
    background: -o-linear-gradient(left, #00299d 0%, #0078ee 100%);
    background: linear-gradient(to right, #00299d 0%, #0078ee 100%);
    padding: 10px 50px;
    -webkit-clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 20px 100%);
    clip-path: polygon(0 0, 100% 0, calc(100% - 20px) 100%, 20px 100%);

    ul {
      li {
        display: inline-block;
        font-weight: 500;
        position: relative;

        &:not(:last-child) {
          padding-right: 20px;
          margin-right: 20px;
        }

        &:not(:last-child)::after {
          position: absolute;
          right: 0;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          content: "|";
          color: #428eff;
        }

        a {
          color: white;
        }
      }
    }
  }

  .bottom-section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0px 50px;
    height: 70px;
    line-height: 70px;
    transition:0.3s;
    top:50px;

    &.added{
      position: fixed;
      width:100%;
      left:0px;
      top:0px;
      z-index:998;
      background:#fff;
    }

    ul {
      li {
        display: inline-block;
        font-weight: 500;
        position: relative;
        padding: 0px 10px;
        &.active a {
          color: #277eff;
          font-weight: 700;
        }
      }

      a {
        font-size: 16px;
        font-weight: 500;
        color: #252424;
        padding: 10px;

        &:hover {
          color: #277eff;
        }
      }
    }
  }
  .action-area{
    margin-top:20px
  }
  .bar {
    display: none;
    cursor: pointer;
    height:50px;
    width:50px;
    margin-top: 15px;
    transition:0.3s;
    span{
      height:7px;
      width:90%;
      background: #555;
      display: block;
      margin-top:6px;
      border-radius:5px;
      float:right;

      &:nth-child(2){
        width:60%;
      }
    } 
  }
}
.sidebar {
  position: fixed;
  background: linear-gradient(#fff 20%, #252424);
  height: 100%;
  z-index: 999;
  top: 0;
  min-width: 300px;
  clip-path: url("#clip");

  .s-logo {
    display: flex;
    padding: 10px 20px;
    align-items: center;
    justify-content: space-between;
  }

  ul {
    li {
      font-weight: 700;
      a {
        background: transparent;
        display: block;
        padding: 10px;
        margin: 5px;
        color: #444;
        transition: 0.5s;
        &:hover {
          /* background: red; */
          background: rgba($color: #444, $alpha: 0.2);
        }
      }
    }
  }
}
.logo{
      height: 70px;
      width: 70px;
      margin-top:5px;
      img{
        width:70%
      }
    }



.svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  z-index: -1;
  circle {
    background: green;
    transform-origin: 50% 50%;
  }
}

@media (max-width: 640px) {
  .nav-container {
    .bar {
      display: block;
    }
    .top-section,
    .left,
    .action-area {
      display: none;
    }
    .bottom-section {
      padding: 0px 20px;
    }
  }
}
</style>