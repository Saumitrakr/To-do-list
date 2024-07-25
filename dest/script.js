const input = document.querySelector('.taskName')
const btn = document.querySelector('.addtask')
const list = document.querySelector('.tasklist')
btn.addEventListener('click', addtask)


function addtask() {

    const extractPath = (url) => {
        const anchor = document.createElement('a');
        anchor.href = url;
        return anchor.pathname;
    };

    console.log("button clicked")
    if (input.value == "") {
        alert("Enter task name to be added");
    } 
    else {
        let item = document.createElement("li");
        const myImage = new Image(20, 20);
        const originalImgSrc = "/images/unchecked.png"
        const newImgSrc = "/images/checked.png"
        myImage.src = originalImgSrc;

        item.appendChild(myImage);

        let textbox = document.createElement("div");
        textbox.innerHTML=input.value
        textbox.classList.add("w-1/2")
        item.appendChild(textbox);

        let sp = document.createElement("span")
        sp.classList.add("deletetask")
        sp.innerHTML = "\u00d7"
        item.appendChild(sp)

        console.log(item);

        item.classList.add("p-2","flex","border-y-2", "border-yellow-400", "justify-around","cursor-pointer")
        list.appendChild(item);

        item.addEventListener('click', (e) => {

            
            if(e.target.tagName === "SPAN"){
                e.target.parentElement.remove()
            }

            item.firstElementChild.nextElementSibling.classList.toggle('line-through');
            item.classList.toggle('bg-green-800');


            if (extractPath(myImage.src) == originalImgSrc) {
                myImage.src = newImgSrc;
            } else {
                myImage.src = originalImgSrc;
            }
        });
    }
    
}

// list.addEventListener('click',function(e){

//     if(e.target.tagName === "LI" || e.target.tagName === "DIV" || e.target.tagName === "IMG"){
//         e.target.parentElement.firstChild.src = "/images/checked.png"
//         e.target.parentElement.firstElementChild.nextElementSibling.classList.add("line-through")    
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove()
//     }
// })
