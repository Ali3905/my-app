// // components/Carousel.js
// import { useState } from 'react';

// const questions = [
//   { id: 1, text: 'Question 1', options: ['Option 1', 'Option 2', 'Option 3'] },
//   { id: 2, text: 'Question 2', options: ['Option A', 'Option B', 'Option C'] },
//   { id: 3, text: 'Question 3', options: ['Option X', 'Option Y', 'Option Z'] },
//   // Add more questions as needed
// ];

// const Carousel = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(null));
//   const [showConfirmButton, setShowConfirmButton] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [transitionDirection, setTransitionDirection] = useState('');

//   const handleAnswer = (option) => {
//     setSelectedOption(option);
//     setShowConfirmButton(true);
//   };

//   const handleConfirm = () => {
//     const updatedAnswers = [...answers];
//     updatedAnswers[currentQuestion] = selectedOption;
//     setAnswers(updatedAnswers);

//     setSelectedOption('');
//     setShowConfirmButton(false);

//     if (currentQuestion < questions.length - 1) {
//       setTransitionDirection('up');
//       setTimeout(() => {
//         setCurrentQuestion((prevQuestion) => prevQuestion + 1);
//         setTransitionDirection('down');
//       }, 500);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentQuestion > 0) {
//       setTransitionDirection('up');
//       setTimeout(() => {
//         setCurrentQuestion((prevQuestion) => prevQuestion - 1);
//         setTransitionDirection('down');
//       }, 500);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100 w-1/2">
//       <div className="w-4/4 max-w-md p-4 bg-white rounded-lg shadow-md ">
//         <div
//           className={`transition-transform duration-500 ${
//             transitionDirection === 'up' ? '-translate-y-full' : 'translate-y-0'
//           }`}
//         >
//           <h1 className="text-2xl font-bold mb-4">{questions[currentQuestion].text}</h1>
//           <form>
//             {questions[currentQuestion].options.map((option, index) => (
//               <div key={index} className="mb-2">
//                 <input
//                   type="radio"
//                   id={`option_${index}`}
//                   name={`question_${currentQuestion}`}
//                   value={option}
//                   checked={selectedOption === option}
//                   onChange={() => handleAnswer(option)}
//                 />
//                 <label htmlFor={`option_${index}`} className="ml-2">
//                   {option}
//                 </label>
//               </div>
//             ))}
//           </form>
//           {showConfirmButton && (
//             <button
//               onClick={handleConfirm}
//               className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//             >
//               Confirm
//             </button>
//           )}
//         </div>
//       </div>
//       <div className="mt-4 absolute bottom-0 right-0">
//         {currentQuestion > 0 && (
//           <button onClick={handlePrevious} className="mr-2">
//             Previous
//           </button>
//         )}
//         {currentQuestion === questions.length - 1 ? (
//           <button onClick={() => console.log(answers)} className="ml-2">
//             Submit
//           </button>
//         ) : (
//           <button disabled={!showConfirmButton} onClick={handleConfirm} className="ml-2">
//             Next
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Carousel;




import React, { useState } from "react";
import  CarouselItem from "./CarouselItem";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState('')
  const items = [
    {
      title: "Baseball",
      question:
        "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
        options: ['aalso known as ambulation) is one of the main gait', 'balso known as ambulation) is one of the main gait', 'calso known as ambulation) is one of the main gait'],
      icon: "./williamstown-1057646.jgp"
    },
    {
      title: "Walking",
      question:
        "Walking (also known as ambulation) is one of the main gaits of terrestrial locomotion among legged animals. Walking is typically slower than running and other gaits. ",
        options: ['aalso known as ambulation) is one of the main gait', 'bkldfjd;l', 'calso known as ambulation) is one of the main gait'],
      icon: "./williamstown-1057646.jgp"
    },
    {
      title: "Weights",
      question:
        "Weightlifting generally refers to activities in which people lift weights, often in the form of dumbbells or barbells. People lift various kinds of weights for a variety of different reasons.",
        options: ['aalso known as ambulation) is one of the main gait', 'balso known as ambulation) is one of the main gait', 'calso known as ambulation) is one of the main gait'],
      icon: "./williamstown-1057646.jgp"
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  const enable = (val) =>{
    setSelectedValue(val)
    console.log(val);
  }
  return (
    <div className="carousel px-10">
      <div
        className="inner"
        
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} active={activeIndex} options={item.options} question={item.question} enable={enable} updateIndex={updateIndex}/>;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
           <span>
          <img src="/angle-up-solid.svg" alt="down" />
          <p className="text-transparent ">
          Previous
          </p>
          </span>
        </button>
        {/* <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div> */}
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
            setSelectedValue('')
          }}
          disabled={selectedValue===''?true:false}
        >
          {/* <span class="material-symbols-outlined">arrow_forward_ios</span> */}
          <span>
          <img src="/chevron-down-solid.svg" alt="down" />
          <p className="text-transparent ">
          Next
          </p>
          </span>
          {/* hello */} 
        </button>
      </div>
    </div>
  );
};
export default Carousel;
