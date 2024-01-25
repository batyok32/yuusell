"use client";

import isEmpty from "@/components/utils/isEmpty";
import { validateBusinessRegisterSection3 } from "@/components/utils/validateForm";
import {
    goBackSection,
    updateSectionData,
    updateSellerData,
} from "@/redux/features/sellerRegisterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const sectionNumber = 3;

export default function Section2() {
    const dispatch = useAppDispatch();
    const goBackFn = () => {
        dispatch(goBackSection());
    };
    const sectionData = useAppSelector(
        (state) => state.sellerReg.sections[sectionNumber]
    );
    const [formErrors, setFormErrors] = useState(null);

    const [businessInfo, setBusinessInfo] = useState({
        creditCardNumber: "",
        expirationMonth: "",
        expirationYear: "",
        cardHolderName: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "creditCardNumber") {
            // Remove all non-digit characters
            const digitsOnly = value.replace(/\D+/g, "");

            // Group digits by 4 and join with space
            const formattedValue = digitsOnly.match(/.{1,4}/g)?.join(" ") ?? "";

            setBusinessInfo({ ...businessInfo, [name]: formattedValue });
        } else {
            setBusinessInfo({ ...businessInfo, [name]: value });
        }
    };

    useEffect(() => {
        setFormErrors(validateBusinessRegisterSection3(businessInfo));
    }, [businessInfo]);

    useEffect(() => {
        if (sectionData.isCompleted) {
            setBusinessInfo(sectionData.data);
        }
    }, [sectionData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEmpty(formErrors)) {
            // Dispatch the updateSectionData action with the form data

            dispatch(
                updateSellerData({
                    type: "payment_info",
                    data: {
                        credit_card_number: businessInfo.creditCardNumber,
                        expiration_month: businessInfo.expirationMonth,
                        expiration_year: businessInfo.expirationYear,
                        card_holder_name: businessInfo.cardHolderName,
                    },
                })
            );

            dispatch(
                updateSectionData({
                    section: 3,
                    data: businessInfo,
                })
            );
        }
    };
    return (
        <div className="row pt-5 mx-0 mb-5 mb-md-0">
            <form onSubmit={handleSubmit} className="col-md-8 mx-auto fs-14 ">
                <div className="bg-lightorange  shadow-sm p-4 rounded-small">
                    <label
                        htmlFor="businessName"
                        className="form-label fw-medium"
                    >
                        Monthly subscription fee
                    </label>
                    <p className="text-muted mt-1">
                        You will be charged $1, to verify your credit card.
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Repellat veniam, reiciendis fugit voluptatem
                        necessitatibus ducimus ipsum delectus sequi earum sit
                        nulla quae laboriosam eos illo doloremque vitae porro
                        ullam. Ut?
                    </p>
                </div>

                <div className="bg-white shadow-sm p-4 rounded-small mt-3">
                    <div className="mb-3">
                        <label
                            htmlFor="creditCardNumber"
                            className="form-label fw-medium"
                        >
                            Payment Information
                        </label>
                        <div className="row row-cols-md-2 row-gap-2">
                            <div>
                                <input
                                    type="text"
                                    className="form-control fs-14 rounded-0 border shadow-none"
                                    id="creditCardNumber"
                                    name="creditCardNumber"
                                    value={businessInfo.creditCardNumber}
                                    onChange={handleInputChange}
                                    placeholder="Credit card number"
                                />
                            </div>
                            <div className="d-flex gap-2">
                                <select
                                    className="form-select fs-14 rounded-0 border shadow-none"
                                    id="expirationMonth"
                                    name="expirationMonth"
                                    value={businessInfo.expirationMonth}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>
                                        Month
                                    </option>
                                    {/* Map through months */}
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="form-select fs-14 rounded-0 border shadow-none"
                                    id="expirationYear"
                                    name="expirationYear"
                                    value={businessInfo.expirationYear}
                                    onChange={handleInputChange}
                                >
                                    <option value="" disabled>
                                        Year
                                    </option>
                                    {/* Map through years */}
                                    {[...Array(10)].map((_, i) => (
                                        <option
                                            key={i}
                                            value={new Date().getFullYear() + i}
                                        >
                                            {new Date().getFullYear() + i}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="mt-2">
                            <input
                                type="text"
                                className="form-control fs-14 rounded-0 border shadow-none"
                                id="cardHolderName"
                                name="cardHolderName"
                                value={businessInfo.cardHolderName}
                                onChange={handleInputChange}
                                placeholder="Card holder's name"
                            />
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-end  pt-3">
                    <div
                        onClick={goBackFn}
                        className="btn btn-light fs-15 fw-medium rounded-small border me-2 "
                    >
                        Previous
                    </div>
                    <button
                        type="submit"
                        className="btn btn-main rounded-small fs-15 fw-bold"
                        disabled={!isEmpty(formErrors)}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}
