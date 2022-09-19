import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Input } from "@/components/input/index";
import { Thankyou } from "@/components";

export const TrainerQuiz: React.FC<{ title?: string }> = () => {
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
