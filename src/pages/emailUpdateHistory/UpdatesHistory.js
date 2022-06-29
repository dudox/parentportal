import React from "react";
import AppLayout from "../../components/layouts/AppLayout";
import CardLayout from "../../components/layouts/CardLayout";
import FeatherIcon from 'feather-icons-react';

const UpdatesHistory = () => {
    const onHandleBack = () => window.history.back();
    return (
        <>
            <AppLayout>
                <CardLayout pageTitle="Reports">
                    <div id="updateCards" className="container">
                        <button onClick={onHandleBack} className="btn d-flex">
                            <FeatherIcon
                                icon={"chevron-left"}
                                size={40}
                                id="icon"
                            />
                        </button>
                        <h4>Pamela's weekly update from K'Bro</h4>
                        <h4>2/14/2020</h4>
                        <h6>
                            Hi Kathi,
                        </h6>
                        <h6>
                            We are delighted to tell you that Pamela has done a great job emotionally this week.
                            Pamela has shown consistent emotional stability and we wanted to let you know how proud we are of both of you!
                            Keep up the great work and we will talk to you again next week.
                        </h6>
                        <h6>
                            Sincerely,
                        </h6>
                        <h6>
                            K’Bro
                        </h6>
                    </div>
                </CardLayout>
            </AppLayout>
        </>
    );
};

export default UpdatesHistory;
