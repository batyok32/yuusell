"use client";
import { useResetPasswordMutation } from "@/redux/features/authAPISlice";
import { useState } from "react";
import { toast } from "react-toastify";

function ResetPasswordPage() {
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const [email, setEmail] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        resetPassword(email)
            .unwrap()
            .then((res) => {
                toast.success("Request sent, check your email for reset link", {
                    className: "fs-14",
                });
            })
            .catch((error) => {
                toast.error(`Failed to send request`, { className: "fs-14" });
            });
    };

    return (
        <div className="row mx-0 mt-4 w-100 ">
            <div className="col-11 col-lg-4 mx-auto px-3 py-4 p-md-4 bg-white shadow-sm ">
                <div className="fw-bold text-center fs-5">Reset password</div>
                <div className="text-center fs-14 mt-1 ">
                    Enter the email address or mobile phone number associated
                    with your Yuusell account.
                </div>
                <form onSubmit={onSubmit}>
                    <input
                        type="email"
                        className="form-control fs-14 mt-4 rounded-0 border shadow-none"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />

                    <button
                        type="submit"
                        className="btn btn-main fs-14 w-100 mt-2 fw-bold rounded-small"
                    >
                        {isLoading ? (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        ) : (
                            "Reset Password"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ResetPasswordPage;
