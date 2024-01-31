import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';


function App() {
  const [x,setX]=useState(0)
const [y,setY]=useState(0)
useEffect(()=>{
  window.addEventListener("mousemove",handleMouseMove)
})

function handleMouseMove(event){
  setX(event.pageX)
  setY(event.pageY)

}
  return (
    <div className="App">
      <h1>recuperation des coordonnee de la souris</h1>
     <p>coordonees x:{x} y:{y}</p>
    </div>
  );
}

export default App;
