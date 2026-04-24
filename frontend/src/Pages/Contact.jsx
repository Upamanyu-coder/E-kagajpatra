import React from "react";

const ContactPage = () => {
  return (
    <div>
      <main className="min-h-screen bg-slate-950 text-slate-200">
        {/* Header */}
        <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white">Contact Us</h1>
          <p className="mt-5 text-lg leading-8 text-slate-400">
            For questions, suggestions, or project-related information, please
            contact the E-KagajPatra project team.
          </p>
        </section>

        {/* Contact Body */}
        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Contact Info */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-white">Get in Touch</h2>

            <div className="mt-8 space-y-6 text-slate-400">
              <div>
                <p className="font-semibold text-slate-200">Project</p>
                <p>
                  E-KagajPatra: Digital Government Document and Process
                  Management System
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-200">Developed By</p>
                <p>Amrit Kafle (79020322)</p>
                <p>Yubraj Dhakal (79020336)</p>
              </div>

              <div>
                <p className="font-semibold text-slate-200">Institution</p>
                <p>Tribhuvan University, Bhairahawa Multiple Campus</p>
              </div>

              <div>
                <p className="font-semibold text-slate-200">
                  Academic Guidance
                </p>
                <p>BIT Coordinator: Mr. Namraj Koirala</p>
                <p>Supervisor: Mr. Silesh Mishra</p>
              </div>

              <div>
                <p className="font-semibold text-slate-200">Location</p>
                <p>Bhairahawa, Nepal</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-white">Send Message</h2>

            <form className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter message subject"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none placeholder:text-slate-500 focus:border-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
