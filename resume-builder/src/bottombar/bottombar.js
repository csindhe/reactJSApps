import React, { Component } from 'react';
import './bottombar.css';
import BottomBarTemplate from './bottombar.template';

export default class BottomBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return BottomBarTemplate.call(this);
    }
}