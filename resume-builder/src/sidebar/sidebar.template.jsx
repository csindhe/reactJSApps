import React from 'react';

export default function SideBarTemplate() {
    return (
        <div className="sidebar-Container">
            <div className="aboutme-container sidebar-section">
                <div className="section-title">About Me</div>
                <div className="section-content about-content">{ this.state.about }</div>
            </div>
            <div className="sidebar-section">
                <div className="section-title">Primary Skills</div>
                { this.generateSkillRating() }
            </div>
            <div className="sidebar-section">
                <div className="section-title">Secondary Skills</div>
                <div className="section-content">
                    {
                        this.state.secondarySkills.map((skill, index) => {
                            return (
                                <div className="skill-sec" key={index}>{skill}</div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="sidebar-section">
                <div className="section-title">Education</div>
                <div className="section-content">
                    {
                        this.state.education.map((edu, index) => {
                            return (
                                <div className="edu" key={index}>{ edu }</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}