function ListingItem() {
    return (
        <div
            role="button"
            className="row mx-0  bg-white border mb-1 rounded-0 py-3 py-md-2 align-items-center"
        >
            <div className="order-0 col-auto">
                <input
                    className="form-check-input customcheckbox fs-15"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
            </div>
            <div className="order-1 col col-md-2">
                <img src="/6583192421.webp" alt="" className="img-fluid" />
            </div>
            <div className="order-3 order-md-2 col-12 col-md align-self-start">
                <div className="fw-medium fs-14 truncate-overflow-2">
                    Electric teeth brush Panda & Bear
                </div>
                <div className="d-flex fs-13 text-muted mt-2 flex-wrap gap-2 border-top pt-1">
                    <div className="">7 visits</div>
                    <div>30 favourites</div>
                    <div>1 sale</div>
                    <div>$99.94 revenue</div>
                </div>
            </div>
            <div className="order-2 order-md-3 col-6 text-end">
                <div className="fw-medium fs-15 mb-1">$1024.23</div>

                <div className="text-muted  fs-13">Variation: Color</div>
                <div className="text-muted  fs-13">Free delivery</div>
                <div className="text-muted  fs-13">Posted on Jan 12, 2024</div>
            </div>
        </div>
    );
}

export default ListingItem;
