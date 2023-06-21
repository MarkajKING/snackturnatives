let favorites;

function knabbelBaconHandler() {
    const element = document.getElementById("favoriteKnabbelbacon");

    if (element) {
        localStorage.setItem('favoriteKnabbelBacon', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoriteKnabbelbacon" + ' not found.');
    }
}

function ovenBakedPaprikaHandler() {
    const element = document.getElementById("favoriteOvenBakedPaprika");

    if (element) {
        localStorage.setItem('favoriteOvenBakedPaprika', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoriteOvenBakedPaprika" + ' not found.');
    }
}

function popworksHandler() {
    const element = document.getElementById("favoritePopworks");

    if (element) {
        localStorage.setItem('favoritePopworks', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoritePopworks" + ' not found.');
    }
}

function barebellsHandler() {
    const element = document.getElementById("favoriteBarebells");

    if (element) {
        localStorage.setItem('favoriteBarebells', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoriteBarebells" + ' not found.');
    }
}

function proteincookieHandler() {
    const element = document.getElementById("favoriteProteincookie");

    if (element) {
        localStorage.setItem('favoriteProteincookie', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoriteProteincookie" + ' not found.');
    }
}

function proteinbarJumboHandler() {
    const element = document.getElementById("favoriteProteinbarJumbo");

    if (element) {
        localStorage.setItem('favoriteProteinbarJumbo', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoriteProteinbarJumbo" + ' not found.');
    }
}

function spaanseLomoHandler() {
    const element = document.getElementById("favoriteSpaanseLomo");

    if (element) {
        localStorage.setItem('favoriteSpaanseLomo', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoriteSpaanseLomo" + ' not found.');
    }
}

function notenHandler() {
    const element = document.getElementById("favoriteNoten");

    if (element) {
        localStorage.setItem('favoriteNoten', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoriteNoten" + ' not found.');
    }
}

function kaasHandler() {
    const element = document.getElementById("favoriteKaas");

    if (element) {
        localStorage.setItem('favoriteKaas', element.outerHTML);
    } else {
        console.error('Element with ID ' + "favoriteKaas" + ' not found.');
    }
}

favorites = document.getElementById('favorites');
if (favorites){
    favoriteHandler()
    console.log("er is een favorite component")
}

function favoriteHandler() {

    const favoriteKnabbelBacon = localStorage.getItem('favoriteKnabbelBacon');
    const favoriteOvenBakedPaprika = localStorage.getItem('favoriteOvenBakedPaprika');
    const favoritePopworks = localStorage.getItem('favoritePopworks');
    const favoriteBarebells = localStorage.getItem('favoriteBarebells');
    const favoriteProteincookie = localStorage.getItem('favoriteProteincookie');
    const favoriteProteinbarJumbo = localStorage.getItem('favoriteProteinbarJumbo');
    const favoriteSpaanseLomo = localStorage.getItem('favoriteSpaanseLomo');
    const favoriteNoten = localStorage.getItem('favoriteNoten');
    const favoriteKaas = localStorage.getItem('favoriteKaas');

    //get the main div
    if (document.getElementById('favorites')) {
        console.log(favorites);


    }
    if (favorites) {

        const divContainer = document.createElement("div");
        divContainer.classList.add("row");
        favorites.appendChild(divContainer);

        if (favoriteKnabbelBacon) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '        <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img1" class="card-img-top" src="./images/knabbelbacon.jpeg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title1" class="card-title">Knabbelbacon</h5>\n' +
                '                <p class="card-text">Het hoogste eiwit alternatief voor normale chips</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 509</li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 66gr</li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 2.6gr</li>\n' +
                '                <li class="list-group-item"><button id="favoriteKnabbelbacon">Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'
            divContainer.appendChild(element)

            const favoriteKnabbelbaconButton = document.getElementById('favoriteKnabbelbacon');

            favoriteKnabbelbaconButton.addEventListener('click', function() {
                localStorage.removeItem('favoriteKnabbelbacon');

                element.remove();
            })
        } else {
            console.error('Element with ID ' + "favoriteKnabbelBacon" + ' not found.');
        }

        if (favoriteOvenBakedPaprika) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '        <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img2" class="card-img-top" src="./images/ovenBakedPaprika.jpeg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title2" class="card-title">Oven Baked Paprika</h5>\n' +
                '                <p class="card-text">Oven Baked Paprika is een lager calorie alternatief voor gewone chips</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 440</li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 5.9gr</li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 0.82gr</li>\n' +
                '                <li class="list-group-item"><button id="favoriteOvenBakedPaprika" >Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'

            divContainer.appendChild(element)

            const favoriteOvenBakedPaprikaButton = document.getElementById('favoriteOvenBakedPaprika');

            favoriteOvenBakedPaprikaButton.addEventListener('click', function() {
                localStorage.removeItem('favoriteOvenBakedPaprika');

                element.remove();
            })
        } else {
            console.error('Element with ID ' + "favoriteOvenBakedPaprika" + ' not found.');
        }

        if (favoritePopworks) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '        <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img3" class="card-img-top" src="./images/popworks.jpeg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title3" class="card-title">Popworks</h5>\n' +
                '                <p class="card-text">Popworks is een hoog proteine alternatief voor gewone chips</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 453</li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 6.6gr</li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 0.88gr</li>\n' +
                '                <li class="list-group-item"><button id="favoritePopworks">Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'

            divContainer.appendChild(element)

            const favoritePopworksButton = document.getElementById('favoritePopworks');

            favoritePopworksButton.addEventListener('click', function() {
                localStorage.removeItem('favoritePopworks');

                element.remove();
            })
        } else {
            console.error('Element with ID ' + "favoritePopworks" + ' not found.');
        }

        if (favoriteBarebells) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '        <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img1" class="card-img-top" src="./images/barebells.jpeg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title1" class="card-title">Barebells</h5>\n' +
                '                <p class="card-text">Het hoogste eiwit alternatief voor een andere bar</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 386</li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 36gr</li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 0.57gr</li>\n' +
                '                <li class="list-group-item"><button id="favoriteBarebells">Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'

            divContainer.appendChild(element)

            const favoriteBarebellsButton = document.getElementById('favoriteBarebells');

            favoriteBarebellsButton.addEventListener('click', function() {
                localStorage.removeItem('favoriteBarebells');

                element.remove();
            })
        } else {
            console.error('Element with ID ' + "favoriteBarebells" + ' not found.');
        }

        if (favoriteProteincookie) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '        <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img2" class="card-img-top" src="./images/proteincookie.jpeg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title2" class="card-title">Protein Cookie double chocolate chip</h5>\n' +
                '                <p class="card-text">Een koekje met veel eiwitten en weinig calorieen</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 356 </li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 30gr </li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 0.7gr </li>\n' +
                '                <li class="list-group-item"><button id="favoriteProteincookie">Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'

            divContainer.appendChild(element)

            const favoriteProteinCookieButton = document.getElementById('favoriteProteincookie');

            favoriteProteinCookieButton.addEventListener('click', function() {
                localStorage.removeItem('favoriteProteincookie');

                element.remove();
            })
        } else {
            console.error('Element with ID ' + "favoriteProteincookie" + ' not found.');
        }

        if (favoriteProteinbarJumbo) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '        <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img3" class="card-img-top" src="./images/proteinbarJumbo.jpeg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title3" class="card-title">Jumbo Protein Bar Salted Caramel</h5>\n' +
                '                <p class="card-text">Een goedkoop hoog eiwit alternatief voor een normale bar</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 382</li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 34gr</li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 0.52gr</li>\n' +
                '                <li class="list-group-item"><button id="favoriteProteinbarJumbo">Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'

            divContainer.appendChild(element)

            const favoriteProteinbarJumboButton = document.getElementById('favoriteProteinbarJumbo');

            favoriteProteinbarJumboButton.addEventListener('click', function() {
                localStorage.removeItem('favoriteProteinbarJumbo');

                element.remove();
            })
        } else {
            console.error('Element with ID ' + "favoriteProteinbarJumbo" + ' not found.');
        }

        if (favoriteSpaanseLomo) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '       <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img1" class="card-img-top" src="./images/lomo.jpg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title1" class="card-title">Spaanse Lomo</h5>\n' +
                '                <p class="card-text">Een mooi hoog eiwit, lage calorieën alternatief voor tapas</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 284</li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 42gr</li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 3gr</li>\n' +
                '                <li class="list-group-item"><button id="favoriteSpaanseLomo">Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'

            divContainer.appendChild(element)

            const favoriteSpaanseLomoButton = document.getElementById('favoriteSpaanseLomo');

            favoriteSpaanseLomoButton.addEventListener('click', function() {
                localStorage.removeItem('favoriteSpaanseLomo');

                element.remove();
            })

        } else {
            console.error('Element with ID ' + "favoriteSpaanseLomo" + ' not found.');
        }

        if (favoriteNoten) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '        <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img2" class="card-img-top" src="./images/noten.jpg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title2" class="card-title">Ongezouten Pinda\'s</h5>\n' +
                '                <p class="card-text">Een lekker, snelvullend alternatief voor tapas</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 623</li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 27gr</li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 0gr</li>\n' +
                '                <li class="list-group-item"><button id="favoriteNoten">Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'

            divContainer.appendChild(element)

            const favoriteNotenButton = document.getElementById('favoriteNoten');

            favoriteNotenButton.addEventListener('click', function() {
                localStorage.removeItem('favoriteNoten');

                element.remove();
            })
        } else {
            console.error('Element with ID ' + "favoriteNoten" + ' not found.');
        }

        if (favoriteKaas) {
            const element = document.createElement('div');
            element.classList.add("col-md-3")
            element.innerHTML =
                '        <div class="card mx-auto" style="width: 18rem;">\n' +
                '            <img id="img3" class="card-img-top" src="./images/kaas.jpg" style="margin-top: 5px">\n' +
                '            <div class="card-body">\n' +
                '                <h5 id="title3" class="card-title">Jong belegen 30+ kaas</h5>\n' +
                '                <p class="card-text">Een lager vet alternatief voor kaas hapjes</p>\n' +
                '            </div>\n' +
                '            <ul class="list-group list-group-flush">\n' +
                '                <li class="list-group-item">KCAL per 100 gr: 282</li>\n' +
                '                <li class="list-group-item">Eiwitten per 100 gr: 30gr</li>\n' +
                '                <li class="list-group-item">Zout per 100 gr: 1.9gr</li>\n' +
                '                <li class="list-group-item"><button id="favoriteKaas">Delete</button></li>\n' +
                '            </ul>\n' +
                '        </div>'

            divContainer.appendChild(element)

            const favoriteKaasButton = document.getElementById('favoriteKaas');

            favoriteKaasButton.addEventListener('click', function() {
                localStorage.removeItem('favoriteKaas');

                element.remove();
            })

        } else {
            console.error('Element with ID ' + "favoriteKaas" + ' not found.');
        }
    }
}