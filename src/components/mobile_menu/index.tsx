import React from "react";
import { Button } from "../button";

export const MobMenu = (props) => {
    return (
        <div className="bg-white h-screen lg:hidden flex flex-col justify-between">
            <div className="pt-[64px] px-[16px] ml-auto">
                <button
                    onClick={() => {
                        props.setOpenMenu(false);
                        console.log("mob menu");
                    }}
                >
                    <img src="../../../images/modal/close_btn.svg" alt="" />
                </button>
            </div>
            <div className="px-[32px] pb-[20px] mt-auto flex flex-col justify-between h-[80%]">
                <ul className="flex flex-col text-black text-[24px] uppercase font-familyBold">
                    <li className="mb-[40px]">
                        <a href="#">Направления</a>
                    </li>
                    <li className="mb-[40px]">
                        <a href="#">Студии</a>
                    </li>
                    <li className="mb-[40px]">
                        <a href="#">Тренеры</a>
                    </li>
                    <li className="">
                        <a href="#">Контакты</a>
                    </li>
                </ul>
                <Button className={`w-[100%] bg-primary text-white`}>
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
