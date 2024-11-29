import { useState } from "react";

function Counter(){
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count+1);

  }

  return(<div>
    <h2>counter: {count}</h2>
    <button onClick={increment}> increment </button>
  </div>)
}

export default Counter;