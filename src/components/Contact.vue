
<template>
  <section class="contact" id="contact">
    <div class="header">
      <h2>Contacts</h2>
      <h1>Get In Touch</h1>
    </div>

    <div class="detals">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.6854092788526!2d7.0544159525345265!3d4.823976290349938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cda7f62bcc39%3A0x75f9ff37fb3d5105!2s83%20Woji%20Street%2C%20Trans%20Amadi%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1618456476639!5m2!1sen!2sng" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>

          <div class="col-md-6">
             <div class="c-card">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
              </div>
              <a href="tel:+23408030634841">+2348030634841</a>
            </div>
            <div class="c-card">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
                  />
                </svg>
              </div>
              <a href="mailto:info@mail.com">info@otinic.com</a>
            </div>

            <div class="c-card">
              <div class="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                  />
                  <path
                    d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  />
                </svg>
              </div>
              <a  href="#">No 83B Woji Road,Rumuloru Portharcourt,Nigeria.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.contact {
  .c-card {
    position: relative;
    z-index: 1;
    background: #ffffff;
    padding: 10px;
    display: flex;
    height: 100px;
    margin: 10px 10px;
    align-items: center;
    box-shadow: 0px 0px 20px #ddd;

    .icon {
      background: #428eff;
      color: #ffff;
      padding: 10px;
      border-radius: 10px;
      margin-right: 10px;
    }

    svg {
      color: #fff;
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
</style>

