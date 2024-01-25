import ListingItem from "@/components/SellerComps/ListingItem/ListingItem";
import {
    IconHelp,
    IconListDetails,
    IconSpeakerphone,
    IconTagStarred,
    IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";

export default function MarketingPage() {
    return (
        <div>
            <div className="mb-5">
                <div className="border-start py-2 px-4 border-bottom d-flex align-items-center justify-content-between bg-white">
                    <h5 className="m-0 fw-bold">Marketing</h5>
                    <div className="fs-14 m-0 d-flex gap-4">
                        <Link href="/seller/listing/add/category">
                            <button className="btn btn-main rounded-small fs-14 fw-bold px-3 d-flex align-items-center gap-1">
                                Help <IconHelp size={20} />
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="row mx-0 ">
                    <div className="col-8">
                        <div className="d-flex mt-4 gap-3 ">
                            <div className="border px-2 d-flex justify-content-center align-items-center bg-white rounded-1 ">
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
                                Advertise{" "}
                                <IconSpeakerphone size={20} className="ms-2" />
                            </div>
                            <div
                                role="button"
                                className="border px-2 py-2 fw-medium bg-white rounded-1 fs-15 text-secondary d-flex align-items-center"
                            >
                                Send an offer{" "}
                                <IconTagStarred size={20} className="ms-2" />
                            </div>

                            <div className="ms-auto">
                                <div
                                    class="btn-group border "
                                    role="group"
                                    style={{
                                        borderRadius: 3,
                                        overflow: "hidden",
                                    }}
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
                                        Watched items
                                    </div>
                                    <div
                                        role="button"
                                        className="border-end px-2 py-2 fw-medium bg-white  fs-15 text-secondary d-flex align-items-center"
                                    >
                                        Active items
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="   mt-3">
                            <ListingItem />
                            <ListingItem />
                            <ListingItem />
                        </div>
                    </div>
                    <div className="col-4 py-4 ">
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
                                <option value="2">
                                    Stock: lowest to highest
                                </option>
                                <option value="2">
                                    Stock: highest to lowest{" "}
                                </option>
                                <option value="2">
                                    Price: highest to lowest{" "}
                                </option>
                                <option value="2">
                                    Price: lowest to highest
                                </option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <div className="fs-14  fw-bold mb-2">
                                Date & Time
                            </div>
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
                            <div className="fs-14  fw-bold mb-2">
                                Categories
                            </div>
                            <ul className="list-unstyled fs-14">
                                <li>
                                    <input
                                        className="form-check-input customcheckbox me-1"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />{" "}
                                    Items in offer
                                </li>
                                <li>
                                    <input
                                        className="form-check-input customcheckbox me-1"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />{" "}
                                    Items in advertise
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
