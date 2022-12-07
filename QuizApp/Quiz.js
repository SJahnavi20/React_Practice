import React from 'react'
import { useState } from 'react';
import './quiz.css'
const Quiz=()=>
{
    var QuestionBank=[
        {
        Question:"Who is the Captain of Indian Cricket Team",
        Answers:[
            {Answer:"Virat Kohli", isCorrect:false},
            {Answer:"M S Dhoni", isCorrect:false},
            {Answer:"Rohith Sharma", isCorrect:true},
            {Answer:"Sachin Tendulkar", isCorrect:false}
        ]
    },

    {
        Question:"Who is the PM of India",
        Answers:[
            {Answer:"Narendra Modi", isCorrect:true},
            {Answer:"Ramnath Govind", isCorrect:false},
            {Answer:"M S Dhoni", isCorrect:false},
            {Answer:"Venkaih Naidu", isCorrect:false}
        ]
    },

    {
        Question:"Who is the CEO of Tesla",
        Answers:[
            {Answer:"Elon Musk", isCorrect:true},
            {Answer:"Tim Cook", isCorrect:false},
            {Answer:"Andy Jassy", isCorrect:false},
            {Answer:"Satya Nadella", isCorrect:false}
        ]
    },

    {
        Question:"Who is the father of Computer Science",
        Answers:[
            {Answer:"Charles Babbage", isCorrect:true},
            {Answer:"Konrad Zuse", isCorrect:false},
            {Answer:"Presper Eckert", isCorrect:false},
            {Answer:"Grace Hooper", isCorrect:false}
        ]
    },

    {
        Question:"11011 + 111 = ?",
        Answers:[
            {Answer:"12211", isCorrect:false},
            {Answer:"111221", isCorrect:false},
            {Answer:"11221", isCorrect:false},
            {Answer:"None", isCorrect:true}
        ]
    },
    ]

    const[currentQuestion,setCurrentQuestion]=useState(0);
    const[score,setScore]=useState(0);
    const[showScore,setShowScore]=useState(false);

const handleAnswerResponse=(isCorrect)=>
{
    if(isCorrect)
    {
        setScore(score+1);
    }
    const nextQuestion=currentQuestion+1;
    if(nextQuestion<QuestionBank.length)
    {
        setCurrentQuestion(nextQuestion);
    }
    else
    {
        setShowScore(true);
    }
}

const resetQuiz=()=>
{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
}
    
    return(
        <div className='app'>
            {showScore?(
                <div className='score'>
                    You have scored {score} out of {QuestionBank.length}
                    <>
                        
                        <button type="submit" onClick={resetQuiz}>Play Again</button>
                       
                    </>
                </div>
            )
            : (
                <>
                <div>
                    <div>
                        <span>{currentQuestion+1}</span>/<span>{QuestionBank.length}</span>
                    </div>
                    <div>
                        {QuestionBank[currentQuestion].Question}
                    </div>
                </div>

                <div className='answer'>
                    {QuestionBank[currentQuestion].Answers.map((answer)=>
                    (
                        <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                    ))}
                </div>
                </>
            )}
        </div>
    )
}

export default Quiz;