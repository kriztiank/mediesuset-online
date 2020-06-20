import React from "react"
import Title from "./Title"

const Login = ({ title }) => {
  return (
    <>
      <Title title={title} />
      <section className="contact-page">
        <article className="contact-form">
          <form action="https://formspree.io/xrgyklvb" method="POST">
            <div className="form-group">
              <h3>Indtast login oplysninger</h3>
              {/* htmlFor Email/brugernavn: */}
              <input
                type="email"
                placeholder="Email/brugernavn:"
                name="email"
                className="form-control"
              />
              {/* htmlFor Adgangskode: */}
              <input
                type="email"
                placeholder="Adgangskode:"
                name="email"
                className="form-control"
              />
            </div>
            <button type="submit" className="submit-btn">
              LOGIN
            </button>
            {/* glemt adgangskode? link */}
          </form>
        </article>
      </section>
    </>
  )
}

export default Login
