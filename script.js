let btn = document.getElementById("addName");
let removeAll = document.getElementById("removeName");
let input = document.getElementById("input");
let list = document.getElementById("list");
let downloadTxt = document.getElementById("downloadTxt");

let arr = JSON.parse(localStorage.getItem("username")) || [];

// Render List
function render() {

  list.innerHTML = "";

  arr.forEach((name, index) => {

    let li = document.createElement("li");
    li.textContent = name;

    let del = document.createElement("button");
    del.textContent = "Delete";
    del.style.background = "orange";

    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.style.background = "limegreen";

    li.append(del, edit);
    list.appendChild(li);

    // Delete
    del.addEventListener("click", () => {

      if(confirm(`Delete ${name}?`)){
        arr.splice(index,1);
        save();
      }

    });

    // Edit
    edit.addEventListener("click", () => {

      let newName = prompt("Enter new name:", name);

      if(newName && newName.trim() !== ""){
        arr[index] = newName;
        save();
      }

    });

  });

}

// Save helper
function save(){
  localStorage.setItem("username", JSON.stringify(arr));
  render();
}

// Add
btn.addEventListener("click", () => {

  let name = input.value.trim();

  if(!name){
    alert("Enter your name first");
    return;
  }

  arr.push(name);
  input.value = "";

  save();

});

// Clear All
removeAll.addEventListener("click", () => {

  if(arr.length === 0){
    alert("Nothing to clear");
    return;
  }

  if(confirm("Remove all names?")){
    arr = [];
    localStorage.removeItem("username");
    render();
  }

});

downloadTxt.addEventListener("click", () => {

  let data = JSON.parse(localStorage.getItem("username")) || [];

  if(data.length === 0){
    alert("No data to download");
    return;
  }

  let text = data.join("\n"); // हर name नई line में

  let blob = new Blob([text], {type:"text/plain"});

  let link = document.createElement("a");

  link.href = URL.createObjectURL(blob);

  link.download = "names.txt";

  link.click();

});
render();

if("serviceWorker" in navigator){

  navigator.serviceWorker.register("sw.js")
  .then(()=>{
    console.log("Service Worker Registered")
  });

}