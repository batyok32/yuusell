"use client";

import Link from "next/link";
import {
    IconChevronDown,
    IconChevronsDown,
    IconHelp,
    IconSettings,
} from "@tabler/icons-react";
import { IconBuildingBank, IconSpeakerphone } from "@tabler/icons-react";
import {
    IconBoxSeam,
    IconBuildingStore,
    IconDeviceDesktopAnalytics,
    IconHome,
    IconMessage,
    IconStars,
    IconTruckDelivery,
    IconVocabulary,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

function SellerSidebar() {
    const pathname = usePathname();

    return (
        <div className="interactive-sidebar-list">
            <div
                className="fs-15 fw-bold  text-black py-2 border-bottom mb-2 dropdown user-select-none"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
                u
            >
                <div className="position-relative p-0 me-2">
                    <div
                        className="bg-main"
                        style={{
                            height: 40,
                            width: 40,
                            borderRadius: "50%",
                        }}
                    ></div>
                    <IconBuildingStore
                        size={24}
                        className="text-white position-absolute "
                        style={{ top: 8, left: 8 }}
                    />{" "}
                </div>
                Shop Manager
                <div className="p-0">
                    <ul className="main-drop dropdown-menu fs-13 rounded-1 ms-3">
                        <li>
                            <h6 className="dropdown-header fs-13 fw-bold text-start pt-0 pb-1 border-bottom">
                                YuuSell shop
                            </h6>
                        </li>

                        <li>
                            <a className="dropdown-item " href="#">
                                Edit shop
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Link href="/seller">
                <div className={`${pathname === "/seller" && "active"}`}>
                    <IconHome /> Dashboard
                </div>
            </Link>
            <Link href="/seller/listing">
                <div
                    className={`${
                        ["/seller/listing"].some((prefix) =>
                            pathname.startsWith(prefix)
                        ) && "active"
                    }`}
                >
                    <IconVocabulary /> Listings
                </div>
            </Link>
            <Link href="/seller/messages">
                <div
                    className={`${
                        ["/seller/messages"].some((prefix) =>
                            pathname.startsWith(prefix)
                        ) && "active"
                    }`}
                >
                    <IconMessage /> Messages
                </div>
            </Link>
            <Link href="/seller/orders">
                <div
                    className={`${
                        ["/seller/orders"].some((prefix) =>
                            pathname.startsWith(prefix)
                        ) && "active"
                    }`}
                >
                    <IconBoxSeam /> Orders
                </div>
            </Link>
            <Link href="/seller/starseller">
                <div
                    className={`${
                        ["/seller/starseller"].some((prefix) =>
                            pathname.startsWith(prefix)
                        ) && "active"
                    }`}
                >
                    <IconStars /> Star Seller
                </div>
            </Link>
            <Link href="/seller/finances">
                <div
                    className={`${
                        ["/seller/finances"].some((prefix) =>
                            pathname.startsWith(prefix)
                        ) && "active"
                    }`}
                >
                    <IconBuildingBank /> Finances
                </div>
            </Link>
            {/* <div>
                <IconTruckDelivery /> Shipment
            </div> */}

            {/* <div>
                <IconDeviceDesktopAnalytics /> Statistics{" "}
            </div> */}
            <Link href="/seller/marketing">
                <div
                    className={`${
                        ["/seller/marketing"].some((prefix) =>
                            pathname.startsWith(prefix)
                        ) && "active"
                    }`}
                >
                    <IconSpeakerphone /> Marketing
                </div>
            </Link>
            {/* <div>
                <IconSettings /> Settings
            </div> */}
            <Link href="/seller/help">
                <div
                    className={`${
                        ["/seller/help"].some((prefix) =>
                            pathname.startsWith(prefix)
                        ) && "active"
                    }`}
                >
                    <IconHelp /> Help
                </div>
            </Link>
            <Link href="/shop/randomshop/123">
                <div className="d-flex align-items-center gap-2 border-top">
                    <div
                        style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                        }}
                        className="bg-main-50 p-0"
                    ></div>
                    Yuusell Shop
                </div>
            </Link>
        </div>
    );
}

export default SellerSidebar;
