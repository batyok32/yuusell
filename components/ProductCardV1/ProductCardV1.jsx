import { IconStar, IconStarFilled } from "@tabler/icons-react";
import Link from "next/link";

function ProductCardV1({ img }) {
    return (
        <Link href="/products/iphone-cable/2324" className="px-1 py-1 h-100">
            <div className="h-100">
                <div
                    className="mt-2 w-100 h-100 d-flex align-items-center align-content-center justify-content-center"
                    style={{
                        width: "100%",
                        aspectRatio: "1/1",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                    }}
                ></div>
                <div className="fs-14  fw-medium mt-1 truncate-overflow-2">
                    RCA/AV Video to Digital Converter SD Video Recorder 1080p
                    MP4 on USB / TF
                </div>
                <div className="fw-bold ">$1999.00</div>
                <div className="fs-14 fw-medium text-lightgray">
                    Free shipping
                </div>
                <div className="d-flex align-items-center flex-wrap truncate-overflow-1 mt-1">
                    <IconStarFilled className="text-yellow" size={18} />
                    <IconStarFilled size={18} className="text-yellow" />
                    <IconStarFilled size={18} className="text-yellow" />
                    <IconStarFilled size={18} className="text-yellow" />
                    <IconStarFilled size={18} className="text-yellow" />
                    <span className="fs-14 text-lightgray ms-2 mt-1 d-none d-md-inline">
                        5.0 (25)
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default ProductCardV1;
