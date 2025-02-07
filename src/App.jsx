import Profile from './components/Profile';
import Links from './components/Links';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="left-section">
          <Profile />
        </div>
        <div className="right-section">
          <div className="name-section">
            <h1>SHANE</h1>
            <h2>JOSEPH</h2>
            <p className="tagline">
              Passionate about creating something fun and engaging and always look to learn something new and challenging
            </p>
          </div>
          <Links />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;