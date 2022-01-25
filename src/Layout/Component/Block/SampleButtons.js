import React from "react";

import "./Style/SampleButtons.scss";

export default function SampleButtons() {

    const sampleButtons = [
        {id: 1, buttons: [
                {id: 1, btnTitle: "Default", class: "link"},
                {id: 2, btnTitle: "Primary", class: "bg-color-primary"},
                {id: 3, btnTitle: "Success", class: "bg-color-success"},
                {id: 4, btnTitle: "Info", class: "bg-color-info"},
                {id: 5, btnTitle: "Warning", class: "bg-color-warning"},
                {id: 6, btnTitle: "Danger", class: "bg-color-danger"},
                {id: 7, btnTitle: "Link", class: "link"},
                {id: 8, btnTitle: "Disable", class: "disable"},
            ]},
        {id: 2, buttons: [
                {id: 1, btnTitle: "Default", class: "link"},
                {id: 2, btnTitle: "Primary", class: "none-bg-primary"},
                {id: 3, btnTitle: "Success", class: "none-bg-success"},
                {id: 4, btnTitle: "Info", class: "none-bg-info"},
                {id: 5, btnTitle: "Warning", class: "none-bg-warning"},
                {id: 6, btnTitle: "Danger", class: "none-bg-danger"},
                {id: 7, btnTitle: "Link", class: "link"},
                {id: 8, btnTitle: "Disable", class: "disable"},
            ]},
        {id: 3, buttons: [
                {id: 1, btnTitle: "Default", class: "link"},
                {id: 2, btnTitle: "Primary", class: "bg-color-primary"},
                {id: 3, btnTitle: "Success", class: "bg-color-success"},
                {id: 4, btnTitle: "Info", class: "bg-color-info"},
                {id: 5, btnTitle: "Warning", class: "bg-color-warning"},
                {id: 6, btnTitle: "Danger", class: "bg-color-danger"},
                {id: 7, btnTitle: "Link", class: "link"},
                {id: 8, btnTitle: "Disable", class: "disable"},
            ]},
        {id: 4, buttons: [
                {id: 1, btnTitle: "Default", class: "link"},
                {id: 2, btnTitle: "Primary", class: "none-bg-primary"},
                {id: 3, btnTitle: "Success", class: "none-bg-success"},
                {id: 4, btnTitle: "Info", class: "none-bg-info"},
                {id: 5, btnTitle: "Warning", class: "none-bg-warning"},
                {id: 6, btnTitle: "Danger", class: "none-bg-danger"},
                {id: 7, btnTitle: "Link", class: "link"},
                {id: 8, btnTitle: "Disable", class: "disable"},
            ]},
        {id: 5, buttons: [
                {id: 1, btnTitle: "Default", class: "link"},
                {id: 2, btnTitle: "Primary", class: "bg-color-primary"},
                {id: 3, btnTitle: "Success", class: "bg-color-success"},
                {id: 4, btnTitle: "Info", class: "bg-color-info"},
                {id: 5, btnTitle: "Warning", class: "bg-color-warning"},
                {id: 6, btnTitle: "Danger", class: "bg-color-danger"},
                {id: 7, btnTitle: "Link", class: "link"},
                {id: 8, btnTitle: "Disable", class: "disable"},
            ]},
        {id: 6, buttons: [
                {id: 1, btnTitle: "Default", class: "link"},
                {id: 2, btnTitle: "Primary", class: "none-bg-primary"},
                {id: 3, btnTitle: "Success", class: "none-bg-success"},
                {id: 4, btnTitle: "Info", class: "none-bg-info"},
                {id: 5, btnTitle: "Warning", class: "none-bg-warning"},
                {id: 6, btnTitle: "Danger", class: "none-bg-danger"},
                {id: 7, btnTitle: "Link", class: "link"},
                {id: 8, btnTitle: "Disable", class: "disable"},
            ]},
        {id: 7, buttons: [
                {id: 1, btnTitle: "Default", class: "link"},
                {id: 2, btnTitle: "Primary", class: "bg-color-primary"},
                {id: 3, btnTitle: "Success", class: "bg-color-success"},
                {id: 4, btnTitle: "Info", class: "bg-color-info"},
                {id: 5, btnTitle: "Warning", class: "bg-color-warning"},
                {id: 6, btnTitle: "Danger", class: "bg-color-danger"},
            ]},
        {id: 8, buttons: [
                {id: 1, btnTitle: "Default", class: "link"},
                {id: 2, btnTitle: "Primary", class: "none-bg-primary"},
                {id: 3, btnTitle: "Success", class: "none-bg-success"},
                {id: 4, btnTitle: "Info", class: "none-bg-info"},
                {id: 5, btnTitle: "Warning", class: "none-bg-warning"},
                {id: 6, btnTitle: "Danger", class: "none-bg-danger"},
            ]},
        {id: 9, buttons: [
                {id: 1, btnTitle: "Extra Large", class: "bg-color-primary extra-large"},
                {id: 2, btnTitle: "Large", class: "bg-color-success large"},
                {id: 3, btnTitle: "Default", class: "bg-color-primary default"},
                {id: 4, btnTitle: "Medium", class: "bg-color-success medium"},
                {id: 5, btnTitle: "Small", class: "bg-color-primary small"},
            ]},
        {id: 10, buttons: [
                {id: 1, btnTitle: "Extra Large", class: "none-bg-primary extra-large"},
                {id: 2, btnTitle: "Large", class: "none-bg-success large"},
                {id: 3, btnTitle: "Default", class: "none-bg-primary default"},
                {id: 4, btnTitle: "Medium", class: "none-bg-success medium"},
                {id: 5, btnTitle: "Small", class: "none-bg-primary small"},
            ]},
    ]

    return(
        <div className="main-sample-buttons-container">
            <h2>Sample Buttons</h2>
            {sampleButtons.map((button) => <div className="item-buttons" key={button.id}>
                {button.buttons.map((btn) => <button key={btn.id} className={btn.class}>{btn.btnTitle}</button>)}
            </div>)}
        </div>
    )
}