import './App.css';
import Weather from './weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='weather-container'>
        <Weather defaultCity="Addis Ababa"/></div><footer>
      <p>This project is coded by <a href="https://www.shecodes.io/graduates/83359-yordanos-girma" target='blank'>Yordanos Girma</a> and open-source on <a href="https://github.com/yordigenet/react-weather-app" target='blank'>Github</a> and hosted on <a href="https://github.com/yordigenet/react-weather-app" target='blank'>Netlify</a></p>
      </footer></div>
    </div>
  );
}

