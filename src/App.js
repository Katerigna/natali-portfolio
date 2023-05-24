import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu/index.tsx';
import ProjectList from './components/ProjectList/index.tsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Natalia sketches
        </p>
        
      </header>
      <Menu onSelect={(option) => console.log(`Selected option: ${option}`)}/>
    <ProjectList />
    </div>
  );
}

export default App;
