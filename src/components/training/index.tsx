import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { TrainingTypes } from "../training_types";

export const Training: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="bg-[#FAFAFA] px-[16px] pt-[16px] pb-[20px] flex flex-col">
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
            <TrainingTypes />
            <div className="bg-[#FAFAFA] px-[16px] pt-[16px] pb-[20px] flex flex-col">
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
