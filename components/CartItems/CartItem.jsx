import { IconHeart, IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import Image from "next/image";

function CartItem() {
    return (
        <div className="row fs-14 align-items-center py-3">
            <div className="col-auto">
                <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
            </div>
            <div className="col-2">
                <img src="/6583192421.webp" alt="" className="img-fluid" />
            </div>
            <div className="col">
                <div className="fw-medium">
                    Electric teeth brush Panda & Bear
                </div>
                <div className="text-muted py-2 fs-13">color: white</div>
                <div>
                    <button className="btn btn-gray px-2 py-0 border-0 me-2">
                        <IconHeart size={18} />
                    </button>
                    <button className="btn btn-gray px-2 py-0 border-0">
                        <IconTrash size={18} />
                    </button>
                </div>
            </div>
            <div className="col-2">
                <div className="fw-medium">999$</div>
                <div className="text-muted fs-13">Free delivery</div>
            </div>
            <div className="col-2 d-flex align-items-center gap-1">
                <button className="btn btn-gray px-2 py-0 border-0">
                    <IconMinus size={18} />
                </button>
                <div>
                    <input
                        type="text"
                        className="text-center"
                        style={{ maxWidth: "40px" }}
                        defaultValue={1}
                    />
                </div>
                <button className="btn btn-gray px-2 py-0 border-0">
                    <IconPlus size={18} />
                </button>
            </div>
        </div>
    );
}

export default CartItem;
