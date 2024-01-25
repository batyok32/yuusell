"use client";
import HelpColumnItem from "@/components/SellerComps/HelpColumnItem/HelpColumnItem";
import { flushBusinessRegistrationData } from "@/redux/features/sellerRegisterSlice";
import React, { useEffect } from "react";

export default function Page() {
    const flushData = () => {
        dispatch(flushBusinessRegistrationData());
    };
    useEffect(() => {
        flushData();
    }, []);

    return (
        <div>
            <div className="row mt-3 mx-0 px-3">
                <div className="col-9 ">
                    <div className="bg-white p-4 shadow-sm rounded-small me-md-2 text-center">
                        <h2 className="fw-bold">
                            Thank <span className="text-main">You!</span>
                        </h2>
                        <p className="fs-14">
                            Thank you for your request to join our team of
                            sellers. Our team will contact you as soon as
                            possible to make an appointment for your full
                            verification.{" "}
                        </p>
                    </div>
                </div>
                <div className="col-3">
                    <div className="bg-white p-4 shadow-sm rounded-small">
                        <h6 className="fw-bold mb-2">Next Steps</h6>
                        <ol className="fs-14">
                            <li>Wait for a contact of our team</li>
                            <li>Waiting for your documents verifiyng</li>
                            <li>
                                Success, now you can access your seller account
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="py-3 px-3">
                <div className="bg-white shadow-sm p-3">
                    <div className="row row-cols-5 mx-0 ">
                        <HelpColumnItem />
                        <HelpColumnItem />
                        <HelpColumnItem />
                        <HelpColumnItem />
                        <HelpColumnItem />
                    </div>
                </div>
            </div>
            {/* Say that thank you for uploading your request to be seller */}
            {/* We will contact you as soon as possible to fully verify your account */}
            {/* Next steps */}
            {/* Help page items */}
        </div>
    );
}
