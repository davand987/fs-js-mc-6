import { useEffect, useState } from "react";

function Clock(){
  const [time, setTime] = useState(new Date());

  useEffect(() =>{
    // startar en timer som körs varje sekund
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);


    //när klockan tas bort stäng av timer
    return() => clearInterval(interval)
  }, [])

  return(<div>
    <h2>time: {time.toLocaleTimeString()}</h2>
  </div>)

}
export default Clock;