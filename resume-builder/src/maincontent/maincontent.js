import React from 'react';
import './maincontent.css';
import MainContentTemplate from './maincontent.template';
import { maincontentDetails } from '../data/topbar_data';

export default class MainContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            workExperience: maincontentDetails.workExperience
        }
    }

    render() {
        return MainContentTemplate.call(this);
    }
}