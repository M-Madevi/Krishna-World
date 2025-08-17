
  // Optional JS to close dropdown when clicking outside
  window.onclick = function(e) {
    const dropdown = document.querySelector('.dropdown-content');
    if (!e.target.matches('.dropbtn')) {
      if (dropdown && dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
      }
    } else {
      dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }
  }
