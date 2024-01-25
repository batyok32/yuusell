import Link from "next/link";
import "./styles.css";
import { IconLock } from "@tabler/icons-react";
import Image from "next/image";

function Checkout() {
    return (
        <div className="container py-4 mb-5">
            <div className="bg-white rounded-1 p-2 px-4">
                <div className="d-flex align-items-center justify-content-between flex-wrap ">
                    <Link
                        href="/"
                        className="d-flex align-items-center justify-content-center"
                    >
                        <img src="/logo2.jpg" alt="" height={40} />{" "}
                        {/* <img
                            src="/logo3.jpg"
                            alt=""
                            height={30}
                            style={{ marginLeft: "-8px" }}
                        />{" "} */}
                        <div className="fw-bold ms-1 fs-4">Checkout</div>
                    </Link>
                    <div className="d-none d-md-flex">
                        <Link
                            href="/"
                            className="fw-medium fs-14 text-decoration-underline me-1"
                        >
                            Home
                        </Link>
                        <Link
                            href="/cart"
                            className="fw-medium fs-14 text-decoration-underline me-1"
                        >
                            Cart
                        </Link>
                        <Link
                            href="/"
                            className="fw-medium fs-14 text-decoration-underline me-1"
                        >
                            Help
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row mx-0 mt-3 mt-md-5">
                <div className="col-12 col-md-8 pe-0 pe-md-2 ps-0">
                    <div className="bg-white p-3 rounded-1">
                        <div className="border-bottom pb-2 ps-2 fw-medium">
                            Pay with
                        </div>
                        <ul className="list-unstyled">
                            <li className="px-3 pt-3 border-bottom pb-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label
                                        className="form-check-label ms-2 w-100"
                                        for="flexRadioDefault1"
                                    >
                                        <span className="VISA medium"></span>
                                        <span className="ms-2 fw-medium">
                                            x-8240
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li className="px-3 pt-3 border-bottom pb-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    />
                                    <label
                                        className="form-check-label ms-2 w-100"
                                        for="flexRadioDefault2"
                                    >
                                        <span className="VISA medium"></span>
                                        <span className="ms-2 fw-medium">
                                            x-0319
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li className="px-3 pt-3 border-bottom pb-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault3"
                                    />
                                    <label
                                        className="form-check-label ms-2 w-100"
                                        for="flexRadioDefault3"
                                    >
                                        <span className="VISA medium"></span>
                                        <span className="ms-2 fw-medium">
                                            x-1263
                                        </span>
                                    </label>
                                </div>
                            </li>
                            <li className="px-3 pt-3 border-bottom pb-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault4"
                                    />
                                    <label
                                        className="form-check-label ms-2 w-100"
                                        for="flexRadioDefault4"
                                    >
                                        <div className=" fw-medium">
                                            Add a new card
                                        </div>
                                        <span className="VISA x-small me-1"></span>
                                        <span className="MASTERCARD x-small me-1"></span>
                                        <span className="AM_EX x-small me-1"></span>
                                        <span className="DISCOVER x-small me-1"></span>
                                    </label>
                                </div>
                            </li>
                            <li className="px-3 pt-3  ">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault5"
                                    />
                                    <label
                                        className="form-check-label ms-2 w-100"
                                        for="flexRadioDefault5"
                                    >
                                        <span className="PAYPAL medium"></span>
                                        <span className="ms-2 fw-medium">
                                            PayPal
                                        </span>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-3 rounded-1 mt-3">
                        <div className="border-bottom pb-2 ps-2 fw-medium">
                            Ship to
                        </div>
                        <ul className="list-unstyled">
                            <li className="px-3 pt-3 border-bottom pb-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="shipRadio"
                                        id="shipRadio1"
                                    />
                                    <label
                                        className="form-check-label ms-2 w-100 fs-14 fw-medium"
                                        for="shipRadio1"
                                    >
                                        <div>Batyr Gurbangulyyev</div>
                                        <div>5110 62ND Ave E</div>
                                        <div>Puyallup, WA 98371-3622</div>
                                        <div>United States</div>
                                        <div>(253) 486-4152</div>
                                    </label>
                                </div>
                            </li>
                            <li className="px-3 pt-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="shipRadio"
                                        id="shipRadio2"
                                    />
                                    <label
                                        className="form-check-label ms-2 w-100 fs-14 fw-medium"
                                        for="shipRadio2"
                                    >
                                        <div>Add a new address</div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 mt-3 mt-md-0 col-md-4 p-0 ps-md-2">
                    <div className="bg-white py-3 px-1 rounded-1">
                        <div className="row mx-0 w-100 fs-14 fw-medium">
                            <div className="col-6">Subtotal (2 items)</div>
                            <div className="col-6 d-flex  justify-content-end">
                                $100.00
                            </div>
                        </div>
                        <div className="row mx-0 w-100 fs-14 fw-medium py-1">
                            <div className="col-6">Shipping</div>
                            <div className="col-6 d-flex  justify-content-end">
                                Free
                            </div>
                        </div>
                        <div className="row mx-0 w-100 fs-14 fw-medium">
                            <div className="col-6">Tax</div>
                            <div className="col-6 d-flex  justify-content-end">
                                $10.00
                            </div>
                        </div>
                        <div className="px-5">
                            <hr />
                        </div>
                        <div className="row mx-0 w-100  fw-medium">
                            <div className="col-6 fw-bold">Order total</div>
                            <div className="col-6 d-flex fw-bold justify-content-end">
                                $110.00
                            </div>
                        </div>

                        <div className="p-3 ">
                            <div className="bg-slightgray p-3 fs-13">
                                <div>
                                    By placing your order, you agree to
                                    Yuusell&apos;s User Agreement and Privacy
                                    Notice. The state of Washington requires
                                    Yuusell to collect sales tax and applicable
                                    fees from buyers. Yuusell will pay the
                                    collected tax to the tax authority.{" "}
                                    <Link
                                        href="/"
                                        className="text-decoration-underline text-primary"
                                    >
                                        Learn more
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="px-4">
                            <div className="btn btn-main fs-14 w-100  fw-bold rounded-5">
                                <IconLock size={18} /> Confirm and Pay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
