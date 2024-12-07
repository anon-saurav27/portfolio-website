import React from "react";
import { Code, Layout, Palette } from "lucide-react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-4">
            Saurav Giri
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            "Mastering Networking: The Journey of a Quick and Proficient
            Learner"
          </p>
          <img
            src="/images/gallery/anon1.jpg"
            alt="Saurav Giri"
            className="rounded-full w-48 h-48 object-cover mx-auto mb-8 border-4 border-purple-500 shadow-lg"
          />
          <a
            target="blank"
            href="https://www.facebook.com/saurav.130.giri"
            className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <p className="text-xl text-gray-900 leading-relaxed">
            Hi, I'm <b>Saurav Giri</b>, an aspiring IT professional with a passion for
            networking and cybersecurity. Currently pursuing my Bachelor's in
            Information Technology (BIT), I am committed to mastering the
            intricacies of networking and making a significant contribution to
            this dynamic field.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          
          <p className="text-l text-gray-800 leading-relaxed ">
          Explore my portfolio to discover more about my journey, skills, and aspirations!!!!!!!!!
          </p>
        </div>

        {/* Skills/Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Code size={48} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Web Development
            </h3>
            <p className="text-gray-600">
              Crafting robust and scalable web applications using modern
              frameworks and best practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Layout size={48} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Responsive Design
            </h3>
            <p className="text-gray-600">
              Creating fluid layouts that adapt seamlessly to any device or
              screen size.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Palette size={48} className="text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              UI/UX Design
            </h3>
            <p className="text-gray-600">
              Designing intuitive and visually appealing interfaces for enhanced
              user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
