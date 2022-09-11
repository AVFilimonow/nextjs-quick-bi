import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const TrainingTypes: React.FC<{ title?: string }> = () => {
    return (
        <div className="bg-[#FAFAFA] px-[16px] pt-[16px] pb-[32px] h-screen lg:hidden flex flex-col">
            <div className="flex mb-[32px]">
                <button className="mr-[16px]">
                    <img src="../../../images/modal/arrow_left.svg" alt="" />
                </button>
                <div>
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929]"
                        }
                    >
                        Stretching
                    </h2>
                    <span
                        className={
                            "text-p4 text-left text-[#737373] font-['PT-Root-UI']"
                        }
                    >
                        Выбери свое направление
                    </span>
                </div>
            </div>
            <div className="grow">
                <button className="w-full">
                    <div className="flex items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px]">
                        <img
                            className="mr-[20px]"
                            src="../../../images/training/training_1.png"
                            alt=""
                        />
                        <h4
                            className={
                                "text-h4 text-left text-[#292929] uppercase"
                            }
                        >
                            Stretching Lite
                        </h4>
                    </div>
                </button>
                <button className="w-full">
                    <div className="flex items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px]">
                        <img
                            className="mr-[20px]"
                            src="../../../images/training/training_2.png"
                            alt=""
                        />
                        <h4
                            className={
                                "text-h4 text-left text-[#292929] uppercase"
                            }
                        >
                            Hot Stretching
                        </h4>
                    </div>
                </button>
                <button className="w-full">
                    <div className="flex items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px]">
                        <img
                            className="mr-[20px]"
                            src="../../../images/training/training_3.png"
                            alt=""
                        />
                        <h4 className={"text-h4 text-left text-[#292929]"}>
                            AEROSTRETCHING <br />в гамаках
                        </h4>
                    </div>
                </button>
                <button className="w-full">
                    <div className="flex items-center justify-start border-[1px] rounded-2xl border-[#737373] mb-[12px]">
                        <img
                            className="mr-[20px]"
                            src="../../../images/training/training_4.png"
                            alt=""
                        />
                        <h4 className={"text-h4 text-left text-[#292929]"}>
                            AEROSTRETCHING
                            <br />
                            на полотнах
                        </h4>
                    </div>
                </button>
            </div>

            <Button className={`w-[100%] bg-[#D08884] text-white`}>
                ДАЛЕЕ
            </Button>
        </div>
    );
};
