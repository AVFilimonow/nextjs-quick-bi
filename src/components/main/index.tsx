import React, { useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/button/index";
import { Container } from "../container";
import { useWindowSize } from "../../utils/hooks";
import { calcClientSliderItemsCount } from "../../utils/helpers";

export const Main: React.FC<{ title?: string }> = () => {
    const mainBlock = useRef(null);
    const radius = useRef(120);

    const { width: windowWidth } = useWindowSize();
    const slidesCount = calcClientSliderItemsCount(windowWidth);

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
                        className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[20%] lg:h-[244px]
"
                    >
                        <div className="">
                            <img
                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                src="../../../images/main/feat_1.svg"
                                alt="features"
                            />
                            <span className="text-p2 uppercase block mt-[16px] lg:mt-[32px]">
                                Полотенца
                            </span>
                        </div>
                    </div>
                    <div
                        className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[20%] lg:h-[244px]
"
                    >
                        <div className="">
                            <img
                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                src="../../../images/main/feat_2.svg"
                                alt="features"
                            />
                            <span className="text-p2 uppercase block mt-[16px] lg:mt-[32px]">
                                free wi-fi
                            </span>
                        </div>
                    </div>
                    <div
                        className="hidden lg:block bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[20%] lg:h-[244px]
"
                    >
                        <div>
                            <img
                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                src="../../../images/main/feat_1.svg"
                                alt="features"
                            />
                            <span className="text-p2 uppercase block mt-[40px]">
                                Полотенца
                            </span>
                        </div>
                    </div>
                    <div
                        className="hidden lg:block bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[20%] lg:h-[244px]
"
                    >
                        <div>
                            <img
                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
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
            <Container className="bg-white pb-[0px] lg:pb-[0px] lg:relative lg:mb-[64px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[6px] lg:mb-[28px]"
                    }
                >
                    Фитнес направления
                </h2>
                <h4
                    className={
                        "text-[16px] lg:text-[32px] text-black mb-[24px] font-['PT-Root-UI']"
                    }
                >
                    Эффективные направления для твоих целей
                </h4>
                <div className="hidden lg:block absolute lg:top-[250px] lg:right-[176px]">
                    <div className="flex">
                        <button className="swiper-button-next bg-[url('/images/main/next_btn.svg')] bg-contain bg-no-repeat w-[60px] h-[60px] outline-none mr-[8px]"></button>
                        <button className="swiper-button-prev bg-[url('/images/main/prev_btn.svg')] w-[60px] h-[60px] outline-none"></button>
                    </div>
                </div>
            </Container>
            <div className="lg:mb-[140px] mb-[40px] pl-[16px] lg:pl-[176px]">
                <Swiper
                    slidesPerView={slidesCount}
                    spaceBetween={40}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img
                            className="w-[308px] h-[332px] lg:w-[616px] lg:h-[auto]"
                            src="../../../images/main/stretching.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../images/main/yoga.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../images/main/stretching.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../images/main/yoga.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../images/main/stretching.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="../../../images/main/yoga.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <Container className="bg-gray-100 lg:h-[593px] relative">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[6px] lg:mb-[28px]"
                    }
                >
                    Лучшее время,
                    <br />
                    чтобы начать - сейчас
                </h2>
                <h4
                    className={
                        "text-[16px] lg:text-[32px] text-black mb-[24px] lg:mb-[48px] font-['PT-Root-UI']"
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
            <Container className="bg-white pb-[0px] lg:pb-[0px] lg:relative lg:mb-[64px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[6px] lg:mb-[28px]"
                    }
                >
                    Студии Academy
                </h2>
                <h4
                    className={
                        "text-[16px] lg:text-[32px] text-black mb-[24px] font-['PT-Root-UI']"
                    }
                >
                    Выбери свой Academy
                </h4>
                <div className="hidden lg:block absolute lg:top-[250px] lg:right-[176px]">
                    <div className="flex">
                        <button className="swiper-button-next bg-[url('/images/main/next_btn.svg')] bg-contain bg-no-repeat w-[60px] h-[60px] outline-none mr-[8px]"></button>
                        <button className="swiper-button-prev bg-[url('/images/main/prev_btn.svg')] w-[60px] h-[60px] outline-none"></button>
                    </div>
                </div>
            </Container>
            <div className="lg:mb-[140px] mb-[40px] pl-[16px] lg:pl-[176px]">
                <Swiper
                    slidesPerView={slidesCount}
                    spaceBetween={200}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div
                            className={`bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/studio_1.jpg')] lg:w-[616px] lg:h-[480px] lg:mr-[30px] relative`}
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/studio_1.jpg')] lg:w-[616px] lg:h-[480px] lg:mr-[30px] relative`}
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/studio_1.jpg')] lg:w-[616px] lg:h-[480px] lg:mr-[30px] relative`}
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/studio_1.jpg')] lg:w-[616px] lg:h-[480px] lg:mr-[30px] relative`}
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl lg:bg-[url('/images/main/studio_1.jpg')] lg:w-[616px] lg:h-[480px] lg:mr-[30px] relative`}
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
                    </SwiperSlide>
                </Swiper>
            </div>
            <Button
                className={`hidden lg:block mx-auto px-[0px] w-[100%] lg:w-[480px] bg-transparent border-[#AC6A66] border-2 text-[#AC6A66]`}
            >
                Все направления
            </Button>

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
            <Container className="bg-white pb-[0px] lg:pb-[0px] lg:relative mb-[24px] lg:mb-[64px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold font-bold text-black mb-[6px] lg:mb-[28px]"
                    }
                >
                    Тренеры, Которые приведут тебя к результату
                </h2>
            </Container>
            <div className="lg:mb-[140px] mb-[40px] pl-[16px] lg:pl-[176px]">
                <Swiper
                    slidesPerView={slidesCount}
                    spaceBetween={200}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
            </div>
            <Button
                className={`hidden lg:block mx-auto px-[180px] lg:mb-[140px] bg-transparent border-[#AC6A66] border-2 text-[#AC6A66]`}
            >
                Все тренеры
            </Button>
            <div className="flex lg:hidden px-[16px] mb-[40px]">
                <img src="../../../images/main/all_treners_icon.svg" alt="" />
                <a
                    className="ml-[12px] uppercase text-[#292929] text-h4 underline"
                    href="#"
                >
                    Все тренеры
                </a>
            </div>

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
