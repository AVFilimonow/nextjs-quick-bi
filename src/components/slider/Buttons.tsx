import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

const SlidePrevButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <img src="/images/main/prev_btn.svg" alt="" />
            </button>
        );
    },
);
const SlideNextButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <img src="/images/main/next_btn.svg" alt="" />
            </button>
        );
    },
);

const TrainerPrevButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <img src="/images/main/prev_btn.svg" alt="" />
            </button>
        );
    },
);
const TrainerNextButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <img src="/images/main/next_btn.svg" alt="" />
            </button>
        );
    },
);

const StudioPrevButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <img src="/images/main/prev_btn.svg" alt="" />
            </button>
        );
    },
);
const StudioNextButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <img src="/images/main/next_btn.svg" alt="" />
            </button>
        );
    },
);

const TrainingPrevButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <img src="/images/main/prev_btn.svg" alt="" />
            </button>
        );
    },
);
const TrainingNextButton = forwardRef(
    (
        props: HTMLAttributes<HTMLButtonElement>,
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <button {...props} ref={ref}>
                <img src="/images/main/next_btn.svg" alt="" />
            </button>
        );
    },
);

export {
    SlideNextButton,
    SlidePrevButton,
    StudioPrevButton,
    StudioNextButton,
    TrainingPrevButton,
    TrainingNextButton,
    TrainerPrevButton,
    TrainerNextButton,
};
