import CategoryItem from "@/components/Categories/CategoryItem/CategoryItem";

function CategoryPage() {
    return (
        <div>
            <div className="container-xxl mb-5 pb-1">
                <div className="bg-white rounded-1  mt-4 py-3 px-3 mb-5">
                    <div className="fw-bold">Categories</div>
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 align-items-stretch mt-3">
                        <CategoryItem
                            img="/products/1.WEBP"
                            title="Electronics"
                        />
                        <CategoryItem
                            img="/products/2.WEBP"
                            title="Home and garden"
                        />
                        <CategoryItem
                            img="/products/3.WEBP"
                            title="Baby products"
                        />
                        <CategoryItem img="/products/4.WEBP" title="Clothes" />
                        <CategoryItem img="/products/5.WEBP" title="Pharmacy" />
                        <CategoryItem
                            img="/products/6.WEBP"
                            title="Baby products"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
