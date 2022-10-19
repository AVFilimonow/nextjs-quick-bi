import React, { useEffect, useCallback } from "react";
import { Input, Checkbox, Button } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";

export function StudioPage_4({
    formData,
    setFormData,
    handleSubmit,
    goBack,
    setOpenModal,
}) {
    const router = useRouter();
    const { city, studio, pack, name, phone } = formData;

    return (
        <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen lg:min-h-screen flex flex-col lg:px-[176px] lg:pt-[40px]">
            <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                <button onClick={goBack} className="lg:mr-[128px]">
                    <img
                        className="lg:h-[40px] lg:w-[40px]"
                        src="../../../images/modal/arrow_left.svg"
                        alt=""
                    />
                </button>
                <span className="lg:block lg:flex-grow lg:text-[24px]">
                    4 шаг из 4
                </span>
                <button
                    onClick={() => {
                        setOpenModal(false);
                    }}
                >
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
                    defaultValue={name}
                    type="name"
                    placeholder="Имя"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            name: e.target.value,
                        });
                    }}
                />
                <Input
                    className="mb-[16px] w-[100%] lg:min-w-[430px] lg:w-[45%] lg:mb-[140px]"
                    defaultValue={phone}
                    type="phone"
                    placeholder="Телефон"
                    onChange={(e) => {
                        setFormData({
                            ...formData,
                            phone: e.target.value,
                        });
                    }}
                />
            </div>
            <div className="mb-[32px] flex items-start relative lg:mb-[64px]">
                <Checkbox />
                <span
                    className={
                        "text-p2 text-black font-['PT-Root-UI'] block ml-[36px] lg:text-[16px] lg:w-[25%] lg:leading-[21px]"
                    }
                >
                    Нажимая кнопку “Отправить”, я даю свое согласие на обработку
                    моих персональных данных
                </span>
            </div>
            <Button
                onClick={() => {
                    handleSubmit();
                }}
                className={`lg:w-[300px] bg-[#D08884] text-white`}
            >
                ДАЛЕЕ
            </Button>
        </div>
    );
}
