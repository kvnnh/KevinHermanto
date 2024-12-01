import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Kevin</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
          <li>
            <a href="#portofolio" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
      <a href="https://www.instagram.com/kevyg._/profilecard/?igsh=bHhueWs4M3plZzRw" className="footer__social-link" target={"_blank"}>
        <i className="bx bxl-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/in/kevinhermanto1/" className="footer__social-link" target={"_blank"}>
        <i className="uil uil-linkedin"></i>
      </a>
      <a href="https://github.com/kvnnh" className="footer__social-link" target={"_blank"}>
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
    <span className="footer__copy">&#169; Kevin Hermanto. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer
