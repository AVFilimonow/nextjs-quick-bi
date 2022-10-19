import React, { useCallback, useEffect } from "react";
import { Button } from "@/components/button/index";
import { Input } from "@/components/input/index";
import { Select, Checkbox } from "@/components";

export const TrialForm = (props) => {
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            props.setOpenModal(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    // let cities = [
    //     {
    //         id: 1,
    //         name: 'Алматы',
    //         value: 'Almaty'
    //     },
    //     {
    //         id: 2,
    //         name: 'Астана',
    //         value: 'Astana'
    //     }
    // ]

    // let cityList = cities.map((city) =>
    //     <option key={city.id} value={city.value}>{city.name}</option>
    // )

    const cities = {
        Astana: "Астана",
        Almaty: "Алматы",
    };

    return (
        <div className="block lg:py-[30px] lg:flex lg:items-center lg:justify-center lg:fixed lg:top-[0px] lg:left-[0px] w-full lg:min-h-screen h-screen z-50">
            <div className="lg:relative lg:overflow-auto z-50 bg-gray lg:w-[80%] lg:rounded-[20px] px-[20px] h-full flex flex-col justify-start lg:px-[171px] lg:py-[81px]">
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

                {/* Мобильная версия заголовка*/}

                <div className="lg:hidden pt-[24px] ml-auto mb-[32px]">
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

                {/* Форма с полями*/}

                <form className="lg:flex lg:flex-col lg:justify-between lg:h-full mb-[32px] lg:mb-[0px]">
                    <div className="flex flex-col lg:flex lg:flex-row lg:justify-between">
                        <Select className="mb-[16px] lg:w-[45%]" name="city">
                            <option value={cities.Almaty}>
                                {cities.Almaty}
                            </option>
                            <option value={cities.Astana}>
                                {cities.Astana}
                            </option>
                        </Select>
                        <Select
                            className="mb-[16px] lg:w-[45%]"
                            name="studio"
                        ></Select>
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
                    <label className="mb-[32px] flex items-start relative lg:ml-auto lg:flex-grow lg:max-w-[45%]">
                        <div className="lg:mr-[32px] mr-[12px]">
                            <Checkbox className="w-full" />
                        </div>
                        <div>
                            <span
                                className={
                                    "text-p2 text-black font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                }
                            >
                                Нажимая кнопку “Отправить”, я даю свое согласие
                                на обработку моих персональных данных
                            </span>
                        </div>
                    </label>
                    <Button
                        className={`w-[100%] lg:max-w-[480px] bg-[#DADADA] text-p[#A3A3A3] lg:mx-auto`}
                    >
                        Отправить
                    </Button>
                </form>
            </div>
            <div
                onClick={() => {
                    props.setOpenModal(false);
                }}
                className="hidden lg:block lg:absolute lg:top-[0px] lg:left-[0px] lg:bg-[#000000] opacity-50 lg:w-full lg:h-full z-10"
            ></div>
        </div>
    );
};
