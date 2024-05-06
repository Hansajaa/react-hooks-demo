import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [value, setValue] = useState("< this is you're entered text >");
  const [count, setCount] = useState(-1);
  const countref = useRef(0);

  const paragraphRef = useRef();

  const inputRef = useRef();
  

  const handleChange = (e) => {
      if(e.target.value.length == 0){
          setValue("< this is you're entered text >");
      }else{
        setValue(e.target.value);
      }
  }

  const handleClick = () => {
      if(inputRef.current.value == ""){
        inputRef.current.focus();
      }else if(inputRef.current.value > 50){
          alert("Pass")
      }else{
        alert("Fail");
      }
  }

  useEffect(()=>{
      // setCount(count+1)
      countref.current = countref.current + 1;
      paragraphRef.current.style.color = "red";
  })

  return (
    <>
      <input type="text" onChange={handleChange}/>
      <p>You are entered {value}</p>
      <p>Rendered : {countref.current}</p>
      <p ref={paragraphRef}>This is sample check for useRef Hook</p>

      <p>----------------------------------------------------------</p>

      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Submit</button>
    </>
  )
}

export default App
