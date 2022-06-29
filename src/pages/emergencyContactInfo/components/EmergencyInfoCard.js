import React from "react";
import FeatherIcon from "feather-icons-react";
import ReactDOM from "react-dom";

const EmergencyInfoCard = () => {
  const goBack = () => window.history.back();

  const contactsUnitedStates = [
    "911",
    "http://www.crisischat.org",
    "1-800-996-6228",
    "1-888-843-4564",
    "1-888-221-7044",
    "http://suicideprevention.wikia.com",
    "1-800-273-TALK(8255)",
    "START",
    "741-741",
    "1-800-230-PLAN(7526)",
    "1-800-622-2255",
    "1-866-488-7386",
    "1-800-SUICIDE(800-784-2433)",
    "1-800-DONT CUT (1-800-366-8288)",
    "1-800-222-1222",
    "1-800-233-4357",
    "https://www.veteranscrisisline.net",
    "https://www.drugrehab.com/guides/suicide-risks/",
  ];
  const contactsAustralia = [
    "000",
    "https://www.lifeline.org.au/Get-Help/Online-Services/crisis-chat",
    "1-300-13-11-14",
    "http://www.yourlifecounts.org/need-help/crisis-lines",
  ];

  const contactsNewZealand = [
    "111",
    "0800 543 354",
    "0508 828 865 (0508 TAUTOKO)",
    "http://www.yourlifecounts.org/need-help/crisis-lines",
  ];

  const contactsUKIreland = [
    "122",
    "999",
    "+44 (0) 8457 90 90 90",
    "+44 (0) 8457 90 91 92",
    "1850 60 90 90",
    "1850 60 90 91",
    "http://www.yourlifecounts.org/need-help/crisis-lines",
  ];

  const contactsCanada = [
    "911",
    "1-888-353-2273",
    "http://www.yourlifecounts.org/need-help/crisis-lines",
  ];

  return (
    <>
      <div className="toolTipContainer">
        <div className="questions">
          <h3>Emergency Contact Information</h3>
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
          <h2>
            Caution: If you or someone you know is in danger of any kind please
            stop using this site and contact your local crisis or suicide line
            for professional help! You can use the resource list below to help
            you find which one best addresses your need for immediate help.
          </h2>
        </div>
        <div className="crisisBox">
          <h3>CRISIS RESOURCES BY COUNTRY</h3>
        </div>

        <div className="emergency">
          <h4>UNITED STATES</h4>
        </div>

        <ul>
          <li>
            Emergency:{" "}
            <span className="contactLi">{contactsUnitedStates[0]}</span>
          </li>
          <li>
            Lifeline Crisis Chat (Online live messaging):{" "}
            <span className="contactLi">{contactsUnitedStates[1]}</span>
          </li>
          <li>
            Family Violence Helpline:{" "}
            <span className="contactLi">{contactsUnitedStates[2]}</span>
          </li>
          <li>
            GLBT Hotline:{" "}
            <span className="contactLi">{contactsUnitedStates[3]}</span>
          </li>
          <li>
            AIDS Crisis Line:{" "}
            <span className="contactLi">{contactsUnitedStates[4]}</span>
          </li>
          <li>
            Suicide Prevention Wiki:{" "}
            <span className="contactLi">{contactsUnitedStates[5]}</span>
          </li>
          <li>
            National Suicide Prevention Lifeline:{" "}
            <span className="contactLi">{contactsUnitedStates[6]}</span>
          </li>
          <li>
            Crisis Text Line: Text "
            <span className="contactLi">{contactsUnitedStates[7]}</span>" to{" "}
            <span className="contactLi">{contactsUnitedStates[8]}</span>
          </li>
          <li>
            Planned Parenthood Hotline:{" "}
            <span className="contactLi">{contactsUnitedStates[9]}</span>
          </li>
          <li>
            National Council on Alcoholism & Drug Dependency Hope Line:{" "}
            <span className="contactLi">{contactsUnitedStates[10]}</span>
          </li>
          <li>
            TREVOR Crisis Hotline:{" "}
            <span className="contactLi">{contactsUnitedStates[11]}</span>
          </li>
          <li>
            National Hopeline Network:
            <span className="contactLi">{contactsUnitedStates[12]}</span>
          </li>
          <li>
            Self-Harm Hotline:{" "}
            <span className="contactLi">{contactsUnitedStates[13]}</span>
          </li>
          <li>
            American Association of Poison Control Centers:{" "}
            <span className="contactLi">{contactsUnitedStates[14]}</span>
          </li>
          <li>
            National Crisis Line - Anorexia and Bulimia:{" "}
            <span className="contactLi">{contactsUnitedStates[15]}</span>
          </li>
          <li>
            Veterans Crisis Line:{" "}
            <span className="contactLi">{contactsUnitedStates[16]}</span>
          </li>
          <li>
            Drug Rehab: Substance Abuse and Suicide Guide:{" "}
            <span className="contactLi">{contactsUnitedStates[17]}</span>
          </li>
        </ul>

        <div className="emergency">
          <h4>AUSTRALIA</h4>
        </div>
        <ul>
          <li>
            Emergency: <span className="contactLi">{contactsAustralia[0]}</span>
          </li>
          <li>
            Lifeline.org:{" "}
            <span className="contactLi">{contactsAustralia[1]}</span>
          </li>
          <li>
            LifeLine Australia:{" "}
            <span className="contactLi">{contactsAustralia[2]}</span>
          </li>
          <li>
            YourLifeCounts.org:{" "}
            <span className="contactLi">{contactsAustralia[3]}</span>
          </li>
        </ul>

        <div className="emergency">
          <h4>NEW ZEALAND</h4>
        </div>
        <ul>
          <li>
            Emergency:{" "}
            <span className="contactLi">{contactsNewZealand[0]}</span>
          </li>
          <li>Lifeline 24/7 Helpline: {contactsNewZealand[1]}</li>
          <li>
            Suicide Crisis Helpline:{" "}
            <span className="contactLi">{contactsNewZealand[2]}</span>
          </li>
          <li>
            YourLifeCounts.org:{" "}
            <span className="contactLi">{contactsNewZealand[3]}</span>
          </li>
        </ul>

        <div className="emergency">
          <h4>UK & REPUBLIC OF IRELAND</h4>
        </div>
        <ul>
          <li>
            Emergency: <span className="contactLi">{contactsUKIreland[0]}</span>{" "}
            or <span className="contactLi">{contactsUKIreland[1]}</span>
          </li>
          <li>
            Hotline: <span className="contactLi">{contactsUKIreland[2]}</span>{" "}
            (UK - localrate)
          </li>
          <li>
            Hotline: <span className="contactLi">{contactsUKIreland[3]}</span>{" "}
            (UK minicom)
          </li>
          <li>
            Hotline: <span className="contactLi">{contactsUKIreland[4]}</span>{" "}
            (ROI-local rate)
          </li>
          <li>
            Hotline: <span className="contactLi">{contactsUKIreland[5]}</span>{" "}
            (ROI minicom)
          </li>
          <li>
            YourLifeCounts:{" "}
            <span className="contactLi">{contactsUKIreland[6]}</span>
          </li>
        </ul>
        <div className="emergency">
          <h4>CANADA</h4>
        </div>
        <ul>
          <li>
            Emergency: <span className="contactLi">{contactsCanada[0]}</span>
          </li>
          <li>
            Hotline: <span className="contactLi">{contactsCanada[1]}</span>
          </li>
          <li>
            YourLifeCounts:{" "}
            <span className="contactLi">{contactsCanada[2]}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default EmergencyInfoCard;
