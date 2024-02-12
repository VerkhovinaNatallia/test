import { useState } from 'react';
import './index.scss';
import questions from './questions';
import Result from './Result';
import Game from './Game';

function App() {
  const [step,setStap]= useState(0);
  const [correct,setCorrect]=useState(0);
  const question = questions[step];
  const onClickVariant=(index)=>{
    setStap(step+1);
    if(index === question.correct){
      setCorrect(correct+1);
      console.log(correct);
    }
    console.log(correct);
  }


  return (
    
    <div className="App">
      <h1><strong>Угадай фразу из фильма</strong></h1>
      {
        step!== questions.length ? (<Game step ={step} question={question} onClickVariant={onClickVariant}/>):(<Result correct={correct} />)
      }
    </div>
  )
}

export default App;
