import "./App.css";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useState} from "react";

function App() {
  const [c1, setC1] = useState(100);
  const [c2, setC2] = useState(100);
  const [p1wins, setP1wins] = useState(0);
  const [p2wins, setP2wins] = useState(0);
  const [round,setRound]=useState(5)
  const decrease = () => {
      document.querySelector("button").innerHTML="Continue";
      for(let i=0;i<=100;i++){
        if (c1<1 || c2<1){
          break
        }
        else{
        let a=Math.floor(Math.random()*6);
        let b=Math.floor(Math.random()*6);
        setC1(c1 - b);
        setC2(c2 - a);
        }
      }
      if (p1wins > 2 && p1wins <= 5) {
        document.querySelector(".end").innerHTML = "Player 1 has won the game with " +p1wins+" rounds out of 5 rounds";
        document.querySelector("button").style.display = "none";
      } else if (p2wins > 2 && p2wins <= 5) {
        document.querySelector(".end").innerHTML = "Player 2 has won the game with "+p2wins+" rounds out of 5 rounds";
        document.querySelector("button").style.display = "none";
      }
      if(c2<1){
        setC1(100);
        setC2(100);
        let remaining=round-1
        alert("Player 1 won the round. Number of rounds remaining: " + remaining)
        document.querySelector("button").innerHTML="Start";
        setP1wins(p1wins+1);
        setRound(remaining)
      }
      else if(c1<1){
        setC1(100);
        setC2(100);
        let remaining=round-1;
        alert("Player 2 won the round. Number of rounds remaining "+ remaining);
        document.querySelector("button").innerHTML="Start";
        setP2wins(p2wins+1);
        setRound(remaining)
      }
    }

  return (
    <div className="App">
      <div className="startButton">
        <button onClick={decrease} className="startbutton">
          Start
        </button>
      </div>
      <div className="players">
        <div className="player1">
          <ProgressBar
            completed={c1}
            width="70%"
            margin="2%"
            labelAlignment="outside"
            labelColor="black"
          />
          <h1 className="p1">Player 1</h1>
          <h3>Won:{p1wins}</h3>
        </div>

        <div className="player2">
          <ProgressBar
            completed={c2}
            width="70%"
            margin="2%"
            labelAlignment="outside"
            labelColor="black"
          />
          <h1 className="p2">Player 2</h1>
          <h3>Won:{p2wins}</h3>
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "150px" }} className="end"></h1>
    </div>
  );
}

export default App;
