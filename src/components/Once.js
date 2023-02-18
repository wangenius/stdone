import React, {createRef, forwardRef, useImperativeHandle} from "react";

/** base memo component */
export const Once =
    forwardRef((props, ref) => {
        const {value, cs, open = true, ...rest} = props;
        const Ref = createRef();

        /** @Description 暴露组件 */
        useImperativeHandle(ref, () => Ref.current);
        /** @Description 关闭 */
        if (!open) return null;
        return (
            <div
                ref={Ref}
                className={cs}
                {...rest}
            />
        );
    })

