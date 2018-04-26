import React from 'react';
import './sidebar.css';
import SideBarTemplate from './sidebar.template';

export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'ABC'
        }
    }

    render() {
        return SideBarTemplate.call(this);
    }
}