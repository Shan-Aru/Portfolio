const main = document.querySelector(".main");
const follower = document.querySelector(".follower");
document.addEventListener("mousemove", e => {
    main.style.left = e.clientX + "px";
    main.style.top = e.clientY + "px";
    setTimeout(() => {
        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
    }, 50);
});
const button = document.getElementById("mybtn");
button.addEventListener('click', function () {
    alert("The message is successfully sent to email.gmail.com 💞");
});

