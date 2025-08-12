import React, { useState } from 'react';

// Child component that receives props
function Greeting(props) {
  // Add useState hook to create state
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count < 50) {
      setCount(count + 1);
    }
  };

  return(
    <div>
      <p> Hello {props.name}! You are {props.age} years old. </p>
      <p> Button clicked {count} times.</p>
      <button onClick={handleClick} disabled={count >= 50}> 
        {count >= 50 ? 'Limit Reached!' : 'Click Me!'}
      </button>
    </div>
  );
}

export default Greeting;