function clearFields() {
    const name = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const mail = document.getElementById("mail").value.trim();
    const male = document.getElementById("genderM").checked;
    const female = document.getElementById("genderF").checked;
    const text = document.getElementById("textarea").value.trim();

    if ((name.length === 0 || surname.length === 0 || mail.length === 0 || text.length === 0) || (!male && !female)) {
        alert("Marcellino è arrabbiato perché non hai compilato il form.");
        document.getElementById("marcello").style.display = "block";
        return;
    }

    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("genderM").checked = true;
    document.getElementById("textarea").text = "";

    alert("Messaggio inviato con successo!")
}