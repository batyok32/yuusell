import {
    IconBoxSeam,
    IconChevronRight,
    IconHeartFilled,
    IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";

function AccountPage() {
    return (
        <div className="container-xxl">
            <div className="row mx-0">
                <div className="order-1 order-md-0 col-lg-3 ">
                    <div className="bg-white p-3 rounded-1 fs-14 mt-3">
                        <div className="mb-3">
                            <h6 className="fw-bold mb-2">Batyr G</h6>
                            <Link href="#" className="main-link">
                                Edit profile
                            </Link>
                        </div>
                        <div>
                            <ul className="list-unstyled">
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
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Settings </span>
                                    <IconChevronRight size={18} />
                                </li>
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Currency </span>
                                    <IconChevronRight size={18} />
                                </li>
                                <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                    <span>Help </span>
                                    <IconChevronRight size={18} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="order-0 order-md-1 col-lg-9">
                    <div className="  rounded-1 fs-14 mt-3">
                        <div className="row align-items-center">
                            {/* Wishlist */}
                            {/* Order numbers */}
                            {/* Reviews */}
                            <div className="col-6 pb-2 col-md-4 text-secondary  px-2">
                                <div className="bg-white shadow-sm rounded-1 p-2 d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="text-dark fw-bold fs-15">
                                            In wishlist
                                        </div>
                                        <div className="fs-12">1 product</div>
                                    </div>
                                    <div>
                                        <IconHeartFilled size={24} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 pb-2 col-md-4 text-secondary px-2">
                                <div className="bg-white shadow-sm rounded-1 p-2 d-flex justify-content-between align-items-center">
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
                                <div className="bg-white shadow-sm rounded-1 p-2 d-flex justify-content-between align-items-center">
                                    <div>
                                        <div className="text-dark fw-bold fs-15">
                                            Reviews
                                        </div>
                                        <div className="fs-12">0 reviews</div>
                                    </div>
                                    <div>
                                        <IconStarFilled size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
