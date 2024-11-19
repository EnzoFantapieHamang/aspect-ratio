let ratioWidth = document.querySelector("#ratio-width");
let ratioHeight = document.querySelector("#ratio-height");
let Width = document.querySelector("#width");
let Height = document.querySelector("#height");

let calculateWidth = () => {
    let aspectRatio = ratioWidth.value / ratioHeight.value;
    width.value = parseFloat((height.value*aspectRatio).toFixed(2));
}

let calculateHeight = () => {
    let aspectRatio = ratioHeight.value / ratioWidth.value;
    height.value = parseFloat((width.value*aspectRatio).toFixed(2));
}

ratioHeight.addEventListener("input", calculateWidth);
ratioWidth.addEventListener("input", calculateHeight);
Height.addEventListener("input", calculateWidth);
Width.addEventListener("input", calculateHeight);
