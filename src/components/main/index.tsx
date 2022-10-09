import React, { useRef, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Button } from "@/components/button/index";
import { Container } from "../container";
import { useWindowSize } from "../../utils/hooks";
import { calcClientSliderItemsCount } from "../../utils/helpers";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    SlideNextButton,
    SlidePrevButton,
    StudioPrevButton,
    StudioNextButton,
    TrainingPrevButton,
    TrainingNextButton,
    TrainerPrevButton,
    TrainerNextButton,
    Section,
} from "@/components";

export const Main = (props) => {
    const { width: windowWidth } = useWindowSize();
    const slidesCount = calcClientSliderItemsCount(windowWidth);
    const prevBtn = useRef<HTMLButtonElement>(null);
    const nextBtn = useRef<HTMLButtonElement>(null);
    const studioPrevBtn = useRef<HTMLButtonElement>(null);
    const studioNextBtn = useRef<HTMLButtonElement>(null);
    const trainingPrevBtn = useRef<HTMLButtonElement>(null);
    const trainingNextBtn = useRef<HTMLButtonElement>(null);
    const trainerPrevBtn = useRef<HTMLButtonElement>(null);
    const trainerNextBtn = useRef<HTMLButtonElement>(null);
    const router = useRouter();

    return (
        <main>
            <section className="bg-gray-100 w-full pb-[40px] lg:pb-[140px] pl-[16px] lg:pl-[0px]">
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
                            slidesPerView={slidesCount}
                            spaceBetween={40}
                            modules={[Navigation]}
                            className=""
                        >
                            <SwiperSlide>
                                <div
                                    className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] h-[103px] lg:w-full lg:max-w-[344px] lg:h-[195px]
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
                                    className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-full lg:max-w-[344px] h-[103px] lg:h-[195px]
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
                                    className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-full lg:max-w-[344px] h-[103px] lg:h-[195px]
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
                                    className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-full lg:max-w-[344px] h-[103px] lg:h-[195px]
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
                                    className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-full lg:max-w-[344px] h-[103px] lg:h-[195px]
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
                                    className="bg-white p-[16px] lg:p-[32px] rounded-[16px] lg:rounded-[20px] w-[50%] lg:w-full lg:max-w-[344px] h-[103px] lg:h-[195px]
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
                </Container>
            </section>

            <section className="bg-white w-full lg:pb-[140px] pb-[40px] pl-[16px] lg:pl-[0px] lg:relative">
                <Container>
                    <div className="px-[16px] pt-[40px] pb-[24px] lg:px-[176px] lg:pt-[120px] lg:pb-[0px] mr-auto max-w-[1920px] relative">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold text-black mb-[6px] lg:mb-[28px]"
                            }
                        >
                            Фитнес направления
                        </h2>
                        <p
                            className={
                                "text-p4 lg:text-p1 text-black mb-[0px] lg:mb-[64px] font-['PT-Root-UI']"
                            }
                        >
                            Эффективные направления для твоих целей
                        </p>
                        <div
                            className={`hidden lg:block absolute z-[10] top-[240px] right-[100px] text-primary hidden sm:block`}
                        >
                            <TrainingPrevButton
                                className={`h-[48px] w-[48px] transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                ref={trainingPrevBtn}
                            />
                            <TrainingNextButton
                                className={`ml-[8px] h-[48px] w-[48px] transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                ref={trainingNextBtn}
                            />
                        </div>
                    </div>
                    <div className="max-w-[1920px] lg:pl-[176px] mr-auto">
                        <Swiper
                            loop={true}
                            slidesPerView={slidesCount}
                            spaceBetween={40}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: trainingPrevBtn.current,
                                nextEl: trainingNextBtn.current,
                            }}
                            onBeforeInit={(swiper) => {
                                if (
                                    swiper?.params?.navigation &&
                                    typeof swiper?.params?.navigation !=
                                        "boolean"
                                ) {
                                    swiper.params.navigation.prevEl =
                                        trainingPrevBtn.current;
                                    swiper.params.navigation.nextEl =
                                        trainingNextBtn.current;
                                }
                            }}
                            className=""
                        >
                            <SwiperSlide>
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden w-[616px] h-[auto]"
                                            src="/images/main/stretching.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px]"
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
                            <SwiperSlide>
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden w-[616px] h-[auto]"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px]"
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
                            <SwiperSlide>
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden w-[616px] h-[auto]"
                                            src="/images/main/stretching.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px]"
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
                            <SwiperSlide>
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden w-[616px] h-[auto]"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px]"
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
                            <SwiperSlide>
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden w-[616px] h-[auto]"
                                            src="/images/main/stretching.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px]"
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
                            <SwiperSlide>
                                <Link href="/training_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden w-[616px] h-[auto]"
                                            src="/images/main/yoga.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px]"
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

            <section className="bg-gray-100 w-full pl-[16px] lg:pl-[0px] relative">
                <Container>
                    <Section>
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
                    </Section>
                </Container>
            </section>

            <section className="bg-white w-full lg:pb-[140px] pb-[40px] pl-[16px] lg:pl-[0px] lg:relative">
                <Container>
                    <div className="px-[16px] pt-[40px] pb-[24px] lg:px-[176px] lg:pt-[120px] lg:pb-[0px] mr-auto max-w-[1920px] relative">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-black mb-[6px] lg:mb-[28px]"
                            }
                        >
                            Студии Academy
                        </h2>
                        <p
                            className={
                                "text-p4 lg:text-p1 text-black mb-[0px] lg:mb-[64px] font-['PT-Root-UI']"
                            }
                        >
                            Выбери свой Academy
                        </p>
                        <div
                            className={`hidden lg:block absolute z-[10] top-[240px] right-[100px] text-primary hidden sm:block`}
                        >
                            <StudioPrevButton
                                className={`h-[48px] w-[48px] transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                ref={studioPrevBtn}
                            />
                            <StudioNextButton
                                className={`ml-[8px] h-[48px] w-[48px] transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                ref={studioNextBtn}
                            />
                        </div>
                    </div>
                    <div className="max-w-[1920px] lg:pl-[176px] mr-auto">
                        <Swiper
                            loop={true}
                            slidesPerView={slidesCount}
                            spaceBetween={40}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: studioPrevBtn.current,
                                nextEl: studioNextBtn.current,
                            }}
                            onBeforeInit={(swiper) => {
                                if (
                                    swiper?.params?.navigation &&
                                    typeof swiper?.params?.navigation !=
                                        "boolean"
                                ) {
                                    swiper.params.navigation.prevEl =
                                        studioPrevBtn.current;
                                    swiper.params.navigation.nextEl =
                                        studioNextBtn.current;
                                }
                            }}
                            className=""
                        >
                            <SwiperSlide>
                                <Link href="/studio_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/studio_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/studio_1_mob.jpg"
                                            alt=""
                                        />
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
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/studio_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/studio_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/studio_1_mob.jpg"
                                            alt=""
                                        />
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
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/studio_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/studio_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/studio_1_mob.jpg"
                                            alt=""
                                        />
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
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/studio_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/studio_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/studio_1_mob.jpg"
                                            alt=""
                                        />
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
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/studio_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/studio_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/studio_1_mob.jpg"
                                            alt=""
                                        />
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
                                    </a>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Container>
            </section>

            <section className="bg-gray-100 lg:h-[666px]">
                <div className="flex flex-col lg:flex-row lg:justify-start h-full">
                    <div className="bg-[url('/images/main/join.jpg')] bg-cover lg:bg-no-repeat lg:bg-center lg:w-[792px] w-full h-[220px] lg:h-full"></div>
                    <div className="lg:mr-auto px-[16px] lg:pl-[200px] lg:pr-[64px] pb-[40px] lg:pb-[0px]">
                        <h2
                            className={
                                "block text-h2 uppercase font-familyBold font-bold text-black mb-[20px] lg:mb-[48px] mt-[24px] lg:mt-[102px] lg:max-w-[950px]"
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

            <section className="bg-white w-full lg:pb-[140px] pb-[40px] pl-[16px] lg:pl-[0px] lg:relative">
                <Container>
                    <div className="px-[16px] pt-[40px] pb-[24px] lg:px-[176px] lg:pt-[120px] lg:pb-[0px] mr-auto relative">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-black mb-[0px] lg:mb-[48px]"
                            }
                        >
                            Тренеры, Которые приведут тебя к результату
                        </h2>
                        <div
                            className={`hidden lg:block absolute z-[10] top-[240px] right-[100px] text-primary hidden sm:block`}
                        >
                            <TrainerPrevButton
                                className={`h-[48px] w-[48px] transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                ref={trainerPrevBtn}
                            />
                            <TrainerNextButton
                                className={`ml-[8px] h-[48px] w-[48px] transition ease-in-out active:-translate-y-1 active:scale-110 duration-300`}
                                ref={trainerNextBtn}
                            />
                        </div>
                    </div>
                    <div className="max-w-[1920px] lg:pl-[176px] mr-auto lg:mb-[48px] mb-[24px]">
                        <Swiper
                            loop={true}
                            slidesPerView={slidesCount}
                            spaceBetween={40}
                            modules={[Navigation]}
                            navigation={{
                                prevEl: trainerPrevBtn.current,
                                nextEl: trainerNextBtn.current,
                            }}
                            onBeforeInit={(swiper) => {
                                if (
                                    swiper?.params?.navigation &&
                                    typeof swiper?.params?.navigation !=
                                        "boolean"
                                ) {
                                    swiper.params.navigation.prevEl =
                                        trainerPrevBtn.current;
                                    swiper.params.navigation.nextEl =
                                        trainerNextBtn.current;
                                }
                            }}
                            className=""
                        >
                            <SwiperSlide>
                                <Link href="/trainer_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/trener_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/trener_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                                            }
                                        >
                                            Васильева Софья
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/trainer_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/trener_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/trener_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                                            }
                                        >
                                            Васильева Софья
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/trainer_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/trener_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/trener_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                                            }
                                        >
                                            Васильева Софья
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/trainer_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/trener_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/trener_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                                            }
                                        >
                                            Васильева Софья
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href="/trainer_main">
                                    <a>
                                        <img
                                            className="lg:block rounded-xl hidden lg:w-[616px] lg:h-[auto]"
                                            src="/images/main/trener_1.jpg"
                                            alt=""
                                        />
                                        <img
                                            className="lg:hidden rounded-xl block w-[308px] h-[332px] "
                                            src="/images/main/trener_mob.jpg"
                                            alt=""
                                        />
                                        <span
                                            className={
                                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                                            }
                                        >
                                            Васильева Софья
                                        </span>
                                    </a>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="flex px-[16px] lg:px-[176px] pb-[0px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/main/all_treners_icon.svg"
                            alt=""
                        />
                        <Link href="/trainer_quiz_page2">
                            <a className="ml-[12px] uppercase text-[#292929] text-h4 underline">
                                Все тренеры
                            </a>
                        </Link>
                    </div>
                </Container>
            </section>

            <section className="bg-[#292929] px-[20px] py-[60px] lg:px-[0px] lg:py-[0px]">
                <Container>
                    <Section>
                        <div className="lg:flex lg:justify-between items-center">
                            <div>
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
                            </div>

                            <form className="ml-auto flex items-center lg:justify-end border-b-[1px] border-b-white">
                                <input
                                    type="phone"
                                    placeholder="Телефон"
                                    className="lg:block text-white text-p3 font-['PT-Root-UI'] outline-none pb-[8px] pt-[15px] lg:pt-[0px] lg:pb-[7px] w-[90%] lg:max-w-[450px] bg-transparent "
                                />
                                <input
                                    type="submit"
                                    value=""
                                    className="lg:block bg-[url('/images/main/arrow_right.svg')] bg-no-repeat bg-center outline-none w-[35px] h-[50px]"
                                />
                            </form>
                        </div>
                    </Section>
                </Container>
            </section>
        </main>
    );
};
