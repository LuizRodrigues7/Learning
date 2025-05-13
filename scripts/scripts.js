const sidebar = document.getElementById("sidebar");
const toogleButton = document.getElementById("toogleSidebar");

    toogleButton.addEventListener("click", function(){
        sidebar.classList.toggle("active");
})