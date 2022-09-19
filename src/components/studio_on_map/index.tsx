import React, { useEffect, useRef } from "react";
import { Button, Container, Input, Checkbox } from "@/components";
import { Footer } from "../footer";
import { StudioQuiz } from "../studio_quiz";

export const StudioOnMap: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
                <div className="flex items-center justify-start mb-[32px]">
                    <button className="mr-[16px] lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="hidden lg:block lg:flex-grow lg:text-[24px]">
                        1 шаг из 4
                    </span>
                    <button>
                        <img
                            className="hidden lg:block"
                            src="../../../images/modal/close_btn.svg"
                            alt=""
                        />
                    </button>
                    <h2
                        className={
                            "lg:hidden text-h2 uppercase font-familyBold font-bold text-[#292929]"
                        }
                    >
                        Выбери город
                    </h2>
                </div>
                <div className="hidden lg:block lg:mb-[64px]">
                    <h2
                        className={
                            "uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[16px]"
                        }
                    >
                        Выбери город
                    </h2>
                    <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                        Выбирай студию в своем городе
                    </span>
                </div>
                <div className="flex flex-col grow">
                    <button>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px]">
                            <img
                                className="mr-[16px] lg:mr-[32px] lg:h-[24px] lg:w-[24px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold">
                                Алматы
                            </h3>
                        </div>
                    </button>
                    <button>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px]">
                            <img
                                className="mr-[16px] lg:mr-[32px] lg:h-[24px] lg:w-[24px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold">
                                Нур-Султан
                            </h3>
                        </div>
                    </button>
                </div>
            </div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px] lg:relative">
                <div className="flex items-center justify-start mb-[32px]">
                    <button className="mr-[16px] lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="hidden lg:block lg:flex-grow lg:text-[24px]">
                        2 шаг из 4
                    </span>
                    <button>
                        <img
                            className="hidden lg:block"
                            src="../../../images/modal/close_btn.svg"
                            alt=""
                        />
                    </button>
                    <h2
                        className={
                            "lg:hidden text-h2 uppercase font-familyBold font-bold text-[#292929]"
                        }
                    >
                        Студии алматы
                    </h2>
                </div>
                <div className="hidden lg:block lg:mb-[64px]">
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
                <div className="lg:flex lg:justify-between lg:flex-wrap">
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
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
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
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
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
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
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
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
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
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
                    className={`w-[100%] mb-[16px] py-[10px] bg-transparent border-[1px] border-[#292929] text-[#292929] flex items-center justify-center lg:text-p4 lg:w-[350px] lg:absolute lg:right-[220px] lg:bottom-[165px]`}
                >
                    <img
                        className="mr-[16px]"
                        src="../../../images/studio/map_btn.svg"
                        alt=""
                    />
                    <span>Показать на карте</span>
                </Button>
                <Button
                    className={`lg:hidden w-[100%] bg-[#D08884] text-white`}
                >
                    Далее
                </Button>
            </div>
            <div className="hidden lg:block">
                <div className="hidden lg:block lg:px-[176px]">
                    <div
                        className={`flex items-center justify-between mb-[260px] lg:mb-[0px] lg:h-[130px]`}
                    >
                        <a href="#" className={`mx-auto lg:mx-0`}>
                            <img
                                className="w-[150px] h-[40px] lg:w-[195px] lg:h-[52px]"
                                src="/images/training/logo_black.svg"
                                alt=""
                            />
                        </a>
                        <ul className="hidden lg:flex text-black text-p4 uppercase font-familyBold">
                            <li className="mr-[40px]">
                                <a href="#">Направления</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Студии</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Тренеры</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Франшиза</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                        <Button
                            className={`hidden lg:block lg:w-[300px] lg:py-[20px] lg:px-[48px] text-black border-2 border-black px-[60px]`}
                        >
                            Присоединиться
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:block bg-[url('/images/studio/desktop_bg.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                <Container className="bg-gray hidden lg:block">
                    <div className="lg:flex lg:items-start lg:justify-between mb-[136px]">
                        <div className="flex items-center justify-start mb-[32px] w-[25%]">
                            <button className="mr-[16px]">
                                <img
                                    className="lg:h-[64px] lg:w-[64px]"
                                    src="/images/modal/arrow_left.svg"
                                    alt=""
                                />
                            </button>
                            <div>
                                <h2
                                    className={
                                        "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3"
                                    }
                                >
                                    Studio name
                                </h2>
                            </div>
                        </div>
                        <div className="lg:flex lg:justify-between font-['PT-Root-UI'] w-[40%] ">
                            <div className="">
                                <div className="flex items-center mb-[32px] lg:items-start">
                                    <img
                                        className="mr-[24px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_location_red.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[24px] lg:leading-[26px]">
                                        ЖК Эмират, ул. Жанайдара Жирентаева 10
                                    </span>
                                </div>
                                <div className="flex items-center mb-[32px]">
                                    <img
                                        className="mr-[24px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_phone_red.svg"
                                        alt=""
                                    />
                                    <a
                                        className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[24px] lg:leading-[26px]"
                                        href="tel:+ 77776543210"
                                    >
                                        + 7 (777) 654 32 10
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <img
                                        className="mr-[24px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_calendar_red.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[24px] lg:leading-[26px]">
                                        пн-вт: 8:00 - 23:00
                                        <br />
                                        сб-вс: 9:00 - 22:00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="block mr-[16px] lg:w-[24px] lg:h-[24px]"
                                src="../../../images/studio/studio_map_red.svg"
                                alt=""
                            />
                            <a
                                href="#"
                                className="block text-h5 text-left uppercase text-[#737373] font-bold"
                            >
                                На карте
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            className={`lg:w-[350px] py-[20px] mb-[24px] bg-[#D08884] text-white mr-[64px]`}
                        >
                            присоединиться
                        </Button>
                        <Button
                            className={`lg:w-[350px] py-[20px] mb-[24px] bg-transparent text-[#292929] border-[#292929] border-[2px]`}
                        >
                            написать whatsapp
                        </Button>
                    </div>
                </Container>
                <Container className="bg-gray-100 lg:h-[724px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3 mb-[80px]"
                        }
                    >
                        У нас есть всё для
                        <br />
                        эффективной тренировки
                    </h2>

                    <div className="flex justify-start lg:justify-between gap-x-[50px] font-familyBold">
                        <div
                            className="bg-white p-[16px] lg:p-[40px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[344px] lg:h-[244px]
"
                        >
                            <div className="">
                                <img
                                    className="w-[64px] h-[64px]"
                                    src="/images/studio/towel.svg"
                                    alt="features"
                                />
                                <span className="text-p2 uppercase block mt-[16px] lg:mt-[40px]">
                                    Полотенца
                                </span>
                            </div>
                        </div>
                        <div
                            className="bg-white p-[16px] lg:p-[40px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[344px] lg:h-[244px]
"
                        >
                            <div className="">
                                <img
                                    className="w-[64px] h-[64px]"
                                    src="/images/studio/wi-fi.svg"
                                    alt="features"
                                />
                                <span className="text-p2 uppercase block mt-[16px] lg:mt-[40px]">
                                    free wi-fi
                                </span>
                            </div>
                        </div>
                        <div
                            className="hidden lg:block bg-white p-[40px] rounded-[40px] w-[344px] h-[244px]
"
                        >
                            <div>
                                <img
                                    className="w-[64px] h-[64px]"
                                    src="/images/studio/towel.svg"
                                    alt="features"
                                />
                                <span className="text-p2 uppercase block mt-[40px]">
                                    Полотенца
                                </span>
                            </div>
                        </div>
                        <div
                            className="hidden lg:block bg-white p-[40px] rounded-[40px] w-[344px] h-[244px]
"
                        >
                            <div>
                                <img
                                    className="w-[64px] h-[64px]"
                                    src="/images/studio/wi-fi.svg"
                                    alt="features"
                                />
                                <span className="text-p2 uppercase block mt-[40px]">
                                    free wi-fi
                                </span>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="bg-white pb-[40px] lg:pb-[120px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3 mb-[64px]"
                        }
                    >
                        Направления В <br />
                        студии Studio name
                    </h2>
                    <div className="flex lg:gap-x-[50px] lg:mb-[48px]">
                        <div
                            className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/studio/training_1.jpg')] lg:w-[616px] lg:h-[480px] relative`}
                        >
                            <span
                                className={
                                    "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                                }
                            >
                                Stretching
                            </span>
                        </div>
                        <div
                            className={`hidden lg:block bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/studio/training_2.jpg')] lg:w-[616px] lg:h-[480px] relative`}
                        >
                            <span
                                className={
                                    "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                                }
                            >
                                Yoga
                            </span>
                        </div>
                    </div>
                </Container>
                <Footer />
                <StudioQuiz />
            </div>
            <div className="lg:hidden">
                <div className="bg-gray px-[16px] pt-[20px] flex flex-col">
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
                <div className="bg-gray px-[16px] pt-[24px] pb-[20px]">
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
