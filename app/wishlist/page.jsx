import ProductCardV1 from "@/components/ProductCardV1/ProductCardV1";
import { IconBuildingStore, IconFileStar } from "@tabler/icons-react";
import Link from "next/link";

function Wishlist() {
    return (
        <div className="container-xxl mb-5 pb-4">
            <div className="row mx-0 mt-3">
                <div className="order-1 pe-md-2 order-md-0  col-12 mb-2 col-lg-2 px-0 ">
                    <div className="bg-white p-2 fs-14 rounded-1 ps-3">
                        <div className="mb-4 mt-2">
                            <Link
                                href="/"
                                className="btn light-link fs-14 w-100 text-start d-flex align-items-center fw-medium active"
                            >
                                <IconFileStar size={24} className="me-1 " />{" "}
                                Products and List
                            </Link>
                            <Link
                                href="/"
                                className="btn light-link fs-14 w-100 text-start d-flex align-items-center  fw-medium"
                            >
                                <IconBuildingStore
                                    size={24}
                                    className="me-1 "
                                />
                                Shops
                            </Link>
                        </div>
                        <div className="mb-4 ">
                            <div className="fw-bold text-dark mb-1">
                                Categories
                            </div>
                            <Link href="#" className="">
                                Clothes
                            </Link>
                        </div>
                        <div>
                            <div className="fw-bold text-dark mb-2 ">
                                Availability
                            </div>
                            <ul className="list-unstyled  ">
                                <li>
                                    <div class="form-check custom-formcheck pb-0">
                                        <input
                                            class="customradio form-check-input "
                                            type="radio"
                                            name="delivery"
                                            id="delivery1"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="delivery1"
                                        >
                                            Don&apos;t matter
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check custom-formcheck">
                                        <input
                                            class="form-check-input customradio"
                                            type="radio"
                                            name="delivery"
                                            id="delivery2"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="delivery2"
                                        >
                                            Available
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check custom-formcheck">
                                        <input
                                            class="form-check-input customradio"
                                            type="radio"
                                            name="delivery"
                                            id="delivery3"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="delivery3"
                                        >
                                            Not available
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="order-0 order-md-1 col-12 mb-3 col-lg-10 pe-0 ps-0">
                    <div className="bg-white p-3 d-flex justify-content-between align-items-center flex-wrap">
                        <div className="fw-bold">Products and List</div>
                        <div>
                            <select
                                class="form-select fs-13 mt-1 mt-md-0"
                                aria-label="Default select example"
                            >
                                <option selected>Sort by: Newest</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-white p-2 mt-2">
                        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5  mx-0">
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/417OJaY3DAL._AC_UL450_SR450,320_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/41isZ6WaV9L._AC_UL450_SR450,320_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/41vhe0X8wbL._AC_UL450_SR450,320_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/713xuNx00oS._AC_UL450_SR450,320_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/71JSM9i1bQL._AC_UL450_SR450,320_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/61ZDwijKtxL._AC_UL450_SR450,320_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/51hUUjfardL._AC_UL450_SR450,320_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/518cRYanpbL._AC_UL450_SR450,320_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/61s3zZQuVHL._AC_UL600_SR600,400_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/513qVqoyb0L._AC_UL600_SR600,400_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/51Am3f1xedL._AC_UL300_SR300,200_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/51RVkm7S4rL._AC_UL300_SR300,200_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/610GWgeQAuL._AC_UL300_SR300,200_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/71wrvwWAgbL._AC_UL300_SR300,200_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/71eN+wQrK1L._AC_UL300_SR300,200_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/61494AqMZWL._AC_UL300_SR300,200_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/51kuTlLiaNL._AC_UL600_SR600,400_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/51S9n+Tc4QL._AC_UL600_SR600,400_.jpg" />
                            <ProductCardV1 img="https://images-na.ssl-images-amazon.com/images/I/61J8HL+O4tL._AC_UL600_SR600,400_.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Wishlist;
