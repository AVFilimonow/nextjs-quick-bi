import React, { useEffect, useRef } from "react";
import { Button, Container, Footer } from "@/components";
import { useRouter } from "next/router";

const TrainerQuiz_2: React.FC<{ title?: string }> = () => {
    const router = useRouter();

    return (
        <div>
            <div className="bg-gray px-[16px] pt-[16px] pb-[20px] flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
                <div className="flex items-center justify-start mb-[32px]">
                    <button
                        onClick={() => router.back()}
                        className="mr-[16px] lg:mr-[128px]"
                    >
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="hidden lg:block lg:flex-grow lg:text-[24px]">
                        2 шаг из 4
                    </span>
                    <button onClick={() => router.push("/")}>
                        <img
                            className="hidden lg:block"
                            src="../../../images/modal/close_btn.svg"
                            alt=""
                        />
                    </button>
                    <h2
                        className={
                            "lg:hidden text-h2 uppercase font-familyBold font-bold text-[#292929]"
                        }
                    >
                        Выбери тренера
                    </h2>
                </div>
                <div className="hidden lg:block lg:mb-[64px]">
                    <h2
                        className={
                            "uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[0px]"
                        }
                    >
                        Выбери тренера
                    </h2>
                </div>
                <div
                    className="flex flex-col lg:flex-row lg:justify-start lg:gap-[18px] lg:flex-wrap items-center
                "
                >
                    <button
                        onClick={() => router.push("/trainer_main")}
                        className="lg:w-[368px] lg:block mb-[16px] relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                    >
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button
                        onClick={() => router.push("/trainer_main")}
                        className="lg:w-[368px] lg:block mb-[16px] relative transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                    >
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button
                        onClick={() => router.push("/trainer_main")}
                        className="lg:w-[368px] lg:block mb-[16px] relative ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                    >
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button
                        onClick={() => router.push("/trainer_main")}
                        className="lg:w-[368px] lg:block mb-[16px] relative ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                    >
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button
                        onClick={() => router.push("/trainer_main")}
                        className="hidden lg:w-[368px] lg:block mb-[16px] relative ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                    >
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button
                        onClick={() => router.push("/trainer_main")}
                        className="hidden lg:w-[368px] lg:block mb-[16px] relative ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                    >
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button
                        onClick={() => router.push("/trainer_main")}
                        className="hidden lg:w-[368px] lg:block mb-[16px] relative ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                    >
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button
                        onClick={() => router.push("/trainer_main")}
                        className="hidden lg:w-[368px] lg:block mb-[16px] relative ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                    >
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrainerQuiz_2;
