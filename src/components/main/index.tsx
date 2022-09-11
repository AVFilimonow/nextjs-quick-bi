import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Container } from "../container";

export const Main: React.FC<{ title?: string }> = () => {
    const mainBlock = useRef(null);
    const radius = useRef(120);

    return (
        <main>
            <Container className="bg-gray-100 lg:h-[724px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold text-black mb-[16px] lg:mb-[64px]"
                    }
                >
                    У нас есть всё для
                    <br />
                    эффективной тренировки
                </h2>

                <div className="flex justify-start lg:justify-between gap-x-[50px] font-familyBold">
                    <div
                        className="bg-white p-[16px] lg:p-[40px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[344px] lg:h-[244px]
"
                    >
                        <div className="">
                            <img
                                className="w-[40px] h-[40px]"
                                src="../../../images/main/feat_1.svg"
                                alt="features"
                            />
                            <span className="text-p2 uppercase block mt-[16px] lg:mt-[40px]">
                                Полотенца
                            </span>
                        </div>
                    </div>
                    <div
                        className="bg-white p-[16px] lg:p-[40px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[344px] lg:h-[244px]
"
                    >
                        <div className="">
                            <img
                                className="w-[40px] h-[40px]"
                                src="../../../images/main/feat_2.svg"
                                alt="features"
                            />
                            <span className="text-p2 uppercase block mt-[16px] lg:mt-[40px]">
                                free wi-fi
                            </span>
                        </div>
                    </div>
                    <div
                        className="hidden lg:block bg-white p-[40px] rounded-[40px] w-[344px] h-[244px]
"
                    >
                        <div>
                            <img
                                src="../../../images/main/feat_1.svg"
                                alt="features"
                            />
                            <span className="text-p2 uppercase block mt-[40px]">
                                Полотенца
                            </span>
                        </div>
                    </div>
                    <div
                        className="hidden lg:block bg-white p-[40px] rounded-[40px] w-[344px] h-[244px]
"
                    >
                        <div>
                            <img
                                src="../../../images/main/feat_2.svg"
                                alt="features"
                            />
                            <span className="text-p2 uppercase block mt-[40px]">
                                free wi-fi
                            </span>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="bg-white pb-[40px] lg:pb-[120px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[6px] lg:mb-[64px]"
                    }
                >
                    Фитнес направления
                </h2>
                <h4
                    className={
                        "text-h4 text-black mb-[24px] lg:mb-[64px] font-['PT-Root-UI'] lg:font-['Arsenal']"
                    }
                >
                    Эфективные направления для твоих целей
                </h4>
                <div className="flex lg:gap-x-[50px] lg:mb-[48px]">
                    <div
                        style={{}}
                        className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/stretching.jpg')] lg:w-[616px] lg:h-[480px] relative`}
                    >
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                            }
                        >
                            Stretching
                        </span>
                    </div>
                    <div
                        style={{}}
                        className={`hidden lg:block bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/fitnes.jpg')] lg:w-[616px] lg:h-[480px] relative`}
                    >
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                            }
                        >
                            Stretching
                        </span>
                    </div>
                </div>
                <Button
                    className={`hidden lg:block mx-auto px-[150px] bg-transparent border-[#AC6A66] border-2 text-[#AC6A66]`}
                >
                    Все направления
                </Button>
            </Container>
            <Container className="bg-gray-100 lg:h-[593px] relative">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[6px] lg:mb-[64px]"
                    }
                >
                    Лучшее время,
                    <br />
                    чтобы начать - сейчас
                </h2>
                <h4
                    className={
                        "text-h4 text-black mb-[42px] lg:mb-[48px] font-['PT-Root-UI'] lg:font-['Arsenal']"
                    }
                >
                    Начни с первой тренировки
                </h4>
                <img
                    className="hidden lg:block lg:absolute right-[176px] top-[96px]"
                    src="../../../images/main/a-logo.png"
                    alt=""
                />
                <Button
                    className={`px-[0px] w-[100%] lg:w-[480px] bg-[#D08884] text-white`}
                >
                    Попробовать
                </Button>
            </Container>
            <Container className="bg-white pb-[40px] lg:pb-[120px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[6px] lg:mb-[64px]"
                    }
                >
                    Студии Academy
                </h2>
                <h4
                    className={
                        "text-h4 text-black mb-[24px] lg:mb-[64px] font-['PT-Root-UI'] lg:font-['Arsenal']"
                    }
                >
                    Выбери свой Academy
                </h4>
                <div className="flex lg:gap-x-[50px] lg:mb-[48px]">
                    <div
                        className={`bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/studio_1.jpg')] lg:w-[616px] lg:h-[480px] relative`}
                    >
                        <span
                            className={
                                "absolute left-[10px] bottom-[45px] text-p4 text-white font-['PT-Root-UI'] lg:hidden"
                            }
                        >
                            Нур-Султан
                        </span>
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                            }
                        >
                            Studio Name
                        </span>
                    </div>
                    <div
                        style={{}}
                        className={`hidden lg:block bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/studio_2.jpg')] lg:w-[616px] lg:h-[480px] relative`}
                    >
                        <span
                            className={
                                "absolute left-[10px] bottom-[45px] text-p4 text-white font-['PT-Root-UI'] lg:hidden"
                            }
                        >
                            Нур-Султан
                        </span>
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                            }
                        >
                            Studio Name
                        </span>
                    </div>
                </div>
                <Button
                    className={`hidden lg:block mx-auto px-[0px] w-[100%] lg:w-[480px] bg-transparent border-[#AC6A66] border-2 text-[#AC6A66]`}
                >
                    Все направления
                </Button>
            </Container>
            <section className="bg-gray-100 lg:h-[666px]">
                <div className="flex flex-col lg:flex-row">
                    <div>
                        <img src="../../../images/main/join.jpg" alt="" />
                    </div>
                    <div className="lg:ml-[64px] px-[16px] lg:px-[0px] pb-[40px] lg:pb-[0px]">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-black mb-[20px] lg:mb-[48px] mt-[24px] lg:mt-[102px] lg:max-w-[640px]"
                            }
                        >
                            Получи Эксклюзивные Условия На Абонемент
                        </h2>
                        <Button
                            className={`px-[0px] w-[100%] lg:w-[335px] lg:px-[80px] bg-[#D08884] text-white`}
                        >
                            Присоединиться
                        </Button>
                    </div>
                </div>
            </section>
            <Container className="bg-white pb-[40px] lg:pb-[120px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[24px] lg:mb-[64px]"
                    }
                >
                    Тренеры, Которые приведут тебя <br />к результату
                </h2>
                <div className="flex lg:gap-x-[50px] mb-[24px] lg:mb-[48px]">
                    <div
                        style={{}}
                        className={`bg-[url('/images/main/trener_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/trener_1.jpg')] lg:w-[616px] lg:h-[480px] relative`}
                    >
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                            }
                        >
                            Васильева Софья
                        </span>
                    </div>
                    <div
                        style={{}}
                        className={`hidden lg:block bg-[url('/images/main/trener_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/trener_2.jpg')] lg:w-[616px] lg:h-[480px] relative`}
                    >
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                            }
                        >
                            Васильева Софья
                        </span>
                    </div>
                </div>
                <Button
                    className={`hidden lg:block mx-auto px-[180px] bg-transparent border-[#AC6A66] border-2 text-[#AC6A66]`}
                >
                    Все тренеры
                </Button>
                <div className="flex lg:hidden">
                    <img
                        src="../../../images/main/all_treners_icon.svg"
                        alt=""
                    />
                    <a
                        className="ml-[12px] uppercase text-[#292929] text-h4 underline"
                        href="#"
                    >
                        Все тренеры
                    </a>
                </div>
            </Container>
            <section className="bg-[#292929] px-[20px] py-[60px] lg:px-[148px] lg:py-[160px]">
                <div className="lg:flex lg:justify-between">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-white mb-[8px] lg:mb-[0px]"
                        }
                    >
                        Узнавай первым
                    </h2>
                    <h4
                        className={
                            "lg:hidden text-h4 text-white mb-[24px] lg:mb-[64px] font-['PT-Root-UI'] lg:font-['Arsenal']"
                        }
                    >
                        Оставь номер телефона и ...
                    </h4>
                    <div className="mx-auto">
                        <input
                            type="phone"
                            placeholder="Телефон"
                            className="text-white text-p3 font-['PT-Root-UI'] outline-none pb-[8px] pt-[20px] w-[90%] lg:min-w-[430px] bg-transparent border-b-[1px] border-b-white"
                        />
                        <button
                            type="submit"
                            className="bg-transparent border-b-[1px] pt-[3px] pb-[15px] lg:pt-[3px] lg:pb-[18px] border-b-white"
                        >
                            <img
                                src="../../../images/main/arrow_right.svg"
                                alt=""
                            />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};
