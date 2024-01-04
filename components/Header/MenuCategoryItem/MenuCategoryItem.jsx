import Image from "next/image";

function MenuCategoryItem({ img, title }) {
    return (
        <div
            style={{ width: "140px" }}
            className="col-auto d-flex py-2  align-items-center flex-column"
        >
            <div
                style={{
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px",
                }}
                className="bg-main-50 d-flex justify-content-center align-items-center p-1 overflow-hidden"
            >
                <Image
                    className="img-fluid"
                    src={`${
                        img ? img : "https://pngimg.com/d/mercedes_PNG80135.png"
                    }`}
                    alt=""
                    style={{
                        width: "100px",
                    }}
                />
            </div>
            <div className="text-center mt-1">{title ? title : "Cars"}</div>
        </div>
    );
}

export default MenuCategoryItem;
