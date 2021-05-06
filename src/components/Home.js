import React from 'react';
import './Home.css'
import logo from '../images/AntLogo.png';
import rLogo from '../images/ReactLogo.png';
import mLogo from '../images/MariaLogo.png';
import nLogo from '../images/NodeLogo.png';

function Home() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/sqltest")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return(
        <div className = "Home">
            <div class="containter">
                <br/>
                <h1 class="font-weight-light"> Welcome to Antenna </h1>
                <p>{!data ? "Loading..." : data}</p>
                <p className="main-txt">
                    Antenna is a service to see the unseen. Ever been somewhere and wished that
                    you knew what radio stations were nearby? Antenna is the solution, with a 
                    database of every AM and FM radio stations in North America. This is the best
                    solution for people on the go!
                </p>
                
                <img className="big-logo" src={logo} alt='Antenna' title='Antenna' width='225px' height='225px'/>
                
                <h2> What is Antenna? </h2>
                <p className="par-2"> Antenna is a culmination of different skills that I (Evan Colwell) have 
                    learned over the semester and with the skills learned over the past 4 years here at WIU. 
                    Antenna contains 3 major components that make up the website.
                </p>

                <a href="https://nodejs.org/en/"><img className="big-Node-logo" src={nLogo} alt='Antenna' title='Antenna' width='190px' height='140px'/></a> 
                <a href="https://reactjs.org/"><img className="big-react-logo" src={rLogo} alt='Antenna' title='Antenna' width='225px' height='175px'/></a>
                <a href="https://mariadb.org/"><img className="big-Maria-logo" src={mLogo} alt='Antenna' title='Antenna' width='190px' height='140px'/></a>
                

            </div>
        </div>
    );
}

export default Home;