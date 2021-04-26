import React from 'react';
import RadioMap from './RadioMap';

function LiveMap(){
    return (
        <div className = "Live-Map">
            <div class="containter">
                <br />
                <h1 class="font-weight-light"> Live Map </h1>
                <p>
                    Welcome to the livemap page! This page contains up to date radio stations and their locations.
                </p>

                <span> Jump to the live map! </span>
                <br />
                <a href="#radiomap">
                <i className = "fas fa-angle-down"/>
                </a>
            </div>
            <a id="radiomap">
                <RadioMap className='radiomap' />
            </a>
        </div>
    );
}

export default LiveMap;