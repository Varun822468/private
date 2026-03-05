import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";


  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        {/* HEADER */}
        <div className="text-center border-b pb-6">
          <h1 className="text-4xl font-bold tracking-wide">VARUN T B</h1>

          <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <FaEnvelope /> varunvaru297@gmail.com
            </span>
            <span className="flex items-center gap-2">
              <FaPhone /> 8105342165
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt /> Bangalore, Karnataka
            </span>
          </div>

          <div className="flex justify-center gap-6 mt-3 text-blue-600 text-sm">
            <a href="https://github.com/Varun822468" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/varun-t-b-8a454931b" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://varun-portfolio-ashy.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline">
              Portfolio
            </a>
          </div>
        </div>

        {/* PROFILE */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">Profile</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Engineer focused on building practical, scalable web solutions using modern development practices. 
            Brings strong technical depth and real-world problem-solving skills with experience in full-stack development and structured system design.
          </p>
        </section>

        {/* EDUCATION */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">Education</h2>

          <div className="mt-4">
            <div className="flex justify-between font-semibold">
              <span>MVJ College of Engineering</span>
              <span>2022 – Present</span>
            </div>
            <p className="text-gray-600">
              B.E. in Computer Science and Engineering (CGPA: 8.91) – Bengaluru
            </p>
          </div>

          <div className="mt-4">
            <div className="flex justify-between font-semibold">
              <span>Sri Chaithanya Vasavi PU College</span>
              <span>2020 – 2022</span>
            </div>
            <p className="text-gray-600">
              PCMB (Grade: 94.6%) – Challakere
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">Experience</h2>

          <div className="mt-4">
            <div className="flex justify-between font-semibold">
              <span>Blue Midas Consulting</span>
              <span>Nov 2025 – Feb 2026</span>
            </div>
            <p className="italic text-gray-600">
              Full Stack Web Developer Intern (Client: Tinker Tales) – Remote
            </p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Built and launched a production-grade D2C e-commerce platform end-to-end.</li>
              <li>Integrated OAuth login, payment gateways, shipping aggregators, and India Post.</li>
              <li>Improved Lighthouse scores (Mobile 49→63, Web 86→93, SEO 83→92).</li>
              <li>Enhanced scalability using caching, CDN, and load testing strategies.</li>
            </ul>
          </div>

          <div className="mt-4">
            <div className="flex justify-between font-semibold">
              <span>Shadow Fox</span>
              <span>Aug 2025 – Sep 2025</span>
            </div>
            <p className="italic text-gray-600">Web Developer Intern – Remote</p>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Developed MERN stack e-commerce platform (GreenCart).</li>
              <li>Optimized dental clinic website for performance and SEO.</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">Projects</h2>

          <div className="mt-4">
            <h3 className="font-semibold">Rent My Space (MERN Stack)</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Developed full-stack rental platform for listing and booking spaces.</li>
              <li>Implemented authentication and role-based access.</li>
              <li>Built responsive UI using React and Tailwind CSS.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold">Neuro Quiz (MERN Stack)</h3>
            <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
              <li>Built interactive quiz platform with adaptive difficulty.</li>
              <li>Implemented REST APIs and scalable client-server architecture.</li>
            </ul>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">Skills</h2>
          <div className="mt-3 text-gray-700 space-y-2">
            <p><strong>Programming:</strong> Java, Python, JavaScript</p>
            <p><strong>Web Development:</strong> HTML, CSS, Node.js, React.js, Express.js</p>
            <p><strong>Databases:</strong> MongoDB, MySQL</p>
            <p><strong>Tools:</strong> VS Code, GitHub, Docker, Postman, Eclipse</p>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">Certifications</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Developing Back-End Apps with Node.js and Express</li>
            <li>Developing Front-End Apps with React</li>
          </ul>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">Achievements</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>3rd Place – INNOVEX-25 Project Expo (FACESYNTH – Real-Time 3D Facial Mapping).</li>
            <li>Best Health & Humanity Prize among 52 teams.</li>
            <li>4th Place – AI for Education Hackathon (120+ teams).</li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default Resume;