const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navList");

hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
});

const form = document.getElementById("contactForm");
const submitButton = document.getElementById("btn");
const loadingScreen = document.getElementById("loadingScreen");

form.addEventListener("submit", async function(e){

    e.preventDefault();
    if (submitButton.disabled) return;

    submitButton.disabled = true;
    loadingScreen.hidden = false;

    const params = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value

    };

    let sent = false;
    try {
        await emailjs.send(
            "service_7cje1g3",
            "template_npipsci",
            params
        );
        form.reset();
        sent = true;
    } catch (error) {
        console.error(error);
    } finally {
        loadingScreen.hidden = true;
        submitButton.disabled = false;
    }

    alert(sent ? "Message sent successfully!" : "Failed to send message.");

});
const hero = document.querySelector(".quot",".about_container");

window.addEventListener("scroll", () => {
    const scale = Math.max(0.7, 1 - window.scrollY * 0.0005);
    hero.style.transform = `scale(${scale})`;
});