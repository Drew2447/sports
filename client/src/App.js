import { Route, Routes, Link, Outlet } from 'react-router-dom';
import Crud from './Crud/cindex';
import './App.css';
import Basketballs from './Basketball/Basketballs';
import BasketballShow from './Basketball/BasketballShow';
import BasketballList from './Basketball/BasketballList';
// import Players from './players/bindex';
import BasketballForm from './Basketball/BasketballForm';

const MainContanier = () => {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/crud">allCRUD</Link>
        <Link to="/basketballs">Basketball</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

const Home = ()=>{
  return (
    <p>Home</p>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainContanier />}>
          <Route index element={<Home />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/basketballs" element={<Basketballs />}>
            <Route index element={<BasketballList />} />
            <Route path="/basketballs/new" element={<BasketballForm />} />
            <Route path="/basketballs/:id/edit" element={<BasketballForm />} />
            <Route path="/basketballs/:id" element={<BasketballShow />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;