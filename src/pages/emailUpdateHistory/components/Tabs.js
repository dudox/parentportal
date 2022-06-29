import React from "react";
import {Accordion, Card, Button} from "react-bootstrap";;

const Tabs = () => {
    return (
        <>
            <h4 id="historyHeader">
                Recent
            </h4>
            <div style={{marginTop: '3vh', marginBottom: '1vh', marginLeft: '6vw'}}>
                <Card id="helpStyle">
                    <Button variant="primary" size="lg" id="historyTabs" onClick={() => {window.location.href = "/update"}}>
                        2/14/2020 - Weekly Update
                    </Button>
                </Card>
                <Card id="helpStyle">
                    <Button variant="primary" size="lg" id="historyTabs" onClick={() => {window.location.href = "/update"}}>
                        2/7/2020 - Pamela has been killing it!
                    </Button>
                </Card>
            </div>
            <h4 id="historyHeader">
                Last Month
            </h4>
            <div style={{marginTop: '3vh', marginBottom: '1vh', marginLeft: '6vw'}}>
                <Card id="helpStyle">
                    <Button variant="primary" size="lg" id="historyTabs" onClick={() => {window.location.href = "/update"}}>
                        1/31/2020 - Weekly Update
                    </Button>
                </Card>
                <Card id="helpStyle">
                    <Button variant="primary" size="lg" id="historyTabs" onClick={() => {window.location.href = "/update"}}>
                        1/24/2020 - Pamela's on fire    (not literally).
                    </Button>
                </Card>
            </div>
        </>
    );
};

export default Tabs;