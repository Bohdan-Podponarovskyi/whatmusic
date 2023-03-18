import React from "react";

import './Home.scss';
// import Logo from "../../elements/Logo/Logo";
import SearchInput from "../../elements/SearchInput/SearchInput";
import { ContentWrapper } from "../../elements/ContentWrapper/ContentWrapper";


function Home() {

    return(
        <div className="home">
            <SearchInput></SearchInput>
        </div>
        // <ContentWrapper specialClass="home">
        //
        // </ContentWrapper>
    )
}

export default Home;