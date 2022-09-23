import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const Thankyou: React.FC<{ title?: string }> = () => {
    return (
        <div className="bg-[#FAFAFA] px-[20px] lg:px-[94px] h-screen lg:h-screen flex flex-col justify-center items-center">
            <button className="hidden ml-auto">
                <img src="../../../images/modal/close_btn.svg" alt="" />
            </button>
            <img
                className="block lg:hidden mx-auto mb-[64px] w-[240px]"
                src="../../../images/modal/thank_you.png"
                alt=""
            />
            <img
                className="hidden lg:block mx-auto mb-[55px] w-[635px]"
                src="../../../images/modal/thank_you_desktop.png"
                alt=""
            />
            <p
                className={
                    "text-h2 lg:text-h3 uppercase font-familyBold font-bold text-[#292929] mb-[32px] lg:mb-[48px]"
                }
            >
                Спасибо!
            </p>
            <span
                className={
                    "text-p4 text-center text-[#292929] mb-[64px] font-['PT-Root-UI'] w-[60%] lg:w-[25%] lg:text-p3"
                }
            >
                Ваши данные отправлены, мы перезвоним Вам
            </span>
            <Button className={`w-[100%] bg-[#D08884] text-white lg:w-[400px]`}>
                Ок
            </Button>
        </div>
    );
};
