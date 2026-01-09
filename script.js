const sidebar = document.querySelector('.sidebar');

const openIcon = document.querySelector('.sidebar_ham').addEventListener("click", () => {
    sidebar.style.display = "block";
})

const closeIcon = document.querySelector('.sidebar_close').addEventListener("click", () => {
    sidebar.style.display = "none";
})