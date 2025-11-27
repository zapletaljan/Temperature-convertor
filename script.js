document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const c = document.querySelector("#name").value;
        const f = (Number(c) * 9/5) + 32;
        document.querySelector("#output").innerHTML = `${c}°C = ${f}°F`;
    });
});
