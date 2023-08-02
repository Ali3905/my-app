// components/Carousel.js
import { useState } from 'react';

const questions = [
  { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3'] },
  { id: 2, text: 'Question 2', options: ['Option A', 'Option B', 'Option C'] },
  { id: 3, text: 'Question 3', options: ['Option X', 'Option Y', 'Option Z'] },
  // Add more questions as needed
];

const Carousel = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showConfirmButton, setShowConfirmButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [transitionDirection, setTransitionDirection] = useState('');

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setShowConfirmButton(true);
  };

  const handleConfirm = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedOption;
    setAnswers(updatedAnswers);

    setSelectedOption('');
    setShowConfirmButton(false);

    if (currentQuestion < questions.length - 1) {
      setTransitionDirection('up');
      setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setTransitionDirection('down');
      }, 500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setTransitionDirection('up');
      setTimeout(() => {
        setCurrentQuestion((prevQuestion) => prevQuestion - 1);
        setTransitionDirection('down');
      }, 500);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-1/2">
      <div className="w-4/4 max-w-md p-4 bg-white rounded-lg shadow-md ">
        <div
          className={`transition-transform duration-500 ${
            transitionDirection === 'up' ? '-translate-y-full' : 'translate-y-0'
          }`}
        >
          <h1 className="text-2xl font-bold mb-4">{questions[currentQuestion].text}</h1>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="mb-2">
                <input
                  type="radio"
                  id={`option_${index}`}
                  name={`question_${currentQuestion}`}
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleAnswer(option)}
                />
                <label htmlFor={`option_${index}`} className="ml-2">
                  {option}
                </label>
              </div>
            ))}
          </form>
          {showConfirmButton && (
            <button
              onClick={handleConfirm}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
      <div className="mt-4 absolute bottom-0 right-0">
        {currentQuestion > 0 && (
          <button onClick={handlePrevious} className="mr-2">
            Previous
          </button>
        )}
        {currentQuestion === questions.length - 1 ? (
          <button onClick={() => console.log(answers)} className="ml-2">
            Submit
          </button>
        ) : (
          <button disabled={!showConfirmButton} onClick={handleConfirm} className="ml-2">
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
