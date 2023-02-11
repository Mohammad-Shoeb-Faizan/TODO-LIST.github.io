let form = document.getElementById("form");
let input = document.getElementById("input");
let msgs = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msgs.innerHTML = "List can't be empty";
    alert("List can't be empty");
  } else {
    msgs.innerHTML = "";
    acceptData();
    createPost();
  }
};

data = {};

let acceptData = () => {
  data["text"] = input.value;
};

let createPost = () => {
  posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
    <i onclick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `;
  input.value = "";
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
