import React from "react";
import { Button } from "../button";
import { useRouter } from "next/router";
import Link from "next/link";

export const MobMenu = (props) => {
    return (
        <div className="bg-white h-screen lg:hidden flex flex-col justify-between">
            <div className="pt-[16px] px-[32px] ml-auto">
                <button
                    onClick={() => {
                        props.setOpenMenu(false);
                    }}
                >
                    <img src="../../../images/modal/close_btn.svg" alt="" />
                </button>
            </div>
            <div className="px-[32px] pb-[20px] mt-auto flex flex-col justify-between h-[80%]">
                <ul className="flex flex-col text-black text-[24px] uppercase font-familyBold">
                    <li className="mb-[40px]">
                        <Link href="/training_main">
                            <a>Направления</a>
                        </Link>
                    </li>
                    <li className="mb-[40px]">
                        <Link href="/studio_quiz_page1">
                            <a>Студии</a>
                        </Link>
                    </li>
                    <li className="mb-[40px]">
                        <Link href="/trainer_quiz_page1">
                            <a>Тренеры</a>
                        </Link>
                    </li>
                    <li className="/training_types">
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <Button
                    onClick={() => {
                        props.setOpenModal(true);
                    }}
                    className={`w-[100%] bg-primary text-white`}
                >
                    Присоединиться
                </Button>
                <div className="flex w-[50%] mx-auto justify-between">
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
        </div>
    );
};
