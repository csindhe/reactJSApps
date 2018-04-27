import React from 'react';
import './topbar.css';
import TopBarTemplate from './topbar.template';
import { topbarDetails } from '../data/topbar_data';

export default class TopBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: topbarDetails.firstName,
            lastName: topbarDetails.lastName,
            title: topbarDetails.title,
            phone: topbarDetails.phone,
            email: topbarDetails.email,
            dob: topbarDetails.dob,
            place: topbarDetails.place,
            profilePath: topbarDetails.profileimagePath
        }
    }

    render() {
        return TopBarTemplate.call(this);
    }
}