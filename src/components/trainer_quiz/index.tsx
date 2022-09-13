import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Thankyou, Checkbox, Input } from "@/components";

export const TrainerQuiz: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
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
            <Thankyou />
        </div>
    );
};
