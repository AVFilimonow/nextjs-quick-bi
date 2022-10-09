import React from "react";
import { Button, Header, Section } from "@/components";
import { Footer } from "../../src/components/footer";
import { Container } from "../../src/components/container";
import Link from "next/link";
import { useRouter } from "next/router";

const Training: React.FC<{ title?: string }> = () => {
    const router = useRouter();

    return (
        <div>
            <div className="hidden lg:block">
                <div>
                    <div className="hidden lg:block bg-gray">
                        <Header
                            logo={"/images/training/logo_black.svg"}
                            text={"[#292929]"}
                            border={"[#292929]"}
                            bg_hover={"white"}
                        />
                    </div>
                    <div className="hidden lg:block bg-[url('/images/training/training_mainbg_2.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                    <section className="bg-gray w-full">
                        <Container>
                            <div className="max-w-[1920px] lg:block lg:flex lg:flex-col lg:px-[176px] lg:pt-[120px]">
                                <div className="bg-gray hidden lg:block lg:flex lg:items-start lg:mb-[64px]">
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
                                                Stretching lite
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:w-[45%] lg:text-[18px] font-['PT-Root-UI']">
                                        <span>
                                            Комплексная растяжка всего тела без
                                            интенсивной аэробной нагрузки.
                                            Тренировка проходит в спокойном
                                            темпе, с преобладающим количеством
                                            статических упражнений. <br />
                                            <br />
                                            Уровень LITE - был создан специально
                                            для новичков и для тех, кто совсем
                                            без опыта, имел большой перерыв
                                            между занятиями спортом или просто
                                            любит спокойные, размеренные
                                            тренировки.
                                        </span>
                                    </div>
                                </div>
                                <div className="hidden lg:flex lg:items-center lg:justify-end">
                                    <Button
                                        onClick={() =>
                                            router.push("/training_quiz_page1")
                                        }
                                        className={`hidden lg:block lg:mb-[32px] lg:mr-[64px] text-white border-2 border-primary bg-primary px-[48px] py-[20px] lg:text-[20px] lg:leading-[22px] hover:bg-[#AC6A66] hover:border-2 hover:border-[#AC6A66]`}
                                    >
                                        Присоединиться
                                    </Button>
                                    <Button
                                        onClick={() => router.push("")}
                                        className={`hidden lg:block lg:mb-[32px] text-black border-2 border-black px-[48px] py-[20px] lg:text-[20px] lg:leading-[22px] hover:bg-white`}
                                    >
                                        Написать whatsapp
                                    </Button>
                                </div>
                            </div>
                        </Container>
                    </section>
                    <section className="bg-gray w-full">
                        <Container>
                            <Section className="lg:flex lg:flex-wrap justify-between">
                                <div className="w-[30%] min-w-[480px] flex flex-col justify-between lg:mr-[32px] lg:mb-[32px]">
                                    <div className="bg-white rounded-[20px] drop-shadow-xl p-[40px] flex items-center justify-between h-[45%]">
                                        <img
                                            className="block mb-[16px] lg:h-[80px] lg:w-[80px]"
                                            src="../../../images/training/feat_5.png"
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
                                            src="../../../images/training/feat_8.png"
                                            alt=""
                                        />
                                        <div className="text-right ">
                                            <span className="text-[#292929] text-p1 uppercase font-bold">
                                                1.5 часа
                                            </span>
                                            <br />
                                            <span className="text-p1 lg:text-p4 font-['PT-Root-UI']">
                                                последний прием пищи до начала
                                                занятия
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-[20px] drop-shadow-xl p-[40px] w-[30%] min-w-[480px] lg:mr-[32px] lg:mb-[32px]">
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
                                <div className="bg-white rounded-[20px] drop-shadow-xl p-[40px] w-[30%] min-w-[480px] lg:mr-[32px] lg:mb-[32px]">
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
                                            Хронические заболевания в период
                                            обострения
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
                            </Section>
                        </Container>
                    </section>
                    <Footer />
                </div>
            </div>

            {/* Мобильная версия */}

            <div className="bg-gray px-[16px] pt-[16px] pb-[20px] flex flex-col lg:hidden">
                <div className="flex mb-[32px]">
                    <button onClick={() => router.back()} className="mr-[16px]">
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
                            Stretching Lite
                        </h2>
                    </div>
                </div>
                <section className="mb-[32px]">
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
                </section>
                <section className="flex justify-between mb-[32px]">
                    <div className="bg-white p-[16px] rounded-[16px] w-[43%] drop-shadow-xl">
                        <div className="flex justify-between items-center">
                            <img
                                className="mb-[16px]"
                                src="../../../images/training/feat_1.png"
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
                    <div className="bg-white p-[16px] rounded-[16px] w-[53%] drop-shadow-xl">
                        <div className="flex justify-between items-center">
                            <img
                                className="mb-[16px]"
                                src="../../../images/training/feat_2.png"
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
                </section>
                <section>
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
                                className="h-[40px] w-[40px] mr-[16px]"
                                src="../../../images/training/clothes_1.svg"
                                alt=""
                            />
                            футболка
                        </li>
                        <li className="mb-[16px] flex items-center">
                            <img
                                className="h-[40px] w-[40px] mr-[16px]"
                                src="../../../images/training/clothes_2.svg"
                                alt=""
                            />
                            леггинсы
                        </li>
                        <li className="mb-[16px] flex items-center">
                            <img
                                className="h-[40px] w-[40px] mr-[16px]"
                                src="../../../images/training/clothes_3.svg"
                                alt=""
                            />
                            носочки (обязательно), либо чешки
                        </li>
                        <li className="mb-[16px] flex items-center">
                            <img
                                className="h-[40px] w-[40px] mr-[16px]"
                                src="../../../images/training/clothes_4.svg"
                                alt=""
                            />
                            кроссовки не потребуются
                        </li>
                    </ul>
                </section>
                <section>
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
                                className="h-[24px] w-[24px] mr-[16px]"
                                src="../../../images/training/stop.svg"
                                alt=""
                            />
                            Острые инфекционные болезни
                        </li>
                        <li className="mb-[16px] flex items-center">
                            <img
                                className="h-[24px] w-[24px] mr-[16px]"
                                src="../../../images/training/stop.svg"
                                alt=""
                            />
                            Хронические заболевания в период обострения
                        </li>
                        <li className="mb-[16px] flex items-center">
                            <img
                                className="h-[24px] w-[24px] mr-[16px]"
                                src="../../../images/training/stop.svg"
                                alt=""
                            />
                            Все болезни в острой (активной) фазе
                        </li>
                    </ul>
                </section>
                <section>
                    <Button
                        onClick={() => router.push("/training_quiz_page1")}
                        className={`w-[100%] max-w-[400px] bg-[#D08884] text-white mb-[16px]`}
                    >
                        Присоединиться
                    </Button>
                    <Button
                        onClick={() => router.push("/training_quiz_page1")}
                        className={`w-[100%] max-w-[400px] bg-transparent border-[1px] border-[#292929] text-[#292929]`}
                    >
                        Написать whatsapp
                    </Button>
                </section>
            </div>
        </div>
    );
};

export default Training;
