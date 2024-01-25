"use client";
import countries from "@/components/utils/countries";
import isEmpty from "@/components/utils/isEmpty";
import { validateBusinessRegisterSection1 } from "@/components/utils/validateForm";
import { checkPhoneNumber } from "@/redux/actions/authActions";
import {
    useSendVerificationSmsMutation,
    useVerifySmsCodeMutation,
} from "@/redux/features/authAPISlice";
import {
    flushBusinessRegistrationData,
    updateSectionData,
    updateSellerData,
} from "@/redux/features/sellerRegisterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import debounce from "lodash.debounce";

const sectionNumber = 1;

export default function Section1() {
    const dispatch = useAppDispatch();
    const [formErrors, setFormErrors] = useState(null);
    const sectionData = useAppSelector(
        (state) => state.sellerReg.sections[sectionNumber]
    );
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);

    const [sendVerificationSmSFN] = useSendVerificationSmsMutation();
    const [verifySmsCodeFN] = useVerifySmsCodeMutation();

    const [businessInfo, setBusinessInfo] = useState({
        businessName: "",
        businessType: "",
        customBusinessType: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phoneNumber: "",
        verificationCode: "",
        isSmsSent: false,
        isPhoneVerified: false,
        isAgreementAccepted: false,
    });
    const [isPhoneNumberExist, setPhoneNumberExist] = useState(false);
    const [isCheckingPhoneNumber, setCheckingPhoneNumber] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate your form data here

        if (isEmpty(formErrors)) {
            // Dispatch the updateSectionData action with the form data
            dispatch(
                updateSellerData({
                    type: "seller_profile",
                    data: {
                        business_name: businessInfo.businessName,
                        business_type: businessInfo.businessType,
                        custom_business_type: businessInfo.customBusinessType,
                        phone_number: businessInfo.phoneNumber,
                        is_phone_verified: businessInfo.isPhoneVerified,
                        is_agreement_accepted: businessInfo.isAgreementAccepted,
                    },
                })
            );
            dispatch(
                updateSellerData({
                    type: "addresses",
                    data: {
                        pkt: "section1",
                        address_type: "business",
                        address_line1: businessInfo.addressLine1,
                        address_line2: businessInfo.addressLine2,
                        city: businessInfo.city,
                        state: businessInfo.state,
                        zip_code: businessInfo.zip,
                        country: businessInfo.country,
                    },
                })
            );

            dispatch(
                updateSectionData({
                    section: 1,
                    data: businessInfo,
                })
            );
        }
    };

    const handleSmsSend = () => {
        if (!isPhoneNumberExist && isPhoneNumberValid) {
            sendVerificationSmSFN({ phone_number: businessInfo.phoneNumber })
                .unwrap()
                .then((res) => {
                    setBusinessInfo((prevState) => ({
                        ...prevState,
                        isSmsSent: true,
                        isPhoneVerified: false,
                    }));
                    toast.success("Sms code has been sent!", {
                        className: "fs-14",
                    });
                })
                .catch((error) => {
                    toast.error(`Error sending SMS: ${error}`, {
                        className: "fs-14",
                    });
                });
        } else {
            toast.error(`Phone number already exist, so you can't send SMS`, {
                className: "fs-14",
            });
        }
    };
    const handlePhoneVerification = () => {
        if (!isPhoneNumberExist && isPhoneNumberValid) {
            verifySmsCodeFN({
                phone_number: businessInfo.phoneNumber,
                verification_code: businessInfo.verificationCode,
            })
                .unwrap()
                .then((res) => {
                    setBusinessInfo((prevState) => ({
                        ...prevState,
                        isPhoneVerified: true,
                        isSmsSent: false,
                    }));
                    toast.success("Phone number has been verified!", {
                        className: "fs-14",
                    });
                })
                .catch((error) => {
                    toast.error(`Verification code is wrong!`, {
                        className: "fs-14",
                    });
                });
        } else {
            toast.error(`Phone number already exist, so you can't send SMS`, {
                className: "fs-14",
            });
        }
    };

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setBusinessInfo((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    useEffect(() => {
        if (sectionData.isCompleted) {
            setBusinessInfo(sectionData.data);
        }
    }, [sectionData]);

    const handlePhoneNumberChange = (value) => {
        setBusinessInfo({
            ...businessInfo,
            phoneNumber: value,
            isPhoneVerified: false,
            isSmsSent: false,
        });
        validatePhoneNumber(value);
    };

    const validatePhoneNumber = (number) => {
        try {
            const isValid = isValidPhoneNumber(number);
            setIsPhoneNumberValid(isValid);
        } catch {
            setIsPhoneNumberValid(false);
        }
    };

    useEffect(() => {
        setFormErrors(validateBusinessRegisterSection1(businessInfo));
    }, [businessInfo]);

    const fetchUniqueness = (phoneNumber) => {
        setCheckingPhoneNumber(true);
        dispatch(checkPhoneNumber(phoneNumber)).then((res) => {
            setPhoneNumberExist(res?.exists);
            console.log("PHONE CHECK RES", res);
            setCheckingPhoneNumber(false);
        });
    };

    const debouncedCheckPhoneNumber = useCallback(
        debounce((phoneNumber) => {
            fetchUniqueness(phoneNumber);
        }, 500), // 500ms
        [] // Dependencies array, empty means the debounced function will be created only once
    );

    useEffect(() => {
        if (isPhoneNumberValid && businessInfo.phoneNumber?.length > 2) {
            setCheckingPhoneNumber(true);
            debouncedCheckPhoneNumber(businessInfo.phoneNumber);
        }
    }, [businessInfo.phoneNumber]);

    function shouldDisableButton() {
        const isPhoneNumberTooLong = businessInfo.phoneNumber?.length > 5;
        console.log("PHONENUMBER LENGTH", businessInfo.phoneNumber?.length);
        return (
            !isPhoneNumberValid ||
            isPhoneNumberExist ||
            isCheckingPhoneNumber ||
            !isPhoneNumberTooLong
        );
    }
    return (
        <div className="row pt-5 mx-0 mb-4 mb-md-0">
            <form className="col-md-8 mx-auto fs-14" onSubmit={handleSubmit}>
                <div className="bg-white shadow-sm p-4 rounded-small">
                    {/* Business Name Input */}
                    <div className="mb-3">
                        <label
                            htmlFor="businessName"
                            className="form-label fw-medium"
                        >
                            Business Name{" "}
                            <span className="text-muted">
                                (registered name)
                            </span>
                        </label>
                        <input
                            type="text"
                            className="form-control fs-14  rounded-0 border shadow-none"
                            id="businessName"
                            name="businessName"
                            value={businessInfo.businessName}
                            onChange={handleInputChange}
                            placeholder="Business name"
                        />
                    </div>

                    {/* Business Type Select */}
                    <div className="mb-3">
                        <label
                            htmlFor="businessType"
                            className="form-label fw-medium"
                        >
                            Business Type
                        </label>
                        <select
                            className="form-select fs-14  rounded-0 border shadow-none"
                            id="businessType"
                            name="businessType"
                            value={businessInfo.businessType}
                            onChange={handleInputChange}
                            aria-label="Default select example"
                        >
                            <option value="" disabled>
                                Select a business type
                            </option>
                            <option value="Sole Proprietorship">
                                Sole Proprietorship
                            </option>
                            <option value="General Partnership (GP)">
                                General Partnership (GP)
                            </option>
                            <option value="Limited Partnership (LP)">
                                Limited Partnership (LP)
                            </option>
                            <option value="Limited Liability Partnership (LLP)">
                                Limited Liability Partnership (LLP)
                            </option>
                            <option value="C Corporation">C Corporation</option>
                            <option value="S Corporation">S Corporation</option>
                            <option value="B Corporation">B Corporation</option>
                            <option value="Limited Liability Company (LLC)">
                                Limited Liability Company (LLC)
                            </option>
                            <option value="Nonprofit Organization">
                                Nonprofit Organization
                            </option>
                            <option value="Cooperative (Co-op)">
                                Cooperative (Co-op)
                            </option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    {businessInfo.businessType === "Other" && (
                        <div className="mb-3">
                            <label
                                htmlFor="businessType"
                                className="form-label fw-medium"
                            >
                                &quot;Other&quot; business type name
                            </label>
                            <input
                                type="text"
                                className="form-control fs-14  rounded-0 border shadow-none"
                                id="customBusinessType"
                                name="customBusinessType"
                                value={businessInfo.customBusinessType}
                                onChange={handleInputChange}
                                placeholder="Please specify your business type"
                            />
                        </div>
                    )}
                </div>

                <div className="bg-white shadow-sm p-4 rounded-small mt-3">
                    {/* Business Address Inputs */}
                    <div className="mb-3">
                        <label
                            htmlFor="addressLine1"
                            className="form-label fw-medium"
                        >
                            Business Address
                        </label>
                        <div className="row row-cols-2">
                            <div>
                                {/* Country Select */}
                                <select
                                    className="form-select fs-14  rounded-0 border shadow-none"
                                    id="country"
                                    name="country"
                                    value={businessInfo.country}
                                    onChange={handleInputChange}
                                    aria-label="Default select example"
                                    required
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
                                {/* Address Line 1 */}
                                <input
                                    type="text"
                                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                                    id="addressLine1"
                                    name="addressLine1"
                                    value={businessInfo.addressLine1}
                                    onChange={handleInputChange}
                                    placeholder="Address line 1"
                                />
                                {/* City */}
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
                                {/* ZIP Code */}
                                <input
                                    type="text"
                                    className="form-control fs-14 rounded-0 border shadow-none"
                                    id="zip"
                                    name="zip"
                                    value={businessInfo.zip}
                                    onChange={handleInputChange}
                                    placeholder="ZIP / Postal code"
                                />
                                {/* Address Line 2 */}
                                <input
                                    type="text"
                                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                                    id="addressLine2"
                                    name="addressLine2"
                                    value={businessInfo.addressLine2}
                                    onChange={handleInputChange}
                                    placeholder="Address line 2"
                                />
                                {/* State/Region */}
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

                    {/* Phone Number Input with Verify Button */}
                    <div className="mb-3">
                        <label
                            htmlFor="phoneNumber"
                            className="form-label fw-medium"
                        >
                            Phone number for verification
                        </label>
                        <div className="d-flex flex-wrap mx-0 align-items-start">
                            <div className="px-0">
                                <PhoneInput
                                    international
                                    countryCallingCodeEditable={false}
                                    defaultCountry="US"
                                    value={businessInfo.phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    className={`form-control fs-14 rounded-small customphoneinput shadow-none ${
                                        !isPhoneNumberValid ||
                                        isPhoneNumberExist
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    style={{ width: "280px" }}
                                    id="phoneNumber"
                                    name="phoneNumber"
                                />
                                {!isPhoneNumberValid && (
                                    <div className="invalid-feedback">
                                        Please enter a valid phone number.
                                    </div>
                                )}
                                {isPhoneNumberExist && (
                                    <div className="invalid-feedback">
                                        Phone number already taken.
                                    </div>
                                )}
                                {isCheckingPhoneNumber && (
                                    <div className="invalid-feedback">
                                        Checking uniqueness...
                                    </div>
                                )}
                            </div>
                            {!businessInfo.isPhoneVerified && (
                                <button
                                    onClick={handleSmsSend}
                                    disabled={shouldDisableButton()}
                                    className="btn  btn-main fs-14 fw-bold rounded-small ms-auto mt-2 mt-md-0 ms-md-3"
                                >
                                    Send sms
                                </button>
                            )}
                        </div>
                        {businessInfo.isSmsSent && (
                            <div className="d-flex flex-wrap mx-0 mt-2">
                                <div>
                                    <input
                                        type="tel"
                                        style={{ width: "280px" }}
                                        className="form-control  fs-14 rounded-0 border shadow-none"
                                        id="verificationCode"
                                        name="verificationCode"
                                        value={businessInfo.verificationCode}
                                        onChange={handleInputChange}
                                        placeholder="Verification code"
                                    />
                                </div>
                                <button
                                    onClick={handlePhoneVerification}
                                    disabled={
                                        businessInfo?.verificationCode?.trim()
                                            .length < 6 ||
                                        businessInfo?.verificationCode?.trim()
                                            .length > 8
                                    }
                                    className="btn  btn-main fs-14 fw-bold rounded-small mt-2 mt-md-0 ms-auto ms-md-3"
                                >
                                    Verify
                                </button>
                            </div>
                        )}
                        {businessInfo.isPhoneVerified && (
                            <div className="text-success mt-2">
                                Phone number verified!
                            </div>
                        )}
                    </div>

                    {/* Agreement to Policies */}
                    <div className="mb-3 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input customcheckbox"
                            id="isAgreementAccepted"
                            name="isAgreementAccepted"
                            checked={businessInfo.isAgreementAccepted}
                            onChange={handleInputChange}
                        />
                        <label
                            className="form-check-label d-flex gap-1"
                            htmlFor="isAgreementAccepted"
                        >
                            I agree to the{" "}
                            <Link
                                href="#"
                                className="text-yellow underline-on-hover"
                            >
                                Terms
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="#"
                                className="text-yellow underline-on-hover"
                            >
                                Conditions
                            </Link>
                        </label>
                    </div>
                </div>

                {/* Next Button (Disabled until form is valid) */}
                <div className="d-flex justify-content-end pt-3">
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
