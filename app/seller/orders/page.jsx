import {
    IconFilter,
    IconPlus,
    IconSearch,
    IconSortDescending2,
    IconTrash,
    IconListDetails,
} from "@tabler/icons-react";
import Link from "next/link";

export default function OrdersPage() {
    return (
        <div>
            <div className="border-start py-2 px-2 px-md-4 border-bottom d-flex align-items-center justify-content-between bg-white">
                <h5 className="m-0 fw-bold d-none d-md-block">Orders</h5>
                <div className="fs-14 m-0 d-flex gap-4">
                    <div className="text-secondary d-flex border align-items-center py-2 px-1 rounded-small">
                        <IconSearch size={22} className="me-2" />
                        <input
                            type="text"
                            class="form-control border-0 p-0 rounded-0 shadow-none placeholder-gray fs-14"
                            id="exampleFormControlInput1"
                            placeholder="Search by title, tag or SKU"
                        />
                    </div>
                </div>
            </div>

            <div className="row mx-0 ">
                <div className="col-md-8">
                    <div className="d-flex flex-wrap row-gap-2 mt-4 gap-1 gap-md-3 ">
                        <div className="border px-2 d-flex flex-md- justify-content-center align-items-center bg-white rounded-1 ">
                            <input
                                className="form-check-input customcheckbox fs-15 "
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                        </div>

                        <div
                            role="button"
                            className="border px-2 py-2 fw-medium bg-white rounded-1 fs-15 text-secondary d-flex align-items-center"
                        >
                            Delete <IconTrash size={20} className="ms-2" />
                        </div>

                        <div
                            class="btn-group border ms-auto"
                            role="group"
                            style={{ borderRadius: 3, overflow: "hidden" }}
                            aria-label="Basic radio toggle button group"
                        >
                            <div
                                role="button"
                                className="border-end btn-active px-2 py-2 fw-medium bg-white  fs-15 text-secondary d-flex align-items-center"
                            >
                                All
                            </div>
                            <div
                                role="button"
                                className="border-end  px-2 py-2 fw-medium bg-white  fs-15 text-secondary d-flex align-items-center"
                            >
                                Buyer paid
                            </div>
                            <div
                                role="button"
                                className="border-end px-2 py-2 fw-medium bg-white  fs-15 text-secondary d-flex align-items-center"
                            >
                                Shipped
                            </div>
                            <div
                                role="button"
                                className=" px-2 py-2 fw-medium bg-white  fs-15 text-secondary d-flex align-items-center"
                            >
                                Delivered
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="row mx-0 fs-15 bg-white border mb-1 rounded-small py-2 align-items-center ">
                            <div className="col-auto order-0">
                                <input
                                    className="form-check-input customcheckbox fs-15"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />
                            </div>
                            <div className="col col-md-2 order-1">
                                <img
                                    src="/6583192421.webp"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-md order-3 order-md-2 align-self-start">
                                <div className="fw-medium fs-14 truncate-overflow-2">
                                    Buyer paid
                                </div>
                                <div className="text-decoration-underline fs-13 truncate-overflow-2">
                                    Electric teeth brush Panda & Bear
                                </div>
                                <div className="d-flex fs-13 text-muted  flex-wrap gap-2 mt-2 dropdown">
                                    <div
                                        role="button"
                                        className="border bg-white  px-2 py-1 rounded-small"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <IconListDetails
                                            size={18}
                                            className="me-1"
                                        />{" "}
                                        View order details
                                    </div>
                                    <ul class="main-drop dropdown-menu fs-13 rounded-1">
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Mark as shipped
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Add tracking number
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                View payment details
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Contact buyer
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Send refund
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 order-2 order-md-3 text-end">
                                <div className="fw-medium fs-15 mb-1">
                                    $44.23{" "}
                                    <span className="text-muted align-self-end fs-13">
                                        + shipping
                                    </span>
                                </div>

                                <div className="text-muted  fs-13">
                                    Item ID: 394966597262
                                </div>
                                <div className="text-muted  fs-13">
                                    Sold on: Jan 9
                                </div>
                                <div className="text-muted  fs-13">
                                    Delivered: Jan 12
                                </div>
                                <div className="text-muted  fs-13">
                                    Buyer: Nalleli Solorino
                                </div>
                                <div className="text-muted  fs-13">
                                    Order number: 03-11038-72012
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 py-4 d-none d-md-block">
                    <div className="mb-3">
                        <div className="fs-14  fw-bold mb-2">Sort</div>
                        <select
                            className="form-select fs-14 w-100 rounded-0 mb-2 shadow-none border"
                            aria-label="Default select example"
                        >
                            <option value="1">Top Sold</option>
                            <option value="2">Less Sold</option>
                            <option value="2">Title A:Z</option>
                            <option value="2">Title Z:A</option>
                            <option value="2">Stock: lowest to highest</option>
                            <option value="2">Stock: highest to lowest </option>
                            <option value="2">Price: highest to lowest </option>
                            <option value="2">Price: lowest to highest</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <div className="fs-14  fw-bold mb-2">Date & Time</div>
                        <select
                            className="form-select fs-14 w-100 rounded-0 mb-2 shadow-none border"
                            aria-label="Default select example"
                        >
                            <option value="1">Time</option>
                            <option value="2">Today</option>
                            <option value="2">Yesterday</option>
                            <option value="2">Last 30 days</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <div className="fs-14  fw-bold mb-2">Categories</div>
                        <ul className="list-unstyled fs-14">
                            <li>
                                <input
                                    className="form-check-input customcheckbox me-1"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />{" "}
                                From members
                            </li>
                            <li>
                                <input
                                    className="form-check-input customcheckbox me-1"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />{" "}
                                From Yuusell
                            </li>
                            <li>
                                <input
                                    className="form-check-input customcheckbox me-1"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                />{" "}
                                Unread messages
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
