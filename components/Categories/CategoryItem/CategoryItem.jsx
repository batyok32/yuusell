import Image from "next/image";

function CategoryItem({ img, title }) {
    return (
        <div className=" d-flex py-2 px-1  align-items-center flex-column">
            <div className="bg-slightgray rounded-1 d-flex justify-content-center align-items-center p-1 overflow-hidden">
                <img className="img-fluid" src={img} alt="" />
            </div>
            <div className="text-center mt-1 fs-15 fw-medium">{title}</div>
        </div>
    );
}

export default CategoryItem;
