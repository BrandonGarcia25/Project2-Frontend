import coffeeProLogo from '../assets/logo-coffee-pro.png'

const Header = () => {
    return (
      <div className="Header">
        <a href="https://github.com/BrandonGarcia25/e-commerce-local-coffee">
          <p> <img src={coffeeProLogo} className="coffeeProLogo"/></p>
        </a>
      </div>
      
    )
  }
  
  export default Header;