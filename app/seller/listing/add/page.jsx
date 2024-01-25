import {
    IconBookmark,
    IconChevronRight,
    IconLock,
    IconMinus,
    IconPencil,
    IconPhotoScan,
    IconPlus,
    IconStatusChange,
    IconTablePlus,
    IconToggleLeft,
    IconTrash,
} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";

function ProductAddPage() {
    return (
        <div className="my-4 mx-4">
            {/*  */}
            <div className="  mb-3">
                <div className="d-flex justify-content-between mt-3">
                    <div className="text-muted fs-14  d-inline-flex align-items-center gap-1">
                        Building Toys LEGO <IconChevronRight size={16} />{" "}
                        Building Toys LEGO <IconChevronRight size={16} />{" "}
                        Complete Sets & Packs
                    </div>
                    <div
                        role="button"
                        className="text-muted rounded-small bg-white px-2 py-1 fs-14 border"
                    >
                        <IconStatusChange size={20} className="me-1" />
                        Change category
                    </div>
                </div>
                <h4 className="mt-4 fw-bold">Title</h4>
                <div className="text-muted fs-14 mb-3">
                    Use words people would search for when looking for your
                    item.
                </div>
                <input
                    type="text"
                    className="form-control rounded-small shadow-none border fs-15"
                    placeholder="Type for name"
                />
                <div className="border-bottom my-4"></div>
                <h4 className="mt-3 fw-bold">Item specifics</h4>
                <h6 className="mt-4">Required</h6>
                <div className="text-muted fs-14 mb-3">
                    Buyer needs details to find your product.
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="fs-15 mb-1">Condition</div>
                        <select
                            className="form-select fs-15 rounded-small border shadow-none"
                            aria-label="Default select example"
                        >
                            <option selected>Used</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="col-6">
                        <div className="fs-15 mb-1">Brand</div>
                        <select
                            className="form-select fs-15 rounded-small border shadow-none"
                            aria-label="Default select example"
                        >
                            <option selected>Adidas</option>
                            <option value="1">Nike</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
                <h6 className="mt-4">Recommended</h6>
                <div className="text-muted fs-14 mb-3">
                    Buyers frequently search for these details
                </div>
                <div className="mx-3 mt-4 border p-4 bg-white shadow-sm rounded-small">
                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="fs-15 mb-1">Features</div>
                            <select
                                className="form-select fs-15 rounded-small border shadow-none"
                                aria-label="Default select example"
                            >
                                <option selected>Used</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <div className="fs-15 mb-1">Release year</div>
                            <select
                                className="form-select fs-15 rounded-small border shadow-none"
                                aria-label="Default select example"
                            >
                                <option selected>Adidas</option>
                                <option value="1">Nike</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="fs-15 mb-1">Material</div>
                            <select
                                className="form-select fs-15 rounded-small border shadow-none"
                                aria-label="Default select example"
                            >
                                <option selected>Used</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <div className="fs-15 mb-1">Country of origin</div>
                            <select
                                className="form-select fs-15 rounded-small border shadow-none"
                                aria-label="Default select example"
                            >
                                <option selected>Adidas</option>
                                <option value="1">Nike</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="fs-15 mb-1">Packaging</div>
                            <select
                                className="form-select fs-15 rounded-small border shadow-none"
                                aria-label="Default select example"
                            >
                                <option selected>Used</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="col-6">
                            <div className="fs-15 mb-1">Interests</div>
                            <select
                                className="form-select fs-15 rounded-small border shadow-none"
                                aria-label="Default select example"
                            >
                                <option selected>Adidas</option>
                                <option value="1">Nike</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="border-bottom my-4"></div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="mt-3 fw-bold">Add a photo</h4>
                        <div className="text-muted fs-14 mb-3">
                            Improve your buyer’s confidence by including as many
                            as possible.
                        </div>
                    </div>
                    <div>
                        <div
                            role="button"
                            className="border bg-white fs-15 px-3 py-2 rounded-small"
                        >
                            <IconPhotoScan size={20} className="me-1" /> Add a
                            photo
                        </div>
                    </div>
                </div>
                <div className="mx-3 mt-4 border p-3 fs-15 bg-white shadow-sm rounded-small">
                    <div className="d-flex gap-2 flex-wrap">
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                        <div className="border rounded-small p-4 ">
                            Main photo
                        </div>{" "}
                    </div>
                </div>

                <div className="border-bottom my-4"></div>
                <h4 className="mt-3 fw-bold ">Description</h4>
                <textarea
                    class="form-control mt-3 shadow-none border rounded-small fs-15"
                    id="exampleFormControlTextarea1"
                    rows="10"
                    placeholder="Write detailed description of your item"
                ></textarea>

                <div className="border-bottom my-4"></div>
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="mt-3 fw-bold">Variations</h4>
                        <div className="text-muted fs-14 mb-3">
                            Sell multiple type of your product.
                        </div>
                    </div>
                    <div>
                        <div
                            role="button"
                            className="border bg-white fs-15 px-3 py-2 rounded-small"
                        >
                            <IconTablePlus size={20} className="me-1" /> Add a
                            variation
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <h6 className="">Varitaion 1: Color</h6>
                    <div
                        role="button"
                        className="border bg-white fs-15 px-3 py-2 rounded-small"
                    >
                        <IconMinus size={20} className="me-1" /> Remove
                        variation
                    </div>
                </div>
                <div className="mx-3 mt-4 border p-4 bg-white shadow-sm rounded-small">
                    <div className="d-flex fs-15 align-items-center ">
                        <div className="fw-medium">Black</div>
                        <div className="d-flex ms-3 gap-2">
                            <div
                                className="border rounded-small py-1 px-2"
                                role="button"
                            >
                                <IconTrash size={18} />
                            </div>
                            <div
                                className="border rounded-small py-1 px-2"
                                role="button"
                            >
                                <IconPencil size={18} />
                            </div>
                        </div>
                    </div>
                    <div className="border-bottom my-3"></div>
                    <div className="row mb-3 flex-wrap">
                        <div className="col-6 mb-3">
                            <div className="fs-15 mb-1">Name</div>
                            <input
                                type="text"
                                placeholder="White"
                                className="form-control fs-15 rounded-small border shadow-none"
                            />
                        </div>
                        <div className="col-6">
                            <div className="fs-15 mb-1">Quantity</div>
                            <input
                                type="text"
                                placeholder="100"
                                className="form-control fs-15 rounded-small border shadow-none"
                            />
                        </div>
                        <div className="col-6">
                            <div className="fs-15 mb-1">Price</div>
                            <div className="fs-15 d-flex gap-3">
                                <div class="form-check">
                                    <input
                                        class="form-check-input customradio"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="flexRadioDefault1"
                                    >
                                        New price
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input customradio"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="flexRadioDefault2"
                                    >
                                        Old price
                                    </label>
                                </div>
                            </div>
                            {/* <input
                                type="text"
                                placeholder="16.99$"
                                className="form-control fs-15 rounded-small border shadow-none"
                            /> */}
                        </div>
                    </div>
                </div>

                <div className="border-bottom my-4"></div>
                <h4 className="mt-3 fw-bold">Price</h4>
                <div className="text-muted fs-14 mb-3">
                    Global price to your product.
                </div>
                <input
                    type="text"
                    placeholder="5000$"
                    className="form-control fs-15 rounded-small border shadow-none"
                />

                <div className="border-bottom my-4"></div>
                <h4 className="mt-3 fw-bold">Shipping</h4>
                <div className="text-muted fs-14 mb-3">Ship your item.</div>
                <h6 className="mt-4">Domestic shipping</h6>
                <div className="text-muted fs-14 mb-3">
                    Provide the package weight and dimensions to calculate the
                    cost, or enter a fixed cost.
                </div>
                <div className="mx-3 mt-4 border p-4 bg-white shadow-sm rounded-small">
                    <div className="row fs-14 mx-0">
                        <div className="col-4 border-end">
                            <div className="mb-4">
                                <div className="fw-bold mb-3">
                                    Package weight
                                </div>
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">Lbs.</div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">Oz.</div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="fw-bold mb-3">
                                    Package dimensions
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">
                                            Length (in.)
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">
                                            Width <br />
                                            (in.)
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">
                                            Height (in.)
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="form-check mt-4">
                                <input
                                    class="form-check-input customcheckbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckIndeterminate"
                                />
                                <label
                                    class="form-check-label"
                                    for="flexCheckIndeterminate"
                                >
                                    I don&apos;t know the package details
                                </label>
                            </div>
                        </div>
                        <div className="col-4 border-end text-center">
                            <div className="d-flex justify-content-center">
                                <img
                                    src="https://p.ebaystatic.com/aw/shipping/services/ic_usps_3x.png"
                                    alt=""
                                    style={{ width: 70, height: 70 }}
                                />
                            </div>
                            <h6 className="fw-bold fs-15 mt-3">
                                USPS Priority Mail
                            </h6>
                            <div className="text-muted fs-14">
                                1 - 4 business days <br /> Max. 70 lb
                            </div>
                            <div className="fw-bold fs-15 my-3">
                                $7.93 - $16.93
                            </div>
                            <div
                                role="button"
                                className="border bg-white fs-15 px-3 py-2 rounded-small fw-medium"
                            >
                                Change shipping service
                            </div>
                        </div>

                        <div className="col-4 d-flex flex-column justify-content-center">
                            <div className="d-flex mb-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input customradio"
                                        type="radio"
                                        name="shipping"
                                        id="shipping1"
                                    />
                                </div>
                                <label class="form-check-label" for="shipping1">
                                    <div className="fw-bold">
                                        Offer free shipping
                                    </div>
                                    <div className="text-muted fs-12 mt-1">
                                        Buyer gets free shipping; you pay the
                                        cost.
                                    </div>
                                </label>
                            </div>

                            <div className="d-flex mb-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input customradio"
                                        type="radio"
                                        name="shipping"
                                        id="shipping2"
                                    />
                                </div>
                                <label class="form-check-label" for="shipping2">
                                    <div className="fw-bold">
                                        Buyer pays calculated shipping
                                    </div>
                                    <div className="text-muted fs-12 mt-1">
                                        Calculated based on the buyer’s location
                                        and the package weight and dimensions.
                                    </div>
                                </label>
                            </div>
                            <div className="d-flex mb-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input customradio"
                                        type="radio"
                                        name="shipping"
                                        id="shipping3"
                                    />
                                </div>
                                <label class="form-check-label" for="shipping3">
                                    <div className="fw-bold">
                                        Buyer pays flat shipping
                                    </div>
                                    <div className="text-muted fs-12 mt-1">
                                        You decide the cost.
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <h6 className="mt-5">International shipping</h6>
                <div className="text-muted fs-14 mb-3">
                    Provide the package weight and dimensions to calculate the
                    cost, or enter a fixed cost.
                </div>
                <div className="mx-3 mt-4 border p-4 bg-white shadow-sm rounded-small">
                    <div className="row fs-14 mx-0">
                        <div className="col-4 border-end">
                            <div className="mb-4">
                                <div className="fw-bold mb-3">
                                    Package weight
                                </div>
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">Lbs.</div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">Oz.</div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="fw-bold mb-3">
                                    Package dimensions
                                </div>
                                <div className="row mb-3 align-items-center">
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">
                                            Length (in.)
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">
                                            Width <br />
                                            (in.)
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                    <div className="col-4">
                                        <div className="fs-15 mb-1">
                                            Height (in.)
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="100"
                                            className="form-control fs-15 rounded-small border shadow-none"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="form-check mt-4">
                                <input
                                    class="form-check-input customcheckbox"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckIndeterminate"
                                />
                                <label
                                    class="form-check-label"
                                    for="flexCheckIndeterminate"
                                >
                                    I don&apos;t know the package details
                                </label>
                            </div>
                        </div>
                        <div className="col-4 border-end text-center">
                            <div className="d-flex justify-content-center">
                                <img
                                    src="https://p.ebaystatic.com/aw/shipping/services/ic_usps_3x.png"
                                    alt=""
                                    style={{ width: 70, height: 70 }}
                                />
                            </div>
                            <h6 className="fw-bold fs-15 mt-3">
                                USPS Priority Mail
                            </h6>
                            <div className="text-muted fs-14">
                                1 - 4 business days <br /> Max. 70 lb
                            </div>
                            <div className="fw-bold fs-15 my-3">
                                $7.93 - $16.93
                            </div>
                            <div
                                role="button"
                                className="border bg-white fs-15 px-3 py-2 rounded-small fw-medium"
                            >
                                Change shipping service
                            </div>
                        </div>

                        <div className="col-4 d-flex flex-column justify-content-center">
                            <div className="d-flex mb-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input customradio"
                                        type="radio"
                                        name="shipping"
                                        id="shipping1"
                                    />
                                </div>
                                <label class="form-check-label" for="shipping1">
                                    <div className="fw-bold">
                                        Offer free shipping
                                    </div>
                                    <div className="text-muted fs-12 mt-1">
                                        Buyer gets free shipping; you pay the
                                        cost.
                                    </div>
                                </label>
                            </div>

                            <div className="d-flex mb-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input customradio"
                                        type="radio"
                                        name="shipping"
                                        id="shipping2"
                                    />
                                </div>
                                <label class="form-check-label" for="shipping2">
                                    <div className="fw-bold">
                                        Buyer pays calculated shipping
                                    </div>
                                    <div className="text-muted fs-12 mt-1">
                                        Calculated based on the buyer’s location
                                        and the package weight and dimensions.
                                    </div>
                                </label>
                            </div>
                            <div className="d-flex mb-4">
                                <div class="form-check">
                                    <input
                                        class="form-check-input customradio"
                                        type="radio"
                                        name="shipping"
                                        id="shipping3"
                                    />
                                </div>
                                <label class="form-check-label" for="shipping3">
                                    <div className="fw-bold">
                                        Buyer pays flat shipping
                                    </div>
                                    <div className="text-muted fs-12 mt-1">
                                        You decide the cost.
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex mt-4 justify-content-end gap-3">
                    <div
                        role="button"
                        className="border bg-white fs-15 px-3 py-2 rounded-small"
                    >
                        <IconBookmark size={22} className="me-1" /> Save for
                        later
                    </div>
                    <Link href="/seller/listing">
                        <button className="btn btn-main rounded-small fs-14 fw-bold px-3 d-flex align-items-center">
                            <IconLock className="me-1" size={22} /> List item
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductAddPage;
