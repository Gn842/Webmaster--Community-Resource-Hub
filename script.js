let slideIndex = 0
showSlides();

function showSlides (){
    let slides = document.getElementsByClassName("slide");

    for (let i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 4000)
}

    const searchInput = document.getElementById("searchInput");
    const itemList = document.getElementById("itemList");
    const items = itemList.getElementsByTagName("li");

    searchInput.addEventListener("input", function() {
      const filter = searchInput.value.toLowerCase();
      for (let i = 0; i < items.length; i++) {
        const text = items[i].textContent.toLowerCase();
        items[i].style.display = text.includes(filter) ? "" : "none";
      }
    });