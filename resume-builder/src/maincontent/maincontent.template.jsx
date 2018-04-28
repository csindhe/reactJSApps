import React from 'react';

export default function MainContentTemplate() {
    return (
        <div className="maincontent-Container">
            <div className="maincontent-title">
                <div className="exp_title">Work Experience</div>
                <div className="exp_years">10 Years 6 Months</div>
            </div>
            <div className="maincontent-title">
                <div className="exp_title">Relevant Experience</div>
                <div className="exp_years">5 Years</div>
            </div>
            {
                this.state.workExperience.map((experience, index) => {
                    return (
                    <div className="maincontent-section" key={index}>
                        <div className="experience-section">
                            <div className="experience-details">
                                <div className="exp_role">{experience.role}</div>
                                <div className="exp_company">{experience.company}</div>
                                <div className="exp_period">{experience.period}</div>
                            </div>
                            <div className="experience-image">
                                <img className={experience.company.replace(/\s/g,'').split('.').join("") + '_logo exp_img'} src={experience.logo} alt={experience.company + ' logo'}></img>
                            </div>
                        </div>
                        <div className="experience-synopsis">
                            { experience.synopsis }
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}