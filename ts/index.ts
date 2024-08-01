const form: HTMLFormElement | null = document.querySelector("form");
const h3: HTMLHeadingElement | null = document.querySelector("h3");
const kg: HTMLParagraphElement | null = document.querySelector("#kg");
const sm: HTMLParagraphElement | null = document.querySelector("#sm");
const rangekg = document.querySelector("#rangekg") as HTMLInputElement;
const rangesm = document.querySelector("#rangesm") as HTMLInputElement;
if (form) {
  form.addEventListener("input", () => {
    if (rangekg && kg) {
      kg.innerHTML = `Weight:${rangekg.value} kg`;
    }
    if (rangesm && sm) {
      sm.innerHTML = `Height:${rangesm.value} sm`;
    }
  });
  form.addEventListener('submit', (e)=>{
        e.preventDefault()
        if(h3 && rangesm && rangekg){
            const mathSm:number = (Number(rangesm.value)/100)**2
            console.log(mathSm);
            
            
            h3.innerHTML = `Your BMI:${Number(rangekg.value)/mathSm}`
        }
  })
}
window.addEventListener("DOMContentLoaded", () => {
 if (rangekg && kg) {
      kg.innerHTML = `Weight:${rangekg.value} kg`;
    }
    if (rangesm && sm) {
      sm.innerHTML = `Height:${rangesm.value} sm`;
    }
});
