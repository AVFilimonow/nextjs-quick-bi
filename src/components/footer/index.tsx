import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const Footer: React.FC<{ title?: string }> = () => {
    return (
        <footer>
            <div className="bg-black py-[60px] px-[16px] lg:py-[145px] lg:px-[173px]">
                <div
                    className={`flex items-center justify-between mb-[40px] lg:mb-[48px]`}
                >
                    <a href="#" className={`mr-auto lg:mr-0`}>
                        <img
                            className="w-[194px] h-[52px] lg:w-[195px] lg:h-[52px]"
                            src="/images/main/logo.svg"
                            alt=""
                        />
                    </a>
                    <ul className="hidden lg:block text-white text-p4 font-familyBold uppercase flex">
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
                        className={`hidden lg:block text-white border-2 border-white px-[48px]`}
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
                <span className="inline-block text-[16px] lg:text-[18px] text-[#DADADA] font-['PT-Root-UI'] mb-[40px] lg:mb-[0px]">
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
                        "lg:hidden block text-[#DADADA] text-[16px] mb-[8px] font-['PT-Root-UI']"
                    }
                >
                    +7 (777) - 987 - 65 - 43
                </a>
                <a
                    href="mailto:name@academy.kz"
                    className={
                        "lg:hidden block text-[#DADADA] text-[16px] mb-[40px] font-['PT-Root-UI']"
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
                                "lg:hidden block text-[#DADADA] text-[16px] mb-[8px] font-['PT-Root-UI']"
                            }
                        >
                            Реквизиты
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-[16px] mb-[8px] font-['PT-Root-UI']"
                            }
                        >
                            Политика конфидициальности
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-[16px] mb-[8px] font-['PT-Root-UI']"
                            }
                        >
                            Публичная оферта
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-[16px] mb-[8px] font-['PT-Root-UI']"
                            }
                        >
                            Способы оплаты
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={
                                "lg:hidden block text-[#DADADA] text-[16px] font-['PT-Root-UI']"
                            }
                        >
                            Вакансии
                        </a>
                    </li>
                </ul>
            </div>

            <div className="bg-white flex justify-between py-[24px] px-[16px]">
                <a
                    className="ml-[12px] text-[#292929] uppercase text-h4 underline"
                    href="#"
                >
                    Присоединиться
                </a>
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
