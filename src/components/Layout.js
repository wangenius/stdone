import React from "react";
import {Footer} from "./Footer";
import {Header} from "./Header";

export const Layout = (props) => {
    const {children} = props

    return (
        <div className={"layout relative min-h-screen"}>
            <Header/>
            <div className={"pb-96 container mx-auto"}>{children}</div>
            <div className={"pb-96 lg:hidden"}/>
            <Footer/>
        </div>
    );
}

