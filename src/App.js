import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import BeerList from './components/BeerList';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Homepage />

      <Routes>

        <Route exact path='/beersList' element={ <BeerList/> }/>

      </Routes>
    </div>
  );
}

export default App;
