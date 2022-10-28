import React from "react";
import { useRouter } from "next/router";

export function TrainerPage_5({
    formData,
    setFormData,
    handleSubmit,
    goBack,
    setOpenModal,
}) {
    const router = useRouter();
    const { city, studio, trainer, pack, name, phone } = formData;
    return (
        <div>
            <div className="bg-gray px-[16px] pt-[20px] pb-[32px] h-screen lg:min-h-screen flex flex-col lg:px-[176px] lg:pt-[40px]">
                <div className="flex items-center justify-between lg:justify-start mb-[32px]">
                    <button onClick={goBack} className="lg:mr-[128px]">
                        <img
                            className="lg:h-[40px] lg:w-[40px]"
                            src="../../../images/modal/arrow_left.svg"
                            alt=""
                        />
                    </button>
                    <span className="lg:block lg:flex-grow lg:text-[24px]">
                        5 шаг из 4
                    </span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        <img src="../../../images/modal/close_btn.svg" alt="" />
                    </button>
                </div>
                <div className="mb-[32px] lg:mb-[100px]">
                    <h2
                        className={
                            "text-h2 uppercase font-familyBold font-bold text-[#292929] w-[60%] lg:text-h3"
                        }
                    >
                        Итоговые данные
                    </h2>
                </div>
                <p
                    className={
                        "text-p2 uppercase font-familyBold font-bold text-[#292929] w-[60%] lg:text-p2"
                    }
                >
                    <strong>Город:</strong> {city}
                </p>
                <p
                    className={
                        "text-p2 uppercase font-familyBold font-bold text-[#292929] w-[60%] lg:text-p2"
                    }
                >
                    <strong>Тренер :</strong> {trainer}
                </p>
                <p
                    className={
                        "text-p2 uppercase font-familyBold font-bold text-[#292929] w-[60%] lg:text-p2"
                    }
                >
                    <strong>Пакет :</strong> {pack}
                </p>
                <p
                    className={
                        "text-p2 uppercase font-familyBold font-bold text-[#292929] w-[60%] lg:text-p2"
                    }
                >
                    <strong>Имя :</strong> {name}
                </p>
                <p
                    className={
                        "text-p2 uppercase font-familyBold font-bold text-[#292929] w-[60%] lg:text-p2"
                    }
                >
                    <strong>Телефон :</strong> {phone}
                </p>
            </div>
        </div>
    );
}
