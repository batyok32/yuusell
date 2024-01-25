"use client";
// TODO: REMOVE GET FUNCTION AND PUT OR POST OR AXIOS GET
import isEmpty from "@/components/utils/isEmpty";
import {
    goBackSection,
    updateSectionData,
    updateSellerData,
} from "@/redux/features/sellerRegisterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash.debounce";
import { checkStoreName } from "@/redux/actions/authActions";

const sectionNumber = 4;

export default function Section2() {
    const dispatch = useAppDispatch();
    const goBackFn = () => {
        dispatch(goBackSection());
    };
    const [businessInfo, setBusinessInfo] = useState({
        storeName: "",
    });
    const sectionData = useAppSelector(
        (state) => state.sellerReg.sections[sectionNumber]
    );
    const [formErrors, setFormErrors] = useState(null);
    const [exists, setExist] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setBusinessInfo({ ...businessInfo, [name]: value });
    };

    const fetchUniqueness = (storeName) => {
        setIsLoading(true);
        dispatch(checkStoreName(storeName)).then((res) => {
            setExist(res?.exists);
            setIsLoading(false);
        });
    };

    const debouncedCheckStoreName = useCallback(
        debounce((storeName) => {
            fetchUniqueness(storeName);
        }, 500), // 500ms
        [] // Dependencies array, empty means the debounced function will be created only once
    );

    useEffect(() => {
        if (businessInfo?.storeName?.trim()?.length >= 5) {
            debouncedCheckStoreName(businessInfo.storeName);
        }
    }, [businessInfo.storeName]);

    useEffect(() => {
        const errors = {};

        if (exists) {
            errors["storeName"] = "Store name already exists";
        }
        if (businessInfo?.storeName?.trim()?.length < 5) {
            errors["storeName"] =
                "Store name must be at least 5 characters long.";
        }
        console.log("CHECK", errors);
        setFormErrors(errors);
    }, [exists, businessInfo]);

    useEffect(() => {
        if (sectionData.isCompleted) {
            setBusinessInfo(sectionData.data);
        }
    }, [sectionData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isEmpty(formErrors) && !isLoading) {
            dispatch(
                updateSellerData({
                    type: "seller_profile",
                    data: {
                        store_name: businessInfo.storeName,
                    },
                })
            );
            // Dispatch the updateSectionData action with the form data
            dispatch(
                updateSectionData({
                    section: sectionNumber,
                    data: businessInfo,
                })
            );
        }
    };
    return (
        <div className="row pt-5 mx-0">
            <form onSubmit={handleSubmit} className="col-md-8 mx-auto fs-14 ">
                <div className="bg-white shadow-sm p-4 rounded-small mt-3">
                    <div className="mb-3">
                        <label
                            htmlFor="storeName"
                            className="form-label fw-medium"
                        >
                            Store information
                        </label>
                        <div>
                            <input
                                type="text"
                                className={`form-control fs-14 rounded-small border shadow-none ${
                                    !isEmpty(formErrors)
                                        ? "border-danger"
                                        : "border-success"
                                }`}
                                id="storeName"
                                name="storeName"
                                value={businessInfo.storeName}
                                onChange={handleInputChange}
                                placeholder="Store name"
                            />
                            {/* {isLoading && (
                                <div className="text-muted fs-14">
                                    Checking availability...
                                </div>
                            )} */}
                            {!isEmpty(formErrors) && (
                                <div className="text-danger fs-13 mt-1">
                                    Store name already exists.
                                </div>
                            )}
                            {isEmpty(formErrors) && (
                                <div className="text-success fs-13 mt-1 ">
                                    Store name is available!
                                </div>
                            )}
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
