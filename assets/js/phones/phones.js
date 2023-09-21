const nextButton = document.getElementById("next");
const generateButton = document.getElementById("generate");
const backButton = document.getElementById("back");
var current = "container-form-1";
const progress = document.getElementById("quiz-progress-line");

if (current == "container-form-1") {
    backButton.classList.add("d-none");
}

function next() {
    switch (current) {
        case "container-form-1":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-2").classList.remove("visually-hidden");
            current = "container-form-2";
            backButton.classList.remove("d-none");
            document.getElementById("quiz-1").classList.remove("active");
            document.getElementById("quiz-2").classList.add("active");
            progress.style.width = "40%";
            break;
        case "container-form-2":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-3").classList.remove("visually-hidden");
            current = "container-form-3";
            document.getElementById("quiz-2").classList.remove("active");
            document.getElementById("quiz-3").classList.add("active");
            progress.style.width = "60%";
            break;
        case "container-form-3":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-4").classList.remove("visually-hidden");
            current = "container-form-4";
            document.getElementById("quiz-3").classList.remove("active");
            document.getElementById("quiz-4").classList.add("active");
            progress.style.width = "80%";
            break;
        case "container-form-4":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-5").classList.remove("visually-hidden");
            current = "container-form-5";
            document.getElementById("quiz-4").classList.remove("active");
            document.getElementById("quiz-5").classList.add("active");
            progress.style.width = "100%";
            break;
        /* case "container-form-5":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-6").classList.remove("visually-hidden");
            current = "container-form-6";
            nextButton.classList.add("d-none");
            generateButton.classList.remove("d-none");
            break; */
    }
}

function back() {
    switch (current) {
        case "container-form-1":
            current = "container-form-1";
            backButton.classList.add("d-none");
        case "container-form-2":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-1").classList.remove("visually-hidden");
            current = "container-form-1";
            backButton.classList.add("d-none");
            document.getElementById("quiz-2").classList.remove("active");
            document.getElementById("quiz-1").classList.add("active");
            progress.style.width = "20%";
            break;
        case "container-form-3":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-2").classList.remove("visually-hidden");
            current = "container-form-2";
            document.getElementById("quiz-3").classList.remove("active");
            document.getElementById("quiz-2").classList.add("active");
            progress.style.width = "40%";
            break;
        case "container-form-4":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-3").classList.remove("visually-hidden");
            current = "container-form-3";
            document.getElementById("quiz-4").classList.remove("active");
            document.getElementById("quiz-3").classList.add("active");
            progress.style.width = "60%";
            break;
        case "container-form-5":
            document.getElementById(current).classList.add("visually-hidden");
            document.getElementById("container-form-4").classList.remove("visually-hidden");
            current = "container-form-4";
            document.getElementById("quiz-5").classList.remove("active");
            document.getElementById("quiz-4").classList.add("active");
            progress.style.width = "80%";
            break;
    }
}

