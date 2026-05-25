const scrollBtn = document.getElementById("scrollBtn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

window.addEventListener("scroll", function () {

  if (window.scrollY > 500) {

    if(scrollBtn){
      scrollBtn.classList.add("show");
    }

    if(whatsappBtn){
      whatsappBtn.classList.add("show");
    }

  } else {

    if(scrollBtn){
      scrollBtn.classList.remove("show");
    }

    if(whatsappBtn){
      whatsappBtn.classList.remove("show");
    }

  }

});

if(scrollBtn){

  scrollBtn.addEventListener("click", function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}





// language section start
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  );
}

let currentLang = "en";

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  const langBtn = document.getElementById("langToggle");

  if (!langBtn) return; // safety check

  langBtn.addEventListener("click", function () {

    let newLang = currentLang === "en" ? "es" : "en";

    let interval = setInterval(function () {

      let select = document.querySelector(".goog-te-combo");

      if (select) {

        select.value = newLang;
        select.dispatchEvent(new Event("change"));

        currentLang = newLang;

        // ACTIVE COLOR SWITCH
        let enText = document.getElementById("enText");
        let esText = document.getElementById("esText");

        if (enText && esText) {
          if (currentLang === "en") {
            enText.classList.add("active-lang");
            esText.classList.remove("active-lang");
          } else {
            esText.classList.add("active-lang");
            enText.classList.remove("active-lang");
          }
        }

        clearInterval(interval);
      }

    }, 300);

  });

});