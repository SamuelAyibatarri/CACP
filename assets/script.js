// Function to scroll to a specific position on the page
function scrollToPosition(elementId, offset) {
    const element = document.getElementById(elementId);
    if (element) {
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth'
      });
    }
  }
  
  // Function to handle hash change events
  function handleHashChange() {
    const hash = window.location.hash;
    if (hash) {
      scrollToPosition(hash.substring(1), 7 * parseFloat(getComputedStyle(document.documentElement).fontSize));
    }
  }
  
  // Event listener for hash change events
  window.addEventListener('hashchange', handleHashChange);
  
  // Initial scroll to the hash if it exists in the URL
  handleHashChange();
  