
import React from "react";
import './../styles/App.css';
import Search from "./Search";
const cities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Jaipur",
  "Ahmedabad",
  "Pune",
  "Lucknow",
  "Kochi",
  "Chandigarh",
  "Bhopal",
  "Indore",
  "Patna",
  "Visakhapatnam",
  "Coimbatore",
  "Nagpur",
  "Varanasi",
  "Agra"
];
const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <Search cities={cities} />
    </div>
  )
}

export default App
