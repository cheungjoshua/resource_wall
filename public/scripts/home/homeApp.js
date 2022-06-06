// Load data from database by calling resource route
const loadResources = function (id) {
  $.get(`/resources/${id}`, { method: "GET" }).then((data) => {
    console.log(data);
    renderResource(data);
  });
};

// Render resource with loop
const renderResource = function (resources) {
  // empty the old container

  $(".resource_display_container").empty();
  //loop thought the new data
  for (let resource of resources) {
    //call function for each
    let result = createResourceElement(resource);
    //add the resource one by one
    $(".resource_display_container").prepend(result);
  }
};

const createResourceElement = (resource) => {
  const $resource = `<article class="resourceContainer">
  <body>
      <div class="resourceInfo">
      <h2 class="resourceTitle">${resource.title}</h2>
      <div class="resourceDescription">${resource.description}</div>
      <div class="resourceFooter">
        <p class="resourceDate">${resource.created_at}</p>
        <div class="resourceIcons">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-comment"></i>
          <i class="fa-solid fa-star-sharp"></i>
        </div>
      </div>
    </div>
  </body>
</article>`;
  return $resource;
};

$(() => {
  // Get ID from URL params
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get("id");

  // Call loadResource function with ID
  loadResources(id);
});
