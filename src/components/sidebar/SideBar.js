import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { PAGES_URL } from "../../routers/Routes";
import "../../assets/app.scss";
import characterIcon from "../../assets/icons/girl-3.png";
import editButton from "../../assets/icons/icons8-pencil-96.png";

const SideBar = () => {
  let history = useHistory();
  const redirect = () => {
    history.push("/myprofile");
  };
  return (
    <>
      <nav id="sidebar">
        <div className="sidebar-header">
          <img
            style={{ float: "left" }}
            src={characterIcon}
            alt={"charactericon"}
          />
          <div
            onClick={() => {
              history.push("myprofile");
            }}
          >
            <h3>Kathi Snowy</h3>
            <div>
              Edit
              <img
                src={editButton}
                alt={"editButton"}
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>
        <ul className="listTop">
          <NavLink
            exact
            to={PAGES_URL.CHILDACCOUNT}
            className="icon sidebar-link"
            activeClassName="active-link"
          >
            Children
          </NavLink>

          <NavLink
            exact
            to={PAGES_URL.EMAILUPDATEHISTORY}
            className="sidebar-link"
            activeClassName="active-link"
          >
            Email Update History
          </NavLink>

          <NavLink
            exact
            to={PAGES_URL.PAYMENTS}
            className="sidebar-link"
            activeClassName="active-link"
          >
            Payments
          </NavLink>
        </ul>
        <ul className="listBottom">
          <NavLink
            exact
            to={PAGES_URL.PARENTTOOLS}
            className="sidebar-link"
            activeClassName="active-link"
          >
            Parent Tools
          </NavLink>
          <NavLink
            exact
            to={PAGES_URL.NEEDHELP}
            className="sidebar-link"
            activeClassName="active-link"
          >
            Need Help?
          </NavLink>
          {/* <NavLink exact to ={PAGES_URL.LOGIN} className="sidebar-link" activeClassName="active-link">
                        Log Out
                    </NavLink> */}
        </ul>
      </nav>
    </>
  );
};

export default SideBar;
