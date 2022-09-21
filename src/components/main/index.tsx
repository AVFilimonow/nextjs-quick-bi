import React, { useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/button/index";
import { Container } from "../container";
import { useWindowSize } from "../../utils/hooks";
import { calcClientSliderItemsCount } from "../../utils/helpers";

export const Main = (props) => {
    const { width: windowWidth } = useWindowSize();
    const slidesCount = calcClientSliderItemsCount(windowWidth);

    return (
        <main>
            <Container className="bg-gray-100 lg:pb-[80px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold text-black mb-[16px] lg:mb-[0px]"
                    }
                >
                    У нас есть всё для
                    <br />
                    эффективной тренировки
                </h2>
            </Container>
            <div className="bg-gray-100 pb-[40px] lg:pb-[120px] pl-[16px] lg:pl-[176px]">
                <Swiper
                    slidesPerView={slidesCount}
                    spaceBetween={20}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div
                            className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-[344px] h-[103px] lg:h-[195px] lg:mb-[32px]
"
                        >
                            <div className="flex flex-col items-start justify-between h-full">
                                <img
                                    className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                    src="../../../images/main/feat_1.svg"
                                    alt="features"
                                />
                                <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                    Полотенца
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-[344px] h-[103px] lg:h-[195px] lg:mb-[32px]
"
                        >
                            <div className="flex flex-col items-start justify-between h-full">
                                <img
                                    className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                    src="../../../images/main/feat_2.svg"
                                    alt="features"
                                />
                                <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                    Free wi-fi
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-[344px] h-[103px] lg:h-[195px] lg:mb-[32px]
"
                        >
                            <div className="flex flex-col items-start justify-between h-full">
                                <img
                                    className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                    src="../../../images/main/feat_1.svg"
                                    alt="features"
                                />
                                <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                    Полотенца
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-[344px] h-[103px] lg:h-[195px] lg:mb-[32px]
"
                        >
                            <div className="flex flex-col items-start justify-between h-full">
                                <img
                                    className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                    src="../../../images/main/feat_2.svg"
                                    alt="features"
                                />
                                <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                    Free wi-fi
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-[344px] h-[103px] lg:h-[195px] lg:mb-[32px]
"
                        >
                            <div className="flex flex-col items-start justify-between h-full">
                                <img
                                    className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                    src="../../../images/main/feat_1.svg"
                                    alt="features"
                                />
                                <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                    Полотенца
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-[344px] h-[103px] lg:h-[195px] lg:mb-[32px]
"
                        >
                            <div className="flex flex-col items-start justify-between h-full">
                                <img
                                    className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px]"
                                    src="../../../images/main/feat_2.svg"
                                    alt="features"
                                />
                                <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                    Free wi-fi
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            <Container className="bg-white pb-[0px] lg:pb-[0px] lg:relative lg:mb-[64px]">
                <h2
                    className={
                        "text-h2 uppercase font-familyBold text-black mb-[6px] lg:mb-[28px]"
                    }
                >
                    Фитнес направления
                </h2>
                <p
                    className={
                        "text-p4 lg:text-p1 text-black mb-[24px] font-['PT-Root-UI']"
                    }
                >
                    Эффективные направления для твоих целей
                </p>
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
                            src="/images/main/stretching.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-[308px] h-[332px] lg:w-[616px] lg:h-[auto]"
                            src="/images/main/yoga.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-[308px] h-[332px] lg:w-[616px] lg:h-[auto]"
                            src="/images/main/stretching.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-[308px] h-[332px] lg:w-[616px] lg:h-[auto]"
                            src="/images/main/yoga.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-[308px] h-[332px] lg:w-[616px] lg:h-[auto]"
                            src="/images/main/stretching.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className="w-[308px] h-[332px] lg:w-[616px] lg:h-[auto]"
                            src="/images/main/yoga.jpg"
                            alt=""
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

            <Container className="bg-gray-100 relative">
                <h2
                    className={
                        "block text-h2 uppercase font-familyBold text-black mb-[6px] lg:mb-[28px] z-50 relative"
                    }
                >
                    Лучшее время,
                    <br />
                    чтобы начать - сейчас
                </h2>
                <p
                    className={
                        "text-p4 lg:text-p1 text-black mb-[24px] lg:mb-[48px] font-['PT-Root-UI'] z-50 relative"
                    }
                >
                    Начни с первой тренировки
                </p>
                <img
                    className="hidden xl:block lg:absolute right-[30px] top-[35px] z-30"
                    src="../../../images/main/a-logo.png"
                    alt=""
                />
                <img
                    className="hidden xl:block lg:absolute right-[0px] top-[0px] h-full z-20"
                    src="../../../images/main/ellipse.png"
                    alt=""
                />
                <Button
                    onClick={() => {
                        props.setOpenModal(true);
                    }}
                    className={
                        "w-[100%] max-w-[343px] lg:max-w-[480px] bg-primary text-white z-50 relative hover:bg-[#AC6A66]"
                    }
                >
                    Присоединиться
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
                <p
                    className={
                        "text-p4 lg:text-p1 text-black mb-[24px] font-['PT-Root-UI']"
                    }
                >
                    Выбери свой Academy
                </p>
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

            <section className="bg-gray-100 lg:h-[666px]">
                <div className="flex flex-col lg:flex-row lg:justify-start h-full">
                    <div className="bg-[url('/images/main/join.jpg')] bg-cover lg:bg-no-repeat lg:bg-center lg:w-[792px] w-full h-[220px] lg:h-full"></div>
                    <div className="lg:mr-auto px-[16px] lg:pl-[200px] lg:pr-[64px] pb-[40px] lg:pb-[0px]">
                        <h2
                            className={
                                "block text-h2 uppercase font-familyBold font-bold text-black mb-[20px] lg:mb-[48px] mt-[24px] lg:mt-[102px] lg:max-w-[640px]"
                            }
                        >
                            Получи Эксклюзивные Условия На Абонемент
                        </h2>
                        <Button
                            onClick={() => {
                                props.setOpenModal(true);
                            }}
                            className={
                                "block px-[0px] w-[100%] max-w-[343px] lg:w-[335px] lg:px-[80px] bg-primary text-white hover:bg-[#AC6A66]"
                            }
                        >
                            Присоединиться
                        </Button>
                    </div>
                </div>
            </section>
            <Container className="bg-white pb-[0px] lg:pb-[0px] lg:relative mb-[24px] lg:mb-[64px]">
                <h2
                    className={
                        "text-h2 uppercase font-bold text-black mb-[6px] lg:mb-[28px]"
                    }
                >
                    Тренеры, Которые приведут тебя к результату
                </h2>
            </Container>
            <div className="lg:mb-[48px] mb-[24px] pl-[16px] lg:pl-[176px]">
                <Swiper
                    slidesPerView={slidesCount}
                    spaceBetween={310}
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
            <div className="flex px-[16px] pb-[40px] lg:px-[176px] lg:pb-[140px]">
                <img
                    className="lg:h-[40px] lg:w-[40px]"
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

            <section className="bg-[#292929] px-[20px] py-[60px] lg:px-[148px] lg:py-[160px]">
                <div className="lg:flex lg:justify-between">
                    <h2
                        className={
                            "lg:block text-h2 uppercase font-familyBold font-bold text-white mb-[8px] lg:mb-[0px]"
                        }
                    >
                        Узнавай первым
                    </h2>
                    <span
                        className={
                            "lg:hidden block text-[16px] lg:text-[32px] text-white mb-[20px] font-['PT-Root-UI'] lg:font-['Arsenal']"
                        }
                    >
                        Оставь номер телефона и ...
                    </span>
                    <div className="ml-auto lg:w-[50%] flex items-start lg:justify-end">
                        <input
                            type="phone"
                            placeholder="Телефон"
                            className="lg:block text-white text-p3 font-['PT-Root-UI'] outline-none pb-[8px] pt-[15px] lg:pt-[0px] lg:pb-[7px] w-[90%] lg:max-w-[450px] bg-transparent border-b-[1px] border-b-white"
                        />
                        <input
                            type="submit"
                            value=""
                            className="lg:block bg-[url('/images/main/arrow_right.svg')] bg-no-repeat outline-none border-b-[1px] border-b-white w-[35px] h-[50px]"
                        />
                        {/* <button
                            type="submit"
                            className="lg:block bg-transparent border-b-[1px] pt-[3px] pb-[15px] lg:pt-[30px] lg:pb-[18px] lg:pt-[0px] border-b-white"
                        >
                            <img
                                src="../../../images/main/arrow_right.svg"
                                alt=""
                            />
                        </button> */}
                    </div>
                </div>
            </section>
        </main>
    );
};
