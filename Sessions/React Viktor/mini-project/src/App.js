import './App.css';
import React, { useEffect, useState } from 'react'
import Quiz from './components/Quiz/Quiz';
import { mockFetch } from './utils/utils';
import { useParams } from 'react-router-dom';

function App() {
    
    const {quizId, questionId} = useParams()

    const [questions, setQuestions] = useState([]);
    const [quiz, setQuiz] = useState(parseInt(quizId));
    
    
    useEffect(() => {
        mockFetch(`quiz/${quiz}`)
        .then(res => res.json())
        .then(res => setQuestions(res));
    }, [quiz])

    return (
        <div className='Center-Content'>
            <Quiz quiz={quiz} questions={questions} ></Quiz>
        </div>
    )
}

export default App