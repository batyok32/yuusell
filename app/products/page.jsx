function Products() {
    return (
        <div className="container-xxl">
            <div className="d-flex justify-content-between align-items-center bg-white my-2 rounded-1">
                <div>48 of 293 results</div>
                <div>
                    <select
                        class="form-select fs-14"
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
    );
}

export default Products;
