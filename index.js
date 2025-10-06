let formCollector = document.getElementById("form-collector");
formCollector.addEventListener('submit', event => {
    event.preventDefault();
    console.log("event");
    let ourFormdata = new FormData(event.target);
    let userFirstName = ourFormdata.get("firstName");
    let updatedHtmlContent = `
    <h2>Congratulation ${userFirstName}</h2>
        <p>You're on your way to become a BBQ master.</p>
        <p class="fine-print">We'll never share your information without your permission</p>
        `
        let mainContent = document.getElementById("main-content");
        mainContent.innerHTML = updatedHtmlContent;

    })