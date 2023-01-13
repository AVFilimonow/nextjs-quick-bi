import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/router";
import Link from "next/link";

import {
    Container,
    Section,
    Button,
    BlockAdv,
    BlockSpec,
    BlockService,
    BlockLogo,
    Input,
} from "@/components";

const Home: React.FC = () => {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 500,
        });
    }, []);

    const router = useRouter();

    return (
        <div className="relative bg-[#FFFFFF] overflow-hidden ">
            <div className="block_1 relative md:mb-[30%] sm:mb-[50%] mb-[60%]">
                <Container className="relative">
                    <Section>
                        <div
                            className="z-20 relative lg:pt-[200px] md:pt-[104px] sm:pt-[80px] pt-[140%]"
                            data-aos="fade-right"
                        >
                            <h1 className="text-h1 text-white">Quick BI</h1>
                            <p className="lg:text-p3 text-p4 text-white sm:max-w-[35%] w-[90%] lg:mt-[40px] md:mt-[40px] mt-[20px]">
                                инструмент для исследования и визуализация
                                данных вашего бизнеса
                            </p>
                            <Link href="#form">
                                <Button className="lg:mt-[120px] md:mt-[60px] mt-[30px]">
                                    <span className="md:mr-[12px] mr-[8px] text-p2">
                                        Подать заявку
                                    </span>
                                    <img
                                        className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                                        src="/public/images/Arrow-Right.png"
                                    />
                                </Button>
                            </Link>
                        </div>
                    </Section>
                </Container>
                <img
                    className="absolute left-[0px] top-[0px] md:w-[80%] w-[100%]"
                    src="../public/images/1_block/rectangle_2.png"
                />
                <img
                    className="absolute left-[0px] top-[0px] md:w-[80%] w-[100%]"
                    src="../public/images/1_block/rectangle_1.png"
                />
                <img
                    className="sm:hidden block absolute left-[0px] top-[0px] w-[100%] min-w-[300px]"
                    src="../public/images/1_block/rectangle_1_mb.png"
                />
                <img
                    className="sm:block hidden absolute left-[25%] md:top-[50%] top-[10%] md:w-[50%] w-[100%]"
                    src="../public/images/1_block/circles_gradient.png"
                />
                <img
                    className="sm:block hidden absolute left-[45%] top-[0] md:w-[50%] w-[100%]"
                    src="/public/images/1_block/circles_shtrih.png"
                />
                <img
                    className="sm:hidden block absolute left-[0%] top-[0%] w-[115px]"
                    src="/public/images/1_block/circles_gradient_mb.png"
                />
                <img
                    className="sm:hidden block absolute right-[0%] top-[380px] w-[152px]"
                    src="/public/images/1_block/circles_shtrih_mb.png"
                />
                <img
                    className="sm:block hidden absolute md:right-[0px] -right-[5%] top-[35%] md:w-[60%] w-[50%]"
                    src="/public/images/1_block/main_frame.png"
                    data-aos="fade-left"
                />
                <img
                    className="sm:hidden block absolute right-[0] top-[60px] w-[100%]"
                    src="/public/images/1_block/main_frame_mb_2.png"
                    data-aos="fade-left"
                />
            </div>
            <div className="block_2 relative md:mb-[10%] sm:mb-[0%] mb-[20%]">
                <Container className="relative">
                    <Section>
                        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                            <img
                                className="block md:w-[50%] w-[100%] z-30"
                                src="../../../images/2_block/frame_1.png"
                                data-aos="fade-right"
                            />
                            <div className="md:w-[45%] w-[100%] z-20 flex items-center">
                                <div data-aos="fade-left">
                                    <h2 className="lg:text-[48px] lg:leading-[48px] md:text-[24px] md:leading-[24px] text-[28px] leading-[28px] font-bold font-['SF-Pro-Text'] text-black inline mr-[5px]">
                                        Quick
                                    </h2>
                                    <h2 className="lg:text-[48px] lg:leading-[48px] md:text-[24px] md:leading-[24px] text-[28px] leading-[28px] font-bold font-['SF-Pro-Text'] text-[#2DAFEF] inline mr-[5px]">
                                        BI
                                    </h2>
                                    <span className="text-p1 text-black inline">
                                        - мощный инструмент для аналитики с
                                        очень удобным пользовательским
                                        интерфейсом, который позволяет Вашей
                                        организации исследовать данные.
                                        Принимать решения основываясь на
                                        конкретных данных.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Section>
                </Container>
                <img
                    className="absolute md:left-[5%] right-[5%] sm:top-[10%] top-[30%] md:w-[40%] w-[70%] z-10 animate-spin-slow"
                    src="../../../images/2_block/circles_orbit.png"
                />
                <img
                    className="sm:block hidden absolute left-[0%] md:-top-[25%] -top-[20%] md:w-[60%] w-[90%]"
                    src="../../../images/2_block/circles_gradient.png"
                />
                <img
                    className="sm:hidden block absolute left-[0%] top-[10%] w-[375px]"
                    src="../../../images/2_block/circles_gradient_mb.png"
                />
            </div>
            <div className="block_3 relative md:mb-[5%] mb-[15%]">
                <Container className="relative">
                    <Section>
                        <div className="flex flex-col md:flex-row justify-between lg:pt-[100px] md:pt-[80px]">
                            <div
                                className="flex flex-col md:w-[35%] w-full md:mb-[0px] mb-[56px]"
                                data-aos="fade-right"
                            >
                                <div className="h-[2px] w-[60px] bg-[#FF6060] mb-[32px]"></div>
                                <span className="text-p1 text-black inline w-full md:mb-[0px] mb-[56px]">
                                    Создавайте визуальные отчеты и принимайте
                                    решения основываясь на данные
                                </span>
                                <Link href="#form">
                                    <Button className="lg:mt-[120px] md:mt-[60px] z-30">
                                        <span className="md:mr-[12px] mr-[8px] text-p2">
                                            Подать заявку
                                        </span>
                                        <img
                                            className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                                            src="../../../images/Arrow-Right.png"
                                        />
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex flex-wrap sm:flex-nowrap md:justify-end sm:justify-center justify-between md:w-[60%] w-full lg:gap-[40px] md:gap-[20px] gap-[20px] z-30">
                                <div
                                    className="lg:-mt-[250px] md:-mt-[180px] mt-[20px] md:w-auto w-[150px] gap-[20px]"
                                    data-aos="zoom-in"
                                >
                                    <BlockAdv className="lg:mb-[40px] md:mb-[20px] mb-[16px] flex flex-col justify-between">
                                        <img
                                            className="lg:w-[120px] lg:h-[120px] md:w-[62px] md:h-[62px] w-[62px] h-[62px] mb-[16px]"
                                            src="../../../images/3_block/block_circle_1.png"
                                            alt=""
                                        />
                                        <p className="md:text-p2 text-p4 font-semibold">
                                            Web и мобильное приложение
                                        </p>
                                    </BlockAdv>
                                    <BlockAdv className="flex flex-col justify-between">
                                        <img
                                            className="lg:w-[120px] lg:h-[120px] md:w-[62px] md:h-[62px] w-[62px] h-[62px] mb-[16px]"
                                            src="../../../images/3_block/block_circle_2.png"
                                            alt=""
                                        />
                                        <p className="md:text-p2 text-p4 font-semibold">
                                            Построение моделей
                                        </p>
                                    </BlockAdv>
                                </div>
                                <div
                                    className="lg:-mt-[150px] md:-mt-[120px] mt-[0px] md:w-auto w-[150px] gap-[20px]"
                                    data-aos="zoom-in"
                                >
                                    <BlockAdv className="lg:mb-[40px] md:mb-[20px] mb-[16px] flex flex-col justify-between">
                                        <img
                                            className="lg:w-[120px] lg:h-[120px] md:w-[62px] md:h-[62px] w-[62px] h-[62px] mb-[16px]"
                                            src="../../../images/3_block/block_circle_3.png"
                                            alt=""
                                        />
                                        <p className="md:text-p2 text-p4 font-semibold">
                                            Визуальный конструктор
                                        </p>
                                    </BlockAdv>
                                    <BlockAdv className="flex flex-col justify-between">
                                        <img
                                            className="lg:w-[120px] lg:h-[120px] md:w-[62px] md:h-[62px] w-[62px] h-[62px] mb-[16px]"
                                            src="../../../images/3_block/block_circle_4.png"
                                            alt=""
                                        />
                                        <p className="md:text-p2 text-p4 font-semibold">
                                            Машинное обучение
                                        </p>
                                    </BlockAdv>
                                </div>
                            </div>
                        </div>
                    </Section>
                </Container>
                <img
                    className="hidden md:block absolute right-[0px] -top-[15%] w-[60%]"
                    src="../../../images/3_block/rectangle_2.png"
                    data-aos="fade-right"
                />
                <img
                    className="hidden md:block absolute right-[0] top-[0%] w-[55%]"
                    src="../../../images/3_block/rectangle_1.png"
                />
                <img
                    className="block md:hidden absolute right-[0] top-[40%] w-[100%] h-[60%]"
                    src="../../../images/3_block/rectangle_3.png"
                />
                <img
                    className="absolute sm:right-[0px] -right-[10%] md:-top-[70%] sm:-top-[20%] top-[0%] md:w-[60%] w-[100%]"
                    src="../../../images/3_block/circles_gradient.png"
                />
            </div>
            <div className="block_4 relative md:mb-[15%] mb-[120px]">
                <Container className="relative">
                    <Section>
                        <div className="pt-[50px]">
                            <h2 className="text-h2 font-bold font-['SF-Pro-Text']">
                                Как это работает
                            </h2>
                        </div>
                        <img
                            className="hidden md:block w-full h-full"
                            src="../../../images/4_block/diagram.svg"
                        />
                        <img
                            className="block md:hidden w-full h-full"
                            src="../../../images/4_block/diagram_mob.png"
                        />
                    </Section>
                </Container>
                <img
                    className="hidden md:block absolute md:left-[0px] md:-top-[150%] md:w-[60%]"
                    src="../../../images/4_block/circles_gradient.png"
                />
                <img
                    className="block md:hidden absolute left-[0px] -top-[20%] w-[120px] h-[380px]"
                    src="../../../images/4_block/circles_gradient_mb.png"
                />
                <img
                    className="block md:hidden absolute left-[0%] -top-[10%] w-[72px] h-[284px]"
                    src="../../../images/4_block/circles_orbit.png"
                />
            </div>
            <div className="block_5 relative md:mb-[15%] mb-[120px]">
                <Container className="relative">
                    <Section>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="z-20 md:mr-[22px] mr-[0px] md:mb-[0px] mb-[80px]">
                                <h2 className="text-h2 text-white font-bold font-['SF-Pro-Text']">
                                    Области
                                    <br />
                                    специализации
                                </h2>
                            </div>
                            <div
                                className="hidden md:block lg:w-[60%] md:w-[70%] w-full z-30"
                                data-aos="fade-right"
                            >
                                <div className="relative z-30 flex justify-center">
                                    <BlockSpec className="flex items-center lg:mr-[40px] md:mr-[16px]">
                                        <img
                                            className="lg:h-[32px] lg:w-[32px] lg:mr-[32px] md:h-[16px] md:w-[16px] md:mr-[16px]"
                                            src="../../../images/5_block/ecommerce_icon.svg"
                                            alt=""
                                        />
                                        <p className="lg:text-p2 md:text-p3 lg:mr-[32px] md:mr-[20px]">
                                            Электронная <br />
                                            коммерция
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center lg:mr-[40px] md:mr-[16px]">
                                        <img
                                            className="lg:h-[32px] lg:w-[32px] lg:mr-[32px] md:h-[16px] md:w-[16px] md:mr-[16px]"
                                            src="../../../images/5_block/database_icon.svg"
                                            alt=""
                                        />
                                        <p className="lg:text-p2 md:text-p3 lg:mr-[32px] md:mr-[20px]">
                                            IoT
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center lg:mr-[40px] md:mr-[0px]">
                                        <img
                                            className="lg:h-[32px] lg:w-[32px] lg:mr-[32px] md:h-[16px] md:w-[16px] md:mr-[16px]"
                                            src="../../../images/5_block/study_icon.svg"
                                            alt=""
                                        />
                                        <p className="lg:text-p2 md:text-p3 lg:mr-[32px] md:mr-[20px]">
                                            Электронное <br />
                                            обучение
                                        </p>
                                    </BlockSpec>
                                </div>
                                <div className="relative z-30 flex justify-center lg:mt-[40px] md:mt-[20px]">
                                    <BlockSpec className="flex items-center lg:mr-[40px] md:mr-[16px]">
                                        <img
                                            className="lg:h-[32px] lg:w-[32px] lg:mr-[32px] md:h-[16px] md:w-[16px] md:mr-[16px]"
                                            src="../../../images/5_block/social_icon.svg"
                                            alt=""
                                        />
                                        <p className="lg:text-p2 md:text-p3 lg:mr-[32px] md:mr-[20px]">
                                            Социальные сети <br />и платформы
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center lg:mr-[40px] md:mr-[0px]">
                                        <img
                                            className="lg:h-[32px] lg:w-[32px] lg:mr-[32px] md:h-[16px] md:w-[16px] md:mr-[16px]"
                                            src="../../../images/5_block/bigdata_icon.svg"
                                            alt=""
                                        />
                                        <p className="lg:text-p2 md:text-p3 lg:mr-[32px] md:mr-[20px]">
                                            Большие данные
                                        </p>
                                    </BlockSpec>
                                </div>
                                <div className="relative z-30 flex justify-center lg:mt-[40px] md:mt-[20px]">
                                    <BlockSpec className="flex items-center lg:mr-[40px] md:mr-[16px]">
                                        <img
                                            className="lg:h-[32px] lg:w-[32px] lg:mr-[32px] md:h-[16px] md:w-[16px] md:mr-[16px]"
                                            src="../../../images/5_block/logistic_icon.svg"
                                            alt=""
                                        />
                                        <p className="lg:text-p2 md:text-p3 lg:mr-[32px] md:mr-[20px]">
                                            Логистика
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center lg:mr-[40px] md:mr-[16px]">
                                        <img
                                            className="lg:h-[32px] lg:w-[32px] lg:mr-[32px] md:h-[16px] md:w-[16px] md:mr-[16px]"
                                            src="../../../images/5_block/health_icon.svg"
                                            alt=""
                                        />
                                        <p className="lg:text-p2 md:text-p3 lg:mr-[32px] md:mr-[20px]">
                                            Здравоохранение
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center lg:mr-[40px] md:mr-[0px]">
                                        <img
                                            className="lg:h-[32px] lg:w-[32px] lg:mr-[32px] md:h-[16px] md:w-[16px] md:mr-[16px]"
                                            src="../../../images/5_block/finance_icon.svg"
                                            alt=""
                                        />
                                        <p className="lg:text-p2 md:text-p3 lg:mr-[32px] md:mr-[20px]">
                                            Финансы
                                        </p>
                                    </BlockSpec>
                                </div>
                            </div>
                            <div
                                className="block md:hidden w-full z-30"
                                data-aos="fade-right"
                            >
                                <div className="relative z-30 flex flex-wrap items-center justify-center mb-[16px] gap-[16px]">
                                    <BlockSpec className="flex items-center">
                                        <img
                                            className="h-[20px] w-[20px] mr-[16px]"
                                            src="../../../images/5_block/ecommerce_icon.svg"
                                            alt=""
                                        />
                                        <p className="text-p3">
                                            Электронная <br />
                                            коммерция
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center">
                                        <img
                                            className="h-[20px] w-[20px] mr-[16px]"
                                            src="../../../images/5_block/database_icon.svg"
                                            alt=""
                                        />
                                        <p className="text-p3">IoT</p>
                                    </BlockSpec>
                                </div>
                                <div className="relative z-30 flex flex-wrap items-center justify-center mb-[16px] gap-[16px]">
                                    <BlockSpec className="flex items-center justify-start w-[140px]">
                                        <img
                                            className="h-[20px] w-[20px] mr-[16px]"
                                            src="../../../images/5_block/study_icon.svg"
                                            alt=""
                                        />
                                        <p className="text-p3">
                                            Электронное обучение
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center">
                                        <img
                                            className="h-[20px] w-[20px] mr-[16px]"
                                            src="../../../images/5_block/social_icon.svg"
                                            alt=""
                                        />
                                        <p className="text-p3">
                                            Социальные сети и платформы
                                        </p>
                                    </BlockSpec>
                                </div>
                                <div className="relative z-30 flex flex-wrap items-center justify-center mb-[16px] gap-[16px]">
                                    <BlockSpec className="flex items-center justify-start w-[120px]">
                                        <img
                                            className="h-[20px] w-[20px] mr-[16px]"
                                            src="../../../images/5_block/bigdata_icon.svg"
                                            alt=""
                                        />
                                        <p className="text-p3">
                                            Большие данные
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center">
                                        <img
                                            className="h-[20px] w-[20px] mr-[16px]"
                                            src="../../../images/5_block/logistic_icon.svg"
                                            alt=""
                                        />
                                        <p className="text-p3">Логистика</p>
                                    </BlockSpec>
                                </div>
                                <div className="relative z-30 flex flex-wrap items-center justify-center">
                                    <BlockSpec className="flex items-center mr-[16px] mb-[16px]">
                                        <img
                                            className="h-[20px] w-[20px] mr-[16px]"
                                            src="../../../images/5_block/health_icon.svg"
                                            alt=""
                                        />
                                        <p className="text-p3">
                                            Здравоохранение
                                        </p>
                                    </BlockSpec>
                                    <BlockSpec className="flex items-center mb-[16px]">
                                        <img
                                            className="h-[20px] w-[20px] mr-[16px] "
                                            src="../../../images/5_block/finance_icon.svg"
                                            alt=""
                                        />
                                        <p className="text-p3">Финансы</p>
                                    </BlockSpec>
                                </div>
                            </div>
                        </div>
                    </Section>
                </Container>
                <img
                    className="hidden md:block absolute left-[0px] lg:-top-[60%] md:-top-[50%] lg:w-[750px] lg:h-[770px] md:w-[380px] md:h-[380px]"
                    src="../../../images/5_block/rectangle_1.png"
                    data-aos="fade-right"
                />
                <img
                    className="block md:hidden absolute left-[0%] sm:-top-[8%] -top-[5%] sm:w-[352px] w-[80%] min-w-[300px]"
                    src="../../../images/5_block/rectangle_2.png"
                    data-aos="fade-right"
                />
                <img
                    className="absolute md:right-[0%] md:-top-[100%] md:w-[70%] right-[0%] top-[0%] w-[100%]"
                    src="../../../images/5_block/circles_gradient.png"
                />
                <img
                    className="absolute md:right-[10%] md:-top-[40%] md:w-[50%] right-[5%] sm:top-[0%] top-[20%] w-[100%] animate-spin-slow"
                    src="../../../images/5_block/circles-orbit.png"
                />
            </div>
            <div className="block_6 relative md:mb-[15%] mb-[120px]">
                <Container className="relative">
                    <Section>
                        <div className="relative lg:mb-[64px] mb-[40px]">
                            <h2 className="text-h2 font-bold font-['SF-Pro-Text']">
                                Услуги
                            </h2>
                        </div>
                        <div
                            className="relative flex flex-col md:flex-row justify-between lg:mb-[64px] md:mb-[40px] mb-[24px] z-30"
                            data-aos="zoom-in"
                        >
                            <BlockService className="flex flex-col md:items-center items-start lg:mr-[32px] md:mr-[16px] mr-[0px] md:mb-[0] mb-[16px] lg:w-[480px] md:w-[248px] w-full">
                                <img
                                    className="lg:h-[160px] lg:w-[160px] md:h-[84px] md:w-[84px] h-[100px] w-[100px] md:mb-[40px] mb-[20px]"
                                    src="../../../images/6_block/serice_icon_1.svg"
                                    alt=""
                                />
                                <p className="lg:text-p1 md:text-p4 text-p4 font-semibold mb-[20px]">
                                    Программное обеспечение как поставка
                                </p>
                                <p className="lg:text-p2 md:text-p3 text-p2">
                                    Вы можете купить наше программное
                                    обеспечение и установить в своем
                                    ИТ-ландшафте, мы поможем интегрировать с
                                    вашими корпоративными системами.
                                </p>
                            </BlockService>
                            <BlockService className="flex flex-col md:items-center items-start lg:mr-[32px] md:mr-[16px] mr-[0px] md:mb-[0] mb-[16px] lg:w-[480px] md:w-[248px] w-full">
                                <img
                                    className="lg:h-[160px] lg:w-[160px] md:h-[84px] md:w-[84px] h-[100px] w-[100px] md:mb-[40px] mb-[20px]"
                                    src="../../../images/6_block/serice_icon_2.svg"
                                    alt=""
                                />
                                <p className="lg:text-p1 md:text-p4 text-p4 font-semibold mb-[20px]">
                                    Программное обеспечение как услуга
                                </p>
                                <p className="lg:text-p2 md:text-p3 text-p2">
                                    Наши знания и опыт помогают нам создавать
                                    масштабируемые, надежные и безопасные
                                    решения для разработки SaaS в соответствии с
                                    вашими потребностями.
                                </p>
                            </BlockService>
                            <BlockService className="flex flex-col md:items-center items-start lg:mr-[32px] md:mr-[16px] mr-[0px] md:mb-[0] mb-[16px] lg:w-[480px] md:w-[248px] w-full">
                                <img
                                    className="lg:h-[160px] lg:w-[160px] md:h-[84px] md:w-[84px] h-[100px] w-[100px] md:mb-[40px] mb-[20px]"
                                    src="../../../images/6_block/serice_icon_3.svg"
                                    alt=""
                                />
                                <p className="lg:text-p1 md:text-p4 text-p4 font-semibold mb-[20px]">
                                    Разработка и консалтинг услуг
                                </p>
                                <p className="lg:text-p2 md:text-p3 text-p2">
                                    Предлагаем консультационные услуги по
                                    индивидуальному подходу и услуги по
                                    разработке конечного продукта. Используйте
                                    нашу техническую компетентность, мы
                                    предлагаем индивидуальные решения от
                                    концепции до внедрения ПО.
                                </p>
                            </BlockService>
                        </div>
                        <Link href="#form">
                            <Button className="relative z-30">
                                <span className="md:mr-[12px] mr-[8px] text-p2">
                                    Подать заявку
                                </span>
                                <img
                                    className="h-[16px] w-[16px] md:h-[24px] md:w-[24px]"
                                    src="../../../images/Arrow-Right.png"
                                />
                            </Button>
                        </Link>
                    </Section>
                </Container>
            </div>
            <div className="block_7 relative md:mb-[20%] mb-[120px]">
                <Container className="relative">
                    <Section>
                        <div className="relative lg:mb-[64px] mb-[40px] lg:max-w-[660px] md:max-w-[390px] max-w-[270px] z-0">
                            <h2 className="text-h2 font-bold font-['SF-Pro-Text']">
                                Работаем со следующими Базами Данных
                            </h2>
                        </div>
                        <div
                            className="hidden md:flex relative flex-wrap justify-center z-20 w-full gap-[16px] lg:gap-[32px]"
                            data-aos="zoom-right"
                        >
                            <BlockLogo className="">
                                <img
                                    className="w-[80%]"
                                    src="../../../images/7_block/logo_1.png"
                                    alt=""
                                />
                            </BlockLogo>
                            <BlockLogo className="">
                                <img
                                    className="w-[80%]"
                                    src="../../../images/7_block/logo_2.png"
                                    alt=""
                                />
                            </BlockLogo>
                            <BlockLogo className="">
                                <img
                                    className="w-[60%]"
                                    src="../../../images/7_block/logo_3.png"
                                    alt=""
                                />
                            </BlockLogo>
                            <BlockLogo className="">
                                <img
                                    className="w-[80%]"
                                    src="../../../images/7_block/logo_4.png"
                                    alt=""
                                />
                            </BlockLogo>
                            <BlockLogo className="">
                                <img
                                    className="w-[80%]"
                                    src="../../../images/7_block/logo_5.png"
                                    alt=""
                                />
                            </BlockLogo>
                            <BlockLogo className="">
                                <img
                                    className="w-[80%]"
                                    src="../../../images/7_block/logo_6.png"
                                    alt=""
                                />
                            </BlockLogo>
                        </div>
                        <div
                            className="md:hidden relative flex flex-wrap justify-center z-20 w-full gap-[16px]"
                            data-aos="zoom-right"
                        >
                            <div className="flex flex-col justify-center mt-[40px] gap-[16px]">
                                <BlockLogo className="">
                                    <img
                                        className="w-[80%]"
                                        src="../../../images/7_block/logo_1.png"
                                        alt=""
                                    />
                                </BlockLogo>
                                <BlockLogo className="">
                                    <img
                                        className="w-[80%]"
                                        src="../../../images/7_block/logo_3.png"
                                        alt=""
                                    />
                                </BlockLogo>
                                <BlockLogo className="">
                                    <img
                                        className="w-[80%]"
                                        src="../../../images/7_block/logo_5.png"
                                        alt=""
                                    />
                                </BlockLogo>
                            </div>
                            <div className="flex flex-col justify-center gap-[16px]">
                                <BlockLogo className="">
                                    <img
                                        className="w-[70%]"
                                        src="../../../images/7_block/logo_2.png"
                                        alt=""
                                    />
                                </BlockLogo>
                                <BlockLogo className="">
                                    <img
                                        className="w-[70%]"
                                        src="../../../images/7_block/logo_4.png"
                                        alt=""
                                    />
                                </BlockLogo>
                                <BlockLogo className="">
                                    <img
                                        className="w-[70%]"
                                        src="../../../images/7_block/logo_6.png"
                                        alt=""
                                    />
                                </BlockLogo>
                            </div>
                        </div>
                    </Section>
                </Container>
                <img
                    className="md:block hidden absolute left-[0%] -top-[100%] w-[70%]"
                    src="../../../images/7_block/circles_gradient.png"
                />
                <img
                    className="md:hidden block absolute right-[0%] top-[10%] w-[325px]"
                    src="../../../images/7_block/circles_gradient_mb.png"
                />
            </div>
            <div className="block_8 relative" id="form">
                <Container className="relative">
                    <Section className="">
                        <div
                            className="relative flex md:flex-row flex-col items-start justify-between z-40 pb-[60px]"
                            data-aos="fade-right"
                        >
                            <div className="flex flex-col justify-between lg:h-[800px] md:h-[620px] md:mb-[0px] mb-[40px]">
                                <div className="">
                                    <div className="relative md:mb-[80px] mb-[20px] flex">
                                        <img
                                            className="lg:h-[56px] lg:w-[56px] h-[32px] w-[32px] lg:mr-[24px] md:mr-[12px] mr-[24px]"
                                            src="../../../images/8_block/logo.png"
                                            alt=""
                                        />
                                        <h2 className="text-h2 font-bold font-['SF-Pro-Text'] lg:mr-[12px] mr-[8px]">
                                            Quick
                                        </h2>
                                        <h2 className="text-h2 font-bold font-['SF-Pro-Text'] text-[#2DAFEF]">
                                            BI
                                        </h2>
                                    </div>
                                    <p className="text-p2 lg:max-w-[480px] md:max-w-[250px]">
                                        Казахстанская платформа для исследования
                                        и визуализации данных
                                    </p>
                                </div>
                                <a
                                    className="md:block hidden text-p2 text-[#1F80DA] font-semibold hover:underline cursor:pointer"
                                    href="#"
                                >
                                    Политика конфиденциальности
                                </a>
                            </div>
                            <BlockService className="lg:w-[610px] md:w-[350px] w-full py-[40px] md:mb-[0px] mb-[40px]">
                                <form
                                    action=""
                                    className="w-full flex flex-col justify-between"
                                >
                                    <div className="flex flex-col justify-start">
                                        <h2 className="text-h2 font-bold font-['SF-Pro-Text'] lg:mb-[48px] mb-[40px]">
                                            Подать заявку
                                        </h2>

                                        <Input
                                            type="text"
                                            className=""
                                            name="name"
                                            placeholder="Имя"
                                            required="required"
                                        />
                                        <Input
                                            type="email"
                                            className=""
                                            name="email"
                                            placeholder="Email"
                                            required="required"
                                        />
                                        <Input
                                            type="organization"
                                            className=""
                                            name="email"
                                            placeholder="Организация"
                                        />
                                        <textarea
                                            name="message"
                                            className="border-[1px] border-[#424242] lg:rounded-[12px] rounded-[8px] sm:p-[20px] p-[8px] lg:mb-[24px] md:mb-[0px] mb-[40px] min-h-[120px] outline-none"
                                            placeholder="Комментарий"
                                        ></textarea>
                                    </div>
                                    <Button className="relative lg:mt-[64px] md:mt-[48px] md:py-[16px] md:px-[40px] px-[10px] lg:!w-[340px] md:!w-[230px] !w-[120px] z-30">
                                        <span className="">Отправить</span>
                                    </Button>
                                </form>
                            </BlockService>
                            <a
                                className="md:hidden block text-p2 text-[#1F80DA] font-semibold hover:underline cursor:pointer"
                                href="#"
                            >
                                Политика конфиденциальности
                            </a>
                        </div>
                    </Section>
                </Container>
                <img
                    className="md:block hidden absolute right-[0] bottom-[30%] w-[50%] animate-spin-slow"
                    src="../../../images/8_block/circles_orbit.png"
                />
                <img
                    className="md:block hidden absolute right-[0] bottom-[0] w-[70%]"
                    src="../../../images/8_block/circles_gradient.png"
                />
                <img
                    className="md:hidden block absolute left-[0] -top-[20%] w-[70%]"
                    src="../../../images/8_block/circles_gradient_mb.png"
                />
                <img
                    className="md:block hidden absolute right-[0] bottom-[0] w-[50%]"
                    src="../../../images/8_block/rectangle_2.png"
                    data-aos="fade-left"
                />
                <img
                    className="md:block hidden absolute right-[0] bottom-[0] w-[40%]"
                    src="../../../images/8_block/rectangle_1.png"
                    data-aos="fade-left"
                />
            </div>
        </div>
    );
};

export default Home;
