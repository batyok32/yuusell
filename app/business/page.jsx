"use client";
import { useAppSelector } from "@/redux/hooks";
import {
    IconBook,
    IconCalculator,
    IconMoneybag,
    IconSquareCheck,
} from "@tabler/icons-react";
import Cookie from "js-cookie";
import { useRouter } from "next/navigation";

export default function Page() {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    const router = useRouter();

    const onSubmit = () => {
        // sends to login page with adding cookie of seller
        if (isAuthenticated) {
            router.push("/business/register/section1");
        } else {
            Cookie.set("after_login_page", "/business/register/section1", {
                expires: 1 / 24,
            });
            router.push("/auth/login/");
        }
    };

    return (
        <div>
            <div className="py-5 px-5 mb-5 text-center">
                <div className="fs-1 fw-bolder ">
                    Become <br /> YuuSell{" "}
                    <span className="text-main">Seller</span>
                </div>
                <div
                    onClick={onSubmit}
                    className="btn btn-main fs-15 px-3 rounded-small fw-bold mt-3 "
                >
                    Start now
                </div>
            </div>
            <div className="row mx-0 row-gap-2 px-md-3 mt-3 mb-4 border-top border-bottom py-5">
                <div className="col-md-4">
                    <div className="bg-white px-4 px-md-5 py-4 rounded-small shadow-sm">
                        <div className="position-relative d-flex justify-content-center mb-3">
                            <div
                                className="bg-blur-main fw-bold shadow-sm "
                                style={{
                                    borderRadius: "50%",
                                    height: 100,
                                    width: 100,
                                }}
                            ></div>
                            <div
                                className="position-absolute  fw-bold fs-4 text-main"
                                style={{ top: 8 }}
                            >
                                <IconMoneybag size={72} />
                            </div>
                        </div>

                        <div className="fw-bold fs-5 text-dark">
                            Profitable terms
                        </div>
                        <div className="fs-14 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur ad laudantium dolor eum quaerat.
                            Cumque nostrum omnis magnam, quidem, neque nulla
                            quos, aliquid illo?
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white px-4 px-md-5 py-4 rounded-small shadow-sm">
                        <div className="position-relative d-flex justify-content-center mb-3">
                            <div
                                className="bg-blur-main fw-bold shadow-sm "
                                style={{
                                    borderRadius: "50%",
                                    height: 100,
                                    width: 100,
                                }}
                            ></div>
                            <div
                                className="position-absolute  fw-bold fs-4 text-main"
                                style={{ top: 15 }}
                            >
                                <IconCalculator size={72} />
                            </div>
                        </div>

                        <div className="fw-bold fs-5 text-dark">
                            Powerful Tools
                        </div>
                        <div className="fs-14 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur ad laudantium dolor eum quaerat.
                            Cumque nostrum omnis magnam, quidem, neque nulla
                            quos, aliquid illo?
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="bg-white px-4 px-md-5 py-4 rounded-small shadow-sm">
                        <div className="position-relative d-flex justify-content-center mb-3">
                            <div
                                className="bg-blur-main fw-bold shadow-sm "
                                style={{
                                    borderRadius: "50%",
                                    height: 100,
                                    width: 100,
                                }}
                            ></div>
                            <div
                                className="position-absolute  fw-bold fs-4 text-main"
                                style={{ top: 15 }}
                            >
                                <IconBook size={72} />
                            </div>
                        </div>

                        <div className="fw-bold fs-5 text-dark">
                            Support and training
                        </div>
                        <div className="fs-14 mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Consequuntur ad laudantium dolor eum quaerat.
                            Cumque nostrum omnis magnam, quidem, neque nulla
                            quos, aliquid illo?
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-0 px-md-3 mt-3 row-gap-2 mb-4 mb-md-0">
                <div className="col-md-8">
                    <div className="bg-white rounded-small shadow-sm px-2 px-md-5 py-4 ">
                        <div className="fs-5 fw-bold text-black text-center mb-3 py-3">
                            Steps to become YuuSell seller
                        </div>
                        {/* <div className="d-flex align-items-center gap-3 mb-4 border-bottom pb-3">
                        <div>
                            <div
                                className="border border-2 border-main fw-medium"
                                style={{
                                    borderRadius: "50%",
                                    padding: "10px 20px",
                                }}
                            >
                                1
                            </div>
                        </div>
                        <div>
                            <div className="fs-6 fw-medium text-black mb-1">
                                Register or Login
                            </div>
                            <div className="fs-15">
                                You will need to register in YuuSell first to
                                become seller.
                            </div>
                            <div className="btn btn-main fs-14 fw-bold mt-3 rounded-small">
                                Register
                            </div>
                        </div>
                    </div> */}
                        <div className="d-flex align-items-center gap-3 mb-4 pb-2">
                            <div className="position-relative">
                                <div
                                    className="bg-blur-main fw-bold shadow-sm "
                                    style={{
                                        borderRadius: "50%",
                                        height: 50,
                                        width: 50,
                                    }}
                                ></div>
                                <div
                                    className="position-absolute  fw-bold fs-4 text-main"
                                    style={{ top: 3, left: 18 }}
                                >
                                    1
                                </div>
                            </div>
                            <div>
                                <div className="fs-6 fw-bold text-black mb-1">
                                    Provide your Information and Documents
                                </div>
                                <div className="fs-15">
                                    We need to collect relevant personal and
                                    business information to comply with
                                    identification and verification measures. We
                                    may require additional information or
                                    documents later.
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-4 pb-2">
                            <div className="position-relative">
                                <div
                                    className="bg-blur-main fw-bold shadow-sm "
                                    style={{
                                        borderRadius: "50%",
                                        height: 50,
                                        width: 50,
                                    }}
                                ></div>
                                <div
                                    className="position-absolute  fw-bold fs-4 text-main"
                                    style={{ top: 3, left: 15 }}
                                >
                                    2
                                </div>
                            </div>
                            <div>
                                <div className="fs-6 fw-bold text-black mb-1">
                                    We will verify your submission
                                </div>
                                <div className="fs-15">
                                    You may be asked to meet with an Amazon
                                    Associate to verify your submission. This
                                    helps keep Amazon a trusted shopping
                                    destination.
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div className="position-relative">
                                <div
                                    className="bg-blur-main fw-bold shadow-sm "
                                    style={{
                                        borderRadius: "50%",
                                        height: 50,
                                        width: 50,
                                    }}
                                ></div>
                                <div
                                    className="position-absolute  fw-bold fs-4 text-main"
                                    style={{ top: 3, left: 15 }}
                                >
                                    3
                                </div>
                            </div>
                            <div>
                                <div className="fs-6 fw-bold text-black mb-1">
                                    Get verified and start selling!
                                </div>
                                <div className="fs-15">
                                    After we recieve all of the required
                                    information, it will be verified as soon as
                                    possible.
                                </div>
                            </div>
                        </div>

                        <div
                            onClick={onSubmit}
                            className="d-flex justify-content-center align-items-center pt-3"
                        >
                            <div className="btn btn-main fs-14 rounded-small fw-bold px-4">
                                Start now
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="bg-white rounded-small shadow-sm px-3 py-3 ">
                        <div className="fs-6 fw-bold text-black  mb-3 ">
                            What you will need:
                        </div>
                        <div className="d-flex gap-2 align-items-center fs-14 mb-1">
                            <IconSquareCheck size={18} className="text-main" />
                            <div>Valid goverment issued ID or passport</div>
                        </div>
                        <div className="d-flex gap-2 align-items-center fs-14 mb-1">
                            <IconSquareCheck size={18} className="text-main" />
                            <div>
                                Recent bank account or credit card statement
                            </div>
                        </div>
                        <div className="d-flex gap-2 align-items-center fs-14 mb-1">
                            <IconSquareCheck size={18} className="text-main" />
                            <div>Chargeable credit card</div>
                        </div>
                        <div className="d-flex gap-2 align-items-center fs-14 mb-1">
                            <IconSquareCheck size={18} className="text-main" />
                            <div>Mobile phone</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
