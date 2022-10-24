import React, { useEffect, useCallback } from "react";
import { Input, Checkbox, Button } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";

export function StudioPage_2({
    formData,
    setFormData,
    handleSubmit,
    goBack,
    setOpenModal,
}) {
    const router = useRouter();

    return (
        <div className="bg-gray px-[16px] pt-[20px] pb-[32px] flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
            <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                <button onClick={goBack} className="lg:mr-[128px]">
                    <img
                        className="lg:h-[40px] lg:w-[40px]"
                        src="../../../images/modal/arrow_left.svg"
                        alt=""
                    />
                </button>
                <span className="lg:block lg:flex-grow lg:text-[24px]">
                    2 шаг из 4
                </span>
                <button
                    onClick={() => {
                        setOpenModal(false);
                    }}
                >
                    <img src="../../../images/modal/close_btn.svg" alt="" />
                </button>
            </div>
            <div className="mb-[32px] lg:mb-[64px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[16px]"
                    }
                >
                    Выбери студию
                </h2>
                <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                    Выбирай студию в своем городе
                </span>
            </div>
            <div className="lg:flex lg:justify-start lg:flex-wrap">
                <button
                    onClick={() => {
                        handleSubmit();
                        setFormData({
                            ...formData,
                            studio: "Studio1",
                        });
                    }}
                    className="block mx-auto lg:mx-[0px] lg:w-[368px] lg:mr-[32px] lg:mb-[32px]"
                >
                    <div className="group w-[343px] lg:w-full bg-white rounded-[24px] border-[1px] border-[#525252] mb-[16px] hover:border-[#D08884] hover:border-[2px] hover:transition-all duration-500">
                        <img
                            className="w-[343px] lg:w-full"
                            src="../../../images/studio/studio_1.png"
                            alt=""
                        />
                        <div className="p-[16px] flex flex-col items-start">
                            <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5 group-hover:text-[#D08884]">
                                Studio name 1
                            </h3>
                            <div>
                                <div className="flex items-center mb-[8px] lg:items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_location.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        ЖК Эмират, ул. Жанайдара Жирентаева 10
                                    </span>
                                </div>
                                <div className="flex items-center mb-[8px]">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_phone.svg"
                                        alt=""
                                    />
                                    <a
                                        className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                        href="tel:+ 77776543210"
                                    >
                                        + 7 (777) 654 32 10
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_calendar.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        пн-вт: 8:00 - 23:00
                                        <br />
                                        сб-вс: 9:00 - 22:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                <button
                    onClick={() => {
                        handleSubmit();
                        setFormData({
                            ...formData,
                            studio: "Studio2",
                        });
                    }}
                    className="block mx-auto lg:mx-[0px] lg:w-[368px] lg:mr-[32px] lg:mb-[32px]"
                >
                    <div className="group w-[343px] lg:w-full bg-white rounded-[24px] border-[1px] border-[#525252] mb-[16px] hover:border-[#D08884] hover:border-[2px] hover:transition-all duration-500">
                        <img
                            className="w-[343px] lg:w-full"
                            src="../../../images/studio/studio_1.png"
                            alt=""
                        />
                        <div className="p-[16px] flex flex-col items-start">
                            <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5 group-hover:text-[#D08884]">
                                Studio name 2
                            </h3>
                            <div>
                                <div className="flex items-center mb-[8px] lg:items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_location.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        ЖК Эмират, ул. Жанайдара Жирентаева 10
                                    </span>
                                </div>
                                <div className="flex items-center mb-[8px]">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_phone.svg"
                                        alt=""
                                    />
                                    <a
                                        className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                        href="tel:+ 77776543210"
                                    >
                                        + 7 (777) 654 32 10
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_calendar.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        пн-вт: 8:00 - 23:00
                                        <br />
                                        сб-вс: 9:00 - 22:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                <button
                    onClick={() => {
                        handleSubmit();
                        setFormData({
                            ...formData,
                            studio: "Studio3",
                        });
                    }}
                    className="block mx-auto lg:mx-[0px] lg:w-[368px] lg:mr-[32px] lg:mb-[32px]"
                >
                    <div className="group w-[343px] lg:w-full bg-white rounded-[24px] border-[1px] border-[#525252] mb-[16px] hover:border-[#D08884] hover:border-[2px] hover:transition-all duration-500">
                        <img
                            className="w-[343px] lg:w-full"
                            src="../../../images/studio/studio_1.png"
                            alt=""
                        />
                        <div className="p-[16px] flex flex-col items-start">
                            <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5 group-hover:text-[#D08884]">
                                Studio name 3
                            </h3>
                            <div>
                                <div className="flex items-center mb-[8px] lg:items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_location.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        ЖК Эмират, ул. Жанайдара Жирентаева 10
                                    </span>
                                </div>
                                <div className="flex items-center mb-[8px]">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_phone.svg"
                                        alt=""
                                    />
                                    <a
                                        className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                        href="tel:+ 77776543210"
                                    >
                                        + 7 (777) 654 32 10
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_calendar.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        пн-вт: 8:00 - 23:00
                                        <br />
                                        сб-вс: 9:00 - 22:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                <button
                    onClick={() => {
                        handleSubmit();
                        setFormData({
                            ...formData,
                            studio: "Studio4",
                        });
                    }}
                    className="block mx-auto lg:mx-[0px] lg:w-[368px] lg:mr-[32px] lg:mb-[32px]"
                >
                    <div className="group w-[343px] lg:w-full bg-white rounded-[24px] border-[1px] border-[#525252] mb-[16px] hover:border-[#D08884] hover:border-[2px] hover:transition-all duration-500">
                        <img
                            className="w-[343px] lg:w-full"
                            src="../../../images/studio/studio_1.png"
                            alt=""
                        />
                        <div className="p-[16px] flex flex-col items-start">
                            <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5 group-hover:text-[#D08884]">
                                Studio name 4
                            </h3>
                            <div>
                                <div className="flex items-center mb-[8px] lg:items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_location.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        ЖК Эмират, ул. Жанайдара Жирентаева 10
                                    </span>
                                </div>
                                <div className="flex items-center mb-[8px]">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_phone.svg"
                                        alt=""
                                    />
                                    <a
                                        className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                        href="tel:+ 77776543210"
                                    >
                                        + 7 (777) 654 32 10
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_calendar.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        пн-вт: 8:00 - 23:00
                                        <br />
                                        сб-вс: 9:00 - 22:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
                <button
                    onClick={() => {
                        handleSubmit();
                        setFormData({
                            ...formData,
                            studio: "Studio5",
                        });
                    }}
                    className="block mx-auto lg:mx-[0px] lg:w-[368px] lg:mr-[32px] lg:mb-[32px]"
                >
                    <div className="group w-[343px] lg:w-full bg-white rounded-[24px] border-[1px] border-[#525252] mb-[16px] hover:border-[#D08884] hover:border-[2px] hover:transition-all duration-500">
                        <img
                            className="w-[343px] lg:w-full"
                            src="../../../images/studio/studio_1.png"
                            alt=""
                        />
                        <div className="p-[16px] flex flex-col items-start">
                            <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5 group-hover:text-[#D08884]">
                                Studio name 5
                            </h3>
                            <div>
                                <div className="flex items-center mb-[8px] lg:items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_location.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        ЖК Эмират, ул. Жанайдара Жирентаева 10
                                    </span>
                                </div>
                                <div className="flex items-center mb-[8px]">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_phone.svg"
                                        alt=""
                                    />
                                    <a
                                        className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                        href="tel:+ 77776543210"
                                    >
                                        + 7 (777) 654 32 10
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <img
                                        className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_calendar.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                        пн-вт: 8:00 - 23:00
                                        <br />
                                        сб-вс: 9:00 - 22:00
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </button>
            </div>
            <Button
                className={`w-[100%] mb-[16px] py-[10px] bg-transparent border-[1px] border-[#292929] text-[#292929] flex items-center justify-center lg:text-p4 lg:w-[350px] lg:block lg:ml-auto lg:flex lg:mr-[32px] hover:bg-white`}
            >
                <img
                    className="mr-[16px]"
                    src="../../../images/studio/map_btn.svg"
                    alt=""
                />
                <span>Показать на карте</span>
            </Button>
        </div>
    );
}
