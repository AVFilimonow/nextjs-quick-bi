import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const Thankyou: React.FC<{ title?: string }> = () => {
    return (
        <div className="bg-[#FAFAFA] px-[20px] h-screen lg:hidden flex flex-col justify-center items-center">
            <img
                className="block mx-auto mb-[64px] w-[240px]"
                src="../../../images/modal/thank_you.png"
                alt=""
            />
            <h2
                className={
                    "text-h2 uppercase font-familyBold font-bold text-[#292929] mb-[32px]"
                }
            >
                Спасибо!
            </h2>
            <span
                className={
                    "text-p4 text-center text-[#292929] mb-[64px] font-['PT-Root-UI'] w-[60%]"
                }
            >
                Ваши данные отправлены, мы перезвоним Вам
            </span>

            <Button className={`w-[100%] bg-[#D08884] text-white`}>Ок</Button>
        </div>
    );
};
