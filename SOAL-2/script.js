const product = [
  {
    id_produk: 1,
    nama_produk: "Huawei P30",
  },
  {
    id_produk: 2,
    nama_produk: "Huawei Nova 5T",
  },
];

const stok_produk = [
  { id_produk: 1, qty: 15 },
  { id_produk: 1, qty: 6 },
  { id_produk: 2, qty: 4 },
  { id_produk: 2, qty: 18 },
];

function renderProductTable() {
  const tableBody = document.getElementById("productTableBody");

  tableBody.innerHTML = "";

  product.forEach((prod) => {
    const productStock = stok_produk.filter(
      (stok) => stok.id_produk === prod.id_produk
    );
    let totalStock = 0;

    productStock.forEach((stok) => {
      totalStock += stok.qty;
    });

    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = prod.id_produk;
    const nameCell = document.createElement("td");
    nameCell.textContent = prod.nama_produk;
    const stockCell = document.createElement("td");
    stockCell.textContent = totalStock;

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(stockCell);

    tableBody.appendChild(row);
  });
}

renderProductTable();
