import React from 'react'

const Footer = () => {
  return (
      <div className="main text-center footer bg-body-tertiary">
        {/* risk text  */}
          <div className="container pt-4">
              <p>
                  Explore the world of stock markets and discover the opportunities it brings. Investing in stocks can offer both financial growth and challenges. It's essential to understand the benefits, such as potential returns and wealth creation, as well as the risks associated with market fluctuations.
              </p>
          </div>
              {/* <!-- Grid container --> */}
              <div class="container pt-4">
                  {/* <!-- Section: Social media --> */}
                  <section class="mb-4">
                      {/* <!-- Facebook --> */}
                      <a
                          data-mdb-ripple-init
                          class="btn btn-link btn-floating btn-lg text-body m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                      ><i class="fab fa-facebook-f"></i
                      ></a>

                      {/* <!-- Twitter --> */}
                      <a
                          data-mdb-ripple-init
                          class="btn btn-link btn-floating btn-lg text-body m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                      ><i class="fab fa-twitter"></i
                      ></a>

                      {/* <!-- Google --> */}
                      <a
                          data-mdb-ripple-init
                          class="btn btn-link btn-floating btn-lg text-body m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                      ><i class="fab fa-google"></i
                      ></a>

                      {/* <!-- Instagram --> */}
                      <a
                          data-mdb-ripple-init
                          class="btn btn-link btn-floating btn-lg text-body m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                      ><i class="fab fa-instagram"></i
                      ></a>

                      {/* <!-- Linkedin --> */}
                      <a
                          data-mdb-ripple-init
                          class="btn btn-link btn-floating btn-lg text-body m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                      ><i class="fab fa-linkedin"></i
                      ></a>
                      {/* <!-- Github --> */}
                      <a
                          data-mdb-ripple-init
                          class="btn btn-link btn-floating btn-lg text-body m-1"
                          href="#!"
                          role="button"
                          data-mdb-ripple-color="dark"
                      ><i class="fab fa-github"></i
                      ></a>
                  </section>
                  {/* <!-- Section: Social media --> */}
              </div>

          <div class="text-center p-3 bg-body-tertiary" >
              Stock App @2023 by <a class=" text-primary" href="https://github.com/shazam99"><u>Siddharth</u></a>
              </div>
            
    </div>
  )
}

export default Footer