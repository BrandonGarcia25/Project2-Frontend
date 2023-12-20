import githubLogo from "../assets/githubLogo-white.png";

const Footer = () => {
  return (
    <div className="Footer">
      <a href="https://github.com/BrandonGarcia25/e-commerce-local-coffee">
        <p><img src={githubLogo} alt="githubLogo" className="githubLogo" /> GitHub repository </p>
      </a>
    </div>
    
  )
}

export default Footer;