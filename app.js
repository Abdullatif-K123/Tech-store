const Wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Asus ErnBook",
    price:  950,
    colors: [
      {
        code: "gray",
        img: "./img/laptop-gray.png",
      },
      {
        code: "black",
        img: "./img/Asus-pink.png",
      },
      {
        code: " rgb(232, 146, 160)",
        img: "./img/Asus-Black.png",
      },
    ],
  },
  {
    id: 2,
    title: "Macbook Air",
    price:  1250,
    colors: [
      {
        code: "White",
        img: "./img/mocbook-white.png",
      },
      {
        code: "gold",
        img: "./img/macbook-pink.png",
      },
      {
        code: "black",
        img: "./img/macbook-black.png",
      },
    ],
  },
  {
    id: 3,
    title: "Razer Blox",
    price:  2200,
    colors: [
      {
        code: "Black",
        img: "./img/razer.png",
      },
      {
        code: "Gray",
        img: "./img/razer gray.png",
      },
      {
        code: "light-white",
        img: "./img/razer-white.png",
      },
    ],
  },
  {
    id: 4,
    title: "MSI GAMING",
    price:  3150,
    colors: [
      {
        code: "Black",
        img: "./img/msi-black.png",
      },
      {
        code: "red",
        img: "./img/msi-red.png",
      },
      {
        code: "white",
        img: "./img/msi-white.png",
      },
    ],
  },
];

let chooseproduct = products[0];
const currentproductImg = document.querySelector(".productImg");
const currentprodcutTitle = document.querySelector(".productTitle");
const currentProdcutPrice = document.querySelector(".productPrice");
const currentProdcutColor = document.querySelectorAll(".color");
const currentProductype = document.querySelectorAll(".type");

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Changed current slide
    Wrapper.style.transform = `translateX(${-100 * index}vw)`;
    // Changed the choose product
    chooseproduct = products[index];
    // Change text of current Product
    currentprodcutTitle.textContent = chooseproduct.title;
    // Change Price of current Prodcut
    currentProdcutPrice.textContent = '$' + chooseproduct.price;
    // Change current Img of the prodcut
    currentproductImg.src = chooseproduct.colors[0].img;
    currentProdcutColor.forEach((color, index) => {
      color.style.backgroundColor = chooseproduct.colors[index].code;
    });
  });
});

currentProdcutColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentproductImg.src = chooseproduct.colors[index].img;
  });
});

currentProductype.forEach((type, index) => {
  type.addEventListener("click", () => {
    currentProductype.forEach((types)=>{
         types.style.backgroundColor = "transparent"; 
         types.style.color = "black";
    })
  
      type.style.backgroundColor = "black";
      type.style.color = "white";
      if(index > 0 ){
        var price = parseInt(chooseproduct.price) + 500;
         currentProdcutPrice.textContent = '$' + price;
      }
      else{
          currentProdcutPrice.textContent = '$' + chooseproduct.price;
      }
     
  });
});

const buyButton = document.querySelector(".productButton");
const paymentId = document.querySelector(".payment");
buyButton.addEventListener("click", () =>{
        paymentId.style.display = "flex"
})
const closePayment = document.querySelector(".close"); 
closePayment.addEventListener("click", ()=>{
        paymentId.style.display = "none";
})