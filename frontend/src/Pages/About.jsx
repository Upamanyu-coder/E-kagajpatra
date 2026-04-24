import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AboutPage = () => {
  return (
    <div>
      <main className="bg-slate-950 text-slate-200 min-h-screen">
        {/* Header */}
        <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white">
            About E-KagajPatra
          </h1>
          <p className="mt-6 text-lg text-slate-400 leading-8">
            E-KagajPatra is a digital government document and process management
            system designed to simplify and modernize public service delivery in
            Nepal. The platform enables users to access government services,
            generate official documents, and track processes efficiently through
            a secure and user-friendly system.
          </p>
        </section>

        {/* Objective */}
        <section className="border-t border-slate-800">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">Project Objective</h2>
            <p className="mt-4 text-slate-400 leading-7">
              The primary objective of this project is to digitize traditional
              government documentation processes and provide a centralized
              platform where citizens can access services without unnecessary
              delays. The system aims to enhance transparency, efficiency, and
              accessibility while reducing manual workload and paperwork.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-slate-800 bg-slate-900">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">Key Features</h2>

            <ul className="mt-6 space-y-4 text-slate-400">
              <li>• Digital access to government services</li>
              <li>• Online form submission and document generation</li>
              <li>• Real-time tracking of application status</li>
              <li>• Secure and user-friendly interface</li>
              <li>• Admin panel for service and document management</li>
            </ul>
          </div>
        </section>

        {/* Academic Info */}
        <section className="border-t border-slate-800">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-white">
              Academic Information
            </h2>

            <p className="mt-6 text-slate-400 leading-7">
              This project has been developed as a part of the academic
              curriculum for the Bachelor of Information Technology (BIT),
              Seventh Semester.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-slate-300 font-semibold">Project Title:</p>
              <p className="text-slate-400 mt-1">
                E-KagajPatra: Digital Government Document and Process Management
                System
              </p>

              <p className="mt-6 text-slate-300 font-semibold">Developed By:</p>
              <ul className="mt-2 text-slate-400 space-y-1">
                <li>• Amrit Kafle (79020322)</li>
                <li>• Yubraj Dhakal (79020336)</li>
              </ul>

              <p className="mt-6 text-slate-300 font-semibold">
                Academic Supervision:
              </p>
              <ul className="mt-2 text-slate-400 space-y-1">
                <li>• BIT Coordinator: Mr. Namraj Koirala</li>
                <li>• Supervisor: Mr. Silesh Mishra</li>
              </ul>

              <p className="mt-6 text-slate-300 font-semibold">Institution:</p>
              <p className="text-slate-400 mt-1">
                Tribhuvan University (TU), Bhairahawa Multiple Campus
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-slate-800 bg-slate-900">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 text-center">
            <p className="text-slate-400 leading-7">
              This project reflects an effort to bridge the gap between citizens
              and government services through digital transformation, ensuring
              accessibility, efficiency, and transparency in public
              administration.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
