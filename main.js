const boomSound = document.querySelector(`[data-key="1]`);
const clapSound = document.querySelector(`[data-key="2"]`);
const hihatSound = document.querySelector(`[data-key="3"]`);
const kickSound = document.querySelector(`[data-key="4"]`);
const openhatSound = document.querySelector(`[data-key="5"]`);
const rideSound = document.querySelector(`[data-key="6"]`);
const snareSound = document.querySelector(`[data-key="7"]`);
const tinkSound = document.querySelector(`[data-key="8"]`);
const tomSound = document.querySelector(`[data-key="9"]`);

window.addEventListener("keydown", function (event) {
    console.log(event);

    if (event.key == "a") {
        boomSound.currentTime = 0;
        boomSound.play();
    }

    if (event.key == "s") {
        clapSound.currentTime = 0;
        clapSound.play();
    }

    if (event.key == "d") {
        hihatSound.currentTime = 0;
        hihatSound.play();
    }

    if (event.key == "f") {
        kickSound.currentTime = 0;
        kickSound.play();
    }

    if (event.key == "g") {
        openhatSound.currentTime = 0;
        openhatSound.play();
    }

    if (event.key == "h") {
        rideSound.currentTime = 0;
        rideSound.play();
    }

    if (event.key == "j") {
        snareSound.currentTime = 0;
        snareSound.play();
    }

    if (event.key == "k") {
        tinkSound.currentTime = 0;
        tinkSound.play();
    }

    if (event.key == "l") {
        tomSound.currentTime = 0;
        tomSound.play();
    }
});

window.addEventListener("keydown", function (event) {
    console.log(event);
    const key = document.querySelector(`[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);

    if (key == null || audio == null) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();

    setTimeout(() => {
        key.classList.remove("playing");
    }, 100);
});
