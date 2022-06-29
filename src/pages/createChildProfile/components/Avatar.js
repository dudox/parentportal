import React from "react";
import Images from "../../../assets/avatars/index";
import Popup from "./Modal";
import InputField from "./InputField";
const Avatars = () => {
  return (
    <>
      <div className="createChildPageContainer">
        <div className="childInfoArea">
          <h2>Create a profile for your child</h2>
          <h4>You can purchase a subscription for each child</h4>
          <h4 style={{ padding: "20px" }}>Your child's name:</h4>
          <InputField />
          <h4 style={{ padding: "20px" }}>Your child's phone number:</h4>
          <InputField />
        </div>
        <h3 style={{ padding: "20px", color: "#707070" }}>
          Pick an Avatar for your child
        </h3>
        <div className="avatarContainer">
          <img src={Images.boy1} alt="boy1" />
          <img src={Images.boy2} alt="boy2" />
          <img src={Images.boy3} alt="boy3" />
          <img src={Images.boy4} alt="boy4" />
          <img src={Images.boy5} alt="boy5" />
          <img src={Images.boy6} alt="boy6" />
          <img src={Images.boy7} alt="boy7" />
          <img src={Images.boy8} alt="boy8" />
          <img src={Images.boy9} alt="boy9" />
          <img src={Images.boy10} alt="boy10" />
          <img src={Images.boy11} alt="boy11" />
          <img src={Images.boy12} alt="boy12" />
          <img src={Images.girl2} alt="girl2" />
          <img src={Images.girl3} alt="girl3" />
          <img src={Images.girl4} alt="girl4" />
          <img src={Images.girl5} alt="girl5" />
          <img src={Images.girl6} alt="girl6" />
          <img src={Images.girl7} alt="girl7" />
          <img src={Images.girl8} alt="girl8" />
          <img src={Images.girl9} alt="girl9" />
          <img src={Images.girl10} alt="girl0" />
          <img src={Images.girl12} alt="gir12" />
          <img src={Images.girl13} alt="girl13" />
          <img src={Images.girl21} alt="girl21" />
        </div>
        <Popup>Continue</Popup>
      </div>
    </>
  );
};
export default Avatars;
