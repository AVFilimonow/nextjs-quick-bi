import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const Footer: React.FC<{ title?: string }> = () => {
    return (
        <footer className="bg-black py-[145px] px-[173px]">
            <div className={`flex items-center justify-between mb-[48px]`}>
                <a href="#">
                    <img src="/images/main/logo.svg" alt="" />
                </a>
                <ul className="text-white text-p4 font-familyBold uppercase flex">
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
                    className={`text-white border-2 border-white px-[48px]`}
                >
                    Присоединиться
                </Button>
                <u className="flex list-none">
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
            <span className="inline-block text-[18px] text-white font-['PT-Root-UI']">
                © Academy 2022. Cеть фитнес-студий.
            </span>
        </footer>
    );
};
