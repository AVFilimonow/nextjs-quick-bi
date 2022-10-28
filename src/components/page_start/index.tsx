import React, { useState, useEffect } from "react";
import { Button, TrialForm, Container, Section } from "@/components";

export const PageStart = (props) => {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", openModal);
    }, [openModal]);

    return (
        <div className="hidden lg:block bg-gray-100 lg:h-[666px]">
            {openModal && <TrialForm setOpenModal={setOpenModal} />}
            {!openModal && (
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
                                setOpenModal(true);
                            }}
                            className={
                                "w-[100%] max-w-[343px] lg:max-w-[480px] bg-primary text-white z-50 relative hover:bg-[#AC6A66]"
                            }
                        >
                            Присоединиться
                        </Button>
                    </Section>
                </Container>
            )}
        </div>
    );
};
