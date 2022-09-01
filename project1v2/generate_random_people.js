function processPersonData(personJson) {
    personJson = personJson.results[0];
    const name = personJson['name']
    const location = personJson['location']['city']
    const country = personJson['location']['country']
    const picture = personJson['picture']['thumbnail']

    const html = "<div class=\"swiper-slide swiper-slide-active\" role=\"group\" style=\"width: 880px;\">\n" +
        "                        <div class=\"align-items-center\">\n" +
        "                            <img src={picture} alt=\"\" class=\"rounded logo\">\n" +
        "                            <div style=\"width: 70%; margin: auto;\">\n" +
        "                                <h4>{name}</h4>\n" +
        "                                <b>{location}</b><span>, {country}</span>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                    </div>"

    document.getElementById("swiper").innerHTML.concat(html)
}