document.addEventListener('DOMContentLoaded', () =>{

    let img = document.getElementsByTagName("img");
    let form = document.querySelector("form");
    const btn = document.getElementById("addMeme");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const img = document.createElement("img");
        const meme = document.createElement("div");
        const topText = document.createElement("div");
        const bottomText = document.createElement("div");
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "Remove Meme";
        deleteBtn.classList.add("deleteBtn");
        
        img.src = document.getElementById("url").value;

        topText.classList.add("topText");
        topText.innerHTML = document.getElementById("topText").value;

        bottomText.classList.add("bottomText");
        bottomText.innerHTML = document.getElementById("bottomText").value;
    
        meme.classList.add("meme");
        meme.append(img);
        meme.append(topText);
        meme.append(bottomText);
        meme.append(deleteBtn)
        
        let div = document.getElementById("collection");
        div.append(meme);

    
        deleteBtn.addEventListener('click', function (e) {
            deleteBtn.parentElement.remove();
        })

        form.reset();
    })

})