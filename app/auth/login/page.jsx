"use client";
import { validateLogin } from "@/components/utils/validateForm";
import { useLoginMutation } from "@/redux/features/authAPISlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import isEmpty from "@/components/utils/isEmpty";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";

// export const metadata = {
//     title: "YuuSell | Login page",
//     description: "YuuSell login page",
// };

function LoginPage() {
    const submitBtnRef = useRef(null);
    const router = useRouter();
    const [login, { isLoading }] = useLoginMutation();
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState(null);

    const { email, password } = formData;

    const onChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        setFormErrors(validateLogin(formData));
    }, [formData]);

    const onSubmit = (event) => {
        event.preventDefault();

        if (isEmpty(formErrors)) {
            login({ email, password })
                .unwrap()
                .then((res) => {
                    dispatch(setAuth());

                    toast.success("Logged in", {
                        className: "fs-14",
                    });
                })
                .catch((error) => {
                    const firstKey = Object.keys(error.data)[0]; // Get the first key
                    const firstMessage = error.data[firstKey]; // Get the first message from the array under that key

                    toast.error(`${firstMessage}`, { className: "fs-14" });
                });
        }
    };

    return (
        <div className="row mx-0 mt-4 w-100 ">
            <div className="col-11 col-lg-4 mx-auto px-3 py-4 p-md-4 bg-white shadow-sm ">
                <div className="fw-bold text-center fs-5">Sign in</div>
                <div className="text-center fs-14 mt-1 ">
                    Log in to your Yuusell account or{" "}
                    <Link href="/auth/register" className="main-link">
                        create one
                    </Link>
                </div>
                <input
                    type="email"
                    className="form-control fs-14 mt-4 rounded-0 border shadow-none"
                    id="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") submitBtnRef.current.click();
                    }}
                    placeholder="Password"
                />
                <div className="d-flex justify-content-end align-items-center">
                    <Link
                        href="/auth/reset-password"
                        className="text-muted fs-14 pt-2 main-link"
                    >
                        Forgot password?
                    </Link>
                </div>

                <button
                    disabled={!isEmpty(formErrors)}
                    onClick={onSubmit}
                    ref={submitBtnRef}
                    className="btn btn-main fs-14 w-100 mt-2 fw-bold rounded-small"
                >
                    {isLoading ? (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        "Sign in"
                    )}
                </button>
                <div className="text-muted mt-3 fs-12">
                    By continuing, you agree to Yuusell&apos;s Conditions of Use
                    and Privacy Notice.
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