function generate() {
    // Fetch JSON data
    fetch('./assets/js/phones/phones.json')
        .then(response => response.json())
        .then(data => {
            // Zde můžeš pracovat s načtenými daty (data je JavaScript objekt)
            data.sort(function (a, b) {
                return parseFloat(b.percentage) - parseFloat(a.percentage);
            });

            // Get checked radio button ID from form
            const os = document.querySelector('form#phones-os input:checked').id;
            const type = document.querySelector('form#earphones-type input:checked').id;
            const compability = document.querySelector('form#earphones-compability input:checked').id;
            const shape = document.querySelector('form#earphones-shape input:checked').id;
            const mic = document.querySelector('form#earphones-mic input:checked').id;
            const hifi = document.querySelector('form#earphones-hifi input:checked').id;
            const charging = document.querySelector('form#earphones-charging input:checked').id;
            const connectivity = document.querySelector('form#earphones-connectivity input:checked').id;
            const noise_cancelling = document.querySelector('form#earphones-noise-cancelling input:checked').id;
            const ip_rating = document.querySelector('form#earphones-ip-rating input:checked').id;
            const battery_life = document.querySelector('form#earphones-battery-life input:checked').id;

            switch (os) {
                case "android":
                    // Delete any item, that have "os" value "iOS"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].os == "iOS") {
                            data.splice(i, 1);
                        }
                    }
                case "ios":
                    // Delete any item, that have "os" value "Android"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].os == "Android") {
                            data.splice(i, 1);
                        }
                    }
                    break;
            }

            switch (type) {
                case "buds":
                    // Add 10% into "percentage" from JSON file to all items, that have "type" value "buds"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].type == "Buds") {
                            data[i].percentage = data[i].percentage + 6;
                        }
                    }
                    break;
                case "in-ear":
                    // Add 10% into "percentage" from JSON file to all items, that have "type" value "in-ear"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].type == "In-Ear") {
                            data[i].percentage = data[i].percentage + 6;
                        }
                    }
                    break;
            }

            switch (compability) {
                case "Android":
                    // Add 10% into "percentage" from JSON file to all items, that have "compability" value "Android"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].compability == "Android") {
                            data[i].percentage = data[i].percentage + 15;
                        }
                    }
                    break;
                case "iOS":
                    // Add 10% into "percentage" from JSON file to all items, that have "compability" value "iOS"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].compability == "iOS") {
                            data[i].percentage = data[i].percentage + 15;
                        }
                    }
                    break;
            }

            switch (shape) {
                case "full-buds":
                    // Add 10% into "percentage" from JSON file to all items, that have "shape" value "buds"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].shape == "Buds") {
                            data[i].percentage = data[i].percentage + 8;
                        }
                    }
                    break;
                case "stick":
                    // Add 10% into "percentage" from JSON file to all items, that have "shape" value "in-ear"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].shape == "Stick") {
                            data[i].percentage = data[i].percentage + 8;
                        }
                    }
                    break;
            }

            switch (mic) {
                case "mic":
                    // Add 9% into "percentage" from JSON file to all items, that have "mic" value "true"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].mic == true) {
                            data[i].percentage = data[i].percentage + 9;
                        }
                    }
                    break;
                case "no-mic":
                    // Add 0% into "percentage" from JSON file to all items, that have "mic" value "false"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].mic == false) {
                            data[i].percentage = data[i].percentage + 0;
                        }
                    }
                    break;
            }

            switch (hifi) {
                case "hifi":
                    // Add 13% into "percentage" from JSON file to all items, that have "hifi" value "true"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].hifi == true) {
                            data[i].percentage = data[i].percentage + 13;
                        }
                    }
                    break;
                case "no-hifi":
                    // Add 0% into "percentage" from JSON file to all items, that have "hifi" value "false"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].hifi == false) {
                            data[i].percentage = data[i].percentage + 0;
                        }
                    }
                    break;
            }

            switch (charging) {
                case "usb-c-wireless":
                    // Add 12% into "percentage" from JSON file to all items, that have "charging" value "USB-C/Wireless"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].charging == "USB-C, Wireless") {
                            data[i].percentage = data[i].percentage + 12;
                        }
                    }
                    break;
                case "usb-c":
                    // Add 10% into "percentage" from JSON file to all items, that have "charging" value "USB-C"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].charging == "USB-C") {
                            data[i].percentage = data[i].percentage + 10;
                        }
                    }
                    break;
                case "lightning":
                    // Add 20% into "percentage" from JSON file to all items, that have "charging" value "Lightning"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].charging == "Lightning") {
                            data[i].percentage = data[i].percentage + 20;
                        }
                    }
                    break;
            }

            switch (connectivity) {
                case "bluetooth":
                    // Add 20% into "percentage" from JSON file to all items, that have "connectivity" value "Bluetooth"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].connectivity == "Bluetooth") {
                            data[i].percentage = data[i].percentage + 20;
                        }
                    }
                    break;
                case "3mm-jack":
                    // Add 20% into "percentage" from JSON file to all items, that have "connectivity" value "3.5mm Jack"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].connectivity == "3.5mm Jack") {
                            data[i].percentage = data[i].percentage + 20;
                        }
                    }
                    break;
                case "dongle":
                    // Add 20% into "percentage" from JSON file to all items, that have "connectivity" value "Dongle"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].connectivity == "Dongle") {
                            data[i].percentage = data[i].percentage + 20;
                        }
                    }
                    break;
            }

            switch (noise_cancelling) {
                case "anc":
                    // Add 8% into "percentage" from JSON file to all items, that have "noise_cancelling" value "ANC"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].noise_cancelling == "ANC") {
                            data[i].percentage = data[i].percentage + 8;
                        }
                    }
                    break;
                case "pnc-enc":
                    // Add 8% into "percentage" from JSON file to all items, that have "noise_cancelling" value "No ANC"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].noise_cancelling == "ENC") {
                            data[i].percentage = data[i].percentage + 8;
                        }
                    }
                    break;
                case "no-anc":
                    // Add 0% into "percentage" from JSON file to all items, that have "noise_cancelling" value "No ANC"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].noise_cancelling == "None") {
                            data[i].percentage = data[i].percentage + 0;
                        }
                    }
                    break;
            }

            switch (ip_rating) {
                case "ipx2":
                    // Add 7% into "percentage" from JSON file to all items, that have "ip_rating" value "IPX2"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].ip_rating == "IPX2") {
                            data[i].percentage = data[i].percentage + 7;
                        }
                    }
                    break;
                case "ipx3-5":
                    // Add 7% into "percentage" from JSON file to all items, that have "ip_rating" value "IPX3" or "IPX4" or "IPX5"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].ip_rating == "IPX3" || data[i].ip_rating == "IPX4" || data[i].ip_rating == "IPX5") {
                            data[i].percentage = data[i].percentage + 7;
                        }
                    }
                    break;
                case "ipx6-8":
                    // Add 7% into "percentage" from JSON file to all items, that have "ip_rating" value "IPX6" or "IPX7" or "IPX8"
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].ip_rating == "IPX6" || data[i].ip_rating == "IPX7" || data[i].ip_rating == "IPX8") {
                            data[i].percentage = data[i].percentage + 7;
                        }
                    }
                    break;
            }

            switch (battery_life) {
                case "10-19h":
                    // Add 11% into "percentage" from JSON file to all items, that have "battery_life" value between 10 and 19
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].battery_life >= 10) {
                            data[i].percentage = data[i].percentage + 11;
                        }
                    }
                    break;
                case "20-29h":
                    // Add 11% into "percentage" from JSON file to all items, that have "battery_life" value between 20 and 29
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].battery_life >= 20) {
                            data[i].percentage = data[i].percentage + 11;
                        }
                    }
                    break;
                case "30-39h":
                    // Add 11% into "percentage" from JSON file to all items, that have "battery_life" value between 30 and 39
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].battery_life >= 30) {
                            data[i].percentage = data[i].percentage + 11;
                        }
                    }
                    break;
                case "40h":
                    // Add 11% into "percentage" from JSON file to all items, that have "battery_life" value higher than 40
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].battery_life >= 40) {
                            data[i].percentage = data[i].percentage + 11;
                        }
                    }   
                    break;
            }

            let allItems = 0;
            let percentageSum = 0;

            // Sečti všechny "percentage" ze všech položek
            for (let i = 0; i < data.length; i++) {
                allItems++;
                percentageSum = percentageSum + data[i].percentage;
            }

            // Vypočti průměr ze všech "percentage" ze všech položek
            percentageAverage = percentageSum / data.length;

            for (let i = 0; i < data.length; i++) {
                // Vypočti rozdíl mezi průměrem a jednotlivými "percentage" ze všech položek
                data[i].percentage = (data[i].percentage - percentageAverage).toFixed(1);
            }

            // Delete all HTML elements from "row" id
            document.getElementById("row").innerHTML = "";

            
            // Sort percentage from highest to lowest value
            data.sort(function (a, b) {
                return parseFloat(b.percentage) - parseFloat(a.percentage);
            });

            // All items that have percentage lower than 0 will have percentage 0
            for (let i = 0; i < data.length; i++) {
                if (data[i].percentage < 0) {
                    data[i].percentage = 0;
                }
            }

            for (let i = 0; i < 1; i++) {
                const winnerContainer = document.createElement("div");

                const winnerCode = `
                <div class="col-12">
                <div class="option option-winner">
                    <div class="w-100 d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center col-12">
                        <div class="d-flex align-items-center">
                            <div class="d-flex align-items-center">
                                <div class="number number-winner flex-column text-center"><i class="ph-bold ph-crown fs-5"></i> ${data[0].percentage}%</div>
                                <img src="./assets/content/earphones/${data[0].image}" alt="Obrázek" width="48">
                            </div>
                            <div>
                                <a href="/earphones/info?id=${i}" class="mb-0 fs-3 fw-bold text-decoration-none text-white">${data[i].name}</a>
                                <h6 class="mb-0 fw-normal">${data[0].manufacturer}</h6>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="price">${data[0].price} Kč</div>
                        </div>
                    </div>
                    <div class="option-specs option-specs-winner col-12">
                        <div class="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-center">
                            <div class="d-flex justify-content-start w-100 row flex-wrap g-2">
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-cpu fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Platforma</h6>
                                        <h4 class="mb-0">${data[0].compability}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-cell-signal-full fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Konektivita</h6>
                                        <h4 class="mb-0">${data[0].connectivity}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-plug fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Nabíjení</h6>
                                        <h4 class="mb-0">${data[0].charging}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-battery-full fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Výdrž baterie</h6>
                                        <h4 class="mb-0">${data[0].battery_life}h</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-drop fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Ochrana</h6>
                                        <h4 class="mb-0">${data[0].ip_rating}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-wind fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Potlačení hluku</h6>
                                        <h4 class="mb-0">${data[0].noise_cancelling}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-speaker-hifi fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Hi-Fi?</h6>
                                        <h4 class="mb-0">${data[0].hifi}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-microphone fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Mikrofon</h6>
                                        <h4 class="mb-0">${data[0].microphone}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-triangle fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Typ</h6>
                                        <h4 class="mb-0">${data[0].type}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-hammer fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Materiál</h6>
                                        <h4 class="mb-0">${data[0].material}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

                winnerContainer.innerHTML = winnerCode;
                
                document.getElementById("row").appendChild(winnerContainer);
            }

            for (let i = 1; i < data.length; i++) {
                const itemContainer = document.createElement("div");

                const itemCode = `
                <div class="col-12">
                <div class="option">
                    <div class="w-100 d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center col-12">
                        <div class="d-flex align-items-center">
                            <div class="d-flex align-items-center">
                                <div class="number number-winner">${data[i].percentage}%</div>
                                <img src="./assets/content/earphones/${data[i].image}" alt="Obrázek" width="48">
                            </div>
                            <div>
                                <a href="/earphones/info?id=${i}" class="mb-0 fs-3 fw-bold text-decoration-none text-white">${data[i].name}</a>
                                <h6 class="mb-0 fw-normal">${data[i].manufacturer}</h6>
                            </div>
                        </div>
                        <div class="col-auto">
                            <div class="price">${data[i].price} Kč</div>
                        </div>
                    </div>
                    <div class="option-specs col-12">
                        <div class="d-flex flex-column flex-lg-row w-100 justify-content-between align-items-center">
                            <div class="d-flex justify-content-start w-100 row flex-wrap g-2">
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-cpu fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Platforma</h6>
                                        <h4 class="mb-0">${data[i].compability}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-cell-signal-full fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Konektivita</h6>
                                        <h4 class="mb-0">${data[i].connectivity}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-plug fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Nabíjení</h6>
                                        <h4 class="mb-0">${data[i].charging}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-battery-full fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Výdrž baterie</h6>
                                        <h4 class="mb-0">${data[i].battery_life}h</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-drop fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Ochrana</h6>
                                        <h4 class="mb-0">${data[i].ip_rating}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-wind fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Potlačení hluku</h6>
                                        <h4 class="mb-0">${data[i].noise_cancelling}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-speaker-hifi fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Hi-Fi?</h6>
                                        <h4 class="mb-0">${data[i].hifi}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-microphone fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Mikrofon</h6>
                                        <h4 class="mb-0">${data[i].microphone}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-triangle fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Typ</h6>
                                        <h4 class="mb-0">${data[i].type}</h4>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-start align-items-center col-6 col-lg-3 col-xl-2">
                                    <i class="ph ph-hammer fs-4"></i>
                                    <div class="ms-3">
                                        <h6 class="mb-0 fw-normal">Materiál</h6>
                                        <h4 class="mb-0">${data[i].material}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

                itemContainer.innerHTML = itemCode;
                
                document.getElementById("row").appendChild(itemContainer);
            }

        })
        .catch(error => {
            console.error('Chyba při načítání JSON souboru:', error);
        });
}