import './App.css';
import Weather from './weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        <h1>React Weather App</h1>
        <Weather/>
      </header></div>
    </div>
  );
}

