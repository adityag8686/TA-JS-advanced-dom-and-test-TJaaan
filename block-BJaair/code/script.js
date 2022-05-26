let ul = document.querySelector("ul");
let form = document.querySelector("form");

let data = JSON.parse(localStorage.getItem("cards")) || [];

form.addEventListener("submit", (event)=> {
    event.preventDefault();
    let title = event.target.elements.title.value;
    let category = event.target.elements.category.value;
    data.push({title,category})
    localStorage.setItem('cards',JSON.stringify(data));
    createUI(data,ul);
})

function edit (event,info,i,label){
    let elm = event.target;
    let input = document.createElement("input");
    input.value = info;
    input.addEventListener((e) => {
        if(e.keyCode ===13){
            data[i][label] = e.target.value;
            createUI();
            localStorage.setItem('cards',JSON.stringify(data));
        }
    })
    input.addEventListener('blur', (e) => {
        data[i][label] = e.target.value;
        createUI();
        localStorage.setItem('cards',JSON.stringify(data));
    });
    let parent = event.target.parentElement;
    parent.replaceChild(input,elm)
}

function createUI(data,root = ul){
    root.innerHTML = "";
    let fragment = new DocumentFragment();
    data.forEach((info,index) => {
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.addEventListener("dblClick", (event) => edit(event,info.category,index, "category"));
        p.innerText = info.category;
        let h2 = document.createElement('h2');
        h2.addEventListener("dblClick", (event) => edit(event,info.title,index, "title"));
        h2.innerText = info.title;  
        li.append(p,h2);
        fragment.appendChild(li)  
    })
    root.append(fragment);
}

createUI(data,ul);