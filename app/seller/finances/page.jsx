import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import "./styles.css";

export default function Finances() {
    return (
        <div className="mb-5">
            <div className="border-start py-2 px-4 border-bottom d-flex align-items-center justify-content-between bg-white">
                <h5 className="m-0 fw-bold">Finances</h5>
            </div>

            <div class="row row-cols-3 mt-3 fs-15 px-4">
                <div className="mb-2 text-center">
                    <div class="h-100 bg-white shadow-sm p-3">
                        <div className=" fs-4 fw-bold text-balck mb-3">
                            $6,905.77
                        </div>
                        <div className="fw-bold mb-1">Your total selling</div>
                        <p>90 days total</p>
                    </div>
                </div>
                <div className="mb-2 text-center">
                    <div class="h-100 bg-white shadow-sm p-3">
                        <div className="text-center fs-4 fw-bold text-center bg-main text-white rounded-small mb-3">
                            $31.15
                        </div>
                        <div className="fw-bold mb-1">Your total funds</div>
                        <p>These funds consist of all your earnings</p>
                    </div>
                </div>
                <div className="mb-2 text-center">
                    <div class="h-100 bg-white shadow-sm p-3">
                        <div className="text-center fs-4 fw-bold text-black mb-3">
                            $128.57
                        </div>
                        <div className="fw-bold mb-1">Available funds</div>
                        <p>
                            Are available for payout and don&apos;t include your
                            processing or on-hold funds.
                        </p>
                    </div>
                </div>
                <div className="mb-2 text-center">
                    <div class="h-100 bg-white shadow-sm p-3">
                        <div className="text-center fs-4 fw-bold text-black mb-3">
                            $37.32
                        </div>
                        <div className="fw-bold mb-1">Processing funds</div>
                        <p>
                            Aren&apos;t available for payout, but you can use
                            them to cover selling costs.
                        </p>
                    </div>
                </div>
                <div className="mb-2 text-center">
                    <div class="h-100 bg-white shadow-sm p-3">
                        <div className="text-center fs-4 fw-bold text-black mb-3">
                            $122.00
                        </div>
                        <div className="fw-bold mb-1">On hold</div>
                        <p>
                            Are on hold while we are confirming shipping details
                            or resolving disputes.
                        </p>
                    </div>
                </div>
                <div className="mb-2 text-center">
                    <div class="h-100 bg-white shadow-sm p-3">
                        <div className="fw-bold mb-1">Watch all movings</div>
                        <p>Watch history of your transactions and payouts.</p>
                        <Link href="/seller/listing/add/category">
                            <button className="btn btn-main rounded-small fs-14 fw-bold px-3">
                                See all activity
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="px-4">
                <h6 className="mt-4">Payment options</h6>
                <div className="row row-cols-3 fs-15 mt-3">
                    <div className="mb-2  ">
                        <div className="bg-white  p-3 shadow-sm">
                            <div className="d-flex justify-content-between border-bottom pb-2">
                                <div>
                                    <div className="fw-bold">
                                        Visa Debit ending in 1263
                                    </div>
                                    <div className="text-muted">
                                        Plany Planyyev
                                    </div>
                                </div>
                                <div>
                                    <span className="VISA medium"></span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-evenly align-items-center  pt-2">
                                <div
                                    role="button"
                                    className="border bg-white fs-14 px-3 text-main py-1 rounded-small"
                                >
                                    Manage
                                </div>
                                <div
                                    role="button"
                                    className="border bg-white fs-14 px-3 text-main py-1 rounded-small"
                                >
                                    Edit
                                </div>
                                <div
                                    role="button"
                                    className="border bg-white fs-14 px-3 text-main py-1 rounded-small"
                                >
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
