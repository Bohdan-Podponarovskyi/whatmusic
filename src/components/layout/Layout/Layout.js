import React, {useState} from 'react';
import BgNails from "../BgNails/BgNails";
import Header from "../Header/Header";
import Menu from "../../Menu/Menu";
import TopTen from "../TopTen/TopTen";
// import  from "../../Menu/Menu";


function Layout({ children }) {
    const [isTopTen, setIsTopTen] = useState(false);

    console.log('layout', isTopTen)

    return (
        <div>
            <BgNails />
            <Header isTopTen={isTopTen} setIsTopTen={setIsTopTen}>
                <Menu onClickTopTen={(value) => setIsTopTen(value)} />
            </Header>
            <TopTen isTopTen={isTopTen} setIsTopTen={setIsTopTen}/>
            {children}
        </div>
    );
}

export default Layout;

