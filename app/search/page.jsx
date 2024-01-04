import ProductCardV1 from "@/components/ProductCardV1/ProductCardV1";
import "./styles.css";

function Search() {
    return (
        <div className="container-xxl">
            <div className="d-flex justify-content-between align-items-center bg-white my-2 rounded-1 p-3 flex-wrap ">
                <div className="fs-14 mb-2 mb-md-0 truncate-overflow-1">
                    <span className="fw-medium">43,547</span> products found for{" "}
                    <span className="fw-medium">&quot;hello&quot;</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                    <div>
                        <div className="form-select fs-13 " role="button">
                            More filters
                        </div>
                    </div>
                    <div>
                        <select
                            class="form-select fs-13"
                            aria-label="Default select example"
                        >
                            <option selected>Sort by: Newest</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="row  my-2 rounded-1  mx-0">
                <div className="d-none d-md-block col-2  ps-0 fs-14">
                    <div className="bg-white p-3">
                        <div>
                            <div className="fw-bold">Categories</div>
                            <ul className="list-unstyled mt-2 ">
                                <li>Electronics</li>
                                <li>Clothes</li>
                                <li>Home and garden</li>
                                <li>Baby</li>
                                <li>App & Games</li>
                                <li>Jewelry</li>
                            </ul>
                        </div>

                        {/* Price */}
                        {/* All filters button */}
                        <div>
                            <div className="fw-bold">Delivery time</div>
                            <ul className="list-unstyled mt-2 ">
                                <li>
                                    <div class="form-check custom-formcheck">
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
                                            up 1 day
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
                                            up 4 days
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check custom-formcheck">
                                        <input
                                            class="form-check-input customradio"
                                            type="radio"
                                            name="delivery"
                                            id="delivery4"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="delivery4"
                                        >
                                            up 7 days
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div class="form-check custom-formcheck">
                                        <input
                                            class="form-check-input customradio"
                                            type="radio"
                                            name="delivery"
                                            id="delivery5"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="delivery5"
                                        >
                                            up 31 days
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="fw-bold">Price</div>
                            <div className="d-flex gap-1 mt-2">
                                <div className="border d-flex align-items-center rounded-1 py-1 pe-1">
                                    <span className="text-muted fs-14 px-1">
                                        mn:{" "}
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control border-0 shadow-none p-0 fs-14 rounded-0"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                <div className="border d-flex align-items-center rounded-1 pe-1 py-1">
                                    <span className="text-muted fs-14 px-1">
                                        mx:{" "}
                                    </span>
                                    <input
                                        type="text"
                                        class="form-control border-0 shadow-none p-0 fs-14 rounded-0 fs-13"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="btn btn-main fs-14 w-100 mt-3 fw-bold">
                                More filters
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-10 ps-0 pe-0 mb-5 mb-md-0">
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 bg-white p-3 mx-0">
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
    );
}

export default Search;
