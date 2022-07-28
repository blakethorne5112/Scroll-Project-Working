const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
// Upon scrolling, runs method checkBoxes

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        // gives the position of the top of the box relative to the viewpoint

        if(boxTop < triggerBottom){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}