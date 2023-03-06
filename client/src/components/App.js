import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import SurveyNew from "./surveys/SurveyNew";
import Header from "./header/Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import "./app.css";


class App extends Component {
    componentDidMount() {    //identifying if user did sign in
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App); //actions assigned to the app component as props