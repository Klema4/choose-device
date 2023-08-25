function generate() {
    // Fetch JSON data
    fetch('./assets/js/earphones/earphones.json')
        .then(response => response.json())
        .then(data => {
            // Zde můžeš pracovat s načtenými daty (data je JavaScript objekt)
            data.sort(function (a, b) {
                return parseFloat(b.percentage) - parseFloat(a.percentage);
            });

            // Get checked radio button ID from form
            const price = document.querySelector('form#earphones-price input:checked').id;
            const type = document.querySelector('form#earphones-type input:checked').id;
            const compability = document.querySelector('form#earphones-compability input:checked').id;
            const shape = document.querySelector('form#earphones-shape input:checked').id;

            switch (price) {
                case "price-1000":
                    // Add 10% into "percentage" from JSON file to all items, that have "price" value lower than 1000
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].price <= 1000) {
                            data[i].percentage = data[i].percentage + 10;
                        }
                    }
                    break;
                case "price-2000":
                    // Add 10% into "percentage" from JSON file to all items, that have "price" value between 1000 and 2000
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].price <= 2000) {
                            data[i].percentage = data[i].percentage + 10;
                        }
                    }
                    break;
                case "price-3000":
                    // Add 10% into "percentage" from JSON file to all items, that have "price" value under 3000
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].price <= 3000) {
                            data[i].percentage = data[i].percentage + 10;
                        }
                    }
                    break;
                case "price-5000":
                    // Add 10% into "percentage" from JSON file to all items, that have "price" value higher than 3000
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].price <= 5000) {
                            data[i].percentage = data[i].percentage + 10;
                        }
                    }
                    break;
                default:
                    // Add 10% into "percentage" from JSON file to all items, that have "price" value lower than 1000
                    for (let i = 0; i < data.length; i++) {
                        data[i].percentage = data[i].percentage + 10;
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
                default:
                    // Add 10% into "percentage" from JSON file to all items, that have "price" value lower than 1000
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].price < 1000) {
                            data[i].percentage = data[i].percentage + 10;
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
                default:
                    // Add 10% into "percentage" from JSON file to all items, that have "price" value lower than 1000
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].price < 1000) {
                            data[i].percentage = data[i].percentage + 10;
                        }
                    }
                    break;
            }

            switch (shape) {
                case "buds":
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
                default:
                    // Add 10% into "percentage" from JSON file to all items, that have "price" value lower than 1000
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].price < 1000) {
                            data[i].percentage = data[i].percentage + 10;
                        }
                    }
                    break;
            }

            // Delete all HTML elements from "row" id
            document.getElementById("row").innerHTML = "";

            for (let i = 0; i < 1; i++) {
                const winnerContainer = document.createElement("div");
                winnerContainer.className = "col-12";

                const winnerOption = document.createElement("div");
                winnerOption.className = "option option-winner";

                const winnerNumber = document.createElement("div");
                winnerNumber.className = "number number-winner";
                winnerNumber.textContent = data[0].percentage + "%";

                const winnerImage = document.createElement("img");
                winnerImage.src = `./assets/content/earphones/${data[0].image}`;
                winnerImage.alt = "Obrázek";
                winnerImage.width = "48";

                const winnerHeading = document.createElement("h3");
                winnerHeading.textContent = data[0].name;

                const winnerCompability = document.createElement("p");
                winnerCompability.textContent = data[0].compability;

                const winnerPrice = document.createElement("p");
                winnerPrice.className = "price";
                winnerPrice.textContent = data[0].price + " Kč";

                winnerOption.appendChild(winnerNumber);
                winnerOption.appendChild(winnerImage);
                winnerOption.appendChild(winnerHeading);
                winnerOption.appendChild(winnerCompability);
                winnerOption.appendChild(winnerPrice);
                winnerContainer.appendChild(winnerOption);

                document.getElementById("row").appendChild(winnerContainer);
            }

            // Create HTML elements for all remaining items after sorting and append them to the "row" id
            for (let i = 1; i < data.length; i++) {
                const itemContainer = document.createElement("div");
                itemContainer.className = "col-12";

                const itemOption = document.createElement("div");
                itemOption.className = "option";

                const itemNumber = document.createElement("div");
                itemNumber.className = "number";
                itemNumber.textContent = data[i].percentage + "%";

                const itemImage = document.createElement("img");
                itemImage.src = `./assets/content/earphones/${data[i].image}`;
                itemImage.alt = "Obrázek";
                itemImage.width = "48";

                const itemHeading = document.createElement("h3");
                itemHeading.textContent = data[i].name;

                const itemPrice = document.createElement("p");
                itemPrice.className = "price";
                itemPrice.textContent = data[i].price + " Kč";

                const itemCompability = document.createElement("p");
                itemCompability.textContent = data[i].compability;

                itemOption.appendChild(itemNumber);
                itemOption.appendChild(itemImage);
                itemOption.appendChild(itemHeading);
                itemOption.appendChild(itemCompability);
                itemOption.appendChild(itemPrice);
                itemContainer.appendChild(itemOption);

                document.getElementById("row").appendChild(itemContainer);
            }

        })
        .catch(error => {
            console.error('Chyba při načítání JSON souboru:', error);
        });
}