import React from 'react';
import { Link } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            Dashboard
            <div style={{marginLeft: '57rem', marginTop: '30rem'}}>
            <Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light red">
                <i className="material-icons">add</i>
            </Link>
        </div>
        </div>
    );
}

export default Dashboard;