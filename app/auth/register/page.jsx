"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRegisterMutation } from "@/redux/features/authAPISlice";
import { toast } from "react-toastify";
import isEmpty from "@/components/utils/isEmpty";
import { validateRegister } from "@/components/utils/validateForm";
import { useRouter } from "next/navigation";

// export const metadata = {
//     title: "YuuSell | Register page",
//     description: "YuuSell register page",
// };

function RegisterPage() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();
    const submitBtnRef = useRef(null);

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        re_password: "",
    });

    const [formErrors, setFormErrors] = useState(null);

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    useEffect(() => {
        setFormErrors(validateRegister(formData));
    }, [formData]);

    const onSubmit = (event) => {
        event.preventDefault();

        register({ first_name, last_name, email, password, re_password })
            .unwrap()
            .then((res) => {
                toast.success("Please check email to verify account", {
                    className: "fs-14",
                });
                router.push("/auth/login");
            })
            .catch((error) => {
                const firstKey = Object.keys(error.data)[0]; // Get the first key
                const firstMessage = error.data[firstKey][0]; // Get the first message from the array under that key

                toast.error(`${firstMessage}`, { className: "fs-14" });
            });
    };

    return (
        <div className="row mx-0 mt-4 w-100 ">
            <div className="col-11 col-lg-4 mx-auto px-3 py-4 p-md-4 bg-white shadow-sm ">
                <div className="fw-bold text-center fs-5">Register</div>
                <div className="text-center fs-14 mt-1 ">
                    Open new Yuusell account or
                    <Link href="/auth/login" className="main-link ms-1">
                        log in
                    </Link>
                </div>

                <input
                    type="text"
                    className="form-control fs-14 mt-4 rounded-0 border shadow-none"
                    id="first_name"
                    name="first_name"
                    value={first_name}
                    onChange={onChange}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                    id="last_name"
                    name="last_name"
                    value={last_name}
                    onChange={onChange}
                    placeholder="Last Name"
                />
                <input
                    type="email"
                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
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
                    placeholder="Password"
                />
                <input
                    type="password"
                    className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                    id="re_password"
                    name="re_password"
                    value={re_password}
                    onChange={onChange}
                    placeholder="Confirm password"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") submitBtnRef.current.click();
                    }}
                />

                <button
                    disabled={!isEmpty(formErrors)}
                    onClick={onSubmit}
                    ref={submitBtnRef}
                    className="btn btn-main fs-14 w-100 mt-2 fw-bold rounded-small "
                >
                    {isLoading ? (
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        "Register"
                    )}
                </button>
                <div className="text-muted mt-3 fs-12">
                    By continuing, you agree to Yuusell&apos;s Conditions of Use
                    and Privacy Notice.
                </div>
                <hr />
                <div className="text-center fs-14 mt-1 ">
                    Want to become seller?{" "}
                    <Link href="/business" className="main-link">
                        Seller
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
