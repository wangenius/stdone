import React from "react";
import {Once} from "./Once";
import clsx from "clsx";
import {graphql, Link, useStaticQuery} from "gatsby";

export const Layout = (props) => {
    const {children} = props;
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
                <Once>
                    {data.site.siteMetadata.title}
                </Once>
                <Exp/>
                <Link className={"Button"} to={`/`}>home</Link>
                <Link className={"Button"} to={`/files/`}>files</Link>

                <Link className={"Button"} to={`/404/`}>About</Link>

            </Once>
            <Once cs={"body"}>{children}</Once>
        </Once>
    );
}


/** @Description Expanse Component */
export const Exp = ({cs, ...other}) => (
    <Once cs={clsx("Hangover", cs)} {...other} />
)

