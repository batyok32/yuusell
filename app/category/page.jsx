import CategoryItem from "@/components/Categories/CategoryItem/CategoryItem";

function CategoryPage() {
    return (
        <div>
            <div className="container-xxl mb-5 pb-1">
                <div className="bg-white rounded-1  mt-4 py-3 px-3 mb-5">
                    <div className="fw-bold">Categories</div>
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 align-items-stretch mt-3">
                        <CategoryItem
                            img="https://ir.ozone.ru/s3/cms/47/t4c/wc250/elektronika.png"
                            title="Electronics"
                        />
                        <CategoryItem
                            img="https://ir.ozone.ru/s3/cms/7e/te1/wc250/dom_i_sad.png"
                            title="Home and garden"
                        />
                        <CategoryItem
                            img="https://ir.ozone.ru/s3/cms/8c/t8e/wc250/detskiya_tovary.png"
                            title="Baby products"
                        />
                        <CategoryItem
                            img="https://ir.ozone.ru/s3/cms/fc/t49/wc250/odejda.png"
                            title="Clothes"
                        />
                        <CategoryItem
                            img="https://ir.ozone.ru/s3/cms/b8/ta5/wc250/apteka.png"
                            title="Pharmacy"
                        />
                        <CategoryItem
                            img="https://ir.ozone.ru/s3/cms/15/tce/wc250/bytovaya_tehnika.png"
                            title="Baby products"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;
