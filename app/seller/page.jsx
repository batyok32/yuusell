import { IconBusinessplan } from "@tabler/icons-react";
import Link from "next/link";

function Seller() {
    return (
        <div className="">
            <div className="border-start py-2 px-4 border-bottom d-flex align-items-center justify-content-between bg-white">
                <h5 className="m-0 fw-bold">Dashboard</h5>
                <div className="fs-14 m-0 d-flex gap-4">
                    <div>
                        <div className="text-black-50 small">
                            Available for deposit
                        </div>
                        <div className="text-center">$750,00</div>
                    </div>
                    <Link
                        className="d-none d-md-block"
                        href="/seller/listing/add/category"
                    >
                        <button className="btn btn-main rounded-small fs-14 fw-bold px-3">
                            List an item
                        </button>
                    </Link>
                </div>
            </div>

            <div className="px-md-4 p-2 pt-md-4">
                <div className="row mx-0 row-gap-2">
                    <div className="col-md-6 border-end bg-white shadow-sm py-3 px-md-5 text-center">
                        <div className="small text-uppercase fw-medium">
                            Waiting for shipping
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className=" fs-4 fw-bold my-2 px-3 text-center fw-bold bg-main text-white rounded-small ">
                                5
                            </div>
                        </div>
                        <div className="d-flex justify-content-center align-items-center text-center text-secondary fs-15">
                            10 completed orders | 0 in the way
                        </div>
                    </div>
                    <div className="col-md-6  bg-white shadow-sm py-3 px-md-5 text-center">
                        <div className="small text-uppercase fw-medium">
                            Active listing
                        </div>
                        <div className="py-1 fs-4 fw-bold">151</div>
                        <div className="d-flex justify-content-center align-items-center text-center text-secondary fs-15">
                            5 sold | 9 unsold
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-md-4 p-2 pt-md-4">
                <div className="bg-white shadow-sm ">
                    <div className="d-flex flex-wrap justify-content-md-start justify-content-center gap-1 gap-md-3 align-items-center py-3 px-2 px-md-4 border-bottom">
                        <div className="fw-bold">Stats overview for</div>
                        <div className="d-flex ">
                            <select
                                className="form-select fs-14 rounded-small w-auto mx-2 shadow-none border"
                                aria-label="Default select example"
                            >
                                <option value="1">Time</option>
                                <option value="2">Today</option>
                                <option value="2">Yesterday</option>
                                <option value="2">Last 30 days</option>
                            </select>
                        </div>
                    </div>
                    <div className="py-0 px-3">
                        <div className="row mx-0 py-3 row-gap-2 row-gap-md-0">
                            <div className="col-6 col-md-3 border-end text-center">
                                <div className="small text-uppercase fw-medium fs-14 text-secondary">
                                    VIEWS
                                </div>
                                <div className="py-1 fs-5 fw-bold">410</div>
                            </div>
                            <div className="col-6 col-md-3 border-end text-center">
                                <div className="small text-uppercase fw-medium fs-14 text-secondary">
                                    ORDERS
                                </div>
                                <div className="py-1 fs-5 fw-bold">12</div>
                            </div>
                            <div className="col-6 col-md-3 border-end text-center">
                                <div className="small text-uppercase fw-medium fs-14 text-secondary">
                                    REVENUE
                                </div>
                                <div className="py-1 fs-5 fw-bold">$550,51</div>
                            </div>
                            <div className="col-6 col-md-3 text-center">
                                <div className="small text-uppercase fw-medium fs-14 text-secondary">
                                    LISTED ITEMS
                                </div>
                                <div className="py-1 fs-5 fw-bold">124</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seller;
