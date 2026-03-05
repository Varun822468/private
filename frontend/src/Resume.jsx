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
            <a href="https://github.com/Varun822468" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/varun-t-b-8a454931b" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        

        {/* PROFILE */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold border-b pb-2">Profile</h2>
          <p className="mt-3 text-gray-700">
            Engineer focused on building practical, scalable web solutions using modern development practices.
          </p>
        </section>

      </div>
    </div>
  );
};

export default Resume;