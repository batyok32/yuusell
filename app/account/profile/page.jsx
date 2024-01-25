"use client";

import LogoutButton from "@/components/AccountPageComponents/LogoutModal/LogoutButton";
import LogoutModal from "@/components/AccountPageComponents/LogoutModal/LogoutModal";
import { useEditProfileMutation } from "@/redux/features/authAPISlice";
import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
    const { user } = useAppSelector((state) => state.auth);
    const [editProfile] = useEditProfileMutation();

    const [formData, setFormData] = useState({
        first_name: user?.first_name,
        last_name: user?.last_name,
    });
    const { first_name, last_name } = formData;
    const onChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        if (first_name.trim() && last_name.trim()) {
            editProfile(formData)
                .unwrap()
                .then((res) => {
                    toast.success("Profile has been changed.", {
                        className: "fs-14",
                    });
                })
                .catch((error) => {
                    toast.error("Profile couldn't be changed", {
                        className: "fs-14",
                    });
                });
        }
    };

    useEffect(() => {
        if (user) {
            setFormData({
                first_name: user?.first_name,
                last_name: user?.last_name,
            });
        }
    }, [user]);

    return (
        <div className="mt-3 fs-14">
            <div className="row mx-0  w-100 ">
                <div className="col-12 col-lg-6  px-3 py-4 p-md-4  bg-white shadow-sm ">
                    <div className="fw-bold  fs-5">Edit profile</div>
                    <div className=" fs-14 mt-1">
                        Enter the first name and last name associated with your
                        Yuusell account.
                    </div>
                    <form className="mt-2 " onSubmit={onSubmit}>
                        <div>
                            <input
                                type="text"
                                className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                                id="first_name"
                                name="first_name"
                                value={first_name}
                                onChange={onChange}
                                placeholder="First Name"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="form-control fs-14 mt-2 rounded-0 border shadow-none"
                                id="last_name"
                                name="last_name"
                                value={last_name}
                                onChange={onChange}
                                placeholder="Last Name"
                                required
                            />
                        </div>

                        <div className="col-12 d-flex justify-content-center mt-2">
                            <button
                                type="submit"
                                disabled={
                                    !first_name?.trim() && !last_name?.trim()
                                }
                                className="btn btn-main fs-14  px-5 mt-2 fw-bold rounded-small"
                            >
                                Edit
                                {/* {isLoading ? (
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">
                                    Loading...
                                </span>
                            </div>
                        ) : (
                            "Reset Password"
                        )} */}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 col-lg-6 px-0  ps-md-2  ">
                    <div className="bg-white shadow-sm px-3 py-4 p-md-4 mt-2 mt-md-0">
                        <div className="fw-bold  fs-5">Profile details</div>
                        <div className=" fs-14 mt-1 mb-2">
                            Your profile details
                        </div>
                        <div>
                            <div className="row row-cols-2">
                                <div className="text-muted">First name:</div>
                                <div>
                                    <strong>{user?.first_name}</strong>
                                </div>
                            </div>
                            <div className="row row-cols-2">
                                <div className="text-muted">Last name:</div>
                                <div>
                                    <strong>{user?.last_name}</strong>
                                </div>
                            </div>
                            <div className="row row-cols-2 flex-wrap">
                                <div className="text-muted">Email:</div>
                                <div className="truncate-overflow-1">
                                    <strong>{user?.email}</strong>
                                </div>
                            </div>
                            {user?.is_verified_seller && (
                                <div className="row row-cols-2">
                                    <div className="text-muted">
                                        Verified seller:
                                    </div>
                                    <div>
                                        <strong>Yes</strong>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 mt-2 px-0">
                    <div className="bg-white shadow-sm px-3 py-4 p-md-4 mt-2 mt-md-0">
                        <div className="fw-bold  fs-5">Logout</div>
                        <div className=" fs-14 mt-1 mb-2">
                            Loggging out from your account will end this
                            session.
                        </div>
                        <div
                            id="logout"
                            className="d-flex justify-content-center mt-3"
                        >
                            <LogoutButton>
                                <button className="btn  rounded-small px-5 py-2 btn-danger fs-15 fw-bold">
                                    Logout
                                </button>
                            </LogoutButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
