window.onload = function () {
  fetchData();
};

function fetchData() {
  fetch("data.csv")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load data");
      }
      return response.text();
    })
    .then((data) => {
      const rows = data.split("\n").map((row) => row.split(","));
      const headers = rows.shift();

      const table = document.getElementById("dataTable");
      table.textContent = ""; // Clear existing data

      const headerRow = table.insertRow(0);
      headers.forEach((header) => {
        const th = document.createElement("th");
        th.textContent = header;
        headerRow.appendChild(th);
      });

      rows.forEach((rowData) => {
        if (rowData.length === headers.length) {
          const row = table.insertRow(-1);
          rowData.forEach((cellData) => {
            const cell = row.insertCell(-1);
            cell.textContent = cellData;
          });
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function filterData() {
  const nameFilter = document.getElementById("nameFilter").value.toLowerCase();
  const startDateFilter = new Date(
    document.getElementById("startDateFilter").value
  );
  const endDateFilter = new Date(
    document.getElementById("endDateFilter").value
  );

  const table = document.getElementById("dataTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const cells = row.getElementsByTagName("td");
    const name = cells[3].textContent.toLowerCase(); // Kolom "Mani" ada di index ke-3
    const date = new Date(cells[5].textContent); // Kolom "DateTime" ada di index ke-5

    if (
      (name.includes(nameFilter) || nameFilter === "") &&
      (!isNaN(startDateFilter.getTime()) ? date >= startDateFilter : true) &&
      (!isNaN(endDateFilter.getTime()) ? date <= endDateFilter : true)
    ) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
}
