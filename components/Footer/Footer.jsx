import Image from "next/image";

function Footer() {
    return (
        <div>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 cd  mx-0 fs-14 text-lightgray mt-5">
                <div className="px-sm-5 pt-0 py-2">
                    <Image
                        src="https://ir.ozone.ru/s3/cms/28/t9c/qr-code_1.png"
                        alt=""
                        className="img-fluid"
                    />
                    <div className="text-center fw-medium">
                        Point your camera and download the free Yuusell app
                    </div>
                </div>

                <div>
                    <div className="fw-medium text-black mb-2 ">
                        Get to Know Us
                    </div>
                    <div>Careers</div>
                    <div>Amazon Newsletter</div>
                    <div>About Amazon</div>
                    <div>Accessibility</div>
                    <div>Sustainability</div>
                    <div>Press Center</div>
                    <div>Investor Relations</div>
                    <div>Amazon Devices</div>
                    <div>Amazon Science</div>
                </div>
                <div>
                    <div className="fw-medium text-black mb-2">
                        Make Money with Us
                    </div>
                    <div>Sell on Amazon</div>
                    <div>Sell apps on Amazon</div>
                    <div>Supply to Amazon</div>
                    <div>Protect & Build Your Brand</div>
                    <div>Become an Affiliate</div>
                    <div>Become a Delivery Driver</div>
                    <div>Start a Package Delivery Business</div>
                    <div>Advertise Your Products</div>
                    <div>Self-Publish with Us</div>
                    <div>Host an Amazon Hub</div>
                    <div>See More Ways to Make Money</div>
                </div>

                <div>
                    <div className="fw-medium text-black mb-2">
                        Amazon Payment Products
                    </div>
                    <div>Amazon Visa</div>
                    <div>Amazon Store Card</div>
                    <div>Amazon Secured Card</div>
                    <div>Amazon Business Card</div>
                    <div>Shop with Points</div>
                    <div>Credit Card Marketplace</div>
                    <div>Reload Your Balance</div>
                    <div>Gift Cards</div>
                    <div>Amazon Currency Converter</div>
                </div>
                <div className="py-2">
                    <div className="fw-medium text-black mb-2 ">
                        Let Us Help You
                    </div>
                    <div>Your Account</div>
                    <div>Your Orders</div>
                    <div>Shipping Rates & Policies</div>
                    <div>Amazon Prime</div>
                    <div>Returns & Replacements</div>
                    <div>Manage Your Content and Devices</div>
                    <div>Your Recalls and Product Safety Alerts</div>
                    <div>Help</div>
                </div>
            </div>
            <hr />
            <div className="w-50 mx-auto">
                <div className="d-flex justify-content-center align-items-center mb-2 flex-wrap gap-2 ">
                    <Image src="/logo.jpg" alt="" style={{ height: 80 }} />
                    <select
                        class="form-select fs-14 w-auto mx-2"
                        aria-label="Default select example"
                    >
                        <option value="1">English - EN</option>
                        <option value="2">Espanol - ES</option>
                        <option value="2">Russian - RU</option>
                        <option value="2">Turkmen - TM</option>
                    </select>
                    <select
                        class="form-select fs-14 w-auto mx-2"
                        aria-label="Default select example"
                    >
                        <option value="1">United States</option>
                        <option value="2">Russia</option>
                        <option value="3">Turkmenistan</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Footer;
