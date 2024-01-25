"use client";
import { useAppSelector } from "@/redux/hooks";
import {
    IconBoxSeam,
    IconChevronRight,
    IconHeart,
    IconHeartFilled,
    IconStar,
    IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";

function AccountPage() {
    const { user } = useAppSelector((state) => state.auth);

    return (
        <>
            <div className="  rounded-1 fs-14 mt-3">
                <div className="mb-3 fs-5 text-end fw-medium">
                    hello,{" "}
                    <span className="fw-bold  text-main">
                        {user?.first_name}
                    </span>
                </div>

                <div className="row align-items-center">
                    <div className="col-6 pb-2 col-md-4 text-secondary  px-2">
                        <div className="bg-white rounded-1 p-2 d-flex justify-content-between align-items-center">
                            <div>
                                <div className="text-dark fw-bold fs-15">
                                    In wishlist
                                </div>
                                <div className="fs-12">1 product</div>
                            </div>
                            <div>
                                <IconHeart size={24} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pb-2 col-md-4 text-secondary px-2">
                        <div className="bg-white  rounded-1 p-2 d-flex justify-content-between align-items-center">
                            <div>
                                <div className="text-dark fw-bold fs-15">
                                    Orders
                                </div>
                                <div className="fs-12">0 orders</div>
                            </div>
                            <div>
                                <IconBoxSeam size={24} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pb-2 col-md-4 text-secondary px-2">
                        <div className="bg-white rounded-1 p-2 d-flex justify-content-between align-items-center">
                            <div>
                                <div className="text-dark fw-bold fs-15">
                                    Reviews
                                </div>
                                <div className="fs-12">0 reviews</div>
                            </div>
                            <div>
                                <IconStar size={24} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-3 mt-4">
                    <div className="fw-bold  fs-6 mb-3">Your last orders</div>
                    <div className="row row-cols-2 row-gap-2 row-cols-md-3 row-cols-lg-4 ">
                        <div className="px-1">
                            <div
                                role="button"
                                className="border rounded-small p-3 text-center"
                            >
                                <div>Delivered October 6</div>
                                <div className="my-1 fw-bold ">$500.00</div>
                                <div className="text-muted">7 items</div>
                            </div>
                        </div>
                        <div className="px-1">
                            <div
                                role="button"
                                className="border rounded-small p-3 text-center"
                            >
                                <div>Delivered October 6</div>
                                <div className="my-1 fw-bold ">$500.00</div>
                                <div className="text-muted">7 items</div>
                            </div>
                        </div>
                        <div className="px-1">
                            <div
                                role="button"
                                className="border rounded-small p-3 text-center"
                            >
                                <div>Delivered October 6</div>
                                <div className="my-1 fw-bold ">$500.00</div>
                                <div className="text-muted">7 items</div>
                            </div>
                        </div>
                        <div className="px-1">
                            <div
                                role="button"
                                className="border rounded-small  text-center"
                                style={{ padding: 15 }}
                            >
                                <div>
                                    Can&apos;t find what you&apos;re looking for
                                </div>
                                <Link
                                    href="#"
                                    className="btn btn-main fs-12 w-100 mt-1  fw-bold rounded-small"
                                >
                                    All orders
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-3 mt-4">
                    <div className="fw-bold  fs-6 mb-3">Buy again</div>
                    <div className="row row-cols-2 row-gap-2 row-cols-md-4 row-cols-lg-5 ">
                        <div className="px-1">
                            <div className="border p-1 py-2 rounded-small">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="px-1">
                            <div className="border p-1 py-2 rounded-small">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="px-1">
                            <div className="border p-1 py-2 rounded-small">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="px-1">
                            <div className="border p-1 py-2 rounded-small">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="px-1">
                            <div className="border p-1 py-2 rounded-small">
                                <img
                                    src="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    {/* <RecommendedProductSlider /> */}
                </div>
            </div>
        </>
    );
}

export default AccountPage;
