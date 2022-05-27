import { useState, useEffect } from "react";
import IronBnbApi from "../services/Ironbnb";

function ApartmentsPage() {
  const [apartments, setApartments] = useState([]);

  // This effect will run only once after the initial render 
  useEffect(() => {
    IronBnbApi.getAllApartments()
    .then(allApps=>setApartments(allApps))

  }, []);       // <--  [] means: Run the effect only once, after initial render


  return (
    <div>
      <h3>List of apartments</h3>

      {apartments.map((apartment) => (
        <div key={apartment._id} className="card">
          <img src={apartment.img} alt="apartment" />
          <h3>{apartment.title}</h3>
          <p>Price: {apartment.pricePerDay}</p>
        </div>
      ))}
    </div>
  );
}

export default ApartmentsPage;