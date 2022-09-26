import React, { useEffect, useRef } from "react";
import { Button, Container, Footer } from "@/components";
import { useRouter } from "next/router";
import Link from "next/link";

const Trainer: React.FC<{ title?: string }> = () => {
    const router = useRouter();

    return (
        <div>
            <div className="bg-gray h-screen lg:hidden px-[16px] pt-[16px] pb-[20px] flex flex-col">
                <div className="flex mb-[28px]">
                    <button onClick={() => router.back()} className="mr-[16px]">
                        <img
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <div>
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-[#292929]"
                            }
                        >
                            Васильева Софья
                        </h2>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center items-center
                "
                >
                    <img
                        className="mb-[24px]"
                        src="../../../images/trainer/trainer_1.jpg"
                        alt=""
                    />
                    <div className="text-left text-p4 text-[#292929] font-['PT-Root-UI'] flex-grow ">
                        <p className="mb-[4px]">
                            Сeртифицированный тренер групповых программ.
                        </p>
                        <p className="mb-[4px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fermentum amet, ipsum senectus felis.
                        </p>
                        <p className="mb-[4px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fermentum amet, ipsum senectus felis.
                        </p>
                        <p className="mb-[20px]">
                            Lorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>
                    <Button
                        onClick={() => router.push("/trainer_quiz_page3")}
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
            <div className="hidden lg:block">
                <div className="hidden lg:block lg:px-[176px]">
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
                                <Link href="/training_types">
                                    <a>Студии</a>
                                </Link>
                            </li>
                            <li className="lg:mr-[40px] hover:underline">
                                <Link href="/training_types">
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
                </div>
                <div className="hidden lg:block bg-[url('/images/trainer/trainer_bg.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                <Container className="bg-gray hidden lg:block">
                    <div className="lg:flex lg:items-start lg:justify-between mb-[184px] lg:flex-wrap">
                        <div className="flex items-center justify-start mb-[32px] lg:w-[500px] lg:mr-[32px]">
                            <button
                                onClick={() => router.back()}
                                className="mr-[16px]"
                            >
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
                                    Васильева Софья
                                </h2>
                            </div>
                        </div>
                        <div className="lg:flex lg:justify-between font-['PT-Root-UI'] w-[45%] text-[18px]">
                            <span>
                                Комплексная растяжка всего тела без интенсивной
                                аэробной нагрузки. Тренировка проходит в
                                спокойном темпе, с преобладающим количеством
                                статических упражнений.
                                <br />
                                <br />
                                Уровень LITE - был создан специально для
                                новичков и для тех, кто совсем без опыта, имел
                                большой перерыв между занятиями спортом или
                                просто любит спокойные, размеренные тренировки.
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            onClick={() => router.push("/trainer_quiz_page3")}
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
                <Footer />
            </div>
        </div>
    );
};

export default Trainer;
