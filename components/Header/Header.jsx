import {
    IconMapPin,
    IconMenu2,
    IconUser,
    IconBoxSeam,
    IconHeart,
    IconShoppingCart,
    IconSearch,
    IconApple,
} from "@tabler/icons-react";
import Image from "next/image";

import "./Header.css";
import Link from "next/link";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import MenuCategoryItem from "./MenuCategoryItem/MenuCategoryItem";
import HeaderAddressSlider from "../HeaderAddressSlider/HeaderAddressSlider";
import { SwiperSlide } from "swiper/react";

function Header() {
    return (
        <div className="container-xxl fs-13 py-1 bg-white z-1 d-flex flex-column">
            <div className="d-flex order-1 order-sm-0  pb-1 pb-sm-0 justify-content-between">
                <div className="d-none d-sm-flex gap-2 text-lightgray fw-medium">
                    <div>Sell</div>
                    <Link href="/help">Help&Contact</Link>
                </div>
                <div className="d-flex align-items-center  gap-2 w-100 justify-content-end">
                    <div className="dropdown d-none d-sm-block">
                        <div
                            className="text-lightgray fw-bold bg-light px-1 rounded-1 user-select-none"
                            data-bs-toggle="dropdown"
                            role="button"
                            aria-expanded="false"
                        >
                            EN
                        </div>
                        <div>
                            <ul
                                className="main-drop dropdown-menu fs-13 rounded-1"
                                style={{
                                    maxHeight: "200px",
                                    overflowY: "scroll",
                                }}
                            >
                                <li>
                                    <h6 class="dropdown-header fs-13 fw-bold text-start pt-0 pb-1 border-bottom">
                                        Choose language
                                    </h6>
                                </li>

                                <li>
                                    <a className="dropdown-item " href="#">
                                        English - EN
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Russian - RU
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Turkmen - TM
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Turkish - TR
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown d-none d-sm-block">
                        <div
                            className="text-lightgray fw-bold bg-light px-1 rounded-1 user-select-none"
                            data-bs-toggle="dropdown"
                            role="button"
                            aria-expanded="false"
                        >
                            USD
                        </div>
                        <div>
                            <ul
                                className="main-drop dropdown-menu fs-13 rounded-1"
                                style={{
                                    maxHeight: "200px",
                                    overflowY: "scroll",
                                }}
                            >
                                <li>
                                    <h6 class="dropdown-header fs-13 fw-bold text-start pt-0 pb-1 border-bottom">
                                        Choose currency
                                    </h6>
                                </li>

                                <li>
                                    <a className="dropdown-item " href="#">
                                        <div>USA Dollar</div>
                                        <div className="text-muted fw-medium fs-12">
                                            USD
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item " href="#">
                                        <div>Russian rubl</div>
                                        <div className="text-muted fw-medium fs-12">
                                            RUB
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item " href="#">
                                        <div>Turkmen manat</div>
                                        <div className="text-muted fw-medium fs-12">
                                            TMT
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item " href="#">
                                        <div>Turkish lira</div>
                                        <div className="text-muted fw-medium fs-12">
                                            TR
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="dropdown ms-auto ms-sm-0">
                        <div
                            data-bs-toggle="dropdown"
                            role="button"
                            aria-expanded="false"
                            data-bs-auto-close="false"
                        >
                            <IconMapPin height={20} />{" "}
                            <span className="fw-medium">Address •</span>{" "}
                            <span className="fw-bold text-main">
                                Enter your delivery address
                            </span>
                        </div>
                        <div>
                            <ul
                                className="main-drop dropdown-menu fs-13 rounded-1"
                                style={{ width: 350 }}
                            >
                                <li>
                                    <h6 class="dropdown-header fs-13 fw-bold text-start pt-0 pb-1 border-bottom">
                                        Choose your location
                                    </h6>
                                </li>
                                <li className="px-3 pt-3">
                                    {/* <div className="d-flex gap-2"> */}
                                    <HeaderAddressSlider>
                                        <SwiperSlide>
                                            <div
                                                className="border p-1 "
                                                style={{
                                                    width: "140px",
                                                    minHeight: "115px",
                                                }}
                                            >
                                                <div className="truncate-overflow-1 fw-bold fs-">
                                                    Batyr Gurbangulyyev
                                                </div>
                                                <div className="">
                                                    <div>12605 NE 187TH ST</div>
                                                    <div>Apt 2222</div>
                                                    <div>Bothell 98011</div>
                                                </div>
                                                <div className="text-muted mt-1 fw-medium">
                                                    Chosen
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="h-100">
                                            <div
                                                className="border p-1 "
                                                style={{
                                                    width: "140px",
                                                    minHeight: "115px",
                                                }}
                                            >
                                                <div className="truncate-overflow-1 fw-bold fs-">
                                                    Merdan Jumadurdyyev
                                                </div>
                                                <div className="">
                                                    <div>5110 62ND AVE E</div>
                                                    <div>Puyallup 98371</div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div
                                                className="border p-1 text-center d-flex align-items-center"
                                                style={{
                                                    width: "140px",
                                                    minHeight: "115px",
                                                }}
                                            >
                                                <Link
                                                    href="#"
                                                    className="main-link"
                                                >
                                                    Manage address book
                                                </Link>
                                            </div>
                                        </SwiperSlide>
                                    </HeaderAddressSlider>
                                    {/* </div> */}
                                    <div className="mt-3">
                                        <Link href="#" className="main-link">
                                            {" "}
                                            Ship outside the US
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex order-0 order-sm-1 order-sm-1 py-2 align-items-center">
                <Link href="/" className="d-none d-sm-flex align-items-center">
                    <Image src="/logo2.jpg" alt="" height={40} />{" "}
                    <Image
                        src="/logo3.jpg"
                        alt=""
                        height={30}
                        style={{ marginLeft: "-8px" }}
                    />{" "}
                </Link>
                {/* <MegaMenu> */}
                <div className=" order-1 order-sm-0">
                    <div
                        className="btn btn-main btn-custom fw-bold fs-14 ms-1 mx-sm-4 d-flex align-items-center gap-1 rounded-1"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="false"
                        aria-expanded="false"
                    >
                        <IconMenu2 />{" "}
                        <span className="d-none d-lg-inline">Categories</span>
                    </div>
                    <ul class="dropdown-menu p-3 border-0 bg-transparent">
                        <li className="bg-white border rounded-1 shadow-sm">
                            <div className="row row-cols-6 fs-14 px-0 py-2 mx-0 fw-medium justify-content-center">
                                <MenuCategoryItem
                                    title="Electronics"
                                    img="https://ir.ozone.ru/s3/cms/b9/t22/wc400/category_6.png"
                                />
                                <MenuCategoryItem
                                    title="Cars"
                                    img="https://ir.ozone.ru/s3/cms/5d/tee/wc400/categoryauto_chery.png"
                                />
                                <MenuCategoryItem
                                    title="Tourism, fishing and hunting"
                                    img="https://ir.ozone.ru/s3/cms/47/t85/wc400/category_6.png"
                                />
                                <MenuCategoryItem
                                    title="Books"
                                    img="https://ir.ozone.ru/s3/cms/34/t75/wc400/categorynonfiction.png"
                                />
                                <MenuCategoryItem
                                    title="Clothing, shoes and accessories"
                                    img="https://ir.ozone.ru/s3/cms/1d/t44/wc400/women_2.png"
                                />
                                <MenuCategoryItem
                                    title="Appliances"
                                    img="https://ir.ozone.ru/s3/cms/11/t87/wc200/category_18.png"
                                />
                                <MenuCategoryItem
                                    title="For home"
                                    img="https://ir.ozone.ru/s3/cms/ad/t6d/wc400/category_3.png"
                                />
                                <MenuCategoryItem
                                    title="Hobbies and creativity"
                                    img="https://ir.ozone.ru/s3/cms/69/t88/wc400/category_12.png"
                                />
                                <MenuCategoryItem
                                    title="For school"
                                    img="https://ir.ozone.ru/s3/cms/67/t59/wc400/category_8.png"
                                />
                                <MenuCategoryItem
                                    title="Products for adults"
                                    img="https://ir.ozone.ru/s3/cms/13/t86/wc400/category_3.png"
                                />
                                <MenuCategoryItem
                                    title="Cottage and garden"
                                    img="https://ir.ozone.ru/s3/cms/1a/t80/wc400/category_4.png"
                                />
                                <MenuCategoryItem
                                    title="Construction and repair"
                                    img="https://ir.ozone.ru/s3/cms/7f/tce/wc400/categorytools.png"
                                />
                                <MenuCategoryItem
                                    title="Food"
                                    img="https://ir.ozone.ru/s3/cms/5e/t40/wc400/category.png"
                                />
                                <MenuCategoryItem
                                    title="Household chemicals and hygiene"
                                    img="https://ir.ozone.ru/s3/cms/f3/tb6/wc400/category.png"
                                />
                                <MenuCategoryItem
                                    title="Goods for pets"
                                    img="https://ir.ozone.ru/s3/cms/c7/tf4/wc400/zoo.png"
                                />
                                <MenuCategoryItem title="Automotive products" />
                                <MenuCategoryItem
                                    title="Childen's goods"
                                    img="https://ir.ozone.ru/s3/cms/1b/t09/wc400/baby_clothes_2.png"
                                />
                                <MenuCategoryItem
                                    title="Beauty and health"
                                    img="https://ir.ozone.ru/s3/cms/61/t46/wc400/makeup_1.png"
                                />
                                <MenuCategoryItem
                                    title="Sports and recreation"
                                    img="https://ir.ozone.ru/s3/cms/20/t0f/wc200/category_18.png"
                                />

                                {/* <div>Electronics</div>
                                <div>Clothing, shoes and accessories</div>
                                <div>Appliances</div>
                                <div>For home</div>

                                <div>Hobbies and creativity</div>
                                <div>For school</div>
                                <div>Products for adults</div>
                                <div>Cars</div>
                                <div>Something else</div>
                                <div>Cottage and garden</div>
                                <div>Construction and repair</div>
                                <div>Food</div>
                                <div>Household chemicals and hygiene</div>
                                <div>Goods for pets</div>
                                <div>Automotive products</div>
                                <div>Childen's goods</div>
                                <div>beauty and health</div>
                                <div>Sports and recreation</div>
                                <div>Tourism, fishing and hunting</div>
                                <div>Books</div> */}
                            </div>
                        </li>
                    </ul>
                </div>
                {/* </MegaMenu> */}

                <HeaderSearch />

                <div className="d-none d-lg-flex ms-3 gap-4 fw-medium user-select-none">
                    <Link
                        href="/auth/login"
                        className="d-flex justify-content-center align-items-center flex-column"
                    >
                        <IconUser height={20} />
                        <div>Login</div>
                    </Link>
                    <Link
                        href="/orders"
                        className="d-flex justify-content-center align-items-center flex-column"
                    >
                        <IconBoxSeam height={20} />
                        <div>Orders</div>
                    </Link>
                    <Link
                        href="/wishlist"
                        className="d-flex justify-content-center align-items-center flex-column"
                    >
                        <IconHeart height={20} />
                        <div>Wishlist</div>
                    </Link>{" "}
                    <Link
                        href="/cart"
                        className="d-flex justify-content-center align-items-center flex-column"
                    >
                        <IconShoppingCart height={20} />
                        <div>Cart</div>
                    </Link>{" "}
                </div>
            </div>
        </div>
    );
}

export default Header;
