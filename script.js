//Search
var searchInput = document.getElementById("search-btn");
var courses = document.querySelectorAll(".course-main");

searchInput.addEventListener("input", function() {
  var searchValue = this.value.toLowerCase();

  for (var i = 0; i < courses.length; i++) {
    var title = courses[i].querySelector(".course-info h4").textContent.toLowerCase();
      
    if (title.indexOf(searchValue) !== -1) {
      courses[i].style.display = "block";
    } else {
      courses[i].style.display = "none";
    }
  }
});

//Filter
const filterBtn = document.getElementById("filter-btn");
const courseList = document.getElementById("course-row").getElementsByClassName("course-main");

filterBtn.addEventListener("click", function() {
  const levelFilter = document.getElementById("level-filter").value;

  for (let i = 0; i < courseList.length; i++) {
    const courseLevel = courseList[i].querySelector("h5").textContent.split(" ")[1];
    if (levelFilter === "all" || levelFilter === courseLevel) {
      courseList[i].classList.remove("hide-course");
      courseList[i].classList.add("show-course");
    } else {
      courseList[i].classList.remove("show-course");
      courseList[i].classList.add("hide-course");
    }
  }
});

//Sort-High to low
const sortHighBtn = document.getElementById("sort-high-btn");

sortHighBtn.addEventListener("click", function() {
  const courseList = document.getElementById("course-row").getElementsByClassName("course-main");
  const courseArr = Array.from(courseList);
  
  courseArr.sort(function(a, b) {
    const levelA = parseInt(a.querySelector("h5").textContent.split(" ")[1]);
    const levelB = parseInt(b.querySelector("h5").textContent.split(" ")[1]);
    return levelB - levelA;
  });

  const courseList2 = document.getElementById("course-row");
  courseList2.innerHTML = "";
    courseArr.forEach(function(course) {
    courseList2.appendChild(course);
  });
});

//Sort-Low to high
const sortLowBtn = document.getElementById("sort-low-btn");

sortLowBtn.addEventListener("click", function() {
  const courseList = document.getElementById("course-row").getElementsByClassName("course-main");
  const courseArr = Array.from(courseList);
  
  courseArr.sort(function(a, b) {
    const levelA = parseInt(a.querySelector("h5").textContent.split(" ")[1]);
    const levelB = parseInt(b.querySelector("h5").textContent.split(" ")[1]);
    return levelA - levelB;
  });
  
  const courseList2 = document.getElementById("course-row");
  courseList2.innerHTML = "";
  courseArr.forEach(function(course) {
    courseList2.appendChild(course);
  });
});




