import React, {useState} from 'react';
import {CSSTransition, SwitchTransition} from "react-transition-group";
import './App.css';


function App() {
  const [objOneIn, setObjOneIn] = useState(true);

  const goForFurtherDetails = () => {
    setObjOneIn(false)
  };

  const goBack = () => {
    setObjOneIn(true)
  };

  const FadeTransition = props => {
    console.log('should enter from forward and exit from back:', props.moveForward);
    return (
      <CSSTransition
        {...props}
        classNames={{
          enter: props.moveForward ? 'fade-enter-back' : 'fade-enter-forward',
          enterActive: "fade-enter-active",
          exit: props.moveForward ? 'fade-exit-back' : 'fade-exit-forward'
        }}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
      />
    )
  };

  return (
    <div className="App">
      <header className="App-header">
        <SwitchTransition>
          <FadeTransition
            key={objOneIn}
            moveForward={objOneIn}
          >
            {objOneIn ? (
              <div style={{width: '450px', height: '150px'}}>
                <span>Some details page 1</span>
                <button onClick={goForFurtherDetails}>
                  go further
                </button>
              </div>
            ) : (
              <div style={{width: '450px', height: '150px'}}>
                <span>Further details page</span>
                <button onClick={goBack}>
                  go back
                </button>
              </div>
            )}
          </FadeTransition>
        </SwitchTransition>
      </header>
    </div>
  );
}

export default App;
