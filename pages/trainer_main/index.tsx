import React, { useEffect, useRef } from "react";
import { Button, Container, Footer, Header, Section } from "@/components";
import { useRouter } from "next/router";
import Link from "next/link";

const Trainer: React.FC<{ title?: string }> = () => {
    const router = useRouter();

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
                <div className="hidden lg:block bg-[url('/images/trainer/trainer_bg.jpg')] bg-no-repeat bg-cover lg:h-[590px]"></div>
                <section className="bg-gray w-full hidden lg:block">
                    <Container>
                        <Section>
                            <div className="lg:flex lg:items-start lg:justify-between mb-[184px] lg:flex-wrap">
                                <div className="flex items-start justify-start mb-[32px] lg:w-[500px] lg:mr-[32px]">
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
                                            Васильева Софья
                                        </h2>
                                    </div>
                                </div>
                                <div className="lg:flex lg:justify-between font-['PT-Root-UI'] w-[45%] text-[18px]">
                                    <span>
                                        Комплексная растяжка всего тела без
                                        интенсивной аэробной нагрузки.
                                        Тренировка проходит в спокойном темпе, с
                                        преобладающим количеством статических
                                        упражнений.
                                        <br />
                                        <br />
                                        Уровень LITE - был создан специально для
                                        новичков и для тех, кто совсем без
                                        опыта, имел большой перерыв между
                                        занятиями спортом или просто любит
                                        спокойные, размеренные тренировки.
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    onClick={() =>
                                        router.push("/trainer_quiz_page3")
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
                <Footer />
            </div>

            {/* Мобильная версия */}

            <div className="bg-gray h-screen lg:hidden px-[16px] pt-[16px] pb-[20px] flex flex-col">
                <div className="flex mb-[28px]">
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
                            Васильева Софья
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img
                        className="mb-[24px]"
                        src="../../../images/trainer/trainer_1.jpg"
                        alt=""
                    />
                    <div className="text-left text-p4 text-[#292929] font-['PT-Root-UI'] flex-grow ">
                        <p className="mb-[4px]">
                            Сeртифицированный тренер групповых программ.
                        </p>
                        <p className="mb-[4px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fermentum amet, ipsum senectus felis.
                        </p>
                        <p className="mb-[4px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Fermentum amet, ipsum senectus felis.
                        </p>
                        <p className="mb-[20px]">
                            Lorem ipsum dolor sit amet, consectetur
                        </p>
                    </div>
                    <Button
                        onClick={() => router.push("/trainer_quiz_page3")}
                        className={`w-[100%] max-w-[400px] bg-[#D08884] text-white mb-[16px]`}
                    >
                        Присоединиться
                    </Button>
                    <Button
                        className={`w-[100%] max-w-[400px] bg-transparent border-[1px] border-[#292929] text-[#292929]`}
                    >
                        Написать whatsapp
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Trainer;
