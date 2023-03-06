import React from 'react';
import { Link } from "react-router-dom";
import SurveyList from './surveys/SurveyList';
import Sidebar from "./sidebar/Sidebar";

const Dashboard = () => {
    return (
        <div>
            <Sidebar />
            <SurveyList />
            <div>
            <Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light red right">
                <i className="material-icons">add</i>
            </Link>
        </div>
        </div>
    );
}

export default Dashboard;