
import './App.css';
import Searchengine from "./Searchengine";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className='container'>
       <h1>wave weather </h1>
       <Searchengine />
       </div>
       <div className='footer'>my 
       <a className='source' href='/'> open source</a> code</div>
      </header>
    </div>
  );
}

export default App;
