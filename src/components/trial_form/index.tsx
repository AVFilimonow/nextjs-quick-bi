import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Input } from "@/components/input/index";
import { Select } from "@/components";

export const TrialForm: React.FC<{ title?: string }> = () => {
    return (
        <div className="bg-[#FAFAFA] px-[20px] mb-[30%] h-screen lg:hidden flex flex-col justify-start">
            <div className="pt-[64px] px-[16px] ml-auto">
                <button>
                    <img src="../../../images/modal/close_btn.svg" alt="" />
                </button>
            </div>
            <h2
                className={
                    "text-h2 uppercase font-familyBold font-bold text-black mb-[32px]"
                }
            >
                Форма записи на пробное занятие
            </h2>
            <Select className="mb-[16px]" name="city">
                <option value="Almaty">Алматы</option>
                <option value="Nur-Sultan">Нур-Султан</option>
            </Select>
            <Select className="mb-[16px]" name="studio">
                <option value="st_1">Студия 1</option>
                <option value="st_2">Студия 2</option>
                <option value="st_3">Студия 3</option>
                <option value="st_4">Студия 4</option>
            </Select>
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
            <div className="mb-[32px]">
                <option value=""></option>
                <span className={"text-p2 text-black font-['PT-Root-UI']"}>
                    Нажимая кнопку “Отправить”, я даю свое согласие на обработку
                    моих персональных данных
                </span>
            </div>
            <Button className={`w-[100%] bg-[#DADADA] text-p[#A3A3A3]`}>
                Отправить
            </Button>
        </div>
    );
};
