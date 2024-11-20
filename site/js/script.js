let bgHeader = document.querySelector("#bottom-header")

function setBg() {
    if (bgHeader.classList.contains('bg1')) {
        bgHeader.classList.remove("bg1")
        bgHeader.classList.remove("bg3")
        bgHeader.classList.add("bg2")
    }
    else if (bgHeader.classList.contains('bg2')) {
        bgHeader.classList.remove("bg2")
        bgHeader.classList.remove("bg1")
        bgHeader.classList.add("bg3")
    } else if (bgHeader.classList.contains('bg3')) {
        bgHeader.classList.remove("bg3")
        bgHeader.classList.remove("bg1")
        bgHeader.classList.add("bg2")
    }
}

// setInterval(() => { setBg() }, 3000)

// let bgHeader = document.querySelector("#bottom-header");

// function setBg() {
//     if (bgHeader.classList.contains("bg1")) {
//         bgHeader.classList.remove("bg1");
//         bgHeader.classList.remove("bg3");
//         bgHeader.classList.add("bg2");
//     } else if (bgHeader.classList.contains("bg2")) {
//         bgHeader.classList.remove("bg2");
//         bgHeader.classList.remove("bg1");
//         bgHeader.classList.add("bg3");
//     } else if (bgHeader.classList.contains("bg3")) {
//         bgHeader.classList.remove("bg3");
//         bgHeader.classList.remove("bg1");
//         bgHeader.classList.add("bg2");
//     }
// }

// // Atualiza automaticamente as imagens
// setInterval(() => {
//     setBg();
// }, 3000);
