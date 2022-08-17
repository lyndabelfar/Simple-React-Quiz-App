import { useState } from "react";

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);



  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const handleButtonClick =(isCorrect)=>{
    if(isCorrect === true){
      let correctAnswer = score+1;
      setScore(correctAnswer)
    }
    let nextQuestion =currentQuestion+1;
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);

    }else{
      setShowScore(true)
    }
  
  }
  return (

    <div className="container">
      {showScore? (
        <p>You scored {score} out of {questions.length}</p>
      ) : (
        <>
          <div className="question-section">
            <div className="question-num"><span>Question {currentQuestion + 1} </span>/{questions.length}</div>
            <div className="question">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answers-section">
              {questions[currentQuestion].answerOptions.map((answer) => {
                return <button onClick={()=>handleButtonClick(answer.isCorrect)}>{answer.answerText}</button>;
              })}
          </div>
        </>

      

      )}
    </div>
      
  );
}

export default App;
