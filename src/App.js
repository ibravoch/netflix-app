import "./App.css";
import netflix2 from "./assets/netflix2.png";
import data from "./assets/netflix.json";

function App() {
  return (
    <div className="App">
      <img src={netflix2} />;
      {data.map((category) => {
        return (
          <div className="type">
            <h2>{category.category}</h2>
            <div className="img">
              {category.images.map((image) => {
                return (
                  <li className="liste">
                    <img src={image} />
                  </li>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default App;
