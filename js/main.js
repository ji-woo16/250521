// // 요소 노드 생성하기
// const aEl = document.createElement("a");
// document.body.appendChild(aEl);

// // 텍스트 노드 추가하기
// const txtEl = document.createTextNode("길벗");
// document.querySelector("a").appendChild(txtEl);

// // href 속성 노드 추가하기
// const hrefAttr = document.createAttribute("href");
// hrefAttr.value = "https://www.gilbut.co.kr";
// document.querySelector("a").setAttributeNode(hrefAttr);

function removeP() {
    const pEl = document.querySelector("p");
    //    pEl.parentNode.removeChild(pEl);
    pEl.style.display = "none";
}

function toggleP() {
    const pEl = document.querySelector("p");
    if (pEl.style.display === "none")
        pEl.style.display = "block"
    else
        pEl.style.display = "none"
}

function removeAllA() {
    const childNodes = document.body.childNodes;
    childNodes.forEach((node) => {
        if (node.nodeName === "A")
            node.parentNode.removeChild(node);
    })
}

function focusEvent() {
    console.log("focus on");
}
function blurEvent() {
    console.log("focus out");
}

const inputAge = document.querySelector("#age");
inputAge.addEventListener("focus", () => {
    console.log("AGE focus on");
})

inputAge.addEventListener("blur", () => {
    console.log("AGE focus out");
})

inputAge.addEventListener("keypress", () => {
    console.log("e.keycode");
})

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", function() { // 이벤트 객체
    if (this.style.background === "red")
        this.style.background = "white";
    else
        this.style.background = "red";
})

const pEls = document.querySelectorAll("p");
pEls.forEach((el) => {
    el.addEventListener("click", function () {
        if (this.style.color === 'red') {
            this.style.color = 'black';
        } else {
            this.style.color = 'red';
        }
    });
})