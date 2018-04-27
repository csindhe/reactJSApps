import React from 'react';
import './sidebar.css';
import SideBarTemplate from './sidebar.template';
import { sidebarDetails } from '../data/topbar_data';

export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            about: sidebarDetails.about,
            primarySkills: sidebarDetails.primarySkills,
            secondarySkills: sidebarDetails.secondarySkills,
            education: sidebarDetails.education
        }
    }

    generateSkillRating() {
        return this.state.primarySkills.map((skill, index) => {
                let skillRating = skill.rating;
                return (
                    <div className="skill" key={index}>
                        <div className="skill-title">
                            { skill.title }
                        </div>
                        <div className="skill-stars">
                            { this.generateStars(skill.rating) }
                        </div>
                    </div>
                );
            })
    }

    generateStars(rating) {
        var classValue = "fa skill-star ";
        var ratingspanArr = [];
        for(var i = 0; i < 5; i++){
            classValue += (rating > i) ? ((rating - i >= 1) ? "fa-star" : "fa-star-half-o" ) : "fa-star-o";
            ratingspanArr.push(
                <span className={ classValue } key={i}></span>
            )
            classValue = "fa skill-star ";
        }
        return ratingspanArr;
    }

    render() {
        return SideBarTemplate.call(this);
    }
}