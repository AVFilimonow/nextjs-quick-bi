import React, { useState } from "react";
import {
    TrainerPage_1,
    TrainerPage_2,
    TrainerPage_3,
    TrainerPage_4,
    TrainerPage_5,
} from "@/components";

export const TrainerQuiz = ({ setOpenModal }) => {
    const [page, setPage] = useState(0);
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return (
                    <TrainerPage_1
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 1:
                return (
                    <TrainerPage_2
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 2:
                return (
                    <TrainerPage_3
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 3:
                return (
                    <TrainerPage_4
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 4:
                return (
                    <TrainerPage_5
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            default:
                return (
                    <TrainerPage_1
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
        trainer: "",
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
