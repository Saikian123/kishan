
import D1 from '../assets/D1.png';
import D2 from '../assets/D2.png';
import D3 from '../assets/D3.png';
import D4 from '../assets/D4.png';
import D5 from '../assets/D5.png';
import './df.css'


const categories = [
  { name: "Dry Fruits and Nuts", image: D1 },
  { name: "pickles and  Chuntunys", image: D2 },
  { name: "Flavered Nuts", image: D3 },
  { name: "Dates and seeds", image: D4 },
  { name: "Orgaic and Helathy", image: D5 },
];

const ExploreCategory1 = () => {
  return (
    <div className="explore-category-container">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <img src={category.image} alt={category.name} className="category-image" />
          <p className="category-name">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ExploreCategory1;
