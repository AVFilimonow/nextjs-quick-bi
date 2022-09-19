import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Input } from "@/components/input/index";
import { Select, Thankyou, Checkbox } from "@/components";

export const TrialForm: React.FC<{ title?: string }> = () => {
    return (
        <div className="lg:relative">
            <div className="hidden lg:block lg:bg-[#000000] lg:opacity-50 lg:h-screen lg:w-full lg:relative"></div>
            <div className="bg-gray px-[20px] h-screen flex flex-col justify-start lg:px-[171px] lg:py-[81px] lg:max-h-[800px] lg:w-[80%] lg:z-50 lg:top-[25%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:absolute lg:rounded-[20px]">
                <div className="hidden lg:flex items-start justify-between ">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-black mb-[32px]"
                        }
                    >
                        Форма записи <br /> на пробное занятие
                    </h2>
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="lg:hidden pt-[64px] px-[16px] ml-auto mb-[32px]">
                    <button className="w-[34px] h-[34px]">
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <h2
                    className={
                        "lg:hidden text-h2 uppercase font-familyBold font-bold text-black mb-[32px]"
                    }
                >
                    Форма записи <br /> на пробное занятие
                </h2>
                <div className="flex flex-col lg:flex lg:flex-row lg:justify-between lg:mb-[64px]">
                    <Select className="mb-[16px] lg:w-[45%]" name="city">
                        <option value="Almaty">Алматы</option>
                        <option value="Nur-Sultan">Нур-Султан</option>
                    </Select>
                    <Select className="mb-[16px] lg:w-[45%]" name="studio">
                        <option value="st_1">Студия 1</option>
                        <option value="st_2">Студия 2</option>
                        <option value="st_3">Студия 3</option>
                        <option value="st_4">Студия 4</option>
                    </Select>
                </div>

                <div className="flex flex-col lg:flex-row lg:justify-between lg:mb-[64px]">
                    <Input
                        className="mb-[16px] w-[100%] lg:w-[45%]"
                        type="name"
                        placeholder="Имя"
                    />
                    <Input
                        className="mb-[16px] w-[100%] lg:w-[45%]"
                        type="phone"
                        placeholder="Телефон"
                    />
                </div>
                <div className="mb-[32px] flex items-start relative lg:justify-start ">
                    <Checkbox />
                    <span
                        className={
                            "text-p2 text-black font-['PT-Root-UI'] block ml-[36px] lg:max-w-[38%] lg:text-p4"
                        }
                    >
                        Нажимая кнопку “Отправить”, я даю свое согласие на
                        обработку моих персональных данных
                    </span>
                </div>
                <Button
                    className={`w-[100%] bg-[#DADADA] text-p[#A3A3A3] lg:mx-auto`}
                >
                    Отправить
                </Button>
            </div>
            <Thankyou />
        </div>
    );
};
