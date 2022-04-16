import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './COMPONENETS/HomePage/HomePage';
import Header from './COMPONENETS/Header/Header';
import Spinner from './COMPONENETS/Spinner/Spinner';
import Coins from './COMPONENETS/Coins/Coins';
import Contact from './COMPONENETS/Contact/Contact';
import About from './COMPONENETS/About/About';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='coins' element={<Coins></Coins>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='contact' element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
