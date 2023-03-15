import React, {useState} from "react";

const FloatLabel = ({children, label, value}) => {
    const [focus, setFocus] = useState(false);

    return (
        <div
            className="relative mb-[12px]"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            {children}
            <label
                className={focus || (value && value.length !== 0) ?
                    'absolute text-[10px] font-normal pointer-events-none right-[6px] top-[3px] transition-all' :
                    'absolute text-[12px] font-normal pointer-events-none right-[6px] top-[1px] transition-all'}>
                {label}
            </label>
        </div>
    );
};

export default FloatLabel;
