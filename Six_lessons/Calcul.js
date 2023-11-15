function calculateTotal() {
    const productSelect = document.getElementById("productSelect");
    const selectedProduct =
      productSelect.options[productSelect.selectedIndex].value;

    const quantity = parseFloat(document.getElementById("quantity").value);

    let price = 0;
    switch (selectedProduct) {
        case "1":
        price = 60;
        break;
        case "2":
        price = 170;
        break;
        case "3":
        price = 250;
        break;
        case "4":
        price = 1500;
        break;
        case "5":
        price = 2500;
        break;
        case "6":
        price = 10000;
        break;
      default:
        price = 0;
    }

    const totalCost = price * quantity;

    document.getElementById("totalCost").textContent = totalCost;
  }