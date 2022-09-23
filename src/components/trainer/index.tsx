import React, { useEffect, useRef } from "react";
import { Button, Container, Footer } from "@/components";

export const Trainer: React.FC<{ title?: string }> = () => {
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
            <div className="bg-gray px-[16px] pt-[16px] pb-[20px] flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
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
                        Выбери тренера
                    </h2>
                </div>
                <div className="hidden lg:block lg:mb-[64px]">
                    <h2
                        className={
                            "uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[0px]"
                        }
                    >
                        Выбери тренера
                    </h2>
                </div>
                <div
                    className="flex flex-col lg:flex-row lg:justify-start lg:gap-[18px] lg:flex-wrap items-center
                "
                >
                    <button className="lg:w-[368px] lg:block mb-[16px] relative">
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button className="lg:w-[368px] lg:block mb-[16px] relative">
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button className="lg:w-[368px] lg:block mb-[16px] relative">
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button className="lg:w-[368px] lg:block mb-[16px] relative">
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button className="hidden lg:w-[368px] lg:block mb-[16px] relative">
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button className="hidden lg:w-[368px] lg:block mb-[16px] relative">
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button className="hidden lg:w-[368px] lg:block mb-[16px] relative">
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button className="hidden lg:w-[368px] lg:block mb-[16px] relative">
                        <img
                            className="lg:w-full"
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 lg:text-h5 text-white uppercase"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                </div>
            </div>
            <div className="bg-gray lg:hidden px-[16px] pt-[16px] pb-[20px] flex flex-col">
                <div className="flex mb-[28px]">
                    <button className="mr-[16px]">
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
                    <div className="text-left text-p4 text-[#292929] font-['PT-Root-UI']">
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
                            <a href="#" className={`mx-auto lg:mx-0 lg:block`}>
                                <img
                                    className="w-[150px] h-[40px] lg:w-[195px] lg:h-[52px]"
                                    src="/images/training/logo_black.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <ul className="hidden lg:flex lg:mb-[32px] lg:justify-between text-black text-[20px] uppercase font-familyBold">
                            <li className="lg:mr-[40px] hover:underline">
                                <a href="#">Направления</a>
                            </li>
                            <li className="lg:mr-[40px] hover:underline">
                                <a href="#">Студии</a>
                            </li>
                            <li className="lg:mr-[40px] hover:underline">
                                <a href="#">Тренеры</a>
                            </li>
                            <li className="hover:underline">
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                        <Button
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
