import {BrowserRouter,  Route,  Routes } from 'react-router-dom';
import './App.css';
import DashboardPage from './pages/DashboardPage';
import WeatherDetailPage from './pages/WeatherDetailPage';
import WeatherComponent from './pages/WeatherDetailPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<DashboardPage/>}/>
        <Route path='/weather-details/:city' element={<WeatherDetailPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
