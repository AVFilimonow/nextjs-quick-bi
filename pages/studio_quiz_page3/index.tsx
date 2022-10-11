import React, { useEffect, useRef } from "react";
import { Input, Checkbox, Button } from "@/components";
import { useRouter } from "next/router";

const StudioQuiz_3: React.FC<{ title?: string }> = () => {
    const router = useRouter();

    return (
        <div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col lg:px-[176px] lg:pt-[40px]">
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
                        3 шаг из 4
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
                        Выбери Абонемент
                    </h2>
                    <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                        Выбери удобное для себя время занятий
                    </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <button
                        onClick={() => router.push("/studio_quiz_page4")}
                        className="lg:w-[30%]"
                    >
                        <div className="group w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px] hover:border-[#D08884] hover:border-[2px] hover:transition-all duration-500">
                            <p className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px] group-hover:text-[#D08884]">
                                Пробное занятие
                            </p>
                            <p className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px] group-hover:text-[#D08884]">
                                Весь день в студии
                            </p>
                            <p className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4 group-hover:text-[#D08884]">
                                4 999 ₸
                            </p>
                        </div>
                    </button>
                    <button
                        onClick={() => router.push("/studio_quiz_page4")}
                        className="lg:w-[30%]"
                    >
                        <div className="group w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px] hover:border-[#D08884] hover:border-[2px] hover:transition-all duration-500">
                            <p className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px] group-hover:text-[#D08884]">
                                Безлимит на месяц
                            </p>
                            <p className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px] group-hover:text-[#D08884]">
                                Весь месяц в студии
                            </p>
                            <p className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4 group-hover:text-[#D08884]">
                                24 999 ₸
                            </p>
                        </div>
                    </button>
                    <button
                        onClick={() => router.push("/studio_quiz_page4")}
                        className="lg:w-[30%]"
                    >
                        <div className="group w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px] hover:border-[#D08884] hover:border-[2px] hover:transition-all duration-500">
                            <p className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px] group-hover:text-[#D08884]">
                                Безлимит на год
                            </p>
                            <p className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px] group-hover:text-[#D08884]">
                                Весь год в студии
                            </p>
                            <p className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4 group-hover:text-[#D08884]">
                                249 999 ₸
                            </p>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudioQuiz_3;
