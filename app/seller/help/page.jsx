import HelpColumnItem from "@/components/SellerComps/HelpColumnItem/HelpColumnItem";
import HelpItem from "@/components/SellerComps/HelpItem/HelpItem";
import HelpSlider from "@/components/SellerComps/HelpSlider/HelpSlider";
import { IconSearch } from "@tabler/icons-react";

export default function HelpPage() {
    return (
        <div>
            <div className="p-3">
                <div className="bg-white text-center shadow-sm">
                    <div className="d-flex p-4 justify-content-center flex-column">
                        <div className="fs-4 fw-bold mb-3">
                            Seller help center
                        </div>
                        <div className="text-secondary col-6 mx-auto d-flex border align-items-center px-1 py-2 rounded-small">
                            <IconSearch size={22} className="me-2" />
                            <input
                                type="text"
                                class="form-control border-0 p-0 rounded-0 shadow-none placeholder-gray fs-14"
                                id="exampleFormControlInput1"
                                placeholder="Search by title, tag or SKU"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3 ">
                <div className="bg-white shadow-sm mb-2">
                    <div className=" py-3 px-3">
                        <HelpSlider />
                    </div>
                </div>

                <div className="bg-white shadow-sm">
                    <div className="row row-cols-5 mx-0 py-3 px-3">
                        <HelpColumnItem />
                        <HelpColumnItem />
                        <HelpColumnItem />
                        <HelpColumnItem />
                        <HelpColumnItem />
                    </div>
                </div>
            </div>
        </div>
    );
}
