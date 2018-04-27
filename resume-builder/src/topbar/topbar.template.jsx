import React from 'react';

export default function TopBarTemplate() {
    return (
        <div className="topbar-Container">
            <div className="name-section">
                <div className="firstName">{ this.state.firstName }</div>
                <div className="lastName">{ this.state.lastName }</div>
                <div className="title">{ this.state.title }</div>
            </div>
            <div className="profile-image-section">
                <img src={ this.state.profilePath } alt="My Pic" />
            </div>
            <div className="profile-details-section">
                <div className="phone">
                    <span className= "fa fa-mobile" ></span>
                    <span className="profile-data">{ this.state.phone }</span>
                </div>
                <div className="email">
                    <span className= "fa fa-envelope" > </span> 
                    <span className="profile-data">{ this.state.email }</span>
                </div>
                <div className="dob">
                    <span className= "fa fa-birthday-cake" > </span>
                    <span className="profile-data">{ this.state.dob }</span>
                </div>
                <div className="place"> 
                    <span className= "fa fa-map-marker" > </span>
                    <span className="profile-data">{ this.state.place }</span>
                </div>
            </div>
        </div>
    );
}