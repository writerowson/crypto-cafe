import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './COMPONENETS/HomePage/HomePage';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>



      </Routes>
    </div>
  );
}

export default App;
