var Mycards = [
{
    "Image" : "nature.jpg",
    "Price" :  "500/-",
    "Brand" : "puma",
},
{
     "Image" : "nature.jpg",
    "Price" :  "700/-",
    "Brand" : "nike",
},
{
     "Image" : "nature.jpg",
    "Price" :  "900/-",
    "Brand" : "ck",
},
]
Mycards.map((ele) => {
   var cards =  `<div class="cards">
            <div class="image_section">
                <img src="${ele.Image}"/>
            </div>
            <div class="content_section">
                <div class="price_section">Price : ${ele.Price}</div>
                <div class="brand_section">Brand : ${ele.Brand}</div>
            </div>
        </div>`
        console.log(cards);
        let parent = document.getElementsByClassName("card_parent")[0];
parent.innerHTML += cards;
})


