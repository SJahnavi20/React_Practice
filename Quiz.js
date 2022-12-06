import React from 'react'
import { useState } from 'react';
import './quiz.css'
const Quiz=()=>
{
    var QuestionBank=[
        {
        Question:"What is the capital of India",
        Answers:[
            {Answer:"Delhi", isCorrect:true},
            {Answer:"Pune", isCorrect:false},
            {Answer:"Tamil Nadu", isCorrect:false},
            {Answer:"Patna", isCorrect:false}
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
        Question:"What is the National Fruit of India",
        Answers:[
            {Answer:"Mango", isCorrect:true},
            {Answer:"Apple", isCorrect:false},
            {Answer:"Banana", isCorrect:false},
            {Answer:"PineApple", isCorrect:false}
        ]
    },

    {
        Question:"What is the National Animal of India",
        Answers:[
            {Answer:"Tiger", isCorrect:true},
            {Answer:"Lion", isCorrect:false},
            {Answer:"Elephant", isCorrect:false},
            {Answer:"Giraffe", isCorrect:false}
        ]
    },

    {
        Question:"5 + 10 = ?",
        Answers:[
            {Answer:"15", isCorrect:true},
            {Answer:"50", isCorrect:false},
            {Answer:"25", isCorrect:false},
            {Answer:"error", isCorrect:false}
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