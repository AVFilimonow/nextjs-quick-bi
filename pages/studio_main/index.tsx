import React, { useRef } from "react";
import { Button, Container, Footer, Section } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useWindowSize } from "../../src/utils/hooks";
import { calcClientSliderItemsCount } from "../../src/utils/helpers";
import { useRouter } from "next/router";
import Link from "next/link";
import { SlideNextButton, SlidePrevButton, Header } from "@/components";

const StudioMain: React.FC<{ title?: string }> = () => {
    const { width: windowWidth } = useWindowSize();
    const slidesCount = calcClientSliderItemsCount(windowWidth);
    const router = useRouter();
    const prevBtn = useRef<HTMLButtonElement>(null);
    const nextBtn = useRef<HTMLButtonElement>(null);

    return (
        <div>
            <div className="hidden lg:block">
                <div className="hidden lg:block bg-gray">
                    <Header
                        logo={"/images/training/logo_black.svg"}
                        text={"[#292929]"}
                        border={"[#292929]"}
                        bg_hover={"white"}
                    />
                </div>
                <div className="hidden lg:block bg-[url('/images/studio/desktop_bg.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                <section className="bg-gray w-full hidden lg:block">
                    <Container>
                        <Section className="hidden lg:block">
                            <div className="lg:flex lg:items-start lg:justify-between lg:flex-wrap mb-[136px]">
                                <div className="flex items-start justify-start mb-[32px] w-[25%] lg:w-[390px] lg:mr-[32px]">
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
                                                ЖК Эмират, ул. Жанайдара
                                                Жирентаева 10
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
                                    onClick={() =>
                                        router.push("/studio_quiz_page3")
                                    }
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
                        </Section>
                    </Container>
                </section>
                <section className="bg-gray-100 w-full pb-[40px] lg:pb-[140px]">
                    <Container>
                        <div className="bg-gray-100 px-[16px] pt-[40px] pb-[24px] lg:px-[176px] lg:pt-[120px] lg:pb-[0px] lg:mb-[80px] mr-auto max-w-[1920px] relative">
                            <h2
                                className={
                                    "text-h2 uppercase font-familyBold text-black lg:mb-[0px]"
                                }
                            >
                                У нас есть всё для
                                <br />
                                эффективной тренировки
                            </h2>
                        </div>
                        <div className="max-w-[1920px] lg:pl-[176px] mr-auto">
                            <Swiper
                                slidesPerView={"auto"}
                                spaceBetween={40}
                                modules={[Navigation]}
                                className=""
                            >
                                <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                                    <div
                                        className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                                    >
                                        <div className="flex flex-col items-start justify-between h-full">
                                            <img
                                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                                src="../../../images/studio/comfort_1.png"
                                                alt="features"
                                            />
                                            <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                                Полотенца
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                                    <div
                                        className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                                    >
                                        <div className="flex flex-col items-start justify-between h-full">
                                            <img
                                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                                src="../../../images/studio/comfort_2.png"
                                                alt="features"
                                            />
                                            <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                                free wi-fi
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                                    <div
                                        className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                                    >
                                        <div className="flex flex-col items-start justify-between h-full">
                                            <img
                                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                                src="../../../images/studio/comfort_1.png"
                                                alt="features"
                                            />
                                            <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                                Полотенца
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                                    <div
                                        className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                                    >
                                        <div className="flex flex-col items-start justify-between h-full">
                                            <img
                                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                                src="../../../images/studio/comfort_2.png"
                                                alt="features"
                                            />
                                            <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                                free wi-fi
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                                    <div
                                        className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                                    >
                                        <div className="flex flex-col items-start justify-between h-full">
                                            <img
                                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                                src="../../../images/studio/comfort_1.png"
                                                alt="features"
                                            />
                                            <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                                Полотенца
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                                    <div
                                        className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                                    >
                                        <div className="flex flex-col items-start justify-between h-full">
                                            <img
                                                className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                                src="../../../images/studio/comfort_2.png"
                                                alt="features"
                                            />
                                            <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                                free wi-fi
                                            </span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Container>
                </section>
                <section className="bg-white w-full lg:pb-[140px] pb-[40px] pl-[16px] lg:pl-[0px] lg:relative">
                    <Container>
                        <div className="px-[16px] pt-[40px] pb-[24px] lg:px-[176px] lg:pt-[120px] lg:pb-[0px] mr-auto relative">
                            <h2
                                className={
                                    "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3 mb-[80px]"
                                }
                            >
                                направления В <br />
                                студии Studio name
                            </h2>
                            <div
                                className={`hidden lg:block absolute z-[10] lg:bottom-[0%] bottom-[20%] right-[8%] text-primary hidden sm:block`}
                            >
                                <SlidePrevButton
                                    className={`lg:h-[48px] lg:w-[48px] h-[24px] w-[24px] transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                    ref={prevBtn}
                                />
                                <SlideNextButton
                                    className={`ml-[8px] lg:h-[48px] lg:w-[48px] h-[24px] w-[24px] transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                    ref={nextBtn}
                                />
                            </div>
                        </div>
                        <div className="max-w-[1920px] lg:pl-[176px] mr-auto lg:mb-[0px] mb-[24px]">
                            <Swiper
                                loop={true}
                                slidesPerView={"auto"}
                                spaceBetween={40}
                                modules={[Navigation]}
                                navigation={{
                                    prevEl: prevBtn.current,
                                    nextEl: nextBtn.current,
                                }}
                                onBeforeInit={(swiper) => {
                                    if (
                                        swiper?.params?.navigation &&
                                        typeof swiper?.params?.navigation !=
                                            "boolean"
                                    ) {
                                        swiper.params.navigation.prevEl =
                                            prevBtn.current;
                                        swiper.params.navigation.nextEl =
                                            nextBtn.current;
                                    }
                                }}
                                className=""
                            >
                                <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                    <Link href="/training_main">
                                        <a>
                                            <img
                                                className="lg:block rounded-xl hidden"
                                                src="/images/main/yoga.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="lg:hidden rounded-xl block"
                                                src="/images/main/yoga_mob.jpg"
                                                alt=""
                                            />
                                            <span
                                                className={
                                                    "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                                }
                                            >
                                                Stretching
                                            </span>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                    <Link href="/training_main">
                                        <a>
                                            <img
                                                className="lg:block rounded-xl hidden"
                                                src="/images/main/yoga.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="lg:hidden rounded-xl block"
                                                src="/images/main/yoga_mob.jpg"
                                                alt=""
                                            />
                                            <span
                                                className={
                                                    "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                                }
                                            >
                                                Stretching
                                            </span>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                    <Link href="/training_main">
                                        <a>
                                            <img
                                                className="lg:block rounded-xl hidden"
                                                src="/images/main/yoga.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="lg:hidden rounded-xl block"
                                                src="/images/main/yoga_mob.jpg"
                                                alt=""
                                            />
                                            <span
                                                className={
                                                    "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                                }
                                            >
                                                Stretching
                                            </span>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                    <Link href="/training_main">
                                        <a>
                                            <img
                                                className="lg:block rounded-xl hidden"
                                                src="/images/main/yoga.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="lg:hidden rounded-xl block"
                                                src="/images/main/yoga_mob.jpg"
                                                alt=""
                                            />
                                            <span
                                                className={
                                                    "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                                }
                                            >
                                                Stretching
                                            </span>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                    <Link href="/training_main">
                                        <a>
                                            <img
                                                className="lg:block rounded-xl hidden"
                                                src="/images/main/yoga.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="lg:hidden rounded-xl block"
                                                src="/images/main/yoga_mob.jpg"
                                                alt=""
                                            />
                                            <span
                                                className={
                                                    "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                                }
                                            >
                                                Stretching
                                            </span>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                    <Link href="/training_main">
                                        <a>
                                            <img
                                                className="lg:block rounded-xl hidden"
                                                src="/images/main/yoga.jpg"
                                                alt=""
                                            />
                                            <img
                                                className="lg:hidden rounded-xl block"
                                                src="/images/main/yoga_mob.jpg"
                                                alt=""
                                            />
                                            <span
                                                className={
                                                    "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                                }
                                            >
                                                Stretching
                                            </span>
                                        </a>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </Container>
                </section>
                <Footer />
            </div>

            {/* Мобильная версия */}

            <div className="lg:hidden overflow-x-hidden">
                <section className="bg-gray px-[16px] pt-[20px] flex flex-col">
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
                            className={`bg-[url('/images/main/studio_mob.jpg')] max-w-[308px] h-[332px] rounded-xl mb-[24px]`}
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
                        className={`w-[100%] max-w-[400px] mb-[24px] bg-[#D08884] text-white flex items-center justify-center`}
                    >
                        <img
                            className="mr-[16px]"
                            src="../../../images/studio/location_btn.svg"
                            alt=""
                        />
                        <span>Показать на карте</span>
                    </Button>
                </section>
                <section className="bg-[#F5F5F5] pt-[40px] pb-[50px] px-[16px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] mb-[40px]"
                        }
                    >
                        Удобства
                    </h2>
                    <Swiper
                        slidesPerView={"auto"}
                        spaceBetween={40}
                        modules={[Navigation]}
                        className=""
                    >
                        <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                            <div
                                className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                            >
                                <div className="flex flex-col items-start justify-between h-full">
                                    <img
                                        className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                        src="../../../images/studio/comfort_1.png"
                                        alt="features"
                                    />
                                    <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                        Полотенца
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                            <div
                                className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                            >
                                <div className="flex flex-col items-start justify-between h-full">
                                    <img
                                        className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                        src="../../../images/studio/comfort_2.png"
                                        alt="features"
                                    />
                                    <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                        free wi-fi
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                            <div
                                className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                            >
                                <div className="flex flex-col items-start justify-between h-full">
                                    <img
                                        className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                        src="../../../images/studio/comfort_1.png"
                                        alt="features"
                                    />
                                    <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                        Полотенца
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                            <div
                                className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                            >
                                <div className="flex flex-col items-start justify-between h-full">
                                    <img
                                        className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                        src="../../../images/studio/comfort_2.png"
                                        alt="features"
                                    />
                                    <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                        free wi-fi
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                            <div
                                className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                            >
                                <div className="flex flex-col items-start justify-between h-full">
                                    <img
                                        className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                        src="../../../images/studio/comfort_1.png"
                                        alt="features"
                                    />
                                    <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                        Полотенца
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="lg:max-w-[344px] max-w-[141px]">
                            <div
                                className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] 
"
                            >
                                <div className="flex flex-col items-start justify-between h-full">
                                    <img
                                        className="w-[40px] h-[40px] lg:w-[64px] lg:h-[64px] mb-[16px]"
                                        src="../../../images/studio/comfort_2.png"
                                        alt="features"
                                    />
                                    <span className="text-[14px] lg:text-[32px] font-bold uppercase block">
                                        free wi-fi
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className="bg-gray px-[16px] pt-[24px] pb-[20px]">
                    <div className="mb-[32px]">
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
                    </div>

                    <div className="pl-[16px] lg:pl-[176px]">
                        <Swiper
                            loop={true}
                            slidesPerView={"auto"}
                            spaceBetween={40}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: prevBtn.current,
                                nextEl: nextBtn.current,
                            }}
                            onBeforeInit={(swiper) => {
                                if (
                                    swiper?.params?.navigation &&
                                    typeof swiper?.params?.navigation !=
                                        "boolean"
                                ) {
                                    swiper.params.navigation.prevEl =
                                        prevBtn.current;
                                    swiper.params.navigation.nextEl =
                                        nextBtn.current;
                                }
                            }}
                            className=""
                        >
                            <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block"
                                            src="/images/main/yoga_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                            }
                                        >
                                            Stretching
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block"
                                            src="/images/main/yoga_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                            }
                                        >
                                            Stretching
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block"
                                            src="/images/main/yoga_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                            }
                                        >
                                            Stretching
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block"
                                            src="/images/main/yoga_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                            }
                                        >
                                            Stretching
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block"
                                            src="/images/main/yoga_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                            }
                                        >
                                            Stretching
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide className="lg:max-w-[616px] max-w-[308px] lg:h-[480px] h-[332px]">
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block"
                                            src="/images/main/yoga_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[14px] text-[20px] font-bold uppercase text-white lg:hidden"
                                            }
                                        >
                                            Stretching
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className={"mt-[32px]"}>
                        <Button
                            onClick={() => router.push("/studio_quiz_page3")}
                            className={`w-[100%] max-w-[400px] bg-[#D08884] text-white mb-[16px] mr-[32px]`}
                        >
                            Присоединиться
                        </Button>
                        <Button
                            className={`w-[100%] max-w-[400px] bg-transparent border-[1px] border-[#292929] text-[#292929]`}
                        >
                            Написать whatsapp
                        </Button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default StudioMain;
