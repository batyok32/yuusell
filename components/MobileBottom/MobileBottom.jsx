"use client";
import { useAppSelector } from "@/redux/hooks";
import {
    IconBuildingStore,
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
    const { isAuthenticated, user } = useAppSelector((state) => state.auth);

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

                {isAuthenticated ? (
                    user?.is_verified_seller ? (
                        <Link
                            href="/seller"
                            className={`${
                                ["/auth", "/account", "/seller"].some(
                                    (prefix) => pathname.startsWith(prefix)
                                )
                                    ? "text-main"
                                    : "text-secondary"
                            } d-flex flex-column justify-content-center align-items-center`}
                        >
                            <IconBuildingStore />
                            <div>Seller</div>
                        </Link>
                    ) : (
                        <Link
                            href="/account"
                            className={`${
                                ["/auth", "/account"].some((prefix) =>
                                    pathname.startsWith(prefix)
                                )
                                    ? "text-main"
                                    : "text-secondary"
                            } d-flex flex-column justify-content-center align-items-center`}
                        >
                            <IconUser />
                            <div>Account</div>
                        </Link>
                    )
                ) : (
                    <Link
                        href="/auth/login"
                        className={`${
                            ["/auth", "/account"].some((prefix) =>
                                pathname.startsWith(prefix)
                            )
                                ? "text-main"
                                : "text-secondary"
                        } d-flex flex-column justify-content-center align-items-center`}
                    >
                        <IconUser />
                        <div>Login</div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default MobileBottom;
