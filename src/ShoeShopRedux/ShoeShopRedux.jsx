import React, { Component } from "react";
import DetailShoe from "./DetailShoe/DetailShoe";
import ListShoe from "./ListShoe/ListShoe";
import CartShoe from "./CartShoe/CartShoe";

export default class ShoeShopRedux extends Component {
    handleChangeTheme = () => {
        const htmlEl = document.querySelector("html");
        htmlEl.attributes["data-bs-theme"].value === "dark"
            ? (htmlEl.attributes["data-bs-theme"].value = "light")
            : (htmlEl.attributes["data-bs-theme"].value = "dark");
    };
    render() {
        return (
            <div className="container py-5">
                <div className=" mb-3">
                    <button
                        onClick={() => {
                            this.handleChangeTheme();
                        }}
                        className="change_theme btn btn-success"
                    >
                        Change Theme
                    </button>
                </div>
                <div className="row  row-gap-2">
                    <div className="col-lg-8 ">
                        <ListShoe />
                    </div>
                    <div
                        className="col-lg-4 d-flex flex-column gap-2 "
                        style={{ height: "80vh" }}
                    >
                        <DetailShoe />
                        <CartShoe />
                    </div>
                </div>
            </div>
        );
    }
}
