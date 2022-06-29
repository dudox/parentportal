import React from "react";
import CardLayout from "../../../components/layouts/CardLayout";
import FeatherIcon from "feather-icons-react";

const ToolTip = () => {
  const goBack = () => window.history.back();
  return (
    <>
      <div className="toolTipContainer">
        <CardLayout>
          <div className="questions">
            <h3>Conversation Starter Tips</h3>
            <button
              onClick={goBack}
              style={{ border: "none", color: "none", float: "right" }}
            >
              <FeatherIcon
                icon={"chevron-up"}
                size={50}
                id="icon"
                style={{ color: "#E6984E" }}
              />
            </button>
          </div>
          <div className="questions">
            <h4>The Questions</h4>
            <h5>
              With slight wording modifications, these questions can work with
              children of all ages:
            </h5>
          </div>
          <ol>
            <li className="questionsLi">
              Tell me About a moment today when you felt excited about what you
              were learning.
            </li>
            <li className="questionsLi">
              Tell me about a moment in class when you felt confused.
            </li>
            <li className="questionsLi">
              Think about what you learned and did in school today. What's
              something you'd like to know more about? What's a question you
              have that came from your learning today?
            </li>
            <li className="questionsLi">
              Were there any moments today when you felt worried? When you felt
              scared?
            </li>
            <li className="questionsLi">
              Were there any times today when you felt disrespected by anyone?
              Tell me about those moments.
            </li>
            <li className="questionsLi">
              Were there times today when you felt that one of your classmates
              demonstrated care for you?
            </li>
          </ol>
        </CardLayout>
      </div>
    </>
  );
};

export default ToolTip;
