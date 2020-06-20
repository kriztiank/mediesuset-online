import React from "react"
import hancock from "../assets/hancock.png"
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div>
          <h1>FØLG OS</h1>
          <SocialLinks styleClass="footer-links"></SocialLinks>
        </div>
      </footer>
      <section className="newsletter-section">
        <div className="newsletter-inner">
          <h1>TILMELD NYHEDSBREV</h1>
          <p>Få seneste nyt sendt direkte til din indbakke</p>

          <article className="contact-form-newsletter">
            <form action="https://formspree.io/xrgyklvb" method="POST">
              <div className="form-group-newsletter">
                <input
                  type="email"
                  placeholder="INDTAST DIN E-MAIL"
                  name="email"
                  className="form-control-newsletter"
                />
              </div>
              <button type="submit" className="submit-btn btn-red-newsletter">
                TILMELD NYHEDSBREV
              </button>
            </form>
          </article>
        </div>
      </section>

      <section className="sponsor-section">
        <img src={hancock} alt="Hancock kvalitet logo" />
        <p> - Smag forskellen...</p>
      </section>
    </>
  )
}

export default Footer
