"use client";
import {
    IconBoxSeam,
    IconBuildingStore,
    IconCoin,
    IconHearts,
    IconHelp,
    IconMessage,
    IconSettings,
    IconVocabulary,
    IconZoomScan,
} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconHome } from "@tabler/icons-react";
import { IconChartArrowsVertical } from "@tabler/icons-react";

export default function SellerMobileBottom() {
    const pathname = usePathname();

    return (
        <div className="position-fixed bottom-0 bg-white py-2  z-2 w-100 fs-12">
            <div className="d-flex  justify-content-evenly fw-bold">
                <Link
                    href="/seller"
                    className={`${
                        pathname === "/seller" ? "text-main" : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconHome />
                    <div>Home</div>
                </Link>
                <Link
                    href="/seller/listing"
                    className={`${
                        ["/seller/listing"].some((prefix) =>
                            pathname.startsWith(prefix)
                        )
                            ? "text-main"
                            : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconVocabulary />
                    <div>Listing</div>
                </Link>
                <Link
                    href="/seller/messages"
                    className={`${
                        ["/seller/messages"].includes(pathname)
                            ? "text-main"
                            : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconMessage />
                    <div>Messages</div>
                </Link>
                <Link
                    href="/seller/orders"
                    className={`${
                        ["/seller/orders"].includes(pathname)
                            ? "text-main"
                            : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconBoxSeam />
                    <div>Orders</div>
                </Link>
                <div className="dropdown">
                    <div
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        className="d-flex text-secondary flex-column justify-content-center align-items-center"
                    >
                        <IconSettings />
                        <div>Settings</div>
                    </div>
                    <ul class="main-drop dropdown-menu fs-14 rounded-1">
                        <Link href="/seller/" className="dropdown-item py-2">
                            <li className="d-flex align-items-center gap-2">
                                <IconZoomScan className="text-main" /> View shop
                            </li>
                        </Link>
                        <Link href="/seller/" className="dropdown-item py-2">
                            <li className="d-flex align-items-center gap-2">
                                <IconHelp className="text-main" /> Help
                            </li>
                        </Link>
                        <Link href="/seller/" className="dropdown-item py-2">
                            <li className="d-flex align-items-center gap-2">
                                <IconChartArrowsVertical className="text-main" />{" "}
                                Marketing
                            </li>
                        </Link>
                        <Link href="/seller/" className="dropdown-item py-2">
                            <li className="d-flex align-items-center gap-2">
                                <IconCoin className="text-main" /> Finances
                            </li>
                        </Link>
                        <Link href="/seller/" className="dropdown-item py-2">
                            <li className="d-flex align-items-center gap-2">
                                <IconBuildingStore className="text-main" /> Edit
                                shop
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
