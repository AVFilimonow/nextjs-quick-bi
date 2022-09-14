import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Input, Checkbox } from "@/components";

export const TrainingQuiz: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
                <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                    <button className="lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="lg:block lg:flex-grow lg:text-[24px]">
                        1 шаг из 4
                    </span>
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px] lg:mb-[64px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[16px]"
                        }
                    >
                        Выбери город
                    </h2>
                    <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                        Выбирай студию в своем городе
                    </span>
                </div>
                <div className="flex flex-col grow">
                    <button>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px]">
                            <img
                                className="mr-[16px] lg:mr-[32px] lg:h-[24px] lg:w-[24px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold">
                                Алматы
                            </h3>
                        </div>
                    </button>
                    <button>
                        <div className="rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px]">
                            <img
                                className="mr-[16px] lg:mr-[32px] lg:h-[24px] lg:w-[24px]"
                                src="../../../images/modal/location.svg"
                                alt=""
                            />
                            <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold">
                                Нур-Султан
                            </h3>
                        </div>
                    </button>
                </div>
                <Button
                    className={`lg:hidden w-[100%] bg-[#D08884] text-white mb-[16px]`}
                >
                    Далее
                </Button>
            </div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
                <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                    <button className="lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="lg:block lg:flex-grow lg:text-[24px]">
                        2 шаг из 4
                    </span>
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px] lg:mb-[64px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[16px]"
                        }
                    >
                        Выбери студию
                    </h2>
                    <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                        Выбирай студию в своем городе
                    </span>
                </div>
                <div className="lg:flex lg:justify-between lg:flex-wrap">
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
                                        </span>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_phone.svg"
                                            alt=""
                                        />
                                        <a
                                            className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                            href="tel:+ 77776543210"
                                        >
                                            + 7 (777) 654 32 10
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_calendar.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            пн-вт: 8:00 - 23:00
                                            <br />
                                            сб-вс: 9:00 - 22:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
                                        </span>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_phone.svg"
                                            alt=""
                                        />
                                        <a
                                            className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                            href="tel:+ 77776543210"
                                        >
                                            + 7 (777) 654 32 10
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_calendar.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            пн-вт: 8:00 - 23:00
                                            <br />
                                            сб-вс: 9:00 - 22:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
                                        </span>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_phone.svg"
                                            alt=""
                                        />
                                        <a
                                            className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                            href="tel:+ 77776543210"
                                        >
                                            + 7 (777) 654 32 10
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_calendar.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            пн-вт: 8:00 - 23:00
                                            <br />
                                            сб-вс: 9:00 - 22:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
                                        </span>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_phone.svg"
                                            alt=""
                                        />
                                        <a
                                            className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                            href="tel:+ 77776543210"
                                        >
                                            + 7 (777) 654 32 10
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_calendar.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            пн-вт: 8:00 - 23:00
                                            <br />
                                            сб-вс: 9:00 - 22:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    <button className="block mx-auto lg:mx-[0px] lg:w-[20%] lg:mr-[32px] lg:mb-[32px]">
                        <div className="w-[343px] lg:w-full bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                            <img
                                className="w-[343px] lg:w-full"
                                src="../../../images/studio/studio_1.png"
                                alt=""
                            />
                            <div className="p-[16px] flex flex-col items-start">
                                <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px] lg:text-h5">
                                    Studio name
                                </h3>
                                <div>
                                    <div className="flex items-center mb-[8px] lg:items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_location.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            ЖК Эмират, ул. Жанайдара Жирентаева
                                            10
                                        </span>
                                    </div>
                                    <div className="flex items-center mb-[8px]">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_phone.svg"
                                            alt=""
                                        />
                                        <a
                                            className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]"
                                            href="tel:+ 77776543210"
                                        >
                                            + 7 (777) 654 32 10
                                        </a>
                                    </div>
                                    <div className="flex items-start">
                                        <img
                                            className="mr-[8px] lg:w-[24px] lg:h-[24px]"
                                            src="../../../images/studio/studio_calendar.svg"
                                            alt=""
                                        />
                                        <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI'] lg:text-[16px] lg:leading-[21px]">
                                            пн-вт: 8:00 - 23:00
                                            <br />
                                            сб-вс: 9:00 - 22:00
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <Button
                    className={`lg:hidden w-[100%] bg-[#D08884] text-white`}
                >
                    ДАЛЕЕ
                </Button>
            </div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col lg:px-[176px] lg:pt-[40px]">
                <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                    <button className="lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="lg:block lg:flex-grow lg:text-[24px]">
                        3 шаг из 4
                    </span>
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px] lg:mb-[64px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold text-[#292929] lg:text-h3 lg:mb-[16px]"
                        }
                    >
                        Выбери Абонемент
                    </h2>
                    <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                        Выбери удобное для себя время занятий
                    </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-between">
                    <button className="lg:w-[30%]">
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px]">
                                Пробное занятие
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px]">
                                Весь день в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4">
                                4 999 ₸
                            </h3>
                        </div>
                    </button>
                    <button className="lg:w-[30%]">
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px]">
                                Безлимит на месяц
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px]">
                                Весь месяц в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4">
                                24 999 ₸
                            </h3>
                        </div>
                    </button>
                    <button className="lg:w-[30%]">
                        <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px] lg:p-[40px]">
                            <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px] lg:text-h5 lg:mb-[8px]">
                                Безлимит на год
                            </h4>
                            <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px] lg:text-[18px]">
                                Весь год в студии
                            </span>
                            <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929] lg:text-h4">
                                249 999 ₸
                            </h3>
                        </div>
                    </button>
                </div>
            </div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col lg:px-[176px] lg:pt-[40px]">
                <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                    <button className="lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="lg:block lg:flex-grow lg:text-[24px]">
                        4 шаг из 4
                    </span>
                    <button>
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px] lg:mb-[100px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] w-[60%] lg:text-h3"
                        }
                    >
                        Оставьте свой номер телефона
                    </h2>
                </div>
                <div className="flex flex-col mb-[16px]">
                    <Input
                        className="mb-[16px] w-[100%] lg:min-w-[430px] lg:w-[45%] lg:mb-[64px]"
                        type="name"
                        placeholder="Имя"
                    />
                    <Input
                        className="mb-[16px] w-[100%] lg:min-w-[430px] lg:w-[45%] lg:mb-[140px]"
                        type="phone"
                        placeholder="Телефон"
                    />
                </div>
                <div className="mb-[32px] flex items-start relative lg:mb-[64px]">
                    <Checkbox />
                    <span
                        className={
                            "text-p2 text-black font-['PT-Root-UI'] block ml-[36px] lg:text-[16px] lg:w-[25%] lg:leading-[21px]"
                        }
                    >
                        Нажимая кнопку “Отправить”, я даю свое согласие на
                        обработку моих персональных данных
                    </span>
                </div>
                <Button
                    className={`hidden lg:block lg:w-[300px] bg-[#D08884] text-white`}
                >
                    ДАЛЕЕ
                </Button>
            </div>
        </div>
    );
};
