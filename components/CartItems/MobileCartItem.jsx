import { IconHeart, IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

function MobileCartItem() {
    return (
        <div className="row flex-wrap align-items-center py-2">
            <div className="col-auto">
                <input
                    class="form-check-input customcheckbox"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
            </div>
            <div className="col-5 pe-0">
                <Image
                    src="https://ir-3.ozone.ru/s3/multimedia-5/wc100/6583192421.jpg"
                    alt=""
                    className="img-fluid"
                />
            </div>
            <div className="col-5 ps-0 pe-0">
                <div className="fw-medium fs-14 truncate-overflow-2">
                    Electric teeth brush Panda & Bear
                </div>
                <div className="text-muted py-1 fs-14">Color: white</div>
                <div className="fw-medium fs-15 ">999$</div>
                <div className="text-muted fs-14">Free delivery</div>
            </div>
            <div className="col-12 my-2 d-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center gap-1">
                    <button className="btn btn-gray bg-slightgray px-2 py-0 border-0">
                        <IconMinus size={18} />
                    </button>
                    <div>
                        <input
                            type="text"
                            className="text-center fs-14 border py-1"
                            style={{ maxWidth: "40px" }}
                            defaultValue={1}
                        />
                    </div>
                    <button className="btn btn-gray bg-slightgray px-2 py-0 border-0">
                        <IconPlus size={18} />
                    </button>
                </div>
                <div className="">
                    <button className="btn btn-gray bg-slightgray px-2 py-0 border-0 me-2">
                        <IconHeart size={18} />
                    </button>
                    <button className="btn btn-gray bg-slightgray px-2 py-0 border-0">
                        <IconTrash size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MobileCartItem;
