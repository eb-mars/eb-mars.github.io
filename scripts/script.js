window.onload = function () {
  loadHTML('../elements/header.html', 'header-container');
  loadHTML('../elements/profile-sidebar.html', 'sidebar-container');
};

function loadHTML(file, elementId) {
  fetch(file)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${file}`);
      }
      return response.text();
    })
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}