import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Chart from "../chart/Chart";
import "./dashboard.css";

import { BiAddToQueue } from "react-icons/bi";
import Featured from "../featured/Featured";

const Dashboard = () => {
    return (
        <div className="dashboard">
                <Sidebar />

                 <div className="rightBar">
                     <Featured />
                     <Chart />
                     <Link to="/surveys/new" className="linkBtn"><BiAddToQueue /></Link>

                 </div>
        </div>
    );
}

export default Dashboard;