import React, {useState} from 'react';
import BgNails from "../BgNails/BgNails";
import Header from "../Header/Header";
// import TopTenButton from "../../TopTenButton/TopTenButton";
// import TopTenResults from "../TopTenResults/TopTenResults";
// import  from "../../TopTenButton/TopTenButton";


function Layout({ children }) {
    const [isTopTen, setIsTopTen] = useState(false);

    console.log('layout', isTopTen)

    return (
        <div>
            <BgNails />
            {/*<Header isTopTen={isTopTen} setIsTopTen={setIsTopTen}>*/}
            {/*    /!*<TopTenButton onClickTopTen={(value) => setIsTopTen(value)} />*!/*/}
            {/*</Header>*/}
            {/*<TopTenResults isTopTen={isTopTen} setIsTopTen={setIsTopTen}/>*/}
            {children}
        </div>
    );
}

export default Layout;

