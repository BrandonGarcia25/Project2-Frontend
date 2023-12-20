import coffeeBeans from "../assets/coffee-beans.png"; 
import Products from '../pages/ProductsPage'; 

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Choose your new favorite coffee brand.</p>
<h2>All Products</h2>
    

  <h2>We're on a mission to make small coffee brands accesible</h2>

  <div className="missionStatement">
    <div class="column"> <img src={coffeeBeans} class="coffeeBeans"/><p>Connect Specialty Coffee Growers with Coffee Lovers</p></div>
 <div class="column"> <img src={coffeeBeans} class="coffeeBeans"/> <p>Expose the Specialty Coffee Brands of the World</p> </div>
 <div class="column"> <img src={coffeeBeans} class="coffeeBeans"/> <p>Enjoy variety of coffees and impulse the  Specialty Coffee industry worldwide</p> </div>
    </div>

  <div>
    <button class="button">Learn More</button>
  </div>

  <div>
    <h2>Surprise Coffee Subscription</h2>
    <p>Get a new coffee brand each month for ONE year</p>
    <button class="button">Learn More</button>
  </div>
    </div>
  );
}

export default HomePage;
