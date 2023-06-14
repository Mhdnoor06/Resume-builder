import logo from './logo.svg';
import './App.css';
import ResumeForm from './components/ResumeForm';
import Header from './components/header/Header';
import Body from './components/Body.js/Body';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      {/* <ResumeForm /> */}
    </div>
  );
}

export default App;
