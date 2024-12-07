import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Plus, Edit, Trash } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const deleteProject = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/projects/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        });
        if (response.ok) {
          setProjects(projects.filter(project => project._id !== id));
        } else {
          throw new Error('Failed to delete project');
        }
      } catch (error) {
        console.error('Error deleting project:', error);
        setError(error.message);
      }
    }
  };

  if (loading) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16 flex items-center justify-center">
      <p className="text-2xl font-bold text-purple-800">Loading projects...</p>
    </div>;
  }

  if (error) {
    return <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16 flex items-center justify-center">
      <p className="text-2xl font-bold text-red-600">Error: {error}</p>
    </div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800">Projects</h1>
          {user && (
            <Link to="/projects/create" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 flex items-center">
              <Plus size={20} className="mr-2" />
              Create New Project
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-600 mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <a href={project.link} className="text-purple-600 hover:text-purple-800 flex items-center mr-4" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} className="mr-1" /> View Project
                    </a>
                    <a href={project.github} className="text-purple-600 hover:text-purple-800 flex items-center" target="_blank" rel="noopener noreferrer">
                      <Github size={20} className="mr-1" /> GitHub
                    </a>
                  </div>
                  {user && user._id === project.user && (
                    <div className="flex items-center">
                      <Link to={`/projects/edit/${project._id}`} className="text-blue-600 hover:text-blue-800 mr-2">
                        <Edit size={20} />
                      </Link>
                      <button onClick={() => deleteProject(project._id)} className="text-red-600 hover:text-red-800">
                        <Trash size={20} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

