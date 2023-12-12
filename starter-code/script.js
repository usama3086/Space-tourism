document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const navContainer = document.getElementById("navItem");

  if (window.innerWidth < 640 && navContainer) {
    mobileMenuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      if (
        navContainer.style.display === "none" ||
        navContainer.style.display === ""
      ) {
        navContainer.style.display = "block";
        navContainer.style.position = "absolute";
        navContainer.style.top = "0";
        navContainer.style.right = "0";
      } else {
        navContainer.style.display = "none";
      }
    });
    const lists = document.querySelectorAll("#nav-list li");
    lists.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.stopPropagation();
        navContainer.style.display = "none";
      });
    });
    document.body.addEventListener("click", function () {
      navContainer.style.display = "none";
    });
  } else {
    console.error("Element with ID 'nav-container' not found.");
  }


  const htmlFiles = [
    "destination-moon.html",
    "destination-mars.html",
    "destination-europa.html",
    "destination-titan.html",
    "crew-commander.html",
    "crew-specialist.html",
    "crew-pilot.html",
    "crew-engineer.html",
    "technology-vehicle.html",
    "technology-spaceport.html",
    "technology-capsule.html",
  ];

  htmlFiles.forEach((file) => {
    fetch(file)
      .then((response) => response.text())
      .then((html) => {
        // Append the HTML content to the content-container
        document.getElementById("pages").innerHTML += html ;
      })
      .catch((error) => console.error("Error fetching HTML:", error));
  });

  setTimeout(() => {
     var links = document.querySelectorAll(".custom-list li");

    links.forEach(function (link,index)
  {
      link.addEventListener("click", function () {
        // Remove 'active' class from all links
        links.forEach(function (otherLink, index) {
          if (otherLink !== link) {
            otherLink.classList.remove("active");
          }
        });
  
        link.classList.add("active");
      });
      if (index === 0) {
        link.classList.add("active");
      }
    });
    
function onHomeButtonClick() {
  console.log("Home button clicked");
}

document.addEventListener("click", (event) => {
  if (event.target.id === "homeBtn") {
    onHomeButtonClick();
  }

  if (event.target.id === "Explorebtn") {
    document.querySelector("#destinationBtn").click();
  }
});


    document.querySelector("#destinationBtn").addEventListener("click", () => {
      document.querySelector("#home").innerHTML =
        document.querySelector("#moon").innerHTML;
      document.body.style.backgroundImage =
        "url(./assets/destination/background-destination-desktop.jpg)";
    });
    
    document.querySelector("#home").addEventListener("click", (event) => {
      const targetId = event.target.id;
    
      switch (targetId) {
        case "moonbtn":
          event.preventDefault();
          document.querySelector("#home").innerHTML =
            document.querySelector("#moon").innerHTML;
          console.log("mars button clicked");
          break;
    
        case "marsbtn":
          event.preventDefault();
          document.querySelector("#home").innerHTML =
            document.querySelector("#mars").innerHTML;
          console.log("mars button clicked");
          break;
    
        case "europabtn":
          event.preventDefault();
          document.querySelector("#home").innerHTML =
            document.querySelector("#europa").innerHTML;
          break;
    
        case "titanbtn":
          event.preventDefault();
          document.querySelector("#home").innerHTML =
            document.querySelector("#titan").innerHTML;
          break;
    
        // Add more cases for other buttons if needed
    
        default:
          // Handle default behavior or do nothing
          break;
      }
    });
    
    document.querySelector("#crewBtn").addEventListener("click", () => {
      document.querySelector("#home").innerHTML =
        document.querySelector("#commander").innerHTML;
      document.body.style.backgroundImage =
        "url(./assets/crew/background-crew-desktop.jpg)";
    
      const roles = ["#crew1", "#crew2", "#crew3", "#crew4"];
      let currentIndex = 0;
      const crew1 = document.querySelector("#crew1");
      const originalCrew1Content = crew1.innerHTML;
    
      function updateRole() {
        crew1.innerHTML = document.querySelector(roles[currentIndex]).innerHTML;
        currentIndex = (currentIndex + 1) % roles.length;
    
        if (currentIndex === 0) {
          // If crew1 is shown, reset after a short delay
          setTimeout(resetCrew1, 3000);
        }
      }
    
      // Set an interval to update the role every 2000 milliseconds (2 seconds)
      const intervalId = setInterval(updateRole, 2000);
    
      // Function to reset #crew1 to its original content
      function resetCrew1() {
        crew1.innerHTML = originalCrew1Content;
      }
    });
    
    
    
    document.querySelector("#home").addEventListener("click", (event) => {
      const targetId = event.target.id;
    
      switch (targetId) {
        case "commanderbtn":
          document.querySelector("#home").innerHTML =
            document.querySelector("#commander").innerHTML;
          break;
    
        case "specialistbtn":
          document.querySelector("#home").innerHTML =
            document.querySelector("#specialist").innerHTML;
          break;
    
        case "pilotbtn":
          document.querySelector("#home").innerHTML =
            document.querySelector("#pilot").innerHTML;
          break;
    
        case "engineerbtn":
          document.querySelector("#home").innerHTML =
            document.querySelector("#engineer").innerHTML;
          break;
    
        // Add more cases for other buttons if needed
    
        default:
          // Handle default behavior or do nothing
          break;
      }
    });
    
    
    
    document.querySelector("#technologyBtn").addEventListener("click", () => {
      document.querySelector("#home").innerHTML =
        document.querySelector("#vehicle").innerHTML;
      document.body.style.backgroundImage =
        "url(./assets/technology/background-technology-desktop.jpg)";
    
      document.querySelector("#home").addEventListener("click", (event) => {
        const targetId = event.target.id;
    
        switch (targetId) {
          case "vehiclebtn":
            document.querySelector("#home").innerHTML =
              document.querySelector("#vehicle").innerHTML;
            break;
          case "spacebtn":
            document.querySelector("#home").innerHTML =
              document.querySelector("#spaceport").innerHTML;
            break;
    
          case "capsulebtn":
            document.querySelector("#home").innerHTML =
              document.querySelector("#capsule").innerHTML;
            break;
    
          // Add more cases for other buttons if needed
    
          default:
            // Handle default behavior or do nothing
            break;
        }
      });
    });
    

    document.querySelector("#homeBtn").addEventListener("click", () => {
  document.querySelector("#homeBtn");
      document.querySelector("#home").innerHTML = `
      <main id="home">

      <div class="mt-[7rem] flex lg:flex-row flex-col justify-between lg:w-[77%] sm:w-full w-[80%] items-center mx-auto " style="height: calc(100vh - 250px);">
      <div class=" text-[#D0D6F9]">
    
     <p class=" 2xl:text-[38px] sm:text-[28px] text-[15px] font-[400] tracking-[4px] lg:text-start text-center" style="font-family: 'Barlow Condensed', sans-serif;
     "> SO, YOU WANT TO TRAVEL TO</p>
      <h1 class="lg:text-[150px] 2xl:text-[180px] sm:text-[150px] text-[70px] text-white lg:text-start text-center  " style="font-family: 'Bellefair', serif;">SPACE</h1>
      <p class="text-justify tracking-[1px] text-[14px] 2xl:text-[24px] font-[400] lg:w-[26rem] sm:w-[26rem] w-full leading-[28px] " style="font-family: 'Barlow', sans-serif;
      ">
      Let’s face it; if you want to go to space, you might as well genuinely go to 
      outer space and not hover kind of on the edge of it. Well sit back, and relax 
      because we’ll give you a truly out of this world experience!
    </p>
    </div>
    <div class="mt-16 flex items-center justify-center  ">
    
      <button type="button" id="Explorebtn" class="items-center justify-center cursor-pointer flex h-[14rem] w-[14rem] sm:h-[14rem] sm:w-[14rem]
      2xl:h-[18rem] 2xl:w-[18rem] bg-white rounded-full select-none text-[32px] font-[400] transform transition-transform 
      hover:scale-110"  style="  font-family: 'Bellefair', serif; " >
    
    
          EXPLORE
       
      </button>
      
    </div>
    
    </div>
    </main>
      `;
      document.body.style.backgroundImage =
        "url(./assets/home/background-home-desktop.jpg)";
    });
  }, 1000);

});
