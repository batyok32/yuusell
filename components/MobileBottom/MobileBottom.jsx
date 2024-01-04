"use client";
import {
    IconHearts,
    IconHome,
    IconListSearch,
    IconShoppingCart,
    IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileBottom() {
    const pathname = usePathname();

    return (
        <div className="position-fixed bottom-0 bg-white py-2  z-2 w-100 fs-12">
            <div className="d-flex  justify-content-evenly fw-bold">
                <Link
                    href="/"
                    className={`${
                        pathname === "/" ? "text-main" : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconHome />
                    <div>Home</div>
                </Link>
                <Link
                    href="/category"
                    className={`${
                        ["/category", "/search"].some((prefix) =>
                            pathname.startsWith(prefix)
                        )
                            ? "text-main"
                            : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconListSearch />
                    <div>Catalog</div>
                </Link>
                <Link
                    href="/cart"
                    className={`${
                        ["/cart"].includes(pathname)
                            ? "text-main"
                            : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconShoppingCart />
                    <div>Cart</div>
                </Link>
                <Link
                    href="/wishlist"
                    className={`${
                        ["/wishlist"].includes(pathname)
                            ? "text-main"
                            : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconHearts />
                    <div>Wishlist</div>
                </Link>
                <Link
                    href="/auth/login"
                    className={`${
                        ["/auth", "/checkout", "/account"].some((prefix) =>
                            pathname.startsWith(prefix)
                        )
                            ? "text-main"
                            : "text-secondary"
                    } d-flex flex-column justify-content-center align-items-center`}
                >
                    <IconUser />
                    <div>YuuSell</div>
                </Link>
            </div>
        </div>
    );
}

export default MobileBottom;
