import { useEffect, useState } from "react";
import "./explore.css";
import axios from "axios";


const ExploreCategory = () => {
  const [ categories,setCategories]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/categories")
    .then((response)=>
    setCategories(response.data))
    .catch((error)=>{
      console.log("eroor ocured",error)
    })
  })

  return (
    // <div className="explore-category-container">
      <div className="col-12 d-flex flex-wrap">
      {categories.map((category, index) => (
        <div key={index} className="category-card category-slider arrow-slider col-xxl-2 col-lg-2 col-md-3   p-1">
          <img src={category.image} alt={category.name} className="category-image img-fluid blur-up lazyloaded "/>
          <p className="category-name ">{category.name}</p>
        </div>
      ))}
      </div>
    // </div>
  );
};

export default ExploreCategory;
