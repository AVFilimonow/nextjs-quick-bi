import React, { useState } from "react";
import {
    TrainingPage_1,
    TrainingPage_2,
    TrainingPage_3,
    TrainingPage_4,
    TrainingPage_5,
} from "@/components";

export const TrainingQuiz = ({ setOpenModal }) => {
    const [page, setPage] = useState(0);
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return (
                    <TrainingPage_1
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 1:
                return (
                    <TrainingPage_2
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 2:
                return (
                    <TrainingPage_3
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 3:
                return (
                    <TrainingPage_4
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 4:
                return (
                    <TrainingPage_5
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            default:
                return (
                    <TrainingPage_1
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
