import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const StudioOnMap: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="bg-[#FAFAFA] px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
                <div className="flex items-center justify-start mb-[32px]">
                    <button className="mr-[16px]">
                        <img
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929]"
                        }
                    >
                        Выбери город
                    </h2>
                </div>
                <div className="flex flex-col grow">
                    <button>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center">
                            <img
                                className="mr-[16px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242]">
                                Алматы
                            </h3>
                        </div>
                    </button>
                    <button>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center">
                            <img
                                className="mr-[16px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242]">
                                Нур-Султан
                            </h3>
                        </div>
                    </button>
                </div>
            </div>
            <div className="bg-[#FAFAFA] px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
                <div className="flex items-center justify-start mb-[32px]">
                    <button className="mr-[16px]">
                        <img
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929]"
                        }
                    >
                        Студии алматы
                    </h2>
                </div>
                <div>
                    <button className="block mx-auto">
                        <div className="w-[343px] bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px]">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI']">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
                                        </span>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px]"
                                            src="../../../images/studio/studio_phone.svg"
                                            alt=""
                                        />
                                        <a
                                            className="text-p2 text-left text-[#525252] font-['PT-Root-UI']"
                                            href="tel:+ 77776543210"
                                        >
                                            + 7 (777) 654 32 10
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <img
                                            className="mr-[8px]"
                                            src="../../../images/studio/studio_calendar.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI']">
                                            пн-вт: 8:00 - 23:00
                                            <br />
                                            сб-вс: 9:00 - 22:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="block mx-auto">
                        <div className="w-[343px] bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                src="../../../images/studio/studio_2.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px]">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI']">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
                                        </span>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px]"
                                            src="../../../images/studio/studio_phone.svg"
                                            alt=""
                                        />
                                        <a
                                            className="text-p2 text-left text-[#525252] font-['PT-Root-UI']"
                                            href="tel:+ 77776543210"
                                        >
                                            + 7 (777) 654 32 10
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <img
                                            className="mr-[8px]"
                                            src="../../../images/studio/studio_calendar.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI']">
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
                    className={`w-[100%] mb-[16px] bg-transparent border-[1px] border-[#292929] text-[#292929] flex items-center justify-center`}
                >
                    <img
                        className="mr-[16px]"
                        src="../../../images/studio/map_btn.svg"
                        alt=""
                    />
                    <span>Показать на карте</span>
                </Button>
                <Button className={`w-[100%] bg-[#D08884] text-white`}>
                    Далее
                </Button>
            </div>
            <div>
                <div className="bg-[#FAFAFA] px-[16px] pt-[20px] flex flex-col">
                    <div className="flex items-center justify-start mb-[32px]">
                        <button className="mr-[16px]">
                            <img
                                src="../../../images/modal/arrow_left.svg"
                                alt=""
                            />
                        </button>
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-[#292929]"
                            }
                        >
                            Studio name
                        </h2>
                    </div>
                    <div>
                        <div
                            className={`bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl mb-[24px]`}
                        ></div>
                        <div className="mb-[16px]">
                            <div className="flex items-start mb-[8px]">
                                <img
                                    className="mr-[8px] w-[24px] h-[24px]"
                                    src="../../../images/studio/studio_location.svg"
                                    alt=""
                                />
                                <span className="text-p2 text-left text-[#292929] font-['PT-Root-UI']">
                                    Нур-Султан, ЖК Эмират, ул. Жанайдара
                                    Жирентаева 10
                                </span>
                            </div>
                            <div className="flex items-center mb-[8px]">
                                <img
                                    className="mr-[8px]"
                                    src="../../../images/studio/whatsapp.svg"
                                    alt=""
                                />
                                <a
                                    className="text-p2 text-left text-[#292929] font-['PT-Root-UI']"
                                    href="tel:+ 77776543210"
                                >
                                    + 7 (777) 654 32 10
                                </a>
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="mr-[8px] w-[24px] h-[24px]"
                                    src="../../../images/studio/studio_calendar.svg"
                                    alt=""
                                />
                                <span className="text-p2 text-left text-[#292929] font-['PT-Root-UI']">
                                    пн-вт: 8:00 - 23:00
                                    <br />
                                    сб-вс: 9:00 - 22:00
                                </span>
                            </div>
                        </div>
                    </div>
                    <Button
                        className={`w-[100%] mb-[24px] bg-[#D08884] text-white flex items-center justify-center`}
                    >
                        <img
                            className="mr-[16px]"
                            src="../../../images/studio/location_btn.svg"
                            alt=""
                        />
                        <span>Показать на карте</span>
                    </Button>
                </div>
                <div className="bg-[#F5F5F5] pt-[40px] pb-[50px] px-[16px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] mb-[40px]"
                        }
                    >
                        Удобства
                    </h2>
                    <div className="flex">
                        <div className="bg-white p-[16px] rounded-[16px] w-[47%] mr-[16px]">
                            <img
                                className="mb-[16px]"
                                src="../../../images/studio/comfort_1.svg"
                                alt=""
                            />
                            <span className="text-[#292929] uppercase font-bold">
                                полотенца
                            </span>
                        </div>
                        <div className="bg-white p-[16px] rounded-[16px] w-[47%] mr-[16px]">
                            <img
                                className="mb-[16px]"
                                src="../../../images/studio/comfort_2.svg"
                                alt=""
                            />
                            <span className="text-[#292929] uppercase font-bold">
                                free wi-fi
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#FAFAFA] px-[16px] pt-[24px] pb-[20px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] mb-[8px]"
                        }
                    >
                        Фитнес направления
                    </h2>
                    <span className="text-p4 text-[#292929] font-['PT-Root-UI']">
                        Выбирай студию в своем городе
                    </span>
                    <div
                        className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl relative mb-[38px] mt-[32px]`}
                    >
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase"
                            }
                        >
                            Stretching
                        </span>
                    </div>
                    <Button
                        className={`w-[100%] bg-[#D08884] text-white mb-[16px]`}
                    >
                        Присоединиться
                    </Button>
                    <Button
                        className={`w-[100%] bg-transparent border-[1px] border-[#292929] text-[#292929]`}
                    >
                        Написать whatsapp
                    </Button>
                </div>
            </div>
        </div>
    );
};
