"use strict";
const form = document.querySelector("form");
const h3 = document.querySelector("h3");
const kg = document.querySelector("#kg");
const sm = document.querySelector("#sm");
const rangekg = document.querySelector("#rangekg");
const rangesm = document.querySelector("#rangesm");
if (form) {
    form.addEventListener("input", () => {
        if (rangekg && kg) {
            kg.innerHTML = `Weight:${rangekg.value} kg`;
        }
        if (rangesm && sm) {
            sm.innerHTML = `Height:${rangesm.value} sm`;
        }
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (h3 && rangesm && rangekg) {
            const mathSm = (Number(rangesm.value) / 100) ** 2;
            console.log(mathSm);
            h3.innerHTML = `Your BMI:${Number(rangekg.value) / mathSm}`;
        }
    });
}
window.addEventListener("DOMContentLoaded", () => {
    if (rangekg && kg) {
        kg.innerHTML = `Weight:${rangekg.value} kg`;
    }
    if (rangesm && sm) {
        sm.innerHTML = `Height:${rangesm.value} sm`;
    }
});
