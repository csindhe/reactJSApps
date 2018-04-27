import React from 'react';
import './maincontent.css';
import MainContentTemplate from './maincontent.template';

export default class MainContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return MainContentTemplate.call(this);
    }
}