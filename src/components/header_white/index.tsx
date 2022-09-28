import React from "react";
import { Button } from "@/components/button/index";
import { useRouter } from "next/router";
import Link from "next/link";

export const HeaderWhite = (props) => {
    const router = useRouter();

    return (
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
                            src="/images/training/logo_black.svg"
                            alt=""
                        />
                    </a>
                </Link>
            </div>
            <ul className="hidden lg:flex lg:mb-[32px] lg:justify-between text-black text-[20px] uppercase font-familyBold">
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
                onClick={() => router.push("/trainer_quiz_page3")}
                className={`hidden lg:block lg:mb-[32px] text-black border-2 border-black px-[48px] py-[20px] lg:text-[20px] lg:leading-[22px] hover:bg-[#FCFCFC] hover:border-2 hover:border-[#E5E5E5]`}
            >
                Присоединиться
            </Button>
        </div>
    );
};
