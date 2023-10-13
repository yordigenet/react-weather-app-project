import './App.css';
import SearchEngine from './search-engine';
import Weather from './weather';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='weather-container'>
        <SearchEngine/>
        <Weather/></div><footer>
      <p>Coded by <a href="https://www.shecodes.io/graduates/83359-yordanos-girma" target='blank'>Yordanos Girma</a> and open-source at <a href="https://github.com/yordigenet/react-weather-app" target='blank'>Github</a></p>
      </footer></div>
    </div>
  );
}

