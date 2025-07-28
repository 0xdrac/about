function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  function submitEmail() {
    const emailInput = document.querySelector(".input-email");
    const email = emailInput.value.trim();
  
    // Remove error style if previously set
    emailInput.classList.remove("error");
    emailInput.placeholder = "lifesucks@gmail.com";
  
    if (!isValidEmail(email)) {
      // Show error styling and message
      emailInput.value = "";
      emailInput.classList.add("error");
      emailInput.placeholder = "you fked the email – fix it.";
  
      // Remove error after 3 seconds
      setTimeout(() => {
        emailInput.classList.remove("error");
        emailInput.placeholder = "lifesucks@gmail.com";
      }, 2000);
      
      return;
    }
  
    // If valid, reset field and show success hint
    emailInput.classList.remove("error");
    emailInput.value = "";
    emailInput.placeholder = "looks good. ✅ ";
    
    setTimeout(() => {
      emailInput.placeholder = "lifesucks@gmail.com";
    }, 2500);
  }
  