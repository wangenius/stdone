import React from "react";
import {Once} from "./Once";
import clsx from "clsx";
import {graphql, navigate, useStaticQuery} from "gatsby";
import {Button} from "./Button";

export const Layout = (props) => {
    const {children, cs} = props;
    const data = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    )
    return (
        <Once cs={"layout"}>
            <Once cs={"header"}>
                <Once cs={"title"} onClick={() =>
                    navigate("/")
                }>
                    {data.site.siteMetadata.title}
                </Once>
                <Exp/>
                <Button className={"Button"} onClick={() => navigate('/post/')} label={"post"}/>
                <Button className={"Button"} onClick={() => navigate('/portfolio/')} label={"portfolio"}/>
                <Button className={"Button"} onClick={() => navigate(`/404/`)} label={'About'}/>
            </Once>
            <Once cs={clsx("body", cs)}>{children}</Once>
        </Once>
    );
}


/** @Description Expanse Component */
export const Exp = ({cs, ...other}) => (
    <Once cs={clsx("Hangover", cs)} {...other} />
)

