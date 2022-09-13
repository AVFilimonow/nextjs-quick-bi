import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { TrainingTypes } from "../training_types";
import { Footer } from "../footer";
import { Container } from "../container";

export const Training: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <div className="hidden lg:block lg:px-[176px]">
                    <div
                        className={`flex items-center justify-between mb-[260px] lg:mb-[0px] lg:h-[130px]`}
                    >
                        <a href="#" className={`mx-auto lg:mx-0`}>
                            <img
                                className="w-[150px] h-[40px] lg:w-[195px] lg:h-[52px]"
                                src="/images/training/logo_black.svg"
                                alt=""
                            />
                        </a>
                        <ul className="hidden lg:flex text-black text-p4 uppercase font-familyBold">
                            <li className="mr-[40px]">
                                <a href="#">Направления</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Студии</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Тренеры</a>
                            </li>
                            <li className="mr-[40px]">
                                <a href="#">Франшиза</a>
                            </li>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                        <Button
                            className={`hidden lg:block lg:w-[300px] lg:py-[20px] lg:px-[48px] text-black border-2 border-black px-[60px]`}
                        >
                            Присоединиться
                        </Button>
                    </div>
                </div>
                <div className="hidden lg:block bg-[url('/images/training/training_mainbg.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                <Container className="bg-gray hidden lg:block lg:flex">
                    <div className="flex items-center justify-start mb-[32px] lg:w-[45%]">
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
                                Stretching
                            </h2>
                        </div>
                    </div>
                    <div className="lg:w-[45%] lg:text-[18px] font-['PT-Root-UI']">
                        <span>
                            Это фитнес и растяжка на ковриках с умеренной
                            кардио-нагрузкой в начале тренировки, направленной
                            на укрепление спины, похудение и проработку ягодиц,
                            после которой идет растяжка на все тело с акцентом
                            на все виды шпагатов - продольный и поперечный. Это
                            наше основное направление и большинство девочек
                            начинают именно с него. Есть также уровень лайт, без
                            аэробной нагрузки.
                        </span>
                    </div>
                </Container>
                <Container className="bg-gray hidden lg:block lg:flex lg:gap-[64px] lg:justify-between">
                    <div className="bg-white lg:p-[40px] rounded-[16px] w-[20%] h-[222px] drop-shadow-xl">
                        <img
                            className="mb-[16px] lg:h-[64px] lg:w-[64px]"
                            src="../../../images/training/feat_5.svg"
                            alt=""
                        />
                        <span className="block lg:text-p3 lg:font-bold uppercase">
                            55 мин
                        </span>
                        <span className="text-p1 lg:text-[24px] font-['PT-Root-UI']">
                            продолжительность
                        </span>
                    </div>
                    <div className="bg-white lg:p-[40px] rounded-[16px] w-[20%] h-[222px] drop-shadow-xl">
                        <img
                            className="mb-[16px] lg:h-[64px] lg:w-[64px]"
                            src="../../../images/training/feat_6.svg"
                            alt=""
                        />
                        <span className="block lg:text-p3 lg:font-bold uppercase">
                            Средний
                        </span>
                        <span className="text-p1 lg:text-[24px] font-['PT-Root-UI']">
                            уровень подготовки
                        </span>
                    </div>
                    <div className="bg-white lg:p-[40px] rounded-[16px] w-[20%] h-[222px] drop-shadow-xl">
                        <img
                            className="mb-[16px] lg:h-[64px] lg:w-[64px]"
                            src="../../../images/training/feat_7.svg"
                            alt=""
                        />
                        <span className="block lg:text-p3 lg:font-bold uppercase">
                            Средняя
                        </span>
                        <span className="text-p1 lg:text-[24px] font-['PT-Root-UI']">
                            интенсивность
                        </span>
                    </div>
                    <button className="w-[20%] h-[222px]">
                        <div className="bg-[#D08884] p-[40px] rounded-[16px] drop-shadow-xl h-full flex flex-col justify-between">
                            <img
                                className="block mb-[16px] w-[64px] h-[64px]"
                                src="../../../images/training/arrow_right.svg"
                                alt=""
                            />
                            <span className="block text-h4 text-white text-left uppercase">
                                Виды <br /> тренировок
                            </span>
                        </div>
                    </button>
                </Container>
                <Container className="bg-[#F5F5F5] hidden lg:block lg:px-[176px] lg:py-[140px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3 lg:mb-[80px]"
                        }
                    >
                        Фитнес цель
                    </h2>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <img
                                className="mr-[32px]"
                                src="/images/training/aim_4.png"
                                alt=""
                            />
                            <span className="text-[#292929] font-bold text-h4 uppercase">
                                Жиросжигание
                            </span>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="mr-[32px]"
                                src="/images/training/aim_5.png"
                                alt=""
                            />
                            <span className="text-[#292929] font-bold text-h4 uppercase">
                                Снижение веса
                            </span>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="mr-[32px]"
                                src="/images/training/aim_6.png"
                                alt=""
                            />
                            <span className="text-[#292929] font-bold text-h4 uppercase">
                                Выносливость
                            </span>
                        </div>
                    </div>
                </Container>
                <Footer />
                <TrainingTypes />
                <div>
                    <div className="hidden lg:block lg:px-[176px]">
                        <div
                            className={`flex items-center justify-between mb-[260px] lg:mb-[0px] lg:h-[130px]`}
                        >
                            <a href="#" className={`mx-auto lg:mx-0`}>
                                <img
                                    className="w-[150px] h-[40px] lg:w-[195px] lg:h-[52px]"
                                    src="/images/training/logo_black.svg"
                                    alt=""
                                />
                            </a>
                            <ul className="hidden lg:flex text-black text-p4 uppercase font-familyBold">
                                <li className="mr-[40px]">
                                    <a href="#">Направления</a>
                                </li>
                                <li className="mr-[40px]">
                                    <a href="#">Студии</a>
                                </li>
                                <li className="mr-[40px]">
                                    <a href="#">Тренеры</a>
                                </li>
                                <li className="mr-[40px]">
                                    <a href="#">Франшиза</a>
                                </li>
                                <li>
                                    <a href="#">Контакты</a>
                                </li>
                            </ul>
                            <Button
                                className={`hidden lg:block lg:w-[300px] lg:py-[20px] lg:px-[48px] text-black border-2 border-black px-[60px]`}
                            >
                                Присоединиться
                            </Button>
                        </div>
                    </div>
                    <div className="hidden lg:block bg-[url('/images/training/training_mainbg.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                    <Container className="bg-gray hidden lg:block lg:flex">
                        <div className="flex items-center justify-start mb-[32px] lg:w-[45%]">
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
                                    Stretching split
                                </h2>
                            </div>
                        </div>
                        <div className="lg:w-[45%] lg:text-[18px] font-['PT-Root-UI']">
                            <span>
                                Комплексная растяжка всего тела без интенсивной
                                аэробной нагрузки. Тренировка проходит в
                                спокойном темпе, с преобладающим количеством
                                статических упражнений. <br />
                                <br />
                                Уровень LITE - был создан специально для
                                новичков и для тех, кто совсем без опыта, имел
                                большой перерыв между занятиями спортом или
                                просто любит спокойные, размеренные тренировки.
                            </span>
                        </div>
                    </Container>
                    <Container className="bg-gray hidden lg:block lg:flex justify-between pb-[140px]">
                        <div className="w-[30%] flex flex-col justify-between">
                            <div className="bg-white rounded-[20px] drop-shadow-xl p-[40px] flex items-center justify-between h-[45%]">
                                <img
                                    className="block mb-[16px] lg:h-[80px] lg:w-[80px]"
                                    src="../../../images/training/feat_5.svg"
                                    alt=""
                                />
                                <div className="text-right ">
                                    <span className="text-[#292929] text-p1 uppercase font-bold">
                                        55 мин
                                    </span>
                                    <br />
                                    <span className="text-p1 lg:text-p4 font-['PT-Root-UI']">
                                        продолжительность
                                    </span>
                                </div>
                            </div>
                            <div className="bg-white rounded-[20px] drop-shadow-xl p-[40px] flex items-center justify-between h-[45%]">
                                <img
                                    className="block mb-[16px] lg:h-[80px] lg:w-[80px]"
                                    src="../../../images/training/feat_5.svg"
                                    alt=""
                                />
                                <div className="text-right ">
                                    <span className="text-[#292929] text-p1 uppercase font-bold">
                                        1.5 часа
                                    </span>
                                    <br />
                                    <span className="text-p1 lg:text-p4 font-['PT-Root-UI']">
                                        последний прием пищи до начала занятия
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-[20px] drop-shadow-xl p-[40px] w-[30%]">
                            <span className="block text-[#292929] text-p1 uppercase font-bold mb-[40px]">
                                Форма одежды
                            </span>
                            <ul className="text-[16px] lg:text-[18px] text-[#292929] font-['PT-Root-UI'] px-[16px]">
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[64px] w-[64px] mr-[16px]"
                                        src="../../../images/training/clothes_1.svg"
                                        alt=""
                                    />
                                    футболка
                                </li>
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[64px] w-[64px] mr-[16px]"
                                        src="../../../images/training/clothes_2.svg"
                                        alt=""
                                    />
                                    леггинсы
                                </li>
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[64px] w-[64px] mr-[16px]"
                                        src="../../../images/training/clothes_3.svg"
                                        alt=""
                                    />
                                    носочки (обязательно), либо чешки
                                </li>
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[64px] w-[64px] mr-[16px]"
                                        src="../../../images/training/clothes_4.svg"
                                        alt=""
                                    />
                                    кроссовки не потребуются
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-[20px] drop-shadow-xl p-[40px] w-[30%]">
                            <span className="block text-[#292929] text-p1 uppercase font-bold mb-[40px]">
                                Противопоказания
                            </span>
                            <ul className="text-[16px] lg:text-[18px] text-[#292929] font-['PT-Root-UI'] px-[16px]">
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[64px] w-[64px] mr-[16px]"
                                        src="../../../images/training/stop.svg"
                                        alt=""
                                    />
                                    Острые инфекционные болезни
                                </li>
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[64px] w-[64px] mr-[16px]"
                                        src="../../../images/training/stop.svg"
                                        alt=""
                                    />
                                    Хронические заболевания в период обострения
                                </li>
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[64px] w-[64px] mr-[16px]"
                                        src="../../../images/training/stop.svg"
                                        alt=""
                                    />
                                    Все болезни в острой (активной) фазе
                                </li>
                            </ul>
                        </div>
                    </Container>
                    <Footer />
                </div>
            </div>
            <div className="bg-gray px-[16px] pt-[16px] pb-[20px] flex flex-col lg:hidden">
                <div className="flex mb-[32px]">
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
                            Stretching
                        </h2>
                    </div>
                </div>
                <div className="mb-[32px]">
                    <img
                        className="rounded-[20px] w-full mb-[32px]"
                        src="../../../images/training/training_promo.jpg"
                        alt=""
                    />
                    <span
                        className={
                            "text-p4 text-[#292929] text-justify font-['PT-Root-UI'] block w-full mb-[12px]"
                        }
                    >
                        Комплексная растяжка всего тела без интенсивной аэробной
                        нагрузки. Тренировка проходит в спокойном темпе, с
                        преобладающим количеством статических упражнений.
                    </span>
                    <span
                        className={
                            "text-p4 text-[#292929] text-justify font-['PT-Root-UI'] block w-full mb-[24px]"
                        }
                    >
                        Уровень LITE - был создан специально для новичков и для
                        тех, кто совсем без опыта, имел большой перерыв между
                        занятиями спортом или просто любит спокойные,
                        размеренные тренировки.
                    </span>
                </div>
                <div className="flex justify-between mb-[32px]">
                    <div className="bg-white p-[16px] rounded-[16px] w-[43%]">
                        <div className="flex justify-between items-center">
                            <img
                                className="mb-[16px]"
                                src="../../../images/training/feat_1.svg"
                                alt=""
                            />
                            <span className="block text-h4 uppercase">
                                55 мин
                            </span>
                        </div>
                        <span className="text-p1 font-['PT-Root-UI']">
                            продолжительность занятия
                        </span>
                    </div>
                    <div className="bg-white p-[16px] rounded-[16px] w-[53%]">
                        <div className="flex justify-between items-center">
                            <img
                                className="mb-[16px]"
                                src="../../../images/training/feat_2.svg"
                                alt=""
                            />
                            <span className="block text-h4 uppercase">
                                1.5 часа
                            </span>
                        </div>
                        <span className="text-p1 font-['PT-Root-UI']">
                            последний прием пищи до начала занятия
                        </span>
                    </div>
                </div>
                <h3
                    className={
                        "text-h3 uppercase font-familyBold font-bold text-[#292929] mb-[16px] px-[16px]"
                    }
                >
                    Форма одежды
                </h3>
                <ul className="text-[16px] font-['PT-Root-UI'] px-[16px] mb-[48px]">
                    <li className="mb-[16px] flex items-center">
                        <img
                            className="h-[8px] w-[8px] mr-[16px]"
                            src="../../../images/training/point.png"
                            alt=""
                        />
                        футболка
                    </li>
                    <li className="mb-[16px] flex items-center">
                        <img
                            className="h-[8px] w-[8px] mr-[16px]"
                            src="../../../images/training/point.png"
                            alt=""
                        />
                        леггинсы
                    </li>
                    <li className="mb-[16px] flex items-center">
                        <img
                            className="h-[8px] w-[8px] mr-[16px]"
                            src="../../../images/training/point.png"
                            alt=""
                        />
                        носочки (обязательно), либо чешки
                    </li>
                    <li className="mb-[16px] flex items-center">
                        <img
                            className="h-[8px] w-[8px] mr-[16px]"
                            src="../../../images/training/point.png"
                            alt=""
                        />
                        кроссовки не потребуются
                    </li>
                </ul>

                <h3
                    className={
                        "text-h3 uppercase font-familyBold font-bold text-[#292929] mb-[16px] px-[16px]"
                    }
                >
                    Противопоказания
                </h3>
                <ul className="text-[16px] font-['PT-Root-UI'] px-[16px] mb-[30px]">
                    <li className="mb-[16px] flex items-center">
                        <img
                            className="h-[8px] w-[8px] mr-[16px]"
                            src="../../../images/training/point.png"
                            alt=""
                        />
                        Информация
                    </li>
                    <li className="mb-[16px] flex items-center">
                        <img
                            className="h-[8px] w-[8px] mr-[16px]"
                            src="../../../images/training/point.png"
                            alt=""
                        />
                        Информация
                    </li>
                    <li className="mb-[16px] flex items-center">
                        <img
                            className="h-[8px] w-[8px] mr-[16px]"
                            src="../../../images/training/point.png"
                            alt=""
                        />
                        Информация
                    </li>
                    <li className="mb-[16px] flex items-center">
                        <img
                            className="h-[8px] w-[8px] mr-[16px]"
                            src="../../../images/training/point.png"
                            alt=""
                        />
                        Информация
                    </li>
                </ul>

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
            <div className="block lg:hidden">
                <TrainingTypes />
            </div>
            <div className="bg-gray px-[16px] pt-[16px] pb-[20px] flex flex-col lg:hidden">
                <div className="flex mb-[32px]">
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
                            Stretching
                        </h2>
                    </div>
                </div>
                <div className="mb-[32px]">
                    <img
                        className="rounded-[20px] w-full mb-[32px]"
                        src="../../../images/training/training_promo.jpg"
                        alt=""
                    />
                    <span
                        className={
                            "text-p4 text-[#292929] text-justify font-['PT-Root-UI'] block w-full"
                        }
                    >
                        Это фитнес и растяжка на ковриках с умеренной
                        кардио-нагрузкой в начале тренировки, направленной на
                        укрепление спины, похудение и проработку ягодиц, после
                        которой идет растяжка на все тело с акцентом на все виды
                        шпагатов - продольный и поперечный.
                        <br />
                        Это наше основное направление и большинство девочек
                        начинают именно с него. Есть также уровень лайт, без
                        аэробной нагрузки.
                    </span>
                </div>
                <div className="flex justify-between mb-[12px]">
                    <div className="bg-white p-[16px] rounded-[16px] w-[48%]">
                        <img
                            className="mb-[16px]"
                            src="../../../images/training/feat_1.svg"
                            alt=""
                        />
                        <span className="block text-h4 uppercase">55 мин</span>
                        <span className="text-p1 font-['PT-Root-UI']">
                            продолжительность
                        </span>
                    </div>
                    <div className="bg-white p-[16px] rounded-[16px] w-[48%]">
                        <img
                            className="mb-[16px]"
                            src="../../../images/training/feat_3.svg"
                            alt=""
                        />
                        <span className="block text-h4 uppercase">Средний</span>
                        <span className="text-p1 font-['PT-Root-UI']">
                            уровень подготовки
                        </span>
                    </div>
                </div>
                <div className="flex justify-between mb-[32px]">
                    <div className="bg-white p-[16px] rounded-[16px] w-[48%]">
                        <img
                            className="mb-[16px]"
                            src="../../../images/training/feat_4.svg"
                            alt=""
                        />
                        <span className="block text-h4 uppercase">Высокая</span>
                        <span className="text-p1 font-['PT-Root-UI']">
                            интенсивность
                        </span>
                    </div>
                    <button className="w-[48%]">
                        <div className="bg-[#D08884] p-[16px] rounded-[16px]">
                            <img
                                className="mb-[16px]"
                                src="../../../images/training/arrow_right.svg"
                                alt=""
                            />
                            <span className="block text-h4 text-white text-left uppercase">
                                Виды <br /> тренировок
                            </span>
                        </div>
                    </button>
                </div>
                <h3
                    className={
                        "text-h3 uppercase font-familyBold font-bold text-[#292929] mb-[16px]"
                    }
                >
                    Фитнес цель
                </h3>
                <ul className="text-[16px] text-[#292929] font-['PT-Root-UI'] px-[16px]">
                    <li className="mb-[24px] flex items-center">
                        <img
                            className="h-[32px] w-[32px] mr-[16px]"
                            src="../../../images/training/aim_1.png"
                            alt=""
                        />
                        Жиросжигание
                    </li>
                    <li className="mb-[24px] flex items-center">
                        <img
                            className="h-[32px] w-[32px] mr-[16px]"
                            src="../../../images/training/aim_2.png"
                            alt=""
                        />
                        Снижение веса
                    </li>
                    <li className="mb-[24px] flex items-center">
                        <img
                            className="h-[32px] w-[32px] mr-[16px]"
                            src="../../../images/training/aim_3.png"
                            alt=""
                        />
                        Выносливость
                    </li>
                </ul>

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
    );
};
