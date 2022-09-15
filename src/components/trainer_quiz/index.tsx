import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Thankyou, Checkbox, Input } from "@/components";

export const TrainerQuiz: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="lg:hidden bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
                <div className="flex items-center justify-between mb-[32px]">
                    <button className="">
                        <img
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="">1 шаг из 4</span>
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] w-[60%]"
                        }
                    >
                        Оставьте свой номер телефона
                    </h2>
                </div>
                <div className="flex-grow">
                    <div className="flex flex-col mb-[16px]">
                        <Input
                            className="mb-[16px] w-[100%] lg:min-w-[430px]"
                            type="name"
                            placeholder="Имя"
                        />
                        <Input
                            className="mb-[16px] w-[100%] lg:min-w-[430px]"
                            type="phone"
                            placeholder="Телефон"
                        />
                    </div>
                    <div className="mb-[32px] flex items-start relative">
                        <Checkbox />
                        <span
                            className={
                                "text-p2 text-black font-['PT-Root-UI'] block ml-[36px]"
                            }
                        >
                            Нажимая кнопку “Отправить”, я даю свое согласие на
                            обработку моих персональных данных
                        </span>
                    </div>
                </div>
                <Button className={`w-[100%] bg-[#D08884] text-white`}>
                    Отправить
                </Button>
            </div>
            <div className="hidden bg-gray px-[16px] pt-[20px] pb-[32px] h-screen lg:flex flex-col lg:px-[176px] lg:pt-[40px]">
                <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                    <button className="lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="lg:block lg:flex-grow lg:text-[24px]">
                        3 шаг из 4
                    </span>
                    <button>
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
                    <button className="lg:w-[30%]">
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px]">
                                Пробное занятие
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px]">
                                Весь день в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4">
                                4 999 ₸
                            </h3>
                        </div>
                    </button>
                    <button className="lg:w-[30%]">
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px]">
                                Безлимит на месяц
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px]">
                                Весь месяц в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4">
                                24 999 ₸
                            </h3>
                        </div>
                    </button>
                    <button className="lg:w-[30%]">
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px]">
                                Безлимит на год
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px]">
                                Весь год в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4">
                                249 999 ₸
                            </h3>
                        </div>
                    </button>
                </div>
            </div>
            <div className="hidden bg-gray px-[16px] pt-[20px] pb-[32px] h-screen lg:flex flex-col lg:px-[176px] lg:pt-[40px]">
                <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                    <button className="lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="lg:block lg:flex-grow lg:text-[24px]">
                        4 шаг из 4
                    </span>
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px] lg:mb-[100px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] w-[60%] lg:text-h3"
                        }
                    >
                        Оставьте свой номер телефона
                    </h2>
                </div>
                <div className="flex flex-col mb-[16px]">
                    <Input
                        className="mb-[16px] w-[100%] lg:min-w-[430px] lg:w-[45%] lg:mb-[64px]"
                        type="name"
                        placeholder="Имя"
                    />
                    <Input
                        className="mb-[16px] w-[100%] lg:min-w-[430px] lg:w-[45%] lg:mb-[140px]"
                        type="phone"
                        placeholder="Телефон"
                    />
                </div>
                <div className="mb-[32px] flex items-start relative lg:mb-[64px]">
                    <Checkbox />
                    <span
                        className={
                            "text-p2 text-black font-['PT-Root-UI'] block ml-[36px] lg:text-[16px] lg:w-[25%] lg:leading-[21px]"
                        }
                    >
                        Нажимая кнопку “Отправить”, я даю свое согласие на
                        обработку моих персональных данных
                    </span>
                </div>
                <Button
                    className={`hidden lg:block lg:w-[300px] bg-[#D08884] text-white`}
                >
                    ДАЛЕЕ
                </Button>
            </div>
            <Thankyou />
        </div>
    );
};
