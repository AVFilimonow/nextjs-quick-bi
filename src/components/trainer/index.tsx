import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";

export const Trainer: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="bg-gray px-[16px] pt-[16px] pb-[20px] h-screen flex flex-col">
                <div className="flex mb-[42px]">
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
                            Все тренеры
                        </h2>
                    </div>
                </div>
                <div className="flex flex-col grow">
                    <button>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center">
                            <img
                                className="mr-[16px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242]">
                                Алматы
                            </h3>
                        </div>
                    </button>
                    <button>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center">
                            <img
                                className="mr-[16px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242]">
                                Нур-Султан
                            </h3>
                        </div>
                    </button>
                </div>
            </div>
            <div className="bg-gray px-[16px] pt-[16px] pb-[20px] flex flex-col">
                <div className="flex mb-[42px]">
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
                            тренеры Алматы
                        </h2>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center items-center
                "
                >
                    <button className="block mb-[16px] relative">
                        <img
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                    <button className="block mb-[16px] relative">
                        <img
                            src="../../../images/trainer/trainer_1.jpg"
                            alt=""
                        />
                        <span
                            className={
                                "absolute left-[10px] bottom-[15px] text-h3 text-white uppercase lg:hidden"
                            }
                        >
                            Васильева Софья
                        </span>
                    </button>
                </div>
            </div>
            <div className="bg-gray px-[16px] pt-[16px] pb-[20px] flex flex-col">
                <div className="flex mb-[28px]">
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
                            Васильева Софья
                        </h2>
                    </div>
                </div>
                <div
                    className="flex flex-col items-center items-center
                "
                >
                    <img
                        className="mb-[24px]"
                        src="../../../images/trainer/trainer_1.jpg"
                        alt=""
                    />
                    <div className="text-left text-p4 text-[#292929] font-['PT-Root-UI']">
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
        </div>
    );
};
