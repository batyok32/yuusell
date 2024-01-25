"use client";

import { useAppSelector } from "@/redux/hooks";
import { IconLogout, IconWorld, IconZoomMoney } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";
import LogoutModal from "@/components/AccountPageComponents/LogoutModal/LogoutModal";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function MobileOffcanvas({ children }) {
    const { user, isAuthenticated } = useAppSelector((state) => state.auth);
    const pathname = usePathname();
    const closeBtnRef = useRef();
    const router = useRouter();

    useEffect(() => {
        if (closeBtnRef.current) {
            closeBtnRef.current.click();
        }
    }, [pathname]);

    return (
        <div>
            {children}

            <div
                class="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
            >
                <div class="offcanvas-header d-flex align-items-center border-bottom">
                    <div>
                        <Link href="/" className="d-flex align-items-start">
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
                                style={{ marginLeft: "-8px", height: 35 }}
                            />{" "}
                        </Link>
                    </div>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                        ref={closeBtnRef}
                    ></button>
                </div>
                <div class="offcanvas-body pt-0 d-flex flex-column">
                    <div>
                        <ul className="list-unstyled custom-list">
                            <Link href="/category">
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Categories</span>{" "}
                                    <IconChevronRight size={18} />
                                </li>
                            </Link>
                            <Link href="#">
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Brands</span>{" "}
                                    <IconChevronRight size={18} />
                                </li>
                            </Link>
                            {!isAuthenticated && (
                                <>
                                    <Link href="/auth/login">
                                        <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                            <span>Login</span>{" "}
                                            <IconChevronRight size={18} />
                                        </li>
                                    </Link>
                                    <Link href="/auth/register">
                                        <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                            <span>Register</span>{" "}
                                            <IconChevronRight size={18} />
                                        </li>
                                    </Link>
                                    <Link href="/auth/reset-password">
                                        <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                            <span>Reset password</span>{" "}
                                            <IconChevronRight size={18} />
                                        </li>
                                    </Link>
                                </>
                            )}
                        </ul>
                    </div>

                    {isAuthenticated && user?.is_verified_seller && (
                        <div>
                            <h6 className="text-muted fw-bold fs-15 mt-3 text-center">
                                Seller account details
                            </h6>

                            <ul className="list-unstyled custom-list">
                                <Link href="/seller">
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Dashboard</span>{" "}
                                        <IconChevronRight size={18} />
                                    </li>
                                </Link>
                                <Link href="/seller">
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Listing</span>{" "}
                                        <IconChevronRight size={18} />
                                    </li>
                                </Link>
                                <Link href="/account/profile#logout">
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Logout </span>
                                        <IconLogout size={18} />
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    )}
                    {isAuthenticated && !user?.is_verified_seller && (
                        <div>
                            <h6 className="text-muted fw-bold fs-15 mt-3 text-center">
                                Account details
                            </h6>

                            <ul className="list-unstyled custom-list">
                                <Link href="/account">
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Dashboard</span>{" "}
                                        <IconChevronRight size={18} />
                                    </li>
                                </Link>
                                <Link href="/account/profile">
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Edit profile</span>{" "}
                                        <IconChevronRight size={18} />
                                    </li>
                                </Link>
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Orders</span>{" "}
                                    <IconChevronRight size={18} />
                                </li>
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Returns</span>{" "}
                                    <IconChevronRight size={18} />
                                </li>
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Bought products </span>
                                    <IconChevronRight size={18} />
                                </li>
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Reviews </span>
                                    <IconChevronRight size={18} />
                                </li>
                                <Link href="/account/profile#logout">
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Logout </span>
                                        <IconLogout size={18} />
                                    </li>
                                </Link>
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Currency </span>
                                    <IconChevronRight size={18} />
                                </li>
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Help </span>
                                    <IconChevronRight size={18} />
                                </li>
                                {!user?.is_seller && (
                                    <Link href="/business">
                                        <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                            <span>Become seller </span>
                                            <IconChevronRight size={18} />
                                        </li>
                                    </Link>
                                )}
                            </ul>
                        </div>
                    )}

                    <div className="mt-auto">
                        <div className="d-flex gap-2 justify-content-center">
                            <div>
                                <div className="fw-bold text-center mb-1">
                                    Language{" "}
                                    <IconWorld
                                        size={20}
                                        className="text-main"
                                    />
                                </div>
                                <select
                                    class="form-select pe-5 shadow-none text-lightgray border fs-14  fw-bold rounded-small"
                                    aria-label="Default select example"
                                >
                                    <option selected>English</option>
                                    <option value="1">Russian</option>
                                    <option value="2">Chinese</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div>
                                <div className="fw-bold text-center mb-1">
                                    Currency{" "}
                                    <IconZoomMoney
                                        size={20}
                                        className="text-main"
                                    />
                                </div>
                                <select
                                    class="form-select pe-5 shadow-none text-lightgray border fs-14  fw-bold rounded-small"
                                    aria-label="Default select example"
                                >
                                    <option selected>USD</option>
                                    <option value="1">CNY</option>
                                    <option value="2">Chinese</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>

                        <div
                            role="button"
                            className="border-top pt-2 mt-2 truncate-overflow-1"
                        >
                            Ship to:{" "}
                            <span className="text-main">
                                USA, Washington, Puyallup, 5110 62ND Ave E
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
