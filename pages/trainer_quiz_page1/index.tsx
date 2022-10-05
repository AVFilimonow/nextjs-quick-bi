import React, { useEffect, useRef } from "react";
import { Button, Container, Input, Checkbox } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useWindowSize } from "../../src/utils/hooks";
import { calcClientSliderItemsCount } from "../../src/utils/helpers";
import { useRouter } from "next/router";

const TrainerQuiz_1: React.FC<{ title?: string }> = () => {
    const { width: windowWidth } = useWindowSize();
    const slidesCount = calcClientSliderItemsCount(windowWidth);
    const router = useRouter();

    return (
        <div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
                <div className="flex items-center justify-start mb-[32px]">
                    <button
                        onClick={() => router.back()}
                        className="mr-[16px] lg:mr-[128px]"
                    >
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="hidden lg:block lg:flex-grow lg:text-[24px]">
                        1 шаг из 4
                    </span>
                    <button onClick={() => router.push("/")}>
                        <img
                            className="hidden lg:block"
                            src="../../../images/modal/close_btn.svg"
                            alt=""
                        />
                    </button>
                    <h2
                        className={
                            "lg:hidden text-h2 uppercase font-familyBold font-bold text-[#292929]"
                        }
                    >
                        Выбери город
                    </h2>
                </div>
                <div className="hidden lg:block lg:mb-[64px]">
                    <h2
                        className={
                            "uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[16px]"
                        }
                    >
                        Выбери город
                    </h2>
                    <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                        Выбирай студию в своем городе
                    </span>
                </div>
                <div className="flex flex-col grow">
                    <button onClick={() => router.push("/trainer_quiz_page2")}>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px] hover:p-[30px] hover:border-[#D08884] hover:border-[3px] transition ease-in-out duration-200">
                            <img
                                className="mr-[16px] lg:mr-[32px] lg:h-[24px] lg:w-[24px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="block text-h3 uppercase text-[#424242] lg:text-h5 font-bold hover:text-[#D08884] ">
                                Алматы
                            </h3>
                        </div>
                    </button>
                    <button onClick={() => router.push("/trainer_quiz_page2")}>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px] hover:p-[30px] hover:border-[#D08884] hover:border-[3px] transition ease-in-out duration-200">
                            <img
                                className="mr-[16px] lg:mr-[32px] lg:h-[24px] lg:w-[24px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold hover:text-[#D08884] ">
                                Нур-Султан
                            </h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrainerQuiz_1;
