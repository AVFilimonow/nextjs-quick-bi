import React, { useEffect } from "react";
import { Button } from "../button";
import { useRouter } from "next/router";
import Link from "next/link";

export const MobMenu = (props) => {
    // useEffect(() => {
    //     document.body.classList.toggle("overflow-hidden", props.openMenu);
    // }, [props.openMenu]);
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden");
    }, [props.openMenu]);
    return (
        <>
            <style>
                {`
                .topposition {
                    top: ${props.openMenu}px;
                }
                `}
            </style>
            <div
                id="mainDiv"
                className={`absolute topposition bg-white h-screen w-screen z-50 lg:hidden flex flex-col justify-between ease-in-out duration-500`}
            >
                <div className="pt-[16px] px-[16px] ml-auto">
                    <button
                        onClick={() => {
                            props.setOpenMenu(-5000);
                        }}
                    >
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="px-[32px] pb-[20px] mt-auto flex flex-col justify-between h-[80%]">
                    <ul className="flex flex-col text-black text-[24px] uppercase font-familyBold">
                        <li className="mb-[40px]">
                            <Link href={props.link1}>
                                <a
                                    onClick={() => {
                                        props.setOpenMenu(-5000);
                                    }}
                                >
                                    Направления
                                </a>
                            </Link>
                        </li>
                        <li className="mb-[40px]">
                            <Link href={props.link2}>
                                <a
                                    onClick={() => {
                                        props.setOpenMenu(-5000);
                                    }}
                                >
                                    Студии
                                </a>
                            </Link>
                        </li>
                        <li className="mb-[40px]">
                            <Link href={props.link3}>
                                <a
                                    onClick={() => {
                                        props.setOpenMenu(-5000);
                                    }}
                                >
                                    Тренеры
                                </a>
                            </Link>
                        </li>
                        <li className="/training_types">
                            <a href={props.link4}>Контакты</a>
                        </li>
                    </ul>
                    <Button
                        onClick={() => {
                            props.setOpenMenu(-5000);
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
        </>
    );
};
