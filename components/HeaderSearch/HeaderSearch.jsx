"use client";

import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

function HeaderSearch() {
    const { push } = useRouter();

    return (
        <div className="input-group flex-grow-1 align-items-center  border rounded-1 py-0">
            <div className="bg-gray align-self-stretch d-flex justify-content-center">
                <select
                    class="form-select btn  border-0 rounded-0 me-0 fs-13 noarrow  m-0 truncate-overflow-1 px-1"
                    style={{ maxWidth: "60px" }}
                    aria-label="Default select example"
                >
                    <option value="1">All</option>
                    <option value="2">Antiques</option>
                    <option value="3">Art</option>
                    <option value="4">Baby</option>
                    <option value="5">Books & Magazines</option>
                    <option value="6">Business & Industrials</option>
                </select>
            </div>
            {/* <button
                className="btn btn-gray border-0 rounded-0 me-0 dropdown-toggle fs-14 align-self-stretch"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                All
            </button>
            <ul className="dropdown-menu fs-14">
                <li>
                    <a className="dropdown-item" href="#">
                        Action
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        Another action
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        Something else here
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a className="dropdown-item" href="#">
                        Separated link
                    </a>
                </li>
            </ul> */}
            <input
                type="text"
                className="form-control border-0 shadow-none ps-2 py-2 fs-14 user-select-none"
                aria-label="Text input with dropdown button "
                placeholder="Search Yuusell"
                onKeyDown={(e) => {
                    if (e.key === "Enter") push("/search?query=hello");
                }}
            />
            <div
                role="button"
                onClick={() => push("/search?query=hello")}
                className="btn-main  text-white align-self-stretch d-flex align-items-center px-2 rounded-end-1"
            >
                <div className="btn-custom">
                    <IconSearch />
                </div>
            </div>
        </div>
    );
}

export default HeaderSearch;
