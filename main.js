for(let i = 0; i < 1024; i++) {
    document.querySelector(".app").innerHTML += '<div></div>'
}

document.body.addEventListener('click', event => {
    event.target.style.backgroundColor = '#787';
    event.target.style.border = '1px solid #000'; 
})

