import React from "react";
import { Button } from "./Button";

function RadioCatalog(){
    const [data, setData] = React.useState(null);

    // NODE API function
    React.useEffect(() => {
        fetch("/sam")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);

    return(
        <div className = "Radio-Catalog">
            <div class="containter">
                <br />
                <h1 class="font-weight-light"> Radio Catalog </h1>
                <p>
                    This is a test for routing and the radio catalog page.
                </p>
                
                <div class="Button-Div">
                    <ul>
                        
                        <li></li>
                        <li><Button >AM Radio</Button></li>
                        <li></li>
                        <li><Button >FM Radio</Button></li>
                    </ul>
                </div>
                <p>{!data ? "Loading..." : data}</p>
            </div>
        </div>
    );
}

export default RadioCatalog;