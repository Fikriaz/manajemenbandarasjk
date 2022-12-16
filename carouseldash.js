
    let slideIndex = 0;
    showSlides();

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dotss = document.getElementsByClassName("dots");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dotss.length; i++) {
        dotss[i].className = dotss[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dotss[slideIndex-1].className += " active";
      setTimeout(showSlides, 5000); // Mengganti gambar setiap beberapa detik
    }

    
