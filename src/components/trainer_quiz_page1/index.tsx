import React from "react";
import { useRouter } from "next/router";

export function TrainerPage_1({
    formData,
    setFormData,
    handleSubmit,
    goBack,
    setOpenModal,
}) {
    const router = useRouter();

    return (
        <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen flex flex-col lg:px-[176px] lg:pt-[40px] lg:pb-[140px]">
            <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                <span className="lg:block lg:flex-grow lg:text-[24px]">
                    1 шаг из 4
                </span>
                <button
                    onClick={() => {
                        setOpenModal(false);
                    }}
                >
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
                <button
                    onClick={() => {
                        handleSubmit();
                        setFormData({
                            ...formData,
                            city: "Almaty",
                        });
                    }}
                >
                    <div className="group rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px] hover:shadow-[0_0_0_3px_rgba(208,136,132,1)] hover:border-[#D08884] hover:transition-all duration-500">
                        <svg
                            className="mr-[16px] lg:mr-[32px]"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="mr-[16px] lg:mr-[32px] group-hover:stroke-[#D08884]"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z"
                                stroke="#424242"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                className="mr-[16px] lg:mr-[32px] group-hover:stroke-[#D08884]"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z"
                                stroke="#424242"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold group-hover:text-[#D08884]">
                            Алматы
                        </h3>
                    </div>
                </button>
                <button
                    onClick={() => {
                        handleSubmit();
                        setFormData({
                            ...formData,
                            city: "Astana",
                        });
                    }}
                >
                    <div className="group rounded-xl border-[1px] border-[#737373] p-[16px] mb-[16px] flex items-center lg:bg-white lg:max-w-[686px] lg:p-[32px] lg:mb-[32px] hover:shadow-[0_0_0_3px_rgba(208,136,132,1)] hover:border-[#D08884] hover:transition-all duration-500">
                        <svg
                            className="mr-[16px] lg:mr-[32px]"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="mr-[16px] lg:mr-[32px] group-hover:stroke-[#D08884]"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.5 10.5005C14.5 9.11924 13.3808 8 12.0005 8C10.6192 8 9.5 9.11924 9.5 10.5005C9.5 11.8808 10.6192 13 12.0005 13C13.3808 13 14.5 11.8808 14.5 10.5005Z"
                                stroke="#424242"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                className="mr-[16px] lg:mr-[32px] group-hover:stroke-[#D08884]"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M11.9995 21C10.801 21 4.5 15.8984 4.5 10.5633C4.5 6.38664 7.8571 3 11.9995 3C16.1419 3 19.5 6.38664 19.5 10.5633C19.5 15.8984 13.198 21 11.9995 21Z"
                                stroke="#424242"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h3 className="text-h3 uppercase text-[#424242] lg:text-h5 font-bold group-hover:text-[#D08884]">
                            Астана
                        </h3>
                    </div>
                </button>
            </div>
        </div>
    );
}
