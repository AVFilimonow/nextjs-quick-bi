import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Thankyou } from "@/components";
import { Input } from "@/components";

export const StudioQuiz: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="bg-[#FAFAFA] px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
                <div className="flex items-center justify-between mb-[32px]">
                    <button className="">
                        <img
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="">1 шаг из 2</span>
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929]"
                        }
                    >
                        Выбери АБОНЕМЕНТ
                    </h2>
                    <span className="text-p4 text-[#A3A3A3] font-['PT-Root-UI']">
                        Выбери удобное для себя время занятий
                    </span>
                </div>
                <div className="flex flex-col">
                    <button>
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px]">
                                Пробное занятие
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px]">
                                Весь день в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929]">
                                4 999 ₸
                            </h3>
                        </div>
                    </button>
                    <button>
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px]">
                                Безлимит на месяц
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px]">
                                Весь месяц в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929]">
                                24 999 ₸
                            </h3>
                        </div>
                    </button>
                    <button>
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px]">
                                Безлимит на год
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px]">
                                Весь год в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929]">
                                249 999 ₸
                            </h3>
                        </div>
                    </button>
                </div>
            </div>
            <div className="bg-[#FAFAFA] px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
                <div className="flex items-center justify-between mb-[32px]">
                    <button className="">
                        <img
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="">2 шаг из 4</span>
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
                    <div className="flex flex-col">
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
                    <div className="mb-[32px]">
                        <option value=""></option>
                        <span
                            className={
                                "text-p2 text-[#292929] font-['PT-Root-UI']"
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
            <Thankyou />
        </div>
    );
};
