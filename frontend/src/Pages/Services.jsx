import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "नागरिकता सिफारिस",
    desc: "नागरिकता सम्बन्धी सिफारिस पत्र डिजिटल रूपमा तयार गर्नुहोस्।",
    icon: "🪪",
  },
  {
    title: "जन्म दर्ता",
    desc: "जन्म दर्ताको लागि आवश्यक विवरण भरी प्रक्रिया अगाडि बढाउनुहोस्।",
    icon: "👶",
  },
  {
    title: "विवाह दर्ता",
    desc: "विवाह दर्ता सम्बन्धी कागजात र सिफारिस सेवा।",
    icon: "💍",
  },
  {
    title: "बसाइँसराइ सिफारिस",
    desc: "बसाइँसराइ प्रमाणपत्रका लागि आवश्यक विवरण पेश गर्नुहोस्।",
    icon: "🏠",
  },
  {
    title: "व्यवसाय दर्ता",
    desc: "व्यवसाय दर्ता तथा सम्बन्धित सिफारिस कागजात तयार गर्नुहोस्।",
    icon: "🏢",
  },
  {
    title: "घरजग्गा सिफारिस",
    desc: "घरजग्गा सम्बन्धी सरकारी सिफारिस प्रक्रिया डिजिटल बनाउनुहोस्।",
    icon: "📄",
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      {/* Header */}
      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400 ring-1 ring-blue-500/30">
          Our Services
        </span>

        <h1 className="mt-6 text-4xl font-extrabold text-white">
          उपलब्ध सरकारी सेवाहरू
        </h1>

        <p className="mt-5 text-lg leading-8 text-slate-400">
          E-KagajPatra मार्फत नागरिकले आवश्यक सरकारी सिफारिस, दर्ता तथा कागजात
          प्रक्रिया सजिलै डिजिटल रूपमा प्रयोग गर्न सक्छन्।
        </p>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-2xl ring-1 ring-blue-500/30">
                {service.icon}
              </div>

              <h2 className="mt-6 text-xl font-bold text-white">
                {service.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.desc}
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  to="/service-details"
                  className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
                >
                  View Details
                </Link>

                <Link
                  to="/letter-form"
                  className="rounded-xl border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-slate-800"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Banner */}
      <section className="border-t border-slate-800 bg-slate-900">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">01</h3>
            <p className="mt-3 font-semibold text-white">सेवा छान्नुहोस्</p>
            <p className="mt-2 text-sm text-slate-400">
              आफूलाई चाहिएको सरकारी सेवा चयन गर्नुहोस्।
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">02</h3>
            <p className="mt-3 font-semibold text-white">फारम भर्नुहोस्</p>
            <p className="mt-2 text-sm text-slate-400">
              आवश्यक व्यक्तिगत तथा सेवा विवरण भर्नुहोस्।
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
            <h3 className="text-3xl font-bold text-blue-400">03</h3>
            <p className="mt-3 font-semibold text-white">
              कागजात प्राप्त गर्नुहोस्
            </p>
            <p className="mt-2 text-sm text-slate-400">
              Preview गरेर कागजात डाउनलोड वा submit गर्नुहोस्।
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
