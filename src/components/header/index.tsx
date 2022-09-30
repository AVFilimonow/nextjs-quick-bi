import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { TrialForm, Button } from "@/components";

export const Header = (props) => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            {openModal && <TrialForm setOpenModal={setOpenModal} />}
            {!openModal && (
                <div
                    className={`flex flex-wrap items-center justify-between mb-[260px] lg:mb-[0px] lg:h-full lg:pt-[32px]`}
                >
                    <div
                        className={
                            "min-w-[15%] lg:min-w-[15%] lg:h-[52px] lg:mb-[32px] lg:mr-[20px]"
                        }
                    >
                        <Link href="/">
                            <a className={`mx-auto lg:mx-0 lg:block`}>
                                <img
                                    className="w-[150px] h-[40px] lg:w-[195px] lg:h-[52px]"
                                    src={props.logo}
                                    alt=""
                                />
                            </a>
                        </Link>
                    </div>
                    <ul
                        className={`hidden lg:flex lg:mb-[32px] lg:justify-between text-${props.text} text-[20px] uppercase font-familyBold`}
                    >
                        <li className="lg:mr-[40px] hover:underline">
                            <Link href="/training_types">
                                <a>Направления</a>
                            </Link>
                        </li>
                        <li className="lg:mr-[40px] hover:underline">
                            <Link href="/studio_quiz_page1">
                                <a>Студии</a>
                            </Link>
                        </li>
                        <li className="lg:mr-[40px] hover:underline">
                            <Link href="/trainer_quiz_page1">
                                <a>Тренеры</a>
                            </Link>
                        </li>
                        <li className="hover:underline">
                            <Link href="/training_types">
                                <a>Контакты</a>
                            </Link>
                        </li>
                    </ul>
                    <Button
                        onClick={() => {
                            setOpenModal(true);
                        }}
                        className={`hidden lg:block lg:mb-[32px] text-${props.text} border-2 border-${props.border} px-[48px] py-[20px] lg:text-[20px] lg:leading-[22px] hover:bg-${props.bg_hover} hover:text-${props.text_hover} hover:border-${props.border_hover} hover:border-2`}
                    >
                        Присоединиться
                    </Button>
                </div>
            )}
        </div>
    );
};
