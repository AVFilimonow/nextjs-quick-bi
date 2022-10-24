import React, { useCallback, useEffect, useState } from "react";
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

    const cities = [
        { id: "1", name: "Алматы" },
        { id: "2", name: "Астана" },
    ];

    const studios = [
        { id: "1", cityId: "1", studioname: "AlmStudio1" },
        { id: "2", cityId: "1", studioname: "AlmStudio2" },
        { id: "3", cityId: "1", studioname: "AlmStudio3" },
        { id: "4", cityId: "1", studioname: "AlmStudio4" },
        { id: "5", cityId: "2", studioname: "AstStudio1" },
        { id: "6", cityId: "2", studioname: "AstStudio2" },
        { id: "7", cityId: "2", studioname: "AstStudio3" },
        { id: "8", cityId: "2", studioname: "AstStudio4" },
    ];

    const [city, setCity] = useState([]);
    const [studio, setStudio] = useState([]);

    useEffect(() => {
        setCity(cities);
    }, []);

    const handleStudio = (id) => {
        const data = studios.filter((x) => x.cityId === id);
        setStudio(data);
    };

    const [formData, setFormData] = useState({
        city: "",
        studio: "",
        name: "",
        phone: "",
    });

    return (
        <div className="block lg:py-[30px] lg:flex lg:items-center lg:justify-center lg:fixed lg:top-[0px] lg:left-[0px] w-full lg:min-h-screen h-screen z-50">
            <div className="lg:relative lg:overflow-auto z-50 bg-white lg:bg-gray lg:w-[80%] lg:rounded-[20px] px-[20px] lg:h-full h-[200px] flex flex-col justify-start lg:px-[171px] lg:py-[81px]">
                <div className="hidden lg:flex items-start justify-between">
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
                        <Select
                            id="City"
                            className="mb-[16px] w-[100%] lg:w-[45%]"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    city: e.target.value,
                                });
                                handleStudio(e.target.value);
                            }}
                        >
                            <option value="0">Выберите город</option>
                            {city && city !== undefined
                                ? city.map((ct, index) => {
                                      return (
                                          <option key={index} value={ct.id}>
                                              {ct.name}
                                          </option>
                                      );
                                  })
                                : "No city"}
                        </Select>
                        <Select
                            id="Studio"
                            className="mb-[16px] w-[100%] lg:w-[45%]"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    studio: e.target.value,
                                });
                            }}
                        >
                            <option value="0">Выберите студию</option>
                            {studio && studio !== undefined
                                ? studio.map((ct, index) => {
                                      return (
                                          <option key={index} value={ct.id}>
                                              {ct.studioname}
                                          </option>
                                      );
                                  })
                                : "No studio"}
                        </Select>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:mb-[32px]">
                        <Input
                            className="mb-[16px] w-[100%] lg:w-[45%]"
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
                            className="mb-[16px] w-[100%] lg:w-[45%]"
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
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(formData);
                        }}
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
