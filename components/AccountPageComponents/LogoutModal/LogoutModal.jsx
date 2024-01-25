"use client";
import { useLogoutMutation } from "@/redux/features/authAPISlice";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function LogoutModal({ children }) {
    const [logoutServer] = useLogoutMutation();
    const dispatch = useAppDispatch();
    const closeBtnRef = useRef(null);
    const onSubmit = () => {
        logoutServer()
            .unwrap()
            .then(() => {
                toast.success("Successfully logged out.", {
                    className: "fs-14",
                });
                dispatch(logout());
                closeBtnRef.current.click();
            })
            .catch(() => {
                toast.error("Something went wrong", { className: "fs-14" });
            });
    };
    return (
        <>
            <div
                data-bs-toggle="modal"
                data-bs-target="#logoutModal"
                role="button"
            >
                {children}
            </div>
            <div
                className="modal fade fs-14 text-black"
                id="logoutModal"
                // tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-small border-0 shadow-sm">
                        <div className="modal-header ">
                            <div
                                className="modal-title fs-5 py-0 fw-bold"
                                id="exampleModalLabel"
                            >
                                Confirm Logout
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Are you ready to end your current session? Logging
                            out will end your current session and you will be
                            required to log in again to access your account
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                onClick={onSubmit}
                                className="btn btn-gray fs-14"
                            >
                                Log Out
                            </button>
                            <button
                                type="button"
                                className="btn btn-main fs-14"
                                data-bs-dismiss="modal"
                                ref={closeBtnRef}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
