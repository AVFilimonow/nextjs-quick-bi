import React, { useEffect, useRef } from "react";
import { Input, Checkbox, Button } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";

const TrainingQuiz_1: React.FC<{ title?: string }> = () => {
    const router = useRouter();

    return (
        <div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
                <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                    <button
                        onClick={() => router.back()}
                        className="lg:mr-[128px]"
                    >
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="lg:block lg:flex-grow lg:text-[24px]">
                        1 шаг из 4
                    </span>
                    <button onClick={() => router.push("/")}>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px] lg:mb-[64px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[16px]"
                        }
                    >
                        Выбери город
                    </h2>
                    <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                        Выбирай студию в своем городе
                    </span>
                </div>
                <div className="flex flex-col grow">
                    <button onClick={() => router.push("/training_quiz_page2")}>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px] hover:border-[#D08884] hover:border-[3px]">
                            <img
                                className="mr-[16px] lg:mr-[32px] lg:h-[24px] lg:w-[24px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold">
                                Алматы
                            </h3>
                        </div>
                    </button>
                    <button onClick={() => router.push("/training_quiz_page2")}>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px] hover:border-[#D08884] hover:border-[3px]">
                            <img
                                className="mr-[16px] lg:mr-[32px] lg:h-[24px] lg:w-[24px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold">
                                Нур-Султан
                            </h3>
                        </div>
                    </button>
                </div>
                <Button
                    className={`lg:hidden w-[100%] bg-[#D08884] text-white mb-[16px]`}
                >
                    Далее
                </Button>
            </div>
        </div>
    );
};

export default TrainingQuiz_1;
