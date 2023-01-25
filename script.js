const paddleDateInput = document.querySelector("#paddleDateReservation");

paddleDateInput.addEventListener("input", event => {
    const date = new Date(event.target.value);
    console.log(date)
});