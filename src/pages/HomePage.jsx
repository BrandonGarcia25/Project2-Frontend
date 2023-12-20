import coffeeLeaves from "../assets/coffee-leaves.png"
import coffeeGrower from '../assets/coffee-grower.png'
import coffeeBox from '../assets/coffee-box.png'
import MockCoffee from '../assets/MockCoffee.png'
import whiteBlock from '../assets/white-block.png'

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <div className="MockCoffee">
        <img src={MockCoffee} class="MockCoffee"/>
        </div>

      <h2>Get to know and review the worlds finest small coffee brands.</h2>
      <div className="whiteBlock">
      <img src={whiteBlock} class="whiteBlock"/>
      </div>

  <p><b>We're on a mission to promote up and coming coffee brands.</b></p>

  <div className="missionStatement">
    <div class="column"> <img src={coffeeGrower} class="coffeeBeans"/><p>Connect Specialty Coffee Growers with Coffee Lovers.</p></div>
 <div class="column"> <img src={coffeeBox} class="coffeeBeans"/> <p>Expose the Specialty Coffee Brands of the World.</p> </div>
 <div class="column"> <img src={coffeeLeaves} class="coffeeBeans"/> <p>Enjoy variety of coffees and impulse the  Specialty Coffee industry worldwide.</p> </div>
    </div>

    </div>
  );
}

export default HomePage;
