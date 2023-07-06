import { useState } from "react";
import "./App.css";
import { Buttons } from "./Components/Buttons";

function App() {
   const [count, setCount] = useState(0);

   const increment = () => {
      setCount(count + 1);
   };
   return (
      <div>
         <div>
            <p>Count: {count}</p>

            <Buttons onClick={increment} className='btn' text='halo' />
         </div>
      </div>
   );
}

export default App;
