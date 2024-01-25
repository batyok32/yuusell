import {
    IconChevronRight,
    IconMapPin,
    IconMenuDeep,
    IconMessageCircleQuestion,
} from "@tabler/icons-react";
import MobileHeaderSearch from "../HeaderSearch/MobileHeaderSearch";
import HeaderAddressSlider from "../HeaderAddressSlider/HeaderAddressSlider";
import { SwiperSlide } from "swiper/react";
import Link from "next/link";
import MobileOffcanvas from "../Offcanvas/MobileOffcanvas";

function MobileHeader() {
    return (
        <div className="bg-white z-1 border-bottom">
            <div className="container-xxl fs-13 py-1  ">
                <div className="d-flex align-items-center">
                    <MobileHeaderSearch />
                    <Link href="/help" className="mx-1">
                        <IconMessageCircleQuestion className="ms-1" />
                    </Link>
                    <MobileOffcanvas>
                        <div
                            role="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                        >
                            <IconMenuDeep className="ms-1" />
                        </div>
                    </MobileOffcanvas>
                </div>
            </div>
            <div className="container-xxl fs-13 border-top">
                <div>
                    <div className="dropdown ms-auto ms-sm-0  py-2 ">
                        <div
                            data-bs-toggle="dropdown"
                            role="button"
                            aria-expanded="false"
                            data-bs-auto-close="false"
                            className="d-flex justify-content-between"
                        >
                            <div>
                                <IconMapPin height={20} />{" "}
                                <span className="fw-medium">Address •</span>{" "}
                                <span className="fw-bold text-main">
                                    Enter your delivery address
                                </span>
                            </div>

                            <IconChevronRight size={20} />
                        </div>
                        <div>
                            <ul
                                className="main-drop dropdown-menu fs-13 rounded-1"
                                style={{ width: 350 }}
                            >
                                <li>
                                    <h6 className="dropdown-header fs-13 fw-bold text-start pt-0 pb-1 border-bottom">
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
        </div>
    );
}

export default MobileHeader;
