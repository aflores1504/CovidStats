import React, { Component } from 'react';

import Slider from './Slider';
import Sidebar from './SideBar';
import CountryStatistics from './CountryStatistics';

class Search extends Component {

    render() {
        let searched = (this.props.match.params.search).toUpperCase();

        return (
            <div id="blog">
                <Slider
                    title={'Impacto de la pandemia del COVID-19 en ' + searched}
                    size="slider-small"

                />
                <div className="center">
                    <div id="content">
                        <CountryStatistics search={searched} />
                    </div>

                    <Sidebar

                    />

                </div>

            </div>
        );
    }
}

export default Search;