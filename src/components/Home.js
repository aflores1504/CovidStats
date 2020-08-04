import React, { Component } from 'react';
import Slider from './Slider';
import Sidebar from './SideBar';
import GlobalStatistics from './GlobalStatistics';

class Home extends Component {

    render() {
        return (
            <div id="home">
                <Slider
                    title="Impacto de la pandemia del COVID-19"                    
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        <GlobalStatistics />                        
                    </div>

                    <Sidebar />

                </div>
            </div>
        );
    }
}

export default Home;