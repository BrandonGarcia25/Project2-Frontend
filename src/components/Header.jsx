import coffeeProLogo from '../assets/logo-coffee-pro2.png'

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