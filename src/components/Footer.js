import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div class="top">
        <div class="pages">
          <ul>
            <img src={logo} alt="company logo" />
            <p>
              <b style={{ fontSize: "40px" }}>R</b>esponsive{" "}
              <b style={{ fontSize: "40px" }}>I</b>nformation{" "}
              <b style={{ fontSize: "40px" }}>S</b>haring for{" "}
              <b style={{ fontSize: "40px" }}>E</b>cosystem for Healthcare
            </p>
          </ul>

          <ul>
            <h3>Connect</h3>
            <li>
              <a href="https://www.linkedin.com/in/gaurav0563/">Linkedin</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>

          <ul>
            <h3>About Us</h3>
            <li>
              <a href="">Meet Our Team</a>
            </li>
            <li>
              <a href="/mission">Our Ambitions</a>
            </li>
            <li>
              <a href="/values">Our Values</a>
            </li>
          </ul>
        </div>
        <div class="newsletter">
          <h3>Stay in Touch</h3>
          <form>
            <input
              type="email"
              name="newsletter_email"
              id="newsletter_email"
              placeholder="Email"
            />
            <input type="button" value="Submit" />
          </form>
        </div>
      </div>
      <div class="social">
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
      </div>
      <div class="info">
        <div class="legal">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div class="copyright">2024 Copyright &copy; RISE</div>
      </div>
    </footer>
  );
}

export default Footer;
