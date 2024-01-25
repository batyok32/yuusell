"use client";
import { useLogoutMutation } from "@/redux/features/authAPISlice";
import { logout } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function LogoutButton({ children }) {
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
    return <div onClick={() => onSubmit()}>{children}</div>;
}
