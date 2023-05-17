import logo from './logo.svg';
import './App.css';
import PersonList from './person/PersonListComponent.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <PersonList />
        </p>
      </header>
    </div>
  );
}

export default App;
