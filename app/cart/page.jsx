import CartItem from "@/components/CartItems/CartItem";
import MobileCartItem from "@/components/CartItems/MobileCartItem";
import RecommendedProductSlider from "@/components/RecommendedProductSlider/RecommendedProductSlider";
import {
    IconHeart,
    IconHeartFilled,
    IconMinus,
    IconPlus,
    IconTrash,
} from "@tabler/icons-react";
import Link from "next/link";

function Cart() {
    return (
        <div class="container-xxl mt-md-3 px-sm-4 py-4">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div className="fw-bold fs-5 ">Cart (2)</div>
            </div>

            <div class="row align-items-start mx-0 ">
                <div class="col-md-8 order-1 order-md-0 bg-white rounded-1">
                    <div className="d-flex gap-2 fs-14 user-select-none pt-2 border-bottom">
                        <div class="form-check ">
                            <input
                                class="form-check-input customcheckbox fs-6"
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                            />
                            <label
                                class="form-check-label fw-medium fs-15 pt-1"
                                role="button"
                                for="flexCheckDefault"
                            >
                                Choose all
                            </label>
                        </div>
                        <div className="text-danger fw-bold pt-1" role="button">
                            Delete chosen
                        </div>
                    </div>

                    <div className="px-2 pe-4 d-none d-md-block">
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className="d-md-none">
                        <MobileCartItem />
                        <MobileCartItem />
                    </div>
                </div>

                <div class="col-md-4 order-0 order-md-1 px-md-2  top-0 px-0 mb-2">
                    <div className="bg-white rounded-1 h-100 px-4 py-3 ">
                        <Link href="/checkout">
                            <button className="btn-main  btn w-100 fw-bold fs-14 py-2">
                                Checkout
                            </button>
                        </Link>
                        <div className="fs-14 pt-3">
                            <div className="d-flex justify-content-between py-1">
                                <div>Items (2)</div>
                                <div className="fw-bold">$1140.00</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>Shipping</div>
                                <div className="fw-bold">$15</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>Tax</div>
                                <div className="fw-bold">$100</div>
                            </div>
                            <div className="d-flex justify-content-between py-1">
                                <div>Discounts</div>
                                <div className="fw-bold">-$28.56</div>
                            </div>
                            <hr />
                            <div className="d-flex justify-content-between py-1">
                                <div>Subtotal</div>
                                <div className="fw-bold">$1000.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white mt-4 p-sm-3 p-1 rounded-1">
                <div className="fw-bold  ">Similar items</div>
                <RecommendedProductSlider />
            </div>
        </div>
    );
}

export default Cart;
