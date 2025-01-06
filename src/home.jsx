
import VegetableCards from "./Components/Div1";
import VegetableCard2 from "./Components/Div2";
import ExploreCategory1 from "./Components/DryFruits";
import ExploreCategory from "./Components/Explore";
import Slideshow from "./Components/Slideshow";
// import TopBar from "./Components/TopBar";
import Ico from "./icon";

const Home=()=>{
    return (
        <div style={{ position:"relative"}} >
                    
        
    
        <div>
      
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Slideshow/> {/* Include the Slideshow in a container */}
          </div>
          <div>
            <h2> Organic Vegatbles </h2>
            <VegetableCards/>
          </div>
          <div>
            <h2> Organic Fruits </h2>
            <VegetableCard2/>
          </div> 
    
          <div>
            <h2> Explore Catergoies </h2>
            <ExploreCategory/>
          </div>
    
         <div>
            <h2> DryFruits </h2>
            <ExploreCategory1/>
          </div> 
         
        </div> 
        
            <div style={{position:'relative'}}>
            <Ico/>

            </div>
        
       
        </div>
      );
}

export default Home;