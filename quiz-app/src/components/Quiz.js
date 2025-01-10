import { useState, useRef } from 'react';
import { questions } from '../questions';

const Quiz = () => {
    let [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(questions[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(false);
    const [scoreMessage, setScoreMessage] = useState(null);

    const Option1 = useRef(null);
    const Option2 = useRef(null);
    const Option3 = useRef(null);
    const Option4 = useRef(null);

    const option_array = [Option1, Option2, Option3, Option4];

    const checkAnswer = (e, answer) => {
        if(lock === false){
            if(question.answer === answer){
                e.target.classList.add("correct");
                setScore(score + 1);
            }else{
                e.target.classList.add("wrong");
                option_array[question.answer - 1].current.classList.add("correct");
            }
            setLock(true);
        }
    }

    const nextQuestion = () => {
        if (lock === true){
            if(index == questions.length - 1){
                setResult(true);
                if(score <= 3){
                    setScoreMessage("Try again");
                }else{
                    setScoreMessage("Congratulations");
                }
                return 0;
            }
            setIndex(++index);
            setQuestion(questions[index]);
            setLock(false);
            option_array.map((option) => {
                option.current.classList.remove("wrong");
                option.current.classList.remove("correct");
                return null;
            });
        }

    }

    const reset = () => {
        setIndex(0);
        setQuestion(questions[0]);
        setScore(0);
        setLock(false);
        setResult(false);
    }

    return(
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            { result ? <>
            <h2>Score: { score }</h2>
            <p>{ scoreMessage }</p>
            <button onClick={reset}>Reset</button>
            </> : <>
                <h2>{ index + 1 }. { question.question }</h2>
                <ul>
                    <li ref={ Option1 } onClick={((e) => {checkAnswer(e, 1)})}>{ question.option1 }</li>
                    <li ref={ Option2 } onClick={((e) => {checkAnswer(e, 2)})}>{ question.option2 }</li>
                    <li ref={ Option3 } onClick={((e) => {checkAnswer(e, 3)})}>{ question.option3 }</li>
                    <li ref={ Option4 } onClick={((e) => {checkAnswer(e, 4)})}>{ question.option4 }</li>
                </ul>
                <button onClick={nextQuestion}>Next</button>
                <div className="index">{ index + 1 } of { questions.length } questions</div>
            </>}
        </div>
    )
}

export default Quiz;