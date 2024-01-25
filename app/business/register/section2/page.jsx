"use client";

import countries from "@/components/utils/countries";
import isEmpty from "@/components/utils/isEmpty";
import { validateBusinessRegisterSection2 } from "@/components/utils/validateForm";
import {
    goBackSection,
    updateSectionData,
    updateSellerData,
} from "@/redux/features/sellerRegisterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

const sectionNumber = 2;

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
        firstName: "",
        lastName: "",
        citizenshipCountry: "",
        birthCountry: "",
        birthDay: "",
        birthMonth: "",
        birthYear: "",
        residentialCountry: "",
        addressLine1: "",
        city: "",
        addressLine2: "",
        zip: "",
        state: "",
        contactPersonRole: "owner", // owner or legal representative
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate your form data here

        if (isEmpty(formErrors)) {
            // Dispatch the updateSectionData action with the form data

            dispatch(
                updateSellerData({
                    type: "contact_people",
                    data: {
                        pkt: "section2",
                        first_name: businessInfo.firstName,
                        last_name: businessInfo.lastName,
                        citizenship_country: businessInfo.citizenshipCountry,
                        birth_country: businessInfo.birthCountry,
                        birth_date: `${businessInfo.birthYear}-${businessInfo.birthMonth}-${businessInfo.birthDay}`,
                        residential_country: businessInfo.residentialCountry,
                        contact_person_role: businessInfo.contactPersonRole,
                        address_line1: businessInfo.addressLine1,
                        address_line2: businessInfo.addressLine2,
                        city: businessInfo.city,
                        state: businessInfo.state,
                        zip_code: businessInfo.zip,
                    },
                })
            );

            dispatch(
                updateSectionData({
                    section: 2,
                    data: businessInfo,
                })
            );
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBusinessInfo({
            ...businessInfo,
            [name]: value,
        });
    };

    const handleRadioChange = (event) => {
        const { name, id } = event.target; // Assuming id holds the role (owner or legal representative)
        setBusinessInfo({
            ...businessInfo,
            [name]: id,
        });
    };

    useEffect(() => {
        setFormErrors(validateBusinessRegisterSection2(businessInfo));
    }, [businessInfo]);

    useEffect(() => {
        if (sectionData.isCompleted) {
            setBusinessInfo(sectionData.data);
        }
    }, [sectionData]);

    return (
        <div className="row pt-5 mx-0 mb-5 mb-md-0">
            <form className="col-md-8 mx-auto fs-14 " onSubmit={handleSubmit}>
                <div className="bg-white shadow-sm p-4 rounded-small">
                    <div className="mb-3">
                        <label
                            htmlFor="firstName"
                            className="form-label fw-medium"
                        >
                            Primary contact person information
                        </label>
                        <div className="row row-cols-md-2 row-gap-2">
                            <div>
                                <input
                                    type="text"
                                    className="form-control fs-14  rounded-0 border shadow-none"
                                    id="firstName"
                                    name="firstName"
                                    value={businessInfo.firstName}
                                    onChange={handleInputChange}
                                    placeholder="First name"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control fs-14  rounded-0 border shadow-none"
                                    id="lastName"
                                    name="lastName"
                                    value={businessInfo.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Last name"
                                />
                            </div>
                        </div>
                        <div className="row row-cols-md-2 row-gap-3  mt-4">
                            <div className="">
                                <label
                                    htmlFor="citizenshipCountry"
                                    className="form-label fw-medium"
                                >
                                    Country of citizenship
                                </label>
                                <select
                                    className="form-select fs-14 rounded-0 border shadow-none"
                                    id="citizenshipCountry"
                                    name="citizenshipCountry"
                                    value={businessInfo.citizenshipCountry}
                                    onChange={handleInputChange}
                                    aria-label="Default select example"
                                >
                                    <option value="" disabled>
                                        Select a country
                                    </option>

                                    {countries.map((country) => (
                                        <option
                                            key={country.code}
                                            value={country.name}
                                        >
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="birthCountry"
                                    className="form-label fw-medium"
                                >
                                    Country of birth
                                </label>
                                <select
                                    class="form-select fs-14   rounded-0 border shadow-none"
                                    id="birthCountry"
                                    name="birthCountry"
                                    value={businessInfo.birthCountry}
                                    onChange={handleInputChange}
                                    aria-label="Default select example"
                                >
                                    <option value="" disabled>
                                        Select a country
                                    </option>

                                    {countries.map((country) => (
                                        <option
                                            key={country.code}
                                            value={country.name}
                                        >
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="row row-cols-md-2  mt-4">
                            <div>
                                <label
                                    htmlFor="birthDay"
                                    className="form-label fw-medium"
                                >
                                    Date of birth
                                </label>
                                <div className="d-flex">
                                    <div className="">
                                        <select
                                            class="form-select fs-14   rounded-0 border shadow-none"
                                            aria-label="Default select example"
                                            id="birthDay"
                                            name="birthDay"
                                            value={businessInfo.birthDay}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled selected>
                                                Day
                                            </option>

                                            {/* Map through days */}
                                            {[...Array(31)].map((_, i) => (
                                                <option key={i} value={i + 1}>
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="">
                                        <select
                                            className="form-select fs-14 rounded-0 border shadow-none"
                                            id="birthMonth"
                                            name="birthMonth"
                                            value={businessInfo.birthMonth}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled selected>
                                                Month
                                            </option>
                                            {/* Map through months */}
                                            {[...Array(12)].map((_, i) => (
                                                <option key={i} value={i + 1}>
                                                    {i + 1}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="">
                                        <select
                                            className="form-select fs-14 rounded-0 border shadow-none"
                                            id="birthYear"
                                            name="birthYear"
                                            value={businessInfo.birthYear}
                                            onChange={handleInputChange}
                                        >
                                            <option value="" disabled selected>
                                                Year
                                            </option>
                                            {/* Map through years */}
                                            {[...Array(100)].map((_, i) => (
                                                <option
                                                    key={i}
                                                    value={
                                                        new Date().getFullYear() -
                                                        i -
                                                        18
                                                    }
                                                >
                                                    {new Date().getFullYear() -
                                                        i -
                                                        18}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Residential Address */}
                <div className="bg-white shadow-sm p-4 rounded-small mt-3">
                    <div className="mb-3">
                        <label
                            htmlFor="residentialCountry"
                            className="form-label fw-medium"
                        >
                            Residential Address
                        </label>
                        <div className="row row-cols-md-2 row-gap-2">
                            <div>
                                <select
                                    className="form-select fs-14 rounded-0 border shadow-none"
                                    id="residentialCountry"
                                    name="residentialCountry"
                                    value={businessInfo.residentialCountry}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select a country</option>
                                    {countries.map((country) => (
                                        <option
                                            key={country.code}
                                            value={country.name}
                                        >
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                                    id="addressLine1"
                                    name="addressLine1"
                                    value={businessInfo.addressLine1}
                                    onChange={handleInputChange}
                                    placeholder="Address Line 1"
                                />
                                <input
                                    type="text"
                                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                                    id="city"
                                    name="city"
                                    value={businessInfo.city}
                                    onChange={handleInputChange}
                                    placeholder="City / Town"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    className="form-control fs-14  rounded-0 border shadow-none"
                                    id="zip"
                                    name="zip"
                                    value={businessInfo.zip}
                                    onChange={handleInputChange}
                                    placeholder="ZIP / Postal Code"
                                />
                                <input
                                    type="text"
                                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                                    id="addressLine2"
                                    name="addressLine2"
                                    value={businessInfo.addressLine2}
                                    onChange={handleInputChange}
                                    placeholder="Address Line 2"
                                />

                                <input
                                    type="text"
                                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                                    id="state"
                                    name="state"
                                    value={businessInfo.state}
                                    onChange={handleInputChange}
                                    placeholder="State / Region"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Confirm if Primary Contact Person */}
                <div className="bg-white shadow-sm p-4 rounded-small mt-3">
                    <div className="mb-3">
                        <label
                            htmlFor="contactPersonRole"
                            className="form-label fw-medium mb-3"
                        >
                            Confirm if primary contact person
                        </label>
                        <div>
                            <div className="form-check">
                                <input
                                    className="form-check-input customradio"
                                    type="radio"
                                    name="contactPersonRole"
                                    id="owner"
                                    value="owner"
                                    checked={
                                        businessInfo.contactPersonRole ===
                                        "owner"
                                    }
                                    onChange={handleRadioChange}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="owner"
                                >
                                    is an owner of the business
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input customradio"
                                    type="radio"
                                    name="contactPersonRole"
                                    id="legalRepresentative"
                                    value="legalRepresentative"
                                    checked={
                                        businessInfo.contactPersonRole ===
                                        "legalRepresentative"
                                    }
                                    onChange={handleRadioChange}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="legalRepresentative"
                                >
                                    is a legal representative of the business
                                </label>
                            </div>
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
