import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Weather Search
        </h1>
        <Weather  city="" />
       </header>
       <footer>
         <p className="text-center mt-5">
"This project was coded by Devanie Dawson, and it is "
<a href="https://github.com/DDD91/weather-react" target="_blank" rel="noreferrer">open-sourced</a> 😊
         </p>
       </footer>
        </div>
      
  );
}

export default App;
