import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Footer } from "@/components/footer/index";

export const Main: React.FC<{ title?: string }> = () => {
    const mainBlock = useRef(null);
    const radius = useRef(120);

    return (
        <main>
            <section className="bg-gray-100 px-[176px] pt-[120px] h-[724px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold text-black mb-[64px]"
                    }
                >
                    У нас есть всё для
                    <br />
                    эффективной тренировки
                </h2>

                <div className="flex justify-between font-familyBold">
                    <div
                        className="bg-white p-[40px] rounded-[40px] w-[344px] h-[244px]
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
                        className="bg-white p-[40px] rounded-[40px] w-[344px] h-[244px]
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
                    <div
                        className="bg-white p-[40px] rounded-[40px] w-[344px] h-[244px]
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
                        className="bg-white p-[40px] rounded-[40px] w-[344px] h-[244px]
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
            </section>
            <section className="bg-white px-[176px] py-[120px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black w-3/5 mb-[28px]"
                    }
                >
                    Фитнес направления
                </h2>
                <h4 className={"text-h4 text-black w-3/5 mb-[64px]"}>
                    Эфективные направления для твоих целей
                </h4>
                <div className="flex gap-x-[50px] mb-[48px]">
                    <div
                        style={{
                            backgroundImage: `url("../../../images/main/stretching.jpg")`,
                            backgroundPosition: `cover`,
                        }}
                        className={`w-[616px] h-[480px]`}
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url("../../../images/main/fitnes.jpg")`,
                            backgroundPosition: `cover`,
                        }}
                        className={`w-[616px] h-[480px]`}
                    ></div>
                </div>
                <Button
                    className={`block mx-auto px-[150px] bg-transparent border-[#AC6A66] border-2 text-[#AC6A66]`}
                >
                    Все направления
                </Button>
            </section>
            <section className="bg-gray-100 px-[176px] pt-[120px] h-[593px] relative">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black w-3/5 mb-[28px]"
                    }
                >
                    Лучшее время,
                    <br />
                    чтобы начать - сейчас
                </h2>
                <h4 className={"text-h4 text-black mb-[48px]"}>
                    Начни с первой тренировки
                </h4>
                <img
                    className="absolute right-[176px] top-[96px]"
                    src="../../../images/main/a-logo.png"
                    alt=""
                />
                <Button className={`px-[180px] bg-[#D08884] text-white`}>
                    Попробовать
                </Button>
            </section>
            <section className="bg-white px-[176px] py-[120px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black w-3/5 mb-[28px]"
                    }
                >
                    Студии Academy
                </h2>
                <h4 className={"text-h4 text-black mb-[64px]"}>
                    Выбери свой Academy
                </h4>
                <div className="flex gap-x-[50px] mb-[48px]">
                    <div
                        style={{
                            backgroundImage: `url("../../../images/main/studio_1.jpg")`,
                            backgroundPosition: `cover`,
                        }}
                        className={`w-[616px] h-[480px]`}
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url("../../../images/main/studio_2.jpg")`,
                            backgroundPosition: `cover`,
                        }}
                        className={`w-[616px] h-[480px]`}
                    ></div>
                </div>
                <Button
                    className={`block mx-auto px-[150px] bg-transparent border-[#AC6A66] border-2 text-[#AC6A66]`}
                >
                    Все направления
                </Button>
            </section>
            <section className="bg-gray-100 h-[666px]">
                <div className="flex">
                    <div>
                        <img src="../../../images/main/join.jpg" alt="" />
                    </div>
                    <div className="ml-[64px]">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-black mb-[48px] mt-[102px] max-w-[640px]"
                            }
                        >
                            Получите Эксклюзивные Условия На Абонемент
                        </h2>
                        <Button className={`px-[80px] bg-[#D08884] text-white`}>
                            Присоединиться
                        </Button>
                    </div>
                </div>
            </section>
            <section className="bg-white px-[176px] py-[120px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[64px]"
                    }
                >
                    Тренеры, Которые приведут тебя <br />к результату
                </h2>
                <div className="flex gap-x-[50px] mb-[48px]">
                    <div
                        style={{
                            backgroundImage: `url("../../../images/main/trener_1.jpg")`,
                            backgroundPosition: `cover`,
                        }}
                        className={`w-[616px] h-[480px]`}
                    ></div>
                    <div
                        style={{
                            backgroundImage: `url("../../../images/main/trener_2.jpg")`,
                            backgroundPosition: `cover`,
                        }}
                        className={`w-[616px] h-[480px]`}
                    ></div>
                </div>
                <Button
                    className={`block mx-auto px-[180px] bg-transparent border-[#AC6A66] border-2 text-[#AC6A66]`}
                >
                    Все тренеры
                </Button>
            </section>
            <section className="bg-[#292929] px-[148px] py-[160px]">
                <div className="flex justify-between">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-white"
                        }
                    >
                        Узнавай первым
                    </h2>
                    <div>
                        <input
                            type="phone"
                            placeholder="Телефон"
                            className="text-white text-p3 font-['PT-Root-UI'] outline-none pb-[8px] pt-[20px] min-w-[430px] bg-transparent border-b-[1px] border-b-white"
                        />
                        <button
                            type="submit"
                            className="bg-transparent border-b-[1px] pt-[3px] pb-[18px] border-b-white"
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
