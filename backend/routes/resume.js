const express = require("express");
const router = express.Router();

// GET resume data
router.get("/", (req, res) => {
  
    name: "Varun T B",
    email: "varunvaru297@gmail.com",
    phone: "8105342165",
    location: "Bangalore, Karnataka",

    profile:
      "Engineer focused on building practical and scalable web solutions using modern development practices.",

    education: [
      {
        college: "MVJ College of Engineering",
        degree: "B.E. Computer Science",
        year: "2022 – Present",
        cgpa: "8.91",
      },
      {
        college: "Sri Chaithanya Vasavi PU College",
        degree: "PCMB",
        year: "2020 – 2022",
        grade: "94.6%",
      },
    ],

    skills: [
      "Java",
      "Python",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],

    projects: [
      {
        title: "Rent My Space",
        description:
          "Full-stack MERN platform for listing and booking temporary spaces.",
      },
      {
        title: "Neuro Quiz",
        description:
          "Interactive quiz platform with adaptive difficulty and REST APIs.",
      },
    ],
  };

  res.json(resume);
});

module.exports = router;