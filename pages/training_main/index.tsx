import React, { useState } from "react";
import { Button, Header, Section, TrialForm, TrainingQuiz } from "@/components";
import { Footer } from "../../src/components/footer";
import { Container } from "../../src/components/container";
import Link from "next/link";
import { useRouter } from "next/router";

const Training: React.FC<{ title?: string }> = () => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    return (
        <div>
            {openModal && <TrainingQuiz setOpenModal={setOpenModal} />}
            {!openModal && (
                <>
                    <div className="hidden lg:block">
                        <div className="hidden lg:block bg-gray">
                            <Header
                                logo={"/images/training/logo_black.svg"}
                                text={"[#292929]"}
                                border={"[#292929]"}
                                bg_hover={"white"}
                                link1={"/#block2"}
                                link2={"/#block4"}
                                link3={"/#block6"}
                                link4={"/#block8"}
                            />
                        </div>
                        <div className="hidden lg:block bg-[url('/images/training/training_mainbg_1.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                        <section className="bg-gray w-full">
                            <Container>
                                <Section className="mr-auto max-w-[1920px] hidden lg:block lg:flex items-start">
                                    <div className="flex items-start justify-start mb-[32px] lg:w-[45%] lg:mr-[32px]">
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
                                        <div className="">
                                            <p
                                                className={
                                                    "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3"
                                                }
                                            >
                                                Stretching
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:w-[45%] lg:text-[18px] font-['PT-Root-UI']">
                                        <span>
                                            Это фитнес и растяжка на ковриках с
                                            умеренной кардио-нагрузкой в начале
                                            тренировки, направленной на
                                            укрепление спины, похудение и
                                            проработку ягодиц, после которой
                                            идет растяжка на все тело с акцентом
                                            на все виды шпагатов - продольный и
                                            поперечный. Это наше основное
                                            направление и большинство девочек
                                            начинают именно с него. Есть также
                                            уровень лайт, без аэробной нагрузки.
                                        </span>
                                    </div>
                                </Section>
                            </Container>
                        </section>
                        <section className="bg-gray w-full">
                            <Container>
                                <Section className="max-w-[1920px] hidden lg:block lg:flex lg:flex-wrap lg:justify-start">
                                    <div className="bg-white lg:p-[40px] rounded-[16px] lg:max-w-[350px] lg:mr-[16px] lg:mb-[16px] w-[370px] drop-shadow-lg">
                                        <img
                                            className="mb-[16px] lg:h-[64px] lg:w-[64px]"
                                            src="../../../images/training/feat_5.png"
                                            alt=""
                                        />
                                        <span className="block lg:text-p3 lg:font-bold uppercase">
                                            55 мин
                                        </span>
                                        <span className="text-p1 lg:text-[24px] font-['PT-Root-UI']">
                                            продолжительность
                                        </span>
                                    </div>
                                    <div className="bg-white lg:p-[40px] rounded-[16px] lg:max-w-[350px] lg:mr-[16px] lg:mb-[16px] w-[370px] drop-shadow-lg">
                                        <img
                                            className="mb-[16px] lg:h-[64px] lg:w-[64px]"
                                            src="../../../images/training/feat_6.png"
                                            alt=""
                                        />
                                        <span className="block lg:text-p3 lg:font-bold uppercase">
                                            Средний
                                        </span>
                                        <span className="text-p1 lg:text-[24px] font-['PT-Root-UI']">
                                            уровень подготовки
                                        </span>
                                    </div>
                                    <div className="bg-white lg:p-[40px] rounded-[16px] lg:max-w-[350px] lg:mr-[16px] lg:mb-[16px] w-[370px] drop-shadow-lg">
                                        <img
                                            className="mb-[16px] lg:h-[64px] lg:w-[64px]"
                                            src="../../../images/training/feat_7.png"
                                            alt=""
                                        />
                                        <span className="block lg:text-p3 lg:font-bold uppercase">
                                            Средняя
                                        </span>
                                        <span className="text-p1 lg:text-[24px] font-['PT-Root-UI']">
                                            интенсивность
                                        </span>
                                    </div>
                                    <button
                                        className="bg-[#D08884] lg:p-[40px] rounded-[16px] lg:max-w-[350px] lg:mr-[16px] lg:mb-[16px] w-[370px] drop-shadow-lg h-full flex flex-col justify-start transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500"
                                        onClick={() =>
                                            router.push("/training_types")
                                        }
                                    >
                                        <div className="">
                                            <img
                                                className="mb-[16px] lg:h-[64px] lg:w-[64px]"
                                                src="../../../images/training/arrow_right.svg"
                                                alt=""
                                            />
                                            <span className="block text-h4 text-white text-left uppercase">
                                                Виды <br /> тренировок
                                            </span>
                                        </div>
                                    </button>
                                </Section>
                            </Container>
                        </section>
                        <section className="bg-[#F5F5F5] hidden lg:block">
                            <Container>
                                <Section>
                                    <p
                                        className={
                                            "text-h2 uppercase font-familyBold font-bold text-[#292929] lg:text-h3 lg:mb-[80px]"
                                        }
                                    >
                                        Фитнес цель
                                    </p>
                                    <div className="flex flex-wrap items-center justify-between">
                                        <div className="flex items-center lg:mr-[20px] lg:mb-[32px]">
                                            <img
                                                className="mr-[32px]"
                                                src="/images/training/aim_4.png"
                                                alt=""
                                            />
                                            <span className="text-[#292929] font-bold text-h4 uppercase">
                                                Жиросжигание
                                            </span>
                                        </div>
                                        <div className="flex items-center lg:mr-[20px] lg:mb-[32px]">
                                            <img
                                                className="mr-[32px]"
                                                src="/images/training/aim_5.png"
                                                alt=""
                                            />
                                            <span className="text-[#292929] font-bold text-h4 uppercase">
                                                Снижение веса
                                            </span>
                                        </div>
                                        <div className="flex items-center lg:mr-[20px] lg:mb-[32px]">
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
                                </Section>
                            </Container>
                        </section>
                        <Footer />
                    </div>

                    {/* Мобильная версия */}

                    <div className="bg-gray px-[16px] pt-[16px] pb-[20px] flex flex-col lg:hidden overflow-x-hidden">
                        <section className="flex mb-[32px]">
                            <button
                                onClick={() => router.back()}
                                className="mr-[16px]"
                            >
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
                        </section>
                        <section className="mb-[32px]">
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
                                кардио-нагрузкой в начале тренировки,
                                направленной на укрепление спины, похудение и
                                проработку ягодиц, после которой идет растяжка
                                на все тело с акцентом на все виды шпагатов -
                                продольный и поперечный.
                                <br />
                                Это наше основное направление и большинство
                                девочек начинают именно с него. Есть также
                                уровень лайт, без аэробной нагрузки.
                            </span>
                        </section>
                        <section className="flex justify-between mb-[12px]">
                            <div className="bg-white p-[16px] rounded-[16px] w-[48%] drop-shadow-lg">
                                <img
                                    className="mb-[16px]"
                                    src="../../../images/training/feat_1.png"
                                    alt=""
                                />
                                <span className="block text-h4 uppercase">
                                    55 мин
                                </span>
                                <span className="text-p1 font-['PT-Root-UI']">
                                    продолжительность
                                </span>
                            </div>
                            <div className="bg-white p-[16px] rounded-[16px] w-[48%] drop-shadow-lg">
                                <img
                                    className="mb-[16px]"
                                    src="../../../images/training/feat_3.png"
                                    alt=""
                                />
                                <span className="block text-h4 uppercase">
                                    Средний
                                </span>
                                <span className="text-p1 font-['PT-Root-UI']">
                                    уровень подготовки
                                </span>
                            </div>
                        </section>
                        <section className="flex justify-between mb-[32px]">
                            <div className="bg-white p-[16px] rounded-[16px] w-[48%] drop-shadow-lg">
                                <img
                                    className="mb-[16px]"
                                    src="../../../images/training/feat_4.png"
                                    alt=""
                                />
                                <span className="block text-h4 uppercase">
                                    Высокая
                                </span>
                                <span className="text-p1 font-['PT-Root-UI']">
                                    интенсивность
                                </span>
                            </div>
                            <button
                                onClick={() => {
                                    setOpenModal(true);
                                }}
                                className="w-[48%] drop-shadow-lg"
                            >
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
                        </section>
                        <section>
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
                                        src="../../../images/training/aim_4.png"
                                        alt=""
                                    />
                                    Жиросжигание
                                </li>
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[32px] w-[32px] mr-[16px]"
                                        src="../../../images/training/aim_5.png"
                                        alt=""
                                    />
                                    Снижение веса
                                </li>
                                <li className="mb-[24px] flex items-center">
                                    <img
                                        className="h-[32px] w-[32px] mr-[16px]"
                                        src="../../../images/training/aim_6.png"
                                        alt=""
                                    />
                                    Выносливость
                                </li>
                            </ul>
                        </section>
                        <section>
                            <Button
                                onClick={() => {
                                    setOpenModal(true);
                                }}
                                className={`w-[100%] max-w-[400px] bg-[#D08884] text-white mb-[16px]`}
                            >
                                Присоединиться
                            </Button>
                            <Button
                                onClick={() =>
                                    router.push("/training_quiz_page1")
                                }
                                className={`w-[100%] max-w-[400px] bg-transparent border-[1px] border-[#292929] text-[#292929]`}
                            >
                                Написать whatsapp
                            </Button>
                        </section>
                    </div>
                </>
            )}
        </div>
    );
};

export default Training;
