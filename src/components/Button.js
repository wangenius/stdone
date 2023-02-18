import * as React from "react";
import {forwardRef} from "react";
import _ from "lodash";
import clsx from "clsx";
import {Once} from "./Once";
import {fn} from "../method/common";

/** @Description button
 *
 * default label "click";
 * default value undefined
 *
 * */
export const Button = forwardRef((props, ref) => {
    const {
        children,
        startIcon,
        endIcon,
        label = "click",
        cs,
        lc = fn,
        value,
        ...rest
    } = props;
    return (
        <Once ref={ref} cs={clsx("Button", cs)} lc={() => lc(value)} {...rest}>
            <Once cs={"text"} children={_.capitalize(label)}/>
        </Once>
    );
});