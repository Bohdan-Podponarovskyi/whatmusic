import React from "react";

import './Home.scss';
import SearchInput from "../../elements/SearchInput/SearchInput";


function Home(props) {
    const { theme } = props;

    return(
        <div className="home">
            <SearchInput theme={theme}></SearchInput>
        </div>
    )
}

export default Home;