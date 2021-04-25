import "./App.css";
import barcelona from "./image/barcelona.png"
function App() {
  return (
    <div className="App">
  <div style={{border :"solid 1px black", maxWidth :"100vw"}}>
  <h1 className = "title red"> Yassine Maaoui </h1>
  <br/>
  <img src={barcelona} />
  <br/>
  <br/>
  
  <img src="/image/istanbul.png" />
  </div>
  <video width="320" height="240" controls>
  <source src="/video/vid.mp4" type="video/mp4" />
  </video>
    </div>

   
  );
}

export default App;
