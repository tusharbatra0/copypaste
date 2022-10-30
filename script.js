let clipboard = document.getElementById("myclipboard")
let button = document.querySelector("#button")
const copyChecker = "false";
clipboard.addEventListener("input", function () {
    button.innerHTML = "Copy Text";
  });
button.addEventListener("click", async function(){
    await navigator.clipboard.writeText(clipboard.value);
    button.innerHTML = "Copied"
})
