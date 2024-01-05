import Link from "next/link";
import Image from "next/image";

function RegisterPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Link
                href="/"
                className="d-flex align-items-center justify-content-center"
            >
                <div className="bg-white mt-3 p-3 shadow-sm rounded-1">
                    <img src="/logo2.jpg" height={40} />
                    <img
                        src="/logo3.jpg"
                        height={30}
                        style={{ marginLeft: "-8px" }}
                    />{" "}
                </div>
            </Link>

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
                        class="form-control fs-14 mt-4 rounded-0 border shadow-none"
                        id="exampleFormControlInput1"
                        placeholder="Full Name"
                    />
                    <input
                        type="email"
                        class="form-control fs-14 mt-2 rounded-0 border shadow-none"
                        id="exampleFormControlInput1"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        class="form-control fs-14 mt-2 rounded-0 border shadow-none"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        class="form-control fs-14 mt-2 rounded-0 border shadow-none"
                        id="exampleFormControlInput1"
                        placeholder="Re-enter password"
                    />

                    <button className="btn btn-main fs-14 w-100 mt-2 fw-bold rounded-0">
                        Register
                    </button>
                    <div className="text-muted mt-3 fs-12">
                        By continuing, you agree to Yuusell&apos;s Conditions of
                        Use and Privacy Notice.
                    </div>
                    <hr />
                    <div className="text-center fs-14 mt-1 ">
                        Want to become seller?{" "}
                        <Link href="/auth/login" className="main-link">
                            Seller
                        </Link>
                    </div>
                </div>
            </div>

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

export default RegisterPage;
