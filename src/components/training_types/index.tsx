import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const TrainingTypes: React.FC<{ title?: string }> = () => {
    return (
        <div className="bg-gray px-[16px] pt-[16px] pb-[32px] lg:px-[176px] lg:py-[128px] h-screen flex flex-col">
            <div className="flex mb-[32px] lg:mb-[64px]">
                <button className="mr-[16px] lg:mr-[120px]">
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
                <button className="w-full lg:w-[48%]">
                    <div className="flex items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px] lg:mr-[32px] hover:border-[#D08884] hover:border-[4px] hover:text-[#D08884]">
                        <img
                            className="mr-[20px]"
                            src="../../../images/training/training_1.png"
                            alt=""
                        />
                        <h4
                            className={
                                "text-h4 text-left text-[#292929] uppercase lg:text-h5"
                            }
                        >
                            Stretching Lite
                        </h4>
                    </div>
                </button>
                <button className="w-full lg:w-[48%]">
                    <div className="flex items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px] hover:border-[#D08884] hover:border-[4px] hover:text-[#D08884]">
                        <img
                            className="mr-[20px]"
                            src="../../../images/training/training_2.png"
                            alt=""
                        />
                        <h4
                            className={
                                "text-h4 text-left text-[#292929] uppercase lg:text-h5"
                            }
                        >
                            Hot Stretching
                        </h4>
                    </div>
                </button>
                <button className="w-full lg:w-[48%]">
                    <div className="flex items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px] lg:mr-[32px] hover:border-[#D08884] hover:border-[4px] hover:text-[#D08884]">
                        <img
                            className="mr-[20px]"
                            src="../../../images/training/training_3.png"
                            alt=""
                        />
                        <h4
                            className={
                                "text-h4 text-left text-[#292929] lg:text-h5"
                            }
                        >
                            AEROSTRETCHING <br />в гамаках
                        </h4>
                    </div>
                </button>
                <button className="w-full lg:w-[48%]">
                    <div className="flex items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px] hover:border-[#D08884] hover:border-[4px] hover:text-[#D08884]">
                        <img
                            className="mr-[20px]"
                            src="../../../images/training/training_4.png"
                            alt=""
                        />
                        <h4
                            className={
                                "text-h4 text-left text-[#292929] lg:text-h5"
                            }
                        >
                            AEROSTRETCHING
                            <br />
                            на полотнах
                        </h4>
                    </div>
                </button>
            </div>

            <Button className={`w-[100%] bg-[#D08884] text-white lg:hidden`}>
                ДАЛЕЕ
            </Button>
        </div>
    );
};
