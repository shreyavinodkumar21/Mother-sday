function showLetter() {
    const letterSection = document.getElementById("letter");
    letterSection.style.display = "flex";
    window.scrollTo({ top: letterSection.offsetTop, behavior: 'smooth' });
  
    gsap.from(".card", { duration: none, y: 100, opacity: 0, ease: "power3.out" });
  }
 