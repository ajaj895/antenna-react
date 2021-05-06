import React from 'react';

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
                <h1 class="font-weight-light"> Home </h1>
                <p>
                    This is a test for routing and the home page.
                </p>
                <p>{!data ? "Loading..." : data}</p>

            </div>
        </div>
    );
}

export default Home;