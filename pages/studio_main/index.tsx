import React, { useRef } from "react";
import { Button, Container, Footer } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useWindowSize } from "../../src/utils/hooks";
import { calcClientSliderItemsCount } from "../../src/utils/helpers";
import { useRouter } from "next/router";
import { SlideNextButton, SlidePrevButton, HeaderWhite } from "@/components";

const StudioMain: React.FC<{ title?: string }> = () => {
    const { width: windowWidth } = useWindowSize();
    const slidesCount = calcClientSliderItemsCount(windowWidth);
    const router = useRouter();
    const prevBtn = useRef<HTMLButtonElement>(null);
    const nextBtn = useRef<HTMLButtonElement>(null);

    return (
        <div>
            <div className="hidden lg:block">
                <div className="hidden lg:block lg:px-[176px]">
                    <HeaderWhite />
                </div>
                <div className="hidden lg:block bg-[url('/images/studio/desktop_bg.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                <Container className="bg-gray hidden lg:block">
                    <div className="lg:flex lg:items-start lg:justify-between lg:flex-wrap mb-[136px]">
                        <div className="flex items-center justify-start mb-[32px] w-[25%] lg:w-[390px] lg:mr-[32px]">
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
                                    Studio name
                                </h2>
                            </div>
                        </div>
                        <div className="lg:flex lg:justify-between font-['PT-Root-UI'] w-[40%] lg:w-[500px] lg:mr-[32px]">
                            <div className="">
                                <div className="flex items-center mb-[32px] lg:items-start">
                                    <img
                                        className="mr-[24px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_location_red.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[24px] lg:leading-[26px]">
                                        ЖК Эмират, ул. Жанайдара Жирентаева 10
                                    </span>
                                </div>
                                <div className="flex items-center mb-[32px]">
                                    <img
                                        className="mr-[24px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_phone_red.svg"
                                        alt=""
                                    />
                                    <a
                                        className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[24px] lg:leading-[26px]"
                                        href="tel:+ 77776543210"
                                    >
                                        + 7 (777) 654 32 10
                                    </a>
                                </div>
                                <div className="flex items-start">
                                    <img
                                        className="mr-[24px] lg:w-[24px] lg:h-[24px]"
                                        src="../../../images/studio/studio_calendar_red.svg"
                                        alt=""
                                    />
                                    <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[24px] lg:leading-[26px]">
                                        пн-вт: 8:00 - 23:00
                                        <br />
                                        сб-вс: 9:00 - 22:00
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="block mr-[16px] lg:w-[24px] lg:h-[24px]"
                                src="../../../images/studio/studio_map_red.svg"
                                alt=""
                            />
                            <a
                                href="#"
                                className="block text-h5 text-left uppercase text-[#737373] font-bold"
                            >
                                На карте
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            onClick={() => router.push("/studio_quiz_page3")}
                            className={`lg:w-[350px] py-[20px] mb-[24px] bg-[#D08884] text-white mr-[64px] hover:bg-[#AC6A66] hover:border-2 hover:border-[#AC6A66]`}
                        >
                            присоединиться
                        </Button>
                        <Button
                            className={`lg:w-[350px] py-[20px] mb-[24px] bg-transparent text-[#292929] border-[#292929] border-[2px] hover:bg-white`}
                        >
                            написать whatsapp
                        </Button>
                    </div>
                </Container>
                <Container className="bg-gray-100 lg:h-full">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3 mb-[80px]"
                        }
                    >
                        У нас есть всё для
                        <br />
                        эффективной тренировки
                    </h2>

                    <div className="flex justify-start lg:justify-between lg:flex-wrap gap-x-[50px] font-familyBold">
                        <div
                            className="bg-white p-[16px] lg:p-[40px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[344px] lg:h-[244px] lg:mb-[32px]
"
                        >
                            <div className="">
                                <img
                                    className="w-[64px] h-[64px]"
                                    src="/images/studio/towel.svg"
                                    alt="features"
                                />
                                <span className="text-p2 uppercase block mt-[16px] lg:mt-[40px]">
                                    Полотенца
                                </span>
                            </div>
                        </div>
                        <div
                            className="bg-white p-[16px] lg:p-[40px] rounded-[16px] lg:rounded-[40px] w-[141px] h-[103px] lg:w-[344px] lg:h-[244px] lg:mb-[32px]
"
                        >
                            <div className="">
                                <img
                                    className="w-[64px] h-[64px]"
                                    src="/images/studio/wi-fi.svg"
                                    alt="features"
                                />
                                <span className="text-p2 uppercase block mt-[16px] lg:mt-[40px]">
                                    free wi-fi
                                </span>
                            </div>
                        </div>
                        <div
                            className="hidden lg:block bg-white p-[40px] rounded-[40px] w-[344px] h-[244px] lg:mb-[32px]
"
                        >
                            <div>
                                <img
                                    className="w-[64px] h-[64px]"
                                    src="/images/studio/towel.svg"
                                    alt="features"
                                />
                                <span className="text-p2 uppercase block mt-[40px]">
                                    Полотенца
                                </span>
                            </div>
                        </div>
                        <div
                            className="hidden lg:block bg-white p-[40px] rounded-[40px] w-[344px] h-[244px] lg:mb-[32px]
"
                        >
                            <div>
                                <img
                                    className="w-[64px] h-[64px]"
                                    src="/images/studio/wi-fi.svg"
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
                </Container>
                <div className="lg:mb-[140px] mb-[40px] pl-[16px] lg:pl-[176px] relative">
                    <div
                        className={`hidden lg:block absolute z-[10] -top-[100px] right-[8%] text-primary hidden sm:block`}
                    >
                        <SlidePrevButton
                            className={`h-[48px] w-[48px]`}
                            ref={prevBtn}
                        />
                        <SlideNextButton
                            className={`ml-[8px] h-[48px] w-[48px]`}
                            ref={nextBtn}
                        />
                    </div>
                    <Swiper
                        loop={true}
                        slidesPerView={slidesCount}
                        spaceBetween={40}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevBtn.current,
                            nextEl: nextBtn.current,
                        }}
                        onBeforeInit={(swiper) => {
                            if (
                                swiper?.params?.navigation &&
                                typeof swiper?.params?.navigation != "boolean"
                            ) {
                                swiper.params.navigation.prevEl =
                                    prevBtn.current;
                                swiper.params.navigation.nextEl =
                                    nextBtn.current;
                            }
                        }}
                        className=""
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
                <Footer />
            </div>
            <div className="lg:hidden">
                <div className="bg-gray px-[16px] pt-[20px] flex flex-col">
                    <div className="flex items-center justify-start mb-[32px]">
                        <button
                            onClick={() => router.back()}
                            className="mr-[16px]"
                        >
                            <img
                                src="../../../images/modal/arrow_left.svg"
                                alt=""
                            />
                        </button>
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-[#292929]"
                            }
                        >
                            Studio name
                        </h2>
                    </div>
                    <div>
                        <div
                            className={`bg-[url('/images/main/studio_mob.jpg')] w-[308px] h-[332px] rounded-xl mb-[24px]`}
                        ></div>
                        <div className="mb-[16px]">
                            <div className="flex items-start mb-[8px]">
                                <img
                                    className="mr-[8px] w-[24px] h-[24px]"
                                    src="../../../images/studio/studio_location.svg"
                                    alt=""
                                />
                                <span className="text-p2 text-left text-[#292929] font-['PT-Root-UI']">
                                    Нур-Султан, ЖК Эмират, ул. Жанайдара
                                    Жирентаева 10
                                </span>
                            </div>
                            <div className="flex items-center mb-[8px]">
                                <img
                                    className="mr-[8px]"
                                    src="../../../images/studio/whatsapp.svg"
                                    alt=""
                                />
                                <a
                                    className="text-p2 text-left text-[#292929] font-['PT-Root-UI']"
                                    href="tel:+ 77776543210"
                                >
                                    + 7 (777) 654 32 10
                                </a>
                            </div>
                            <div className="flex items-center">
                                <img
                                    className="mr-[8px] w-[24px] h-[24px]"
                                    src="../../../images/studio/studio_calendar.svg"
                                    alt=""
                                />
                                <span className="text-p2 text-left text-[#292929] font-['PT-Root-UI']">
                                    пн-вт: 8:00 - 23:00
                                    <br />
                                    сб-вс: 9:00 - 22:00
                                </span>
                            </div>
                        </div>
                    </div>
                    <Button
                        className={`w-[100%] mb-[24px] bg-[#D08884] text-white flex items-center justify-center`}
                    >
                        <img
                            className="mr-[16px]"
                            src="../../../images/studio/location_btn.svg"
                            alt=""
                        />
                        <span>Показать на карте</span>
                    </Button>
                </div>
                <div className="bg-[#F5F5F5] pt-[40px] pb-[50px] px-[16px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] mb-[40px]"
                        }
                    >
                        Удобства
                    </h2>
                    <div className="flex">
                        <div className="bg-white p-[16px] rounded-[16px] w-[47%] mr-[16px]">
                            <img
                                className="mb-[16px]"
                                src="../../../images/studio/comfort_1.png"
                                alt=""
                            />
                            <span className="text-[#292929] uppercase font-bold">
                                полотенца
                            </span>
                        </div>
                        <div className="bg-white p-[16px] rounded-[16px] w-[47%] mr-[16px]">
                            <img
                                className="mb-[16px]"
                                src="../../../images/studio/comfort_2.png"
                                alt=""
                            />
                            <span className="text-[#292929] uppercase font-bold">
                                free wi-fi
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray px-[16px] pt-[24px] pb-[20px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] mb-[8px]"
                        }
                    >
                        Фитнес направления
                    </h2>
                    <span className="text-p4 text-[#292929] font-['PT-Root-UI']">
                        Выбирай студию в своем городе
                    </span>
                    <div className="lg:mb-[140px] mb-[40px] pl-[16px] lg:pl-[176px]">
                        <Swiper
                            slidesPerView={slidesCount}
                            spaceBetween={40}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div
                                    className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl relative mb-[38px] mt-[32px]`}
                                >
                                    <span
                                        className={
                                            "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase"
                                        }
                                    >
                                        Stretching
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl relative mb-[38px] mt-[32px]`}
                                >
                                    <span
                                        className={
                                            "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase"
                                        }
                                    >
                                        Stretching
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl relative mb-[38px] mt-[32px]`}
                                >
                                    <span
                                        className={
                                            "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase"
                                        }
                                    >
                                        Stretching
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl relative mb-[38px] mt-[32px]`}
                                >
                                    <span
                                        className={
                                            "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase"
                                        }
                                    >
                                        Stretching
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl relative mb-[38px] mt-[32px]`}
                                >
                                    <span
                                        className={
                                            "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase"
                                        }
                                    >
                                        Stretching
                                    </span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div
                                    className={`bg-[url('/images/main/stretching_mob.jpg')] w-[308px] h-[332px] rounded-xl relative mb-[38px] mt-[32px]`}
                                >
                                    <span
                                        className={
                                            "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase"
                                        }
                                    >
                                        Stretching
                                    </span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <Button
                        onClick={() => router.push("/studio_quiz_page3")}
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
        </div>
    );
};

export default StudioMain;
