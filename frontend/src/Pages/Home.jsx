// src/Pages/Home.jsx

import React from "react";
import { Link } from "react-router";

const services = [
  "नागरिकता सिफारिस",
  "जन्म दर्ता",
  "विवाह दर्ता",
  "बसाइँसराइ प्रमाणपत्र",
  "व्यवसाय दर्ता",
  "घरजग्गा सिफारिस",
];

const Home = () => {
  return (
    <main className="bg-slate-950 text-slate-200">
      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 ring-1 ring-blue-500/30">
            Digital Government Service
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            E-कागजपत्र
            <span className="block text-blue-400">
              डिजिटल सरकारी कागजात प्रणाली
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            सरकारी कागजात, सिफारिस पत्र र सेवा प्रक्रिया अब एउटै डिजिटल
            प्लेटफर्मबाट सजिलै, छिटो र सुरक्षित रूपमा प्राप्त गर्नुहोस्।
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/auth/register">
              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500">
                सेवा सुरु गर्नुहोस्
              </button>
            </Link>

            <Link to="/services">
              <button className="rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-slate-200 hover:bg-slate-800">
                सेवा हेर्नुहोस्
              </button>
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl">
          <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-cyan-600 p-8 text-white">
            <h2 className="text-2xl font-bold">Smart Document Portal</h2>

            <p className="mt-4 text-blue-100">
              Online form, document preview, request tracking and admin
              management system.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
                <h3 className="text-2xl font-bold">24/7</h3>
                <p className="text-sm text-blue-100">Online Access</p>
              </div>

              <div className="rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="text-sm text-blue-100">Secure Process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="border-y border-slate-800 bg-slate-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">उपलब्ध सेवाहरू</h2>

            <p className="mt-3 text-slate-400">
              नागरिकका लागि आवश्यक सरकारी सेवाहरू डिजिटल रूपमा उपलब्ध।
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-xl ring-1 ring-blue-500/30">
                  📄
                </div>

                <h3 className="text-lg font-bold text-white">{service}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  आवश्यक विवरण भर्नुहोस्, कागजात preview गर्नुहोस् र प्रक्रिया
                  अगाडि बढाउनुहोस्।
                </p>

                <button className="mt-5 text-sm font-semibold text-blue-400 hover:text-blue-300">
                  थप विवरण →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-950 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white">
            कसरी प्रयोग गर्ने?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "१",
                "सेवा छान्नुहोस्",
                "आफूलाई चाहिएको सरकारी सेवा चयन गर्नुहोस्।",
              ],
              ["२", "फारम भर्नुहोस्", "आवश्यक विवरण सही रूपमा भर्नुहोस्।"],
              [
                "३",
                "कागजात तयार गर्नुहोस्",
                "Preview गरेर कागजात डाउनलोड गर्नुहोस्।",
              ],
            ].map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg shadow-blue-600/20">
                  {step[0]}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">{step[1]}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step[2]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
