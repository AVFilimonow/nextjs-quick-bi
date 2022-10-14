import React from "react";

export type ICheckbox = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>;

export const Checkbox: React.FC<ICheckbox> = ({
    className = "",
    children,
    ...rest
}) => {
    return (
        <>
            <input
                type="checkbox"
                id="A3-yes"
                name="A3-confirmation"
                value="yes"
                className="opacity-0 absolute h-[32px] w-[32px]"
            />
            <div className="bg-white border-2 rounded-md border-[#737373] lg:w-[32px] lg:h-[32px] w-[24px] h-[24px] flex flex-shrink-0 justify-center items-center">
                <svg
                    className="fill-current hidden w-3 h-3 text-blue-600 pointer-events-none"
                    version="1.1"
                    viewBox="0 0 17 12"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="none" fill-rule="evenodd">
                        <g
                            transform="translate(-9 -11)"
                            fill="#FFFFFF"
                            fill-rule="nonzero"
                        >
                            <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                    </g>
                </svg>
            </div>
            <style jsx>
                {`
                    input:checked + div {
                        background: #d08884;
                        border: 2px solid #d08884;
                    }
                    input:checked + div svg {
                        display: block;
                    }
                `}
            </style>
        </>
    );
};
