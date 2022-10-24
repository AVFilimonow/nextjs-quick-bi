import React, { useState } from "react";
import {
    StudioPage_1,
    StudioPage_2,
    StudioPage_3,
    StudioPage_4,
    StudioPage_5,
} from "@/components";

export const StudioQuiz = ({ setOpenModal }) => {
    const [page, setPage] = useState(0);
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return (
                    <StudioPage_1
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 1:
                return (
                    <StudioPage_2
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 2:
                return (
                    <StudioPage_3
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 3:
                return (
                    <StudioPage_4
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            case 4:
                return (
                    <StudioPage_5
                        setOpenModal={setOpenModal}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmit={handleSubmit}
                        goBack={goBack}
                    />
                );
            default:
                return (
                    <StudioPage_1
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
