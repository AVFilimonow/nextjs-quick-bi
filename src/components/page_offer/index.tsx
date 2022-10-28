import { FC, ReactNode } from "react";
import React, { useState, useEffect } from "react";
import { Button, TrialForm } from "@/components";

interface IPageLayout {
    children?: any;
}

export const PageOffer = (props: IPageLayout) => {
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", openModal);
    }, [openModal]);

    return (
        <div className="hidden lg:block bg-gray-100 lg:h-[666px]">
            {openModal && <TrialForm setOpenModal={setOpenModal} />}
            {!openModal && (
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
                                setOpenModal(true);
                            }}
                            className={
                                "block px-[0px] w-[100%] max-w-[343px] lg:w-[335px] lg:px-[80px] bg-primary text-white hover:bg-[#AC6A66]"
                            }
                        >
                            Присоединиться
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};
