import LogoutModal from "@/components/AccountPageComponents/LogoutModal/LogoutModal";
import { IconLogout } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

export default function AccountLayout({ children }) {
    return (
        <div className="container-xxl">
            <div className="row mx-0">
                <div className="order-1 order-md-0 col-lg-3  d-none d-md-block ">
                    <div className="bg-white p-3 rounded-1 fs-14 mt-3">
                        <div>
                            <ul className="list-unstyled custom-list">
                                <Link href="/account">
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Dashboard</span>{" "}
                                        <IconChevronRight size={18} />
                                    </li>
                                </Link>
                                <Link href="/account/profile">
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Edit profile</span>{" "}
                                        <IconChevronRight size={18} />
                                    </li>
                                </Link>
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
                                <LogoutModal>
                                    <li className="py-2 border-bottom d-flex justify-content-between align-items-center">
                                        <span>Logout </span>
                                        <IconLogout size={18} />
                                    </li>
                                </LogoutModal>
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
                <div className="order-0 order-md-1 px-0 px-md-3 col-lg-9 pb-md-5">
                    {children}
                </div>
            </div>
        </div>
    );
}
