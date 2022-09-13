import React, { useEffect, useRef } from "react";
import { Button } from "@/components/button/index";
import { Input, Checkbox } from "@/components";

export const TrainingQuiz: React.FC<{ title?: string }> = () => {
    return (
        <div>
            <div className="hidden lg:block">
                <div className="bg-gray px-[176px] pt-[40px] pb-[32px] h-screen flex flex-col">
                    <div className="flex items-center justify-start mb-[32px]">
                        <button className="mr-[128px]">
                            <img
                                className="h-[40px] w-[40px]"
                                src="../../../images/modal/arrow_left.svg"
                                alt=""
                            />
                        </button>
                        <span className="block flex-grow text-[24px]">
                            1 шаг из 4
                        </span>
                        <button>
                            <img
                                src="../../../images/modal/close_btn.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <div className="mb-[32px]">
                        <h2
                            className={
                                "text-h3 uppercase font-familyBold font-bold text-[#292929] mb-[16px]"
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
                            <div className="bg-white max-w-[686px] rounded-xl border-[1px] border-[#737373] p-[32px] mb-[32px] flex items-center">
                                <img
                                    className="mr-[32px] h-[24px] w-[24px]"
                                    src="../../../images/modal/location.svg"
                                    alt=""
                                />
                                <h3 className="text-h5 font-bold uppercase text-[#424242]">
                                    Алматы
                                </h3>
                            </div>
                        </button>
                        <button>
                            <div className="bg-white max-w-[686px] rounded-xl border-[1px] border-[#737373] p-[32px] mb-[32px] flex items-center">
                                <img
                                    className="mr-[32px] h-[24px] w-[24px]"
                                    src="../../../images/modal/location.svg"
                                    alt=""
                                />
                                <h3 className="text-h5 font-bold uppercase text-[#424242]">
                                    Нур-Султан
                                </h3>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="lg:hidden block">
                <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
                    <div className="flex items-center justify-between mb-[32px]">
                        <button className="">
                            <img
                                src="../../../images/modal/arrow_left.svg"
                                alt=""
                            />
                        </button>
                        <span className="">1 шаг из 4</span>
                        <button>
                            <img
                                src="../../../images/modal/close_btn.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <div className="mb-[32px]">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-[#292929]"
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

                    <Button
                        className={`w-[100%] bg-[#D08884] text-white mb-[16px]`}
                    >
                        Далее
                    </Button>
                </div>
                <div className="bg-gray px-[16px] pt-[20px] pb-[32px] flex flex-col">
                    <div className="flex items-center justify-between mb-[32px]">
                        <button className="">
                            <img
                                src="../../../images/modal/arrow_left.svg"
                                alt=""
                            />
                        </button>
                        <span className="">2 шаг из 4</span>
                        <button>
                            <img
                                src="../../../images/modal/close_btn.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <div className="mb-[32px]">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold text-[#292929]"
                            }
                        >
                            Выбери студию
                        </h2>
                        <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                            Выбирай студию в своем городе
                        </span>
                    </div>
                    <div>
                        <button className="block mx-auto">
                            <div className="w-[343px] bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                                <img
                                    src="../../../images/studio/studio_1.png"
                                    alt=""
                                />
                                <div className="p-[16px] flex flex-col items-start">
                                    <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px]">
                                        Studio name
                                    </h3>
                                    <div>
                                        <div className="flex items-center mb-[8px]">
                                            <img
                                                className="mr-[8px]"
                                                src="../../../images/studio/studio_location.svg"
                                                alt=""
                                            />
                                            <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI']">
                                                ЖК Эмират, ул. Жанайдара
                                                Жирентаева 10
                                            </span>
                                        </div>
                                        <div className="flex items-center mb-[8px]">
                                            <img
                                                className="mr-[8px]"
                                                src="../../../images/studio/studio_phone.svg"
                                                alt=""
                                            />
                                            <a
                                                className="text-p2 text-left text-[#525252] font-['PT-Root-UI']"
                                                href="tel:+ 77776543210"
                                            >
                                                + 7 (777) 654 32 10
                                            </a>
                                        </div>
                                        <div className="flex items-start">
                                            <img
                                                className="mr-[8px]"
                                                src="../../../images/studio/studio_calendar.svg"
                                                alt=""
                                            />
                                            <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI']">
                                                пн-вт: 8:00 - 23:00
                                                <br />
                                                сб-вс: 9:00 - 22:00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className="block mx-auto">
                            <div className="w-[343px] bg-white rounded-[20px] border-[1px] border-[#525252] mb-[16px]">
                                <img
                                    src="../../../images/studio/studio_2.png"
                                    alt=""
                                />
                                <div className="p-[16px] flex flex-col items-start">
                                    <h3 className="text-h3 uppercase font-familyBold text-[#292929] mb-[16px]">
                                        Studio name
                                    </h3>
                                    <div>
                                        <div className="flex items-center mb-[8px]">
                                            <img
                                                className="mr-[8px]"
                                                src="../../../images/studio/studio_location.svg"
                                                alt=""
                                            />
                                            <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI']">
                                                ЖК Эмират, ул. Жанайдара
                                                Жирентаева 10
                                            </span>
                                        </div>
                                        <div className="flex items-center mb-[8px]">
                                            <img
                                                className="mr-[8px]"
                                                src="../../../images/studio/studio_phone.svg"
                                                alt=""
                                            />
                                            <a
                                                className="text-p2 text-left text-[#525252] font-['PT-Root-UI']"
                                                href="tel:+ 77776543210"
                                            >
                                                + 7 (777) 654 32 10
                                            </a>
                                        </div>
                                        <div className="flex items-start">
                                            <img
                                                className="mr-[8px]"
                                                src="../../../images/studio/studio_calendar.svg"
                                                alt=""
                                            />
                                            <span className="text-p2 text-left text-[#525252] font-['PT-Root-UI']">
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
                    <Button className={`w-[100%] bg-[#D08884] text-white`}>
                        ДАЛЕЕ
                    </Button>
                </div>
                <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
                    <div className="flex items-center justify-between mb-[32px]">
                        <button className="">
                            <img
                                src="../../../images/modal/arrow_left.svg"
                                alt=""
                            />
                        </button>
                        <span className="">3 шаг из 4</span>
                        <button>
                            <img
                                src="../../../images/modal/close_btn.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <div className="mb-[32px]">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-[#292929]"
                            }
                        >
                            Выбери Абонемент
                        </h2>
                        <span className="text-p4 text-[#737373] font-['PT-Root-UI']">
                            Выбери удобное для себя время занатий
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <button>
                            <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px]">
                                <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px]">
                                    Пробное занятие
                                </h4>
                                <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px]">
                                    Весь день в студии
                                </span>
                                <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929]">
                                    4 999 ₸
                                </h3>
                            </div>
                        </button>
                        <button>
                            <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px]">
                                <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px]">
                                    Безлимит на месяц
                                </h4>
                                <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px]">
                                    Весь месяц в студии
                                </span>
                                <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929]">
                                    24 999 ₸
                                </h3>
                            </div>
                        </button>
                        <button>
                            <div className="w-full flex flex-col items-start p-[16px] border-[1px] border-[#737373] rounded-[20px] mb-[16px]">
                                <h4 className="text-h4 uppercase font-familyBold font-bold text-[#292929] mb-[10px]">
                                    Безлимит на год
                                </h4>
                                <span className="text-p4 text-left text-[#292929] font-['PT-Root-UI'] mb-[10px]">
                                    Весь год в студии
                                </span>
                                <h3 className="text-h3 uppercase font-familyBold font-bold text-[#292929]">
                                    249 999 ₸
                                </h3>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col">
                    <div className="flex items-center justify-between mb-[32px]">
                        <button className="">
                            <img
                                src="../../../images/modal/arrow_left.svg"
                                alt=""
                            />
                        </button>
                        <span className="">4 шаг из 4</span>
                        <button>
                            <img
                                src="../../../images/modal/close_btn.svg"
                                alt=""
                            />
                        </button>
                    </div>
                    <div className="mb-[32px]">
                        <h2
                            className={
                                "text-h2 uppercase font-familyBold font-bold text-[#292929] w-[60%]"
                            }
                        >
                            Оставьте свой номер телефона
                        </h2>
                    </div>
                    <div className="flex flex-col mb-[16px]">
                        <Input
                            className="mb-[16px] w-[100%] lg:min-w-[430px]"
                            type="name"
                            placeholder="Имя"
                        />
                        <Input
                            className="mb-[16px] w-[100%] lg:min-w-[430px]"
                            type="phone"
                            placeholder="Телефон"
                        />
                    </div>
                    <div className="mb-[32px] flex items-start relative">
                        <Checkbox />
                        <span
                            className={
                                "text-p2 text-black font-['PT-Root-UI'] block ml-[36px]"
                            }
                        >
                            Нажимая кнопку “Отправить”, я даю свое согласие на
                            обработку моих персональных данных
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
