import FAQimage from "../images/imag3.avif";
import { answersData } from "../answersData";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IconContext } from "react-icons";
import { HashLink } from "react-router-hash-link";
export default function FAQ() {
  const [questionVisibility, setQuestionVisibility] = useState({});

  const toggleQuestion = (setIndex, questionIndex) => {
    setQuestionVisibility((prevVisibility) => {
      const key = `${setIndex}-${questionIndex}`;
      return {
        ...prevVisibility,
        [key]: !prevVisibility[key],
      };
    });
  };

  return (
    <>
      <div className="FAQimage" style={{ backgroundImage: `url(${FAQimage})` }}>
        <p>FAQ</p>
        <h1>INFORMATION HUB</h1>
      </div>
      <div className="FAQdiv">
        <div className="FAQquestions">
          <h2>TOPICS</h2>
          <HashLink smooth to="#GENERAL_QUERIES">
            GENERAL QUERIES
          </HashLink>
          <HashLink smooth to="#SIZE_AND_FIT">
            SIZE AND FIT
          </HashLink>
          <HashLink smooth to="#SHIPPING_&_RETURNS">
            SHIPPING AND RETURNS
          </HashLink>
        </div>
        <div className="FAQanswers">
          {answersData.map((x, setIndex) => (
            <div key={setIndex} className="answersDiv" id={x.questionName}>
              <h3>{x.questionName}</h3>
              {x.questions.map((y, questionIndex) => (
                <div className="answers" key={questionIndex}>
                  <h4 onClick={() => toggleQuestion(setIndex, questionIndex)}>
                    {y.question}
                    <span>
                      <IconContext.Provider value={{ size: "25px" }}>
                        {questionVisibility[`${setIndex}-${questionIndex}`] ? (
                          <AiOutlineMinus />
                        ) : (
                          <AiOutlinePlus />
                        )}
                      </IconContext.Provider>
                    </span>
                  </h4>
                  {questionVisibility[`${setIndex}-${questionIndex}`] && (
                    <p data-testid="FAQanswers">{y.answers}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
