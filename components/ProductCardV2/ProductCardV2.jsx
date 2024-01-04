import { IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";

function ProductCardV2({ img }) {
    return (
        <Link href="/products/iphone-cable/2324" className="row my-2 ">
            <div className="col-5">
                <div
                    className=" w-100 h-100 d-flex align-items-center align-content-center justify-content-center"
                    style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
            </div>
            <div className="col-7">
                <div className="fs-12  fw-medium mt-1 truncate-overflow-2">
                    RCA/AV Video to Digital Converter SD Video Recorder 1080p
                    MP4 on USB / TF
                </div>
                <div className="fw-bold fs-14">$1999.00</div>
                <div className="fs-12 fw-medium text-lightgray">
                    Free shipping
                </div>
                <div className="d-flex align-items-center flex-wrap">
                    <IconStarFilled className="text-yellow" size={16} />
                    <IconStarFilled size={16} className="text-yellow" />
                    <IconStarFilled size={16} className="text-yellow" />
                    <IconStarFilled size={16} className="text-yellow" />
                    <IconStarFilled size={16} className="text-yellow" />
                    <span className="fs-12 text-lightgray ms-2 mt-1 ">
                        5.0 (25)
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default ProductCardV2;
