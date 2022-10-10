import {useEffect,useState} from "react"
import './App.css';

function App() {
  const[activekey,setKey]=useState("");
  useEffect(()=>{
    document.addEventListener('keydown',(event)=>{playSound(event.key.toUpperCase())})
  })
  const displayPad=[
   {
    no:1,
    text:"Q",
    src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    n0:2,
    text:"W",
    src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
{
  no:3,
  text:"E",
  src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
},
{
  no:4,
  text:"A",
  src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
},
{
  no:5,
  text:"S",
   src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
},
{
  no:6,
  text:"D",
  src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
},
{
  no:7,
  text:"Z",
  src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
},
{
  no:8,
  text:"X",
  src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
},
{
  No:9,
  text:"C",
  src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
},


  ]
function playSound(arg){
const sound=document.getElementById(arg);
sound.play();
setKey(arg)
}


  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{activekey}</div>
        <div className="drum-pads"> {displayPad.map((key)=><div onClick={()=>{playSound(key.text)}}className="drum-pad" id={key.src}>{key.text}
        <audio className="clip" id={key.text} src={key.src}></audio>
        </div>)}
        </div>
       
        
      </div>
    </div>
  );
}

export default App;
