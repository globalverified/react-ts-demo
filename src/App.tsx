import React from 'react';
import './App.css';
import { LifeCycleMethods } from './components/LifeCycleMethods';
import { SumComponent } from './components/SumComponent'
import { ToggleButton } from './components/ToggleButton';
import { UserForm } from './components/UserForm';
import { Welcome } from './components/Welcome';

function Sum(a: number, b: number) {
  return a + b;
}
function App() {
  const value = Sum(5, 4);
  return (
    <div className="App">
      <header className="App-header">
        Sum of two numbers via function: {value}
        <SumComponent a={5} b={6} />
        <Welcome name={'Sagar'} />
        <Welcome name={'Kartik'} />
        <ToggleButton />
        <UserForm />
        <LifeCycleMethods initialVal={0}/>
      </header>
      <footer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
