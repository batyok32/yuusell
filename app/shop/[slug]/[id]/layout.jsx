import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

export default function ShopPageLayout({ children }) {
    console.log("CHILDREN", children);
    return (
        <div className="my-3">
            <div className="bg-white p-3 fs-15 rounded-small mx-5 shadow-sm">
                <div className="d-flex gap-3">
                    <div
                        className="bg-main-50  overflow-hidden"
                        style={{ borderRadius: "50%", width: 80, height: 80 }}
                    >
                        <img
                            src="https://i.ebayimg.com/images/g/2LkAAOSwE8NlAdzN/s-l140.webp"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div>
                        <div className="fw-bold fs-5 mb-1">YuuSell</div>
                        <div className="d-flex gap-3">
                            <div>
                                <strong>100%</strong> positive feedback
                            </div>
                            <div>
                                <strong>5.7K</strong> item sold
                            </div>
                            <div>
                                <strong>280</strong> followers
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-5 d-flex justify-content-between mt-3 align-items-center">
                <div className="d-flex gap-3 fs-14">
                    <div
                        role="button"
                        className="border-bottom pb-1 border-main border-2"
                    >
                        Shop
                    </div>
                    <Link
                        href={`/shop/${children?.slug}/${children?.id}/about`}
                    >
                        About
                    </Link>
                    <div role="button">Feedback</div>
                </div>
                <div className="fs-14 m-0">
                    <div className="text-secondary bg-white d-flex border align-items-center py-2 px-1 rounded-small">
                        <IconSearch size={22} className="me-2" />
                        <input
                            type="text"
                            class="form-control border-0 p-0 rounded-0 shadow-none placeholder-gray fs-14"
                            id="exampleFormControlInput1"
                            placeholder="Search all 135 items"
                        />
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
}
