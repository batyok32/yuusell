import Link from "next/link";
import Image from "next/image";
// "next/babel",

function LoginPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Link
                href="/"
                className="d-flex align-items-center justify-content-center"
            >
                <div className="bg-white mt-3 p-3 shadow-sm rounded-1">
                    <Image src="/logo2.jpg" alt="" height={40} />{" "}
                    <Image
                        src="/logo3.jpg"
                        alt=""
                        height={30}
                        style={{ marginLeft: "-8px" }}
                    />{" "}
                </div>
            </Link>

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
                        type="text"
                        class="form-control fs-14 mt-4 rounded-0 border shadow-none"
                        id="exampleFormControlInput1"
                        placeholder="Email or username"
                    />
                    <input
                        type="password"
                        class="form-control fs-14 mt-2 rounded-0 border shadow-none"
                        id="exampleFormControlInput1"
                        placeholder="Password"
                    />
                    <div className="d-flex justify-content-between align-items-center">
                        <div class="form-check mt-2 d-flex align-items-center user-select-none">
                            <input
                                class="form-check-input fs-14 text-main customcheckbox"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                class="form-check-label fs-14 ms-2 text-muted "
                                for="flexCheckDefault"
                            >
                                Keep me signed in
                            </label>
                        </div>
                        <Link
                            href="/auth/reset"
                            className="text-muted fs-14 pt-2 main-link"
                        >
                            Forgot password?
                        </Link>
                    </div>
                    <Link href="/account">
                        <button className="btn btn-main fs-14 w-100 mt-2 fw-bold rounded-0">
                            Sign in
                        </button>
                    </Link>
                    <div className="text-muted mt-3 fs-12">
                        By continuing, you agree to Yuusell&apos;s Conditions of
                        Use and Privacy Notice.
                    </div>
                </div>
            </div>

            <div className="d-none d-md-flex border-top  justify-content-center align-items-center px-3 fs-13 text-muted mt-auto py-3">
                Copyright © 2024 Yuusell Inc. All Rights Reserved.
                Accessibility, User Agreement, Privacy, Payments Terms of Use,
                Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice
            </div>
        </div>
    );
}

export default LoginPage;
