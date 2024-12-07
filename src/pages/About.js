import React from "react";
import { Briefcase, Code, GraduationCap } from "lucide-react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">
          About Me
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-700 mb-4">
            Hi, I'm Saurav Giri, an aspiring IT professional with a passion for
            networking and cybersecurity. Currently pursuing my Bachelor's in
            Information Technology (BIT), I am committed to mastering the
            intricacies of networking and making a significant contribution to
            this dynamic field.
          </p>
          <p className="text-gray-700">
            I aim to bring great value to the domain by combining technical
            expertise with innovative problem-solving to enhance connectivity
            and security in today's digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
              <Code className="mr-2" /> Skills
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5 & CSS3</li>
              <li>Responsive Web Design</li>
              <li>RESTful API Development</li>
              <li>Git Version Control</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Bachelor of Information Technology</li>
              <li>Himalayan Whitehouse International College, Putalisadak, Kathmandu</li>
              <li>
                Relevant Coursework: CCNA, CCNP, CEH;
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center">
            <Briefcase className="mr-2" /> Experience
          </h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-semibold text-gray-800">
                No experienc at all. (2003-Present)
              </h3>
              <p className="text-gray-700">
                hi hello.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-gray-800">
                Web Developer at StartUp Inc. (2018-2020)
              </h3>
              <p className="text-gray-700">
                Developed and maintained multiple client websites and internal
                tools.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold text-gray-800">
                Junior Developer at Web Solutions LLC (2016-2018)
              </h3>
              <p className="text-gray-700">
                Assisted in the development of responsive websites and
                e-commerce platforms.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
