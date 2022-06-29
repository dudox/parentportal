import React from 'react';
import {useHistory} from "react-router-dom";

function RouteChange () {
    const history=useHistory();
    const handleRoute =() =>{
        history.push('/myprofile');
    }
}

export default RouteChange;