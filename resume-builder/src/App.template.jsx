import React from 'react';
import TopBar from './topbar/topbar';
import SideBar from './sidebar/sidebar';
import MainContent from './maincontent/maincontent';

export default function AppTemplate () {
    return (
        <div className="app-Container">
            <TopBar />
            <SideBar />
            <MainContent />
        </div>
    );
}