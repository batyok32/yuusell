import Link from "next/link";
import Image from "next/image";

function LoginPage() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Link
                href="/"
                className="d-flex align-items-center justify-content-center"
            >
                <div className="bg-white mt-3 p-3 shadow-sm rounded-1">
                    <Image src="/logo2.jpg" height={40} />{" "}
                    <Image
                        src="/logo3.jpg"
                        height={30}
                        style={{ marginLeft: "-8px" }}
                    />{" "}
                </div>
            </Link>

            <div className="row mx-0 mt-4 w-100 ">
                <div className="col-4 mx-auto p-4 bg-white shadow-sm ">
                    <div className="fw-bold text-center fs-5">
                        Reset password
                    </div>
                    <div className="text-center fs-14 mt-1 ">
                        Enter the email address or mobile phone number
                        associated with your Yuusell account.
                    </div>
                    <input
                        type="text"
                        class="form-control fs-14 mt-4 rounded-0 border shadow-none"
                        id="exampleFormControlInput1"
                        placeholder="Email or mobile phone"
                    />

                    <button className="btn btn-main fs-14 w-100 mt-2 fw-bold rounded-0">
                        Reset password
                    </button>
                </div>
            </div>

            {/* Footer */}
            <div className="border-top d-flex justify-content-center fs-13 text-muted mt-auto py-3">
                Copyright © 2024 Yuusell Inc. All Rights Reserved.
                Accessibility, User Agreement, Privacy, Payments Terms of Use,
                Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice
            </div>
        </div>
    );
}

export default LoginPage;
