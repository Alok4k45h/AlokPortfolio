const ProjectData = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTqOY0SY6Xior5I8OdBm-Em7hnMT5M7n-TyVX6IZT5RhUssHkqTVy5pWTx7tNHl7z6M4&usqp=CAU",
    title: "Wikipedia Search Application",
    description:
      "Developed custom wikiSearch App where users can search and view curated results in wikipedia",
    technologies: "HTML, CSS, JS, REST API Calls, Bootstrap",
    listFirst:
      "Displayed list of search results with HTML list elements with hyperlink as url, styled list using CSS, Bootstrap and implemented responsiveness using Flex properties and CSS Box model.",
    listSecond:
      "Fetched search results from server asynchronously using fetch GET HTTP API call. When a user clicks on a particular result, opens the website in a new tab by using the target attribute of the anchor tag in HTML.",
    link: "https://searchon.ccbp.tech/",
  },
  {
    id: 2,
    image: "https://cjchirag7.github.io/images/portfolio/lib_manage.jpg",
    title: "Ism-Central Library",
    description:
      "Developed Web app for Central library to track book issues, book returns, user stats & many more",
    technologies: " NodeJS, Express, MongoDB, ReactJs",
    listFirst:
      "Authenticate as an administrator to add new books & view, edit, or delete existing books, issue a book to a student, and view the issue log and profiles of all administrators and students. .",
    listSecond:
      "Authenticate as a student to search books, view availability, and issue history",
    link: "https://github.com/Alok4k45h/IIT-ISM-CENTRAL-LIBRARY",
  },
  {
    id: 3,
    image: "./Images/todoImage.png",
    title: "Todos Application",
    description:
      "Developed persistent todo application with CRUD operations to track list of tasks",
    technologies: "HTML, CSS, JS, Bootstrap",
    listFirst:
      "Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap",
    listSecond:
      "Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations.",
    link: "https://todosapp07.ccbp.tech/",
  },
  {
    id: 4,
    image: "./Images/event.png",
    title: "EventUp Web App",
    description:
      "website that provides a platform where user chhose to attend events & oraganisers can list All events",
    technologies: "NodeJS, Express, MongoDB, ReactJs, Bootstrap",
    listFirst:
      "Provides an easy way to for event Organisers to list all enents on website and track its reach",
    listSecond:
      "Users have access have all upcoming events hosted on website after authentication only",
    link: "https://github.com/Alok4k45h/EventUp",
  },
  {
    id: 5,
    image: "./Images/guessNumber.png",
    title: "Guessing Number Game",
    description:
      "Developed a game where user can Guess the number(integer between 1-100) fixed by Browser itself",
    technologies: "HTML, CSS, Bootstrap, JS",
    listFirst: "Every time you want to play, you must reload your browser. ",
    listSecond:
      "There is a counter that counts the number of steps required to arrive at the correct guess.",
    link: "https://guessingame07.ccbp.tech/",
  },
  {
    id: 6,
    image:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png",
    title: "Food Munch Homepage",
    description:
      "Developed a responsive homepage for Food Store where users can order food",
    technologies: "HTML, CSS, Bootstrap",
    listFirst:
      "Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.",
    listSecond:
      "Implemented product youtube videos by using bootstrap embed and model components",
    link: "https://befoody.ccbp.tech/",
  },
  {
    id: 7,
    image: "./Images/blog.png",
    title: "BlogNxt Web App",
    description:
      "Developed a website that allows users to post blogs with photographs and view other blogs. ",
    technologies: "NodeJS, MongoDB, ReactJs, Bootstrap",
    listFirst:
      "After Authentication Only, users can share their own blogs, as well as edit and delete them.",
    listSecond:
      "Users have only be able to view other people's blogs. They don't have access to delete or change it.",
    link: "https://github.com/Alok4k45h/Blog-app",
  },
  {
    id: 8,
    image: "./Images/mineCalc.png",
    title: "MineCalc Web App",
    description:
      "Developed Web App for All sort of mining Calculation with desc during 48 hr live Hackfest'22",
    technologies: " NodeJS, Express, MongoDB, ReactJs, Bootstrap",
    listFirst:
      "Integration of all key formulae calculations with descriptions, including those for the Powder Factor, Pressure Drop in Mine, RQD, NPV, and PPV, etc.",
    listSecond:
      "Upcoming Feature- Inline Input, Step by Step Solution, Graph Data Visualisation and many more",
    link: "https://github.com/Alok4k45h/MineCalc",
  },
];

export default ProjectData;
