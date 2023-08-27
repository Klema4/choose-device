// When site is loaded (vanilla JS)
document.addEventListener('DOMContentLoaded', function () {
    fetch("../assets/js/earphones/earphones.json")
    .then((response) => response.json())
    .then((data) => {
        // Loop through the data
        data.forEach((earphone) => {
            // Create a new column with this code:
            //<div class="col-12">
            //<div class="panel-list">
            //    <img src="../assets/content/earphones/galaxy-buds-pro-2_xxs.webp" alt="Sluchátka" width="48px">
            //    <h5 class="mb-0 ms-3">Samsung Galaxy Buds 2 Pro</h5>
            //    <div class="d-flex align-items-center">
            //        <a href="#" class="btn btn-primary"><i class="ph ph-pencil fs-4"></i></a>
            //        <a href="#" class="btn btn-danger ms-2"><i class="ph ph-trash fs-4"></i></a>
            //    </div>
            //</div>
            //</div>

            // Create a new column
            let column = document.createElement("div");
            column.classList.add("col-12");

            // Create a new panel list
            let panelList = document.createElement("div");
            panelList.classList.add("panel-list");

            // Create a new image
            let image = document.createElement("div");
            image.classList.add("image-panel");
            // Search image from path and add it to the image
            image.style = `background-image: url('../assets/content/earphones/${earphone.image}');`;

            // Create a new heading
            let heading = document.createElement("h5");
            heading.classList.add("mb-0", "ms-3");
            heading.innerText = earphone.name;

            // Create a new div
            let div = document.createElement("div");
            div.classList.add("d-flex", "align-items-center");

            // Create a new edit button
            let editButton = document.createElement("a");
            editButton.href = "edit-earphone.html?id=" + earphone.id;
            editButton.classList.add("btn", "btn-primary");
            editButton.innerHTML = '<i class="ph ph-pencil fs-4"></i>';

            // Create a new delete button
            let deleteButton = document.createElement("a");
            deleteButton.href = "edit-earphone.html?id=" + earphone.id + "&delete=true";
            deleteButton.classList.add("btn", "btn-danger", "ms-2");
            deleteButton.innerHTML = '<i class="ph ph-trash fs-4"></i>';

            // Append all elements to the document
            div.appendChild(editButton);
            div.appendChild(deleteButton);
            panelList.appendChild(image);
            panelList.appendChild(heading);
            panelList.appendChild(div);
            column.appendChild(panelList);
            document.getElementById("all-products").appendChild(column);
            
            // Add event listener to the edit button
            editButton.addEventListener("click", function() {
                // Save the earphone to the local storage
                localStorage.setItem("earphone", JSON.stringify(earphone));
                // Redirect to the edit page
                window.location.href = "edit-earphone.html?id=" + earphone.id;
            });

            // Add event listener to the delete button
            deleteButton.addEventListener("click", function() {
                // Save the earphone to the local storage
                localStorage.setItem("earphone", JSON.stringify(earphone));
                // Redirect to the delete page
                window.location.href = "delete-earphone.html?id=" + earphone.id + "&delete=true";
            });
    });
})});