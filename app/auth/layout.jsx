import Link from "next/link";

export default function AuthLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Link
                href="/"
                className="d-flex align-items-center justify-content-center"
            >
                <div className="bg-white p-3 shadow-sm rounded-1 w-100 d-flex justify-content-center">
                    <img src="/logo2.jpg" height={40} />
                    <img
                        src="/logo3.jpg"
                        height={30}
                        style={{ marginLeft: "-8px" }}
                    />{" "}
                </div>
            </Link>
            {children}
            <div className="mt-auto">
                <div className="border-top d-none d-md-flex justify-content-center fs-13 text-muted mt-3 py-3">
                    Copyright © 2024 Yuusell Inc. All Rights Reserved.
                    Accessibility, User Agreement, Privacy, Payments Terms of
                    Use, Cookies, CA Privacy Notice, Your Privacy Choices and
                    AdChoice
                </div>
            </div>
        </div>
    );
}
