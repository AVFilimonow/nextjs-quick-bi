import React, { useEffect, useRef } from "react";
import { Button } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";

const TrainingTypes: React.FC<{ title?: string }> = () => {
    const router = useRouter();

    return (
        <div className="bg-gray px-[16px] pt-[16px] pb-[32px] lg:px-[176px] lg:py-[128px] h-screen flex flex-col">
            <div className="flex mb-[32px] lg:mb-[64px]">
                <button
                    onClick={() => router.back()}
                    className="mr-[16px] lg:mr-[120px]"
                >
                    <img
                        className="lg:h-[48px] lg:w-[48px]"
                        src="../../../images/modal/arrow_left.svg"
                        alt=""
                    />
                </button>
                <div>
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3"
                        }
                    >
                        Stretching
                    </h2>
                    <span
                        className={
                            "text-p4 text-left text-[#737373] font-['PT-Root-UI'] lg:text-p4"
                        }
                    >
                        Выбери свое направление
                    </span>
                </div>
            </div>
            <div className="grow">
                <div className="lg:flex lg:justify-between w-full ">
                    <Link href="/sub_training_main">
                        <a className="block lg:w-[48%] lg:h-[87px] lg:mb-[32px]">
                            <div className="group flex w-full items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px] lg:h-[86px] lg:mr-[32px] hover:shadow-[0_0_0_2px_rgba(208,136,132,1)] hover:border-[#D08884] hover:transition-all duration-500">
                                <img
                                    className="mr-[20px] group-hover:h-[99%]"
                                    src="../../../images/training/training_1.png"
                                    alt=""
                                />
                                <h4
                                    className={
                                        "text-h4 text-left text-[#292929] uppercase lg:text-h5 group-hover:text-[#D08884]"
                                    }
                                >
                                    Stretching Lite
                                </h4>
                            </div>
                        </a>
                    </Link>
                    <Link href="/sub_training_main">
                        <a className="block lg:w-[48%] lg:h-[87px] lg:mb-[32px]">
                            <div className="group flex w-full items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px] lg:h-[86px] lg:mr-[32px] hover:shadow-[0_0_0_2px_rgba(208,136,132,1)] hover:border-[#D08884] hover:transition-all duration-500">
                                <img
                                    className="mr-[20px] group-hover:h-[99%]"
                                    src="../../../images/training/training_2.png"
                                    alt=""
                                />
                                <h4
                                    className={
                                        "text-h4 text-left text-[#292929] uppercase lg:text-h5 group-hover:text-[#D08884]"
                                    }
                                >
                                    Hot Stretching
                                </h4>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="lg:flex lg:justify-between w-full">
                    <Link href="/sub_training_main">
                        <a className="block lg:w-[48%] lg:h-[87px] lg:mb-[32px]">
                            <div className="group flex w-full items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px] lg:h-[86px] lg:mr-[32px] hover:shadow-[0_0_0_2px_rgba(208,136,132,1)] hover:border-[#D08884] hover:transition-all duration-500">
                                <img
                                    className="mr-[20px] group-hover:h-[99%]"
                                    src="../../../images/training/training_3.png"
                                    alt=""
                                />
                                <h4
                                    className={
                                        "text-h4 text-left text-[#292929] uppercase lg:text-h5 group-hover:text-[#D08884]"
                                    }
                                >
                                    Aerostretching в гамаках
                                </h4>
                            </div>
                        </a>
                    </Link>
                    <Link href="/sub_training_main">
                        <a className="block lg:w-[48%] lg:h-[87px] lg:mb-[32px]">
                            <div className="group flex w-full items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px] lg:h-[86px] lg:mr-[32px] hover:shadow-[0_0_0_2px_rgba(208,136,132,1)] hover:border-[#D08884] hover:transition-all duration-500">
                                <img
                                    className="mr-[20px] group-hover:h-[99%]"
                                    src="../../../images/training/training_4.png"
                                    alt=""
                                />
                                <h4
                                    className={
                                        "text-h4 text-left text-[#292929] uppercase lg:text-h5 group-hover:text-[#D08884]"
                                    }
                                >
                                    Aerostretching на полотнах
                                </h4>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrainingTypes;
