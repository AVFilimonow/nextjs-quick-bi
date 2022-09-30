import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Input } from "@/components/input/index";
import { Select, Checkbox } from "@/components";

export const TrialForm = (props) => {
    return (
        <div className="block lg:flex lg:items-center lg:justify-center lg:fixed lg:top-[0px] lg:left-[0px] w-full lg:h-full h-screen z-50">
            <div className="lg:relative z-50 bg-gray lg:w-[80%] lg:rounded-[20px] px-[20px] h-full lg:max-h-[80%] flex flex-col justify-start lg:px-[171px] lg:py-[81px]">
                <div className="hidden lg:flex items-start justify-between ">
                    <h2
                        className={
                            "text-h2 lg:text-[64px] lg:leading-[70px] uppercase font-familyBold font-bold text-black mb-[32px]"
                        }
                    >
                        Форма записи <br /> на пробное занятие
                    </h2>
                    <button
                        onClick={() => {
                            props.setOpenModal(false);
                        }}
                    >
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="lg:hidden pt-[64px] ml-auto mb-[32px]">
                    <button
                        onClick={() => {
                            props.setOpenModal(false);
                        }}
                        className="w-[34px] h-[34px]"
                    >
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
                <div className="lg:flex lg:flex-col lg:justify-between lg:h-full">
                    <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
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

                    <div className="flex flex-col lg:flex-row lg:justify-between lg:mb-[32px]">
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
                    <div className="mb-[32px] flex items-start relative lg:justify-start lg:flex-grow">
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
                        className={`w-[100%] lg:max-w-[480px] bg-[#DADADA] text-p[#A3A3A3] lg:mx-auto`}
                    >
                        Отправить
                    </Button>
                </div>
            </div>
            <div className="hidden lg:block lg:absolute lg:top-[0px] lg:left-[0px] lg:bg-[#000000] opacity-50 lg:w-full lg:h-full z-10"></div>
        </div>
    );
};
