import {
    IconChevronRight,
    IconHeartPlus,
    IconMessage,
    IconShare2,
    IconStarFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import ProductDetailSliderV1 from "@/components/ProductDetailSliderV1/ProductDetailSliderV1";
import ProductDetailSliderV2 from "@/components/ProductDetailSliderV2/ProductDetailSliderV2";
import "./styles.css";
import { IconUser } from "@tabler/icons-react";
import RecommendedProductSlider from "@/components/RecommendedProductSlider/RecommendedProductSlider";
import Image from "next/image";

function ProductDetail({ params }) {
    return (
        <div>
            <div className="container-xxl  mb-5">
                <div className="bg-white-md rounded-1  mt-4 py-2 py-md-3 px-md-3">
                    <div className="d-none d-md-flex fs-12 text-lightgray align-items-center flex-wrap">
                        <Link href="/" className="underline-on-hover">
                            Cell Phones & Accessories{" "}
                            <IconChevronRight
                                className="text-black-50 "
                                size={14}
                            />
                        </Link>
                        <Link href="/" className="underline-on-hover">
                            Accessories{" "}
                            <IconChevronRight
                                className="text-lightgray"
                                size={14}
                            />
                        </Link>
                        <Link className="underline-on-hover" href="/">
                            Chargers & Power Adapters{" "}
                        </Link>
                    </div>
                    <div className="d-none d-md-block fw-bold mt-3 mb-3 truncate-overflow-2">
                        iPhone and iPad Charger Super Fast Charger 20W PD USB C
                        Wall Charger with 6FT Fast Charging Cable Compatible
                        with iPhone14/14 Pro Max/13/13Pro/12/12
                        Pro/11/11Pro/XS,iPad
                    </div>
                    <div className="border-bottom d-none d-md-flex align-items-center flex-wrap fs-13  gap-md-3 pb-1 ">
                        <div className="d-flex align-items-center">
                            <IconStarFilled className="text-yellow" size={18} />
                            <IconStarFilled size={18} className="text-yellow" />
                            <IconStarFilled size={18} className="text-yellow" />
                            <IconStarFilled size={18} className="text-yellow" />
                            <IconStarFilled size={18} className="text-yellow" />
                            <span className="fs-13 ms-2">5.0</span>
                        </div>
                        <Link href="/" className="underline-on-hover">
                            79 reviews
                        </Link>
                        <Link
                            href="/"
                            className="d-flex align-items-center gap-1 underline-on-hover"
                        >
                            Share
                            <IconShare2 size={16} className="text-main" />
                        </Link>
                        <Link
                            href="/"
                            className="d-flex align-items-center gap-1 underline-on-hover"
                        >
                            Add to wishlist
                            <IconHeartPlus size={16} className="text-main" />
                        </Link>
                        <Link
                            href="/"
                            className="d-flex align-items-center gap-1 underline-on-hover"
                        >
                            Brand: Apple
                        </Link>
                        <Link
                            href="/"
                            className="d-flex align-items-center gap-1 underline-on-hover"
                        >
                            Write to the shop{" "}
                            <IconMessage size={16} className="text-main" />
                        </Link>
                        <div className="ms-auto text-black-50">
                            ID: 22238842
                        </div>
                    </div>

                    <div className="row   mt-md-3 align-items-start position-relative">
                        <div className="col-md-4 position-md-sticky top-0 px-2 px-md-0">
                            <div className="bg-white pt-3 px-2 p-md-3 rounded-1">
                                <Image
                                    src="https://ir-3.ozone.ru/s3/multimedia-z/wc1000/6829843931.jpg"
                                    alt=""
                                    className="img-fluid"
                                />

                                <div className="mt-3">
                                    <ProductDetailSliderV2 />
                                </div>
                            </div>
                        </div>

                        <div
                            className="col-md-4 px-2 px-md-3 fs-13 position-md-sticky mt-2 mt-md-0"
                            style={{ top: 15 }}
                        >
                            <div className="bg-white px-3 py-2 p-md-0 rounded-1">
                                <div className="d-md-none mb-3">
                                    <div className="fw-bold mt-3 fs-6 mb-1 truncate-overflow-2">
                                        iPhone and iPad Charger Super Fast
                                        Charger 20W PD USB C Wall Charger with
                                        6FT Fast Charging Cable Compatible with
                                        iPhone14/14 Pro Max/13/13Pro/12/12
                                        Pro/11/11Pro/XS,iPad
                                    </div>
                                    <div className="d-flex align-items-center  mx-auto">
                                        <IconStarFilled
                                            className="text-yellow"
                                            size={18}
                                        />
                                        <IconStarFilled
                                            size={18}
                                            className="text-yellow"
                                        />
                                        <IconStarFilled
                                            size={18}
                                            className="text-yellow"
                                        />
                                        <IconStarFilled
                                            size={18}
                                            className="text-yellow"
                                        />
                                        <IconStarFilled
                                            size={18}
                                            className="text-yellow"
                                        />
                                        <span className="fs-13 mx-2 text-black-50">
                                            5.0
                                        </span>
                                        <Link
                                            href="/"
                                            className="underline-on-hover fs-13 text-black-50"
                                        >
                                            79 reviews
                                        </Link>
                                    </div>
                                </div>
                                <div className="row ">
                                    <div className="col-6 border-bottom text-black-50">
                                        Pack
                                    </div>
                                    <div className="col-6">1 inside</div>
                                </div>
                                <div className=" mt-2 py-2">
                                    <ProductDetailSliderV1 />
                                </div>
                                <div className="row py-1">
                                    <div className="col-6 border-bottom text-black-50">
                                        Color
                                    </div>
                                    <div className="col-6">White</div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-6 border-bottom text-black-50">
                                        ID
                                    </div>
                                    <div className="col-6">22238842</div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-6 border-bottom text-black-50">
                                        Brand
                                    </div>
                                    <div className="col-6">Novobit</div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-6 border-bottom text-black-50">
                                        Connectivity Technology
                                    </div>
                                    <div className="col-6">Wireless</div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-6 border-bottom text-black-50">
                                        Special Feature
                                    </div>
                                    <div className="col-6">
                                        Fast Charger Wall Charger
                                    </div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-6 border-bottom text-black-50">
                                        Input Voltage
                                    </div>
                                    <div className="col-6">120 Volts</div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-6 border-bottom text-black-50">
                                        Mounting Type
                                    </div>
                                    <div className="col-6">Wall Mount</div>
                                </div>
                                <div className="row py-1">
                                    <div className="col-6 border-bottom text-black-50">
                                        Total USB Ports
                                    </div>
                                    <div className="col-6">1</div>
                                </div>

                                <div className="d-md-none">
                                    <div className="d-flex  mx-0 mt-3 gap-2">
                                        <div className="btn border gap-2 d-flex align-items-center fs-13 rounded-1">
                                            Share{" "}
                                            <IconShare2
                                                size={18}
                                                className="text-main"
                                            />
                                        </div>
                                        <div className="btn border gap-2 d-flex align-items-center fs-13 rounded-1">
                                            Chat shop{" "}
                                            <IconMessage
                                                size={18}
                                                className="text-main"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 px-2 px-md-3 py-2 h-auto mt-1 mt-md-0">
                            <div className="bg-white shadow p-3">
                                <div className="d-flex">
                                    {" "}
                                    <div className="text-black fw-bold fs-5">
                                        1999.00$
                                    </div>
                                </div>
                                <div className="fs-14 fw-medium">
                                    List price{" "}
                                    <span className="text-decoration-line-through">
                                        6000$
                                    </span>
                                </div>
                                <div className="fs-14 text-black-50 fw-medium">
                                    Save 150$ (56% off)
                                </div>
                                <hr />
                                <div className="fs-14 mb-2">
                                    Condition:{" "}
                                    <span className="fw-medium">New</span>
                                </div>
                                <div className="fs-14 d-flex align-items-center">
                                    Quantity:{" "}
                                    <span
                                        class="input ms-1 px-2 me-2"
                                        role="textbox"
                                        contenteditable="true"
                                    >
                                        99
                                    </span>
                                    <span>75 available /</span>
                                    <span className="ms-1 text-danger fw-medium">
                                        {" "}
                                        1105 sold
                                    </span>
                                    {/* <input
                                    type="number"
                                    class="form-control fs-14 p-1 w-auto ms-2 shadow-none border autoresize-input"
                                    min={1}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    size={1}
                                /> */}
                                </div>
                                <Link
                                    href="/checkout"
                                    className="btn btn-main fs-14 w-100 mt-3 fw-bold"
                                >
                                    Buy It Now
                                </Link>
                                <Link
                                    href="/cart"
                                    className="btn btn-warning fs-14 w-100 mt-2 fw-bold btn-custom"
                                >
                                    Add to cart
                                    {/* <IconShoppingCart
                                    size={16}
                                    className="text-black ms-1"
                                /> */}
                                </Link>
                                <div className="btn btn-outlined-main btn-custom fs-14 w-100 mt-2 fw-bold border">
                                    Add to wishlist{" "}
                                    <IconHeartPlus
                                        size={16}
                                        className="text-main ms-1"
                                    />
                                </div>
                                <hr />
                                <div className="fs-14 mb-2 mt-2 row">
                                    <div className="col-auto">Shipping: </div>
                                    <span className="col">
                                        Free standart shipping.{" "}
                                        <span className="text-black-50">
                                            (Located in: Dallas, Texas, USA)
                                        </span>
                                    </span>
                                </div>
                                <div className="fs-14 mb-2 mt-2 row">
                                    <div className="col-auto">Returns: </div>
                                    <span className="col">
                                        30 days returns. Seller pays for return
                                        shipping.
                                    </span>
                                </div>
                                <div className="fs-14 mb-2 mt-2 row">
                                    <div className="col-auto">Delivery: </div>
                                    <span className="col">
                                        Estimated between Wed, Jan 3 and Sat,
                                        Jan 6 to 98371
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-3 mt-5 mt-md-0">
                        <ul
                            class="nav nav-tabs  mt-md-5"
                            id="myTab"
                            role="tablist"
                        >
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link active fs-14"
                                    id="home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#home-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="home-tab-pane"
                                    aria-selected="true"
                                >
                                    About product
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button
                                    class="nav-link fs-14 "
                                    id="profile-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#profile-tab-pane"
                                    type="button"
                                    role="tab"
                                    aria-controls="profile-tab-pane"
                                    aria-selected="false"
                                >
                                    Reviews
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div
                                class="tab-pane fade show active"
                                id="home-tab-pane"
                                role="tabpanel"
                                aria-labelledby="home-tab"
                                tabindex="0"
                            >
                                <div className="fw-bold fs-6 mt-4 mb-2">
                                    Product description
                                </div>
                                <p className="fs-14">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Id mollitia et voluptatum
                                    accusamus nam numquam maiores, doloribus
                                    possimus vero sunt tempora excepturi
                                    delectus beatae asperiores molestiae ut aut!
                                    Qui, illo!
                                </p>

                                <div className="fw-bold fs-6 mt-3 mb-2">
                                    FAQ
                                </div>
                                <ul className="fs-14">
                                    <li>
                                        How much is shipping?{" "}
                                        <ul>
                                            <li>
                                                Everything in our store is free
                                                standard shipping with the
                                                continental US
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        When will you ship?
                                        <ul>
                                            <li>
                                                Most orders will ship by the
                                                following business day. Once
                                                shipped you will be sent a
                                                tracking number so you track
                                                your order.
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div
                                class="tab-pane fade"
                                id="profile-tab-pane"
                                role="tabpanel"
                                aria-labelledby="profile-tab"
                                tabindex="0"
                            >
                                <div className="fw-bold fs-6 mt-4 mb-2">
                                    Product ratings and reviews
                                </div>
                                <div className="row  mt-3">
                                    <div className="col-auto">
                                        <div className="d-flex align-items-center">
                                            <IconStarFilled
                                                className="text-yellow"
                                                size={24}
                                            />
                                            <IconStarFilled
                                                size={24}
                                                className="text-yellow"
                                            />
                                            <IconStarFilled
                                                size={24}
                                                className="text-yellow"
                                            />
                                            <IconStarFilled
                                                size={24}
                                                className="text-yellow"
                                            />
                                            <IconStarFilled
                                                size={24}
                                                className="text-yellow"
                                            />
                                            <div className="fs-5 fw-bold ms-3">
                                                5.0{" "}
                                            </div>
                                            <div className="text-black-50 ms-2 fs-14">
                                                (1198 reviews)
                                            </div>
                                        </div>
                                        <hr />
                                        <div>
                                            <div className="row align-items-center ">
                                                <div className="col-auto fs-14 text-black-50 fw-medium d-inline">
                                                    5 star
                                                </div>
                                                <div
                                                    class="col progress ms-3 p-0"
                                                    style={{ height: 10 }}
                                                >
                                                    <div
                                                        class="progress-bar bg-main"
                                                        role="progressbar"
                                                        aria-label="Basic example"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        aria-valuenow="100"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <div className="col-2 fs-14 text-black-50">
                                                    100%
                                                </div>
                                            </div>

                                            <div className="row align-items-center ">
                                                <div className="col-auto fs-14 text-black-50 fw-medium d-inline">
                                                    4 star
                                                </div>
                                                <div
                                                    class="col progress ms-3 p-0"
                                                    style={{ height: 10 }}
                                                >
                                                    <div
                                                        class="progress-bar bg-main"
                                                        role="progressbar"
                                                        aria-label="Basic example"
                                                        style={{
                                                            width: "0%",
                                                        }}
                                                        aria-valuenow="100"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <div className="col-2 fs-14 text-black-50">
                                                    32%
                                                </div>
                                            </div>
                                            <div className="row align-items-center ">
                                                <div className="col-auto fs-14 text-black-50 fw-medium d-inline">
                                                    3 star
                                                </div>
                                                <div
                                                    class="col progress ms-3 p-0"
                                                    style={{ height: 10 }}
                                                >
                                                    <div
                                                        class="progress-bar bg-main"
                                                        role="progressbar"
                                                        aria-label="Basic example"
                                                        style={{
                                                            width: "0%",
                                                        }}
                                                        aria-valuenow="100"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <div className="col-2 fs-14 text-black-50">
                                                    18%
                                                </div>
                                            </div>
                                            <div className="row align-items-center ">
                                                <div className="col-auto fs-14 text-black-50 fw-medium d-inline">
                                                    2 star
                                                </div>
                                                <div
                                                    class="col progress ms-3 p-0"
                                                    style={{ height: 10 }}
                                                >
                                                    <div
                                                        class="progress-bar bg-main"
                                                        role="progressbar"
                                                        aria-label="Basic example"
                                                        style={{
                                                            width: "0%",
                                                        }}
                                                        aria-valuenow="100"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <div className="col-2 fs-14 text-black-50">
                                                    9%
                                                </div>
                                            </div>
                                            <div className="row align-items-center ">
                                                <div className="col-auto fs-14 text-black-50 fw-medium d-inline">
                                                    1 star
                                                </div>
                                                <div
                                                    class="col progress ms-3 p-0"
                                                    style={{ height: 10 }}
                                                >
                                                    <div
                                                        class="progress-bar bg-main"
                                                        role="progressbar"
                                                        aria-label="Basic example"
                                                        style={{
                                                            width: "0%",
                                                        }}
                                                        aria-valuenow="100"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                                <div className="col-2 fs-14 text-black-50">
                                                    0%
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mt-3 mt-md-0">
                                        <div className="d-flex fs-14 align-items-center justify-content-end">
                                            <div className="d-flex align-items-center border-bottom">
                                                Sort by:{" "}
                                                <div>
                                                    <select
                                                        class="form-select fs-14 ms-2 shadow-none border-0"
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="1">
                                                            New comments
                                                        </option>
                                                        <option value="2">
                                                            Old comments
                                                        </option>
                                                        <option value="3">
                                                            Top comments
                                                        </option>
                                                        <option value="3">
                                                            Bad comments
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-md-3">
                                            <div className="my-3 px-md-3 border-bottom">
                                                <div className="d-flex align-items-center justify-content-between fs-14 ">
                                                    <div className="d-flex align-items-center">
                                                        <div className="p-1  rounded-5 bg-main-50 me-2">
                                                            <IconUser
                                                                className="text-white"
                                                                size={24}
                                                            />
                                                        </div>
                                                        <div className="fs-13">
                                                            Amanda
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center fs-14 my-1">
                                                        <IconStarFilled
                                                            className="text-yellow"
                                                            size={18}
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <div className="fw-bold ms-3">
                                                            Great work!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-muted fs-13">
                                                    Reviewed in the United
                                                    States on December 13, 2023
                                                </div>
                                                <p className="fs-13 mt-2">
                                                    Very good and reliable
                                                    chargers. Charge fairly
                                                    quick.
                                                </p>
                                            </div>
                                            <div className="my-3 px-md-3 border-bottom">
                                                <div className="d-flex align-items-center justify-content-between fs-14 ">
                                                    <div className="d-flex align-items-center">
                                                        <div className="p-1  rounded-5 bg-main-50 me-2">
                                                            <IconUser
                                                                className="text-white"
                                                                size={24}
                                                            />
                                                        </div>
                                                        <div className="fs-13">
                                                            Amanda
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center fs-14 my-1">
                                                        <IconStarFilled
                                                            className="text-yellow"
                                                            size={18}
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <div className="fw-bold ms-3">
                                                            Great work!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-muted fs-13">
                                                    Reviewed in the United
                                                    States on December 13, 2023
                                                </div>
                                                <p className="fs-13 mt-2">
                                                    Very good and reliable
                                                    chargers. Charge fairly
                                                    quick.
                                                </p>
                                            </div>
                                            <div className="my-3 px-md-3">
                                                <div className="d-flex align-items-center justify-content-between fs-14 ">
                                                    <div className="d-flex align-items-center">
                                                        <div className="p-1  rounded-5 bg-main-50 me-2">
                                                            <IconUser
                                                                className="text-white"
                                                                size={24}
                                                            />
                                                        </div>
                                                        <div className="fs-13">
                                                            Amanda
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex align-items-center fs-14 my-1">
                                                        <IconStarFilled
                                                            className="text-yellow"
                                                            size={18}
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <IconStarFilled
                                                            size={18}
                                                            className="text-yellow"
                                                        />
                                                        <div className="fw-bold ms-3">
                                                            Great work!
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-muted fs-13">
                                                    Reviewed in the United
                                                    States on December 13, 2023
                                                </div>
                                                <p className="fs-13 mt-2">
                                                    Very good and reliable
                                                    chargers. Charge fairly
                                                    quick.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-3 p-md-0 mt-4">
                        <div className="fw-bold  ">Similar items</div>
                        <RecommendedProductSlider />
                    </div>
                    <div className="bg-white p-3 p-md-0 mt-4">
                        <div className="fw-bold ">Bought together</div>
                        <RecommendedProductSlider />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
