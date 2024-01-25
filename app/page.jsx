import Slider from "@/components/Slider/Slider";
import ProductCardV1 from "@/components/ProductCardV1/ProductCardV1";

export default function Home() {
    return (
        <div>
            <Slider />
            <div className="container-xxl">
                <div className="bg-white rounded-1  mt-4 py-3 px-sm-3 mb-5">
                    <h6 className="fs-6 fw-bold mb-3 ms-3 ms-sm-0">
                        Special offers
                    </h6>
                    <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6  mx-0">
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
