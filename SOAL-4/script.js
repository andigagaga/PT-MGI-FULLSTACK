// script.js
document.addEventListener("DOMContentLoaded", function () {
  const resultContainer = document.getElementById("resultContainer");
  const arrayOfObject = [
    {
      name: "John",
      hobi: "juniorCoding",
    },
    {
      name: "doo",
      hobi: "middelwareCoding",
    },
    {
      name: "agung",
      hobi: "Csenior oding",
    },
  ];

  arrayOfObject.forEach((obj) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");
    resultItem.innerHTML = `
          <p><strong>Name:</strong> ${obj.name}</p>
          <p><strong>Hobi:</strong> ${obj.hobi}</p>
      `;
    resultContainer.appendChild(resultItem);
  });
});
