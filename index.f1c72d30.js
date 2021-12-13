(function() {
    const $like = document.querySelector("#like");
    $like.addEventListener("click", ()=>$like.style.color = "red"
    );
})();
document.addEventListener("DOMContentLoaded", (event)=>{
    const timeEl = document.getElementById("time");
    const time = new Date().getFullYear();
    timeEl.insertAdjacentHTML("afterbegin", time);
});

//# sourceMappingURL=index.f1c72d30.js.map
