import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const Footer = (props) => {
    return (
        <footer>
            <div className="bg-black py-[60px] px-[16px] lg:py-[145px] lg:px-[173px]">
                <div
                    className={`flex flex-wrap items-start justify-between mb-[40px] lg:mb-[48px]`}
                >
                    <a
                        href="#"
                        className={`mr-auto lg:mx-0 lg:block lg:mb-[32px]`}
                    >
                        <img
                            className="w-[194px] h-[52px] lg:w-[195px] lg:h-[52px]"
                            src="/images/main/logo.svg"
                            alt=""
                        />
                    </a>
                    <ul className="hidden lg:flex lg:mb-[32px] lg:justify-between text-white text-p4 font-familyBold uppercase ">
                        <li className="mr-[40px] hover:underline">
                            <a href="#">Направления</a>
                        </li>
                        <li className="mr-[40px] hover:underline">
                            <a href="#">Студии</a>
                        </li>
                        <li className="mr-[40px] hover:underline">
                            <a href="#">Тренеры</a>
                        </li>
                        <li className="mr-[40px] hover:underline">
                            <a href="#">Франшиза</a>
                        </li>
                        <li className="mr-[40px] hover:underline">
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                    <Button
                        onClick={() => {
                            props.setOpenModal(true);
                        }}
                        className={`hidden lg:block lg:mb-[32px] text-white border-2 border-white px-[48px] lg:text-[20px] lg:leading-[22px] hover:bg-white hover:text-[#292929] hover:border-[#292929]`}
                    >
                        Присоединиться
                    </Button>
                    <u className="hidden lg:flex list-none">
                        <li className="mr-[14px]">
                            <a href="#">
                                <img src="/images/main/telegram.png" alt="" />
                            </a>
                        </li>
                        <li className="mr-[14px]">
                            <a href="#">
                                <img src="/images/main/instagram.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="/images/main/youtube.png" alt="" />
                            </a>
                        </li>
                    </u>
                </div>
                <span className="inline-block text-p4 lg:text-[18px] text-[#DADADA] font-['PT-Root-UI'] mb-[40px] lg:mb-[0px]">
                    © Academy 2022. Cеть фитнес-студий.
                </span>
                <h2
                    className={
                        "lg:hidden text-white text-h2 uppercase font-familyBold font-bold mb-[24px]"
                    }
                >
                    Контакты
                </h2>
                <a
                    href="tel:+77779876543"
                    className={
                        "lg:hidden block text-[#DADADA] text-p4 mb-[8px] font-['PT-Root-UI']"
                    }
                >
                    +7 (777) - 987 - 65 - 43
                </a>
                <a
                    href="mailto:name@academy.kz"
                    className={
                        "lg:hidden block text-[#DADADA] text-p4 mb-[40px] font-['PT-Root-UI']"
                    }
                >
                    name@academy.kz
                </a>
                <h2
                    className={
                        "lg:hidden text-white text-h2 uppercase font-familyBold font-bold mb-[24px]"
                    }
                >
                    Информация
                </h2>
                <ul>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-p4 mb-[8px] font-['PT-Root-UI']"
                            }
                        >
                            Реквизиты
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-p4 mb-[8px] font-['PT-Root-UI']"
                            }
                        >
                            Политика конфидициальности
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-p4 mb-[8px] font-['PT-Root-UI']"
                            }
                        >
                            Публичная оферта
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-p4 mb-[8px] font-['PT-Root-UI']"
                            }
                        >
                            Способы оплаты
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-p4 font-['PT-Root-UI']"
                            }
                        >
                            Вакансии
                        </a>
                    </li>
                </ul>
            </div>

            <div className="lg:hidden bg-white flex justify-between py-[24px] px-[16px]">
                <button
                    onClick={() => {
                        props.setOpenModal(true);
                    }}
                    className="ml-[12px] mr-[12px] text-[#292929] uppercase text-h4 underline"
                >
                    Присоединиться
                </button>
                <div className="flex w-[50%] justify-between border-l-[1px] border-l-[#292929] pl-[30px]">
                    <a href="#">
                        <img
                            src="../../../images/main/telegram_black.svg"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="../../../images/main/instagram_black.svg"
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            src="../../../images/main/youtube_black.svg"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};
