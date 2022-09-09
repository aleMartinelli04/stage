function parseUser(data) {
    let user = data.results[0];
    let name = user.name.first + " " + user.name.last;
    let phone = user.phone;
    let address = user.location.city + ", " + user.location.state;
    let image = user.picture.large;

    const extDiv = document.createElement("div");
    extDiv.classList.add("swiper-slide", "swiper-slide-active");
    extDiv.role = "group";
    extDiv.style.width = "880px";

    const intDiv = document.createElement("div");
    intDiv.classList.add("align-items-center");

    const img = document.createElement("img");
    img.src = image;
    img.classList.add("rounded", "logo");

    const finalDiv = document.createElement("div");
    finalDiv.style.width = "70%";
    finalDiv.style.margin = "auto";

    const h4 = document.createElement("h4");
    h4.appendChild(document.createTextNode(name));

    const b = document.createElement("b");
    b.appendChild(document.createTextNode(address));
    b.appendChild(document.createTextNode(", "));

    const span = document.createElement("span");
    span.appendChild(document.createTextNode(phone));

    finalDiv.appendChild(h4);
    finalDiv.appendChild(b);
    finalDiv.appendChild(span);

    intDiv.appendChild(img);
    intDiv.appendChild(finalDiv);

    extDiv.appendChild(intDiv);

    return extDiv;
}