import React from "react"
import Back from "../common/back/Back"
import "./contact.css"

const Contact = () => {
  const map = "https://www.google.com/maps/dir//Debre+Berhan+University,+09+School+of+Computing,+Debre+Birhan/@9.6007357,39.4949491,12.71z/data=!4m8!4m7!1m0!1m5!1m1!1s0x1649bd7dac123767:0x44635ad4b8545f85!2m2!1d39.5213618!2d9.6568423?entry=ttu"
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat WITH US </p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> FITSUMENUNU21@GMAIL.COM</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +251920209609</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM Youtube</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
