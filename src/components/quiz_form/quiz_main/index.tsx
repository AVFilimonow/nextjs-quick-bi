import React, { useState } from "react";
import {
    QuizCity,
    QuizPack,
    QuizPersonal,
    QuizCheck,
    QuizStudio,
    QuizTrainer,
} from "@/components";

export const QuizMain = ({ setOpenModal, studioModal }) => {
    const [page, setPage] = useState(0);

    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return (
                    <QuizCity
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 1:
                return (
                    <>
                        {studioModal && (
                            <QuizStudio
                                setOpenModal={setOpenModal}
                                formData={formData}
                                setFormData={setFormData}
                                handleSubmit={handleSubmit}
                                goBack={goBack}
                            />
                        )}
                        {!studioModal && (
                            <QuizTrainer
                                setOpenModal={setOpenModal}
                                formData={formData}
                                setFormData={setFormData}
                                handleSubmit={handleSubmit}
                                goBack={goBack}
                            />
                        )}
                    </>
                );
            case 2:
                return (
                    <QuizPack
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 3:
                return (
                    <QuizPersonal
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 4:
                return (
                    <QuizCheck
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            default:
                return (
                    <QuizCity
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
        }
    };
    function handleSubmit() {
        setPage(page + 1);
    }
    function goBack() {
        setPage(page - 1);
    }
    const [formData, setFormData] = useState({
        city: "",
        studio: "",
        pack: "",
        name: "",
        phone: "",
    });

    return (
        <>
            {conditionalComponent()}
            {/* <button onClick={handleSubmit}>{page === 0 || page === 1 ? "Next" : "Submit"}</button> */}
        </>
    );
};
