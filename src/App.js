import logo from './logo.svg';
import './App.css';
import TestScreen from './test';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestScreen></TestScreen>
      </header>
    </div>
  );
}

export default App;
