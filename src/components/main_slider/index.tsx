import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

const MainNextButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M52.6666 31.2682L12.6666 31.2682"
                        stroke="#737373"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M36.5338 15.2033L52.6671 31.2673L36.5338 47.334"
                        stroke="#737373"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        );
    },
);
export { MainNextButton };
