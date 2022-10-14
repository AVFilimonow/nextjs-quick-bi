import React, { useState } from "react";
import { useMultipleForm } from "usetheform";

import { WizardFormFirstPage, WizardFormSecondPage } from "@/components";

const TrainingForm = (props) => {
    const [currentPage, setPage] = useState(1);
    const nextPage = () => setPage((prev) => ++prev);
    const prevPage = () => setPage((prev) => --prev);

    const [getWizardState, wizard] = useMultipleForm();
    const onSubmitWizard = () => console.log(getWizardState());
    console.log(wizard);
    return (
        <div className="App">
            <div className="hidden lg:flex items-start justify-between ">
                <h2
                    className={
                        "text-h2 lg:text-[64px] lg:leading-[70px] uppercase font-familyBold font-bold text-black mb-[32px]"
                    }
                >
                    Форма записи <br /> на пробное занятие
                </h2>
                <button
                    onClick={() => {
                        props.setOpenModal(false);
                    }}
                >
                    <img src="../../../images/modal/close_btn.svg" alt="" />
                </button>
            </div>
            {currentPage === 1 && (
                <WizardFormFirstPage {...wizard} onSubmit={nextPage} />
            )}
            {currentPage === 2 && (
                <WizardFormSecondPage
                    {...wizard}
                    prevPage={prevPage}
                    onSubmit={onSubmitWizard}
                />
            )}
        </div>
    );
};

export default TrainingForm;
