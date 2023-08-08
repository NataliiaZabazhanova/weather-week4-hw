import './App.css';
import Footer from './Footer';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='App__body'>
          <Weather />
        </div>
        <div className='App__footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
