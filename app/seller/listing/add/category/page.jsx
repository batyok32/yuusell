import CategoryItem from "@/components/Categories/CategoryItem/CategoryItem";
import {
    IconArrowRight,
    IconArrowRightCircle,
    IconChevronRight,
    IconMinus,
    IconSearch,
} from "@tabler/icons-react";
import Link from "next/link";

function AddProduct() {
    return (
        <div className="my-4 mx-4">
            {/*  */}
            <div className="  mb-3">
                <div className="d-flex align-items-center gap-4">
                    <h4 className="">Category</h4>
                    <div className="text-secondary bg-white py-2 d-flex border align-items-center px-1 rounded-1">
                        <IconSearch size={22} className="me-2" />
                        <input
                            type="text"
                            class="form-control border-0 p-0 rounded-0 shadow-none placeholder-gray fs-14"
                            id="exampleFormControlInput1"
                            placeholder="Search by category name"
                        />
                    </div>
                    <Link href="/seller/listing/add" className="ms-auto">
                        <div
                            style={{ borderRadius: 2 }}
                            className="btn btn-main fs-14 fs-14 fw-bold px-3 d-flex align-items-center gap-2"
                        >
                            Next <IconArrowRight size={18} />
                        </div>
                    </Link>
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <div className="text-muted fs-14  d-inline-flex align-items-center gap-1">
                        Building Toys LEGO <IconChevronRight size={16} />{" "}
                        Building Toys LEGO <IconChevronRight size={16} />{" "}
                        Complete Sets & Packs
                    </div>
                    <div
                        role="button"
                        className="text-muted bg-white px-2 py-1 fs-14 border"
                    >
                        <IconMinus size={18} className="me-1" /> Remove category
                    </div>
                </div>
                <div className="row row-cols-6 gap-1 mx-0 mt-3">
                    <CategoryItem
                        className="border "
                        img="/elektronika.webp"
                        title="Electronics"
                    />
                    <CategoryItem
                        className="border "
                        img="/elektronika.webp"
                        title="Electronics"
                    />
                    <CategoryItem
                        className="border "
                        img="/elektronika.webp"
                        title="Electronics"
                    />
                    <CategoryItem
                        className="border "
                        img="/elektronika.webp"
                        title="Electronics"
                    />
                    <CategoryItem
                        className="border "
                        img="/elektronika.webp"
                        title="Electronics"
                    />
                    <CategoryItem
                        className="border "
                        img="/elektronika.webp"
                        title="Electronics"
                    />
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
