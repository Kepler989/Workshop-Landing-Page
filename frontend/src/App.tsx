import React from 'react';

import { Calendar, Clock, Monitor, IndianRupee, Users } from 'lucide-react';
import RegistrationForm from './components/RegistrationForm';

function App() {
  const faqs = [
    { q: "Do I need prior coding experience?", a: "No! This workshop is designed for absolute beginners." },
    { q: "What software will we use?", a: "We use browser-based kid-friendly tools. No heavy installations required." },
    { q: "Is the fee refundable?", a: "We offer a 100% refund if cancelled up to 48 hours before the start date." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            AI & Robotics Summer Workshop
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-blue-100">
            Empower your child to build the future. A fun, interactive 4-week journey into coding and robotics.
          </p>
          <a href="#register" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg">
            Enroll Now
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: Details & Content */}
        <div className="space-y-12">
          
          {/* Workshop Details Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Workshop Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Users className="text-blue-500" />
                <div><p className="text-sm text-gray-500">Age Group</p><p className="font-semibold">8–14 Years</p></div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Clock className="text-blue-500" />
                <div><p className="text-sm text-gray-500">Duration</p><p className="font-semibold">4 Weeks</p></div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <Monitor className="text-blue-500" />
                <div><p className="text-sm text-gray-500">Mode</p><p className="font-semibold">Online</p></div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <IndianRupee className="text-blue-500" />
                <div><p className="text-sm text-gray-500">Fee</p><p className="font-semibold">₹2,999</p></div>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100 col-span-2">
                <Calendar className="text-blue-500" />
                <div><p className="text-sm text-gray-500">Start Date</p><p className="font-semibold">15 July 2026</p></div>
              </div>
            </div>
          </section>

          {/* Learning Outcomes */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">What They Will Learn</h2>
            <ul className="space-y-3">
              {[
                "Understand the fundamentals of Artificial Intelligence.",
                "Build logic using block-based coding (Scratch/Blockly).",
                "Simulate virtual robots to solve real-world mazes.",
                "Create a simple AI chatbot from scratch.",
                "Develop problem-solving and critical thinking skills."
              ].map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-500 font-bold">✓</span>
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-800">{faq.q}</h4>
                  <p className="text-gray-600 mt-2">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* Right Column: Registration Form */}
        <div id="register" className="lg:sticky lg:top-8 self-start">
          <RegistrationForm />
        </div>

      </main>
    </div>
  );
}

export default App;