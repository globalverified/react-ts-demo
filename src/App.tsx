import React from 'react';

import './App.css';
// import { CustomHooks } from './components/CustomHooks';
// import { LifeCycleMethods,  LifeCycleWithFunction} from './components/LifeCycleMethods';
// import { SumComponent } from './components/SumComponent'
// import { ToggleButton } from './components/ToggleButton';
// import { UseContextHook } from './components/UseContextHook';
// import { UseRefExample } from './components/UseRefExample';
// import { UserForm } from './components/UserForm';
// import { Welcome } from './components/Welcome';
// import { ErrorBoundary } from 'react-error-boundary';
// import { ErrorBoundayFallback } from './components/ErroBoundaryFallback';
// import { ErrorBoundayHandle } from './components/ErroBoundaryComponent';

// import Accordion from 'react-bootstrap/Accordion';

// import { UseReducerHook } from './components/UseReducerHook';
// import { ButtonComponent } from './components/ButtonsComponent';
import {MyDndComponent } from './components/mydnd/DndComponent'

function Sum(a: number, b: number) {
  return a + b;
}
function App() {
  const value = Sum(5, 4);

  return (
    <div className="App">
      {/* <header className="App-header">
        Sum of two numbers via function: {value}
        <SumComponent a={5} b={6} />
        <Welcome name={'Sagar'} />
        <Welcome name={'Kartik'} />
        <ToggleButton />
        <UserForm />
        <LifeCycleMethods initialVal={0}/>
        <LifeCycleWithFunction initialVal={0}/>
        <CustomHooks />
        <UseReducerHook />
        <UseRefExample />
        <UseContextHook />
        <ErrorBoundary FallbackComponent={ErrorBoundayFallback}>
          <ErrorBoundayHandle />
        </ErrorBoundary>
      </header>
      <section id='accordians'>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </section>
      <section id='buttons'>
        <ButtonComponent />
      </section> */}
      <section id='dnd'>
        <MyDndComponent />
      </section>
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
