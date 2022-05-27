import { Link, NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Ironbeers</h1>
      
    <ul>
        <Link exact to="/beersList" className="selected">All Beers</Link><br/>

        <Link exact to="/randomBeer" className="selected">Random Beer</Link><br/>

        <Link exact to="/newBeer" classname="selected">New Beer</Link><br/>
    </ul>
      
    </div>
  );
}

export default Homepage;