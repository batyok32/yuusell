"use client";

import { venderDataParse } from "@/components/VenderRegister/venderDataParse";
import isEmpty from "@/components/utils/isEmpty";
import { validateBusinessRegisterSection5 } from "@/components/utils/validateForm";
import { getMe, submitSellerData } from "@/redux/actions/authActions";
import {
    useRefreshTokenMutation,
    useSubmitVenderDataMutation,
} from "@/redux/features/authAPISlice";
import {
    flushBusinessRegistrationData,
    goBackSection,
    updateSectionData,
} from "@/redux/features/sellerRegisterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { IconFile } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const sectionNumber = 5;

export default function Section2() {
    const dispatch = useAppDispatch();
    const goBackFn = () => {
        dispatch(goBackSection());
    };

    const router = useRouter();
    const [refreshToken] = useRefreshTokenMutation();

    const [isLoading, setIsLoading] = useState(false);

    const sectionData = useAppSelector(
        (state) => state.sellerReg.sections[sectionNumber]
    );
    const sellerData = useAppSelector((state) => state.sellerReg.seller_data);
    const [businessInfo, setBusinessInfo] = useState({
        taxIdFile: null,
        nationalIdFile: null,
        proofOfAddressFile: null,
    });

    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        setFormErrors(validateBusinessRegisterSection5(businessInfo));
    }, [businessInfo]);

    useEffect(() => {
        if (sectionData.isCompleted) {
            setBusinessInfo(sectionData.data);
        }
    }, [sectionData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEmpty(formErrors)) {
            const data = venderDataParse(sellerData, businessInfo);
            for (var pair of data.entries()) {
                console.log(pair[0] + " - " + pair[1]);
            }
            console.log("DATA", JSON.parse(data.get("json_data")));
            setIsLoading(true);
            dispatch(submitSellerData(data)).then((res) => {
                setIsLoading(false);
                if (res?.status === 201) {
                    toast.success("Successfully submitted all data", {
                        className: "fs-14",
                    });
                    console.log("RES Successfully", res);
                    dispatch(getMe()).then((res) => {
                        router.push("/business/register/success");
                    });
                } else if (res?.status === 401) {
                    refreshToken()
                        .unwrap()
                        .then((res) => {
                            console.log("REFRESHED AND GOOD NOW");
                        });
                } else {
                    toast.error("Something went wrong", {
                        className: "fs-14",
                    });
                    console.log("Error in submitting", res);
                }
            });
            // submitData(data)
            //     .unwrap()
            //     .then((res) => {
            //         toast.success("Successfully submitted all data", {
            //             className: "fs-14",
            //         });
            //         console.log("RES Successfully", res);
            //     })
            //     .catch((error) => {
            //         toast.error("Something went wrong", { className: "fs-14" });
            //         console.log("Error in submitting documents", error);
            //     });

            // Send all data to django, you can use rtk query
            // get all data from redux sellerData, add to formData
            // add to formData files
            // send an api request with everything
            // show loading screen saying that please wait until files are correctly uploaded and checked
            // if error show toast.errors
            // if success show toast.success and send to page where it says to wait until verification passes

            // dispatch(
            //     updateSectionData({
            //         section: 5,
            //         data: {},
            //     })
            // );
        }
    };

    const handleFileChange = (event, documentType) => {
        const { id, files } = event.target;
        // console.log("File input changed", event.target);

        if (files.length > 0) {
            const file = files[0];
            setBusinessInfo({
                ...businessInfo,
                [id]: { file: file, document_type: documentType },
            });
        }
        // console.log("BUSINESS INFO", businessInfo);
    };

    if (isLoading) {
        return (
            <div
                className="d-flex bg-gray-50 flex-column justify-content-center align-items-center min-vh-100 min-vw-100 position-absolute top-0 "
                style={{ zIndex: 1000 }}
            >
                <div className="mb-4 text-center">
                    <div className="h3 fw-bold ">
                        Uploading your information
                    </div>
                    <p className="fs-14 ">
                        Thank you for your patience, please{" "}
                        <span className="text-main">don&apos;t close</span>{" "}
                        page.
                    </p>
                </div>
                <div
                    class="spinner-border text-main bg-white"
                    style={{ padding: 110 }}
                    role="status"
                ></div>
                <div
                    className="d-flex position-absolute align-items-center"
                    style={{ top: "51%" }}
                >
                    <img
                        src="/logo2.jpg"
                        alt=""
                        style={{ height: 40 }}
                        // fill={true}
                        // className="w-auto"
                    />{" "}
                    <img
                        src="/logo3.jpg"
                        alt=""
                        style={{ marginLeft: "-8px", height: 30 }}
                    />{" "}
                </div>
                <div className="text-muted fs-14 mt-4 text-decoration-underline">
                    Something wrong?
                </div>
            </div>
        );
    }

    return (
        <div className="row pt-5 mx-0 mb-5 mb-md-0">
            <form onSubmit={handleSubmit} className="col-md-8 mx-auto fs-14 ">
                <div className="bg-lightorange  shadow-sm p-4 rounded-small">
                    <label
                        htmlFor="businessName"
                        className="form-label fw-medium"
                    >
                        Meeting to verify identity
                    </label>
                    <p className="text-muted mt-1">
                        Our team will be reaching out to you via phone to
                        schedule your <strong>ID verification meeting</strong>.
                        To ensure a smooth and secure verification process,
                        please be ready to receive this call and confirm the
                        meeting details. We appreciate your vigilance and
                        cooperation in promptly responding to our team
                        member&apos;s inquiries.
                    </p>
                </div>

                <div className="bg-white shadow-sm p-4 rounded-small mt-3">
                    <div className="mb-4">
                        <label
                            // htmlFor="taxIdFile"
                            className="form-label fw-medium"
                        >
                            Upload Tax ID
                        </label>
                        <div>
                            <label
                                className="input-group-text fs-14 border rounded-small shadow-none"
                                htmlFor="taxIdFile"
                            >
                                {businessInfo.taxIdFile?.file ? (
                                    businessInfo.taxIdFile?.file?.name
                                ) : (
                                    <>
                                        Choose file{" "}
                                        <IconFile
                                            className="text-main ms-1"
                                            size={18}
                                        />
                                    </>
                                )}
                            </label>

                            <input
                                type="file"
                                className="form-control fs-14 rounded-0 border shadow-none d-none"
                                onChange={(e) => handleFileChange(e, "Tax ID")}
                                id="taxIdFile"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            // htmlFor="nationalIdFile"
                            className="form-label fw-medium"
                        >
                            Upload National ID document
                        </label>
                        <div>
                            <label
                                className="input-group-text fs-14 border rounded-small shadow-none"
                                htmlFor="nationalIdFile"
                            >
                                {businessInfo.nationalIdFile?.file ? (
                                    businessInfo.nationalIdFile?.file?.name
                                ) : (
                                    <>
                                        Choose file{" "}
                                        <IconFile
                                            className="text-main ms-1"
                                            size={18}
                                        />
                                    </>
                                )}
                            </label>

                            <input
                                type="file"
                                className="form-control fs-14 rounded-0 border shadow-none d-none"
                                onChange={(e) =>
                                    handleFileChange(e, "National ID")
                                }
                                id="nationalIdFile"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            // htmlFor="proofOfAddressFile"
                            className="form-label fw-medium"
                        >
                            Proof of business address
                        </label>
                        <div>
                            <label
                                className="input-group-text fs-14 border rounded-small shadow-none"
                                htmlFor="proofOfAddressFile"
                            >
                                {businessInfo.proofOfAddressFile?.file ? (
                                    businessInfo.proofOfAddressFile?.file?.name
                                ) : (
                                    <>
                                        Choose file{" "}
                                        <IconFile
                                            className="text-main ms-1"
                                            size={18}
                                        />
                                    </>
                                )}
                            </label>

                            <input
                                type="file"
                                className="form-control fs-14 rounded-0 border shadow-none d-none"
                                onChange={(e) =>
                                    handleFileChange(
                                        e,
                                        "Proof of business address"
                                    )
                                }
                                id="proofOfAddressFile"
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
                        // disabled={!isFormValid}
                        disabled={!isEmpty(formErrors)}
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
}
