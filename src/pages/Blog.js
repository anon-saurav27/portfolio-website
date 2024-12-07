import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Plus, Edit, Trash } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs");
        if (!response.ok) {
          throw new Error("Failed to fetch blog posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        if (response.ok) {
          setPosts(posts.filter((post) => post._id !== id));
        } else {
          throw new Error("Failed to delete blog post");
        }
      } catch (error) {
        console.error("Error deleting blog post:", error);
        setError(error.message);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16 flex items-center justify-center">
        <p className="text-2xl font-bold text-purple-800">
          Loading blog posts...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16 flex items-center justify-center">
        <p className="text-2xl font-bold text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-purple-800">Blog</h1>
          {user && (
            <Link
              to="/blog/create"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300 flex items-center"
            >
              <Plus size={20} className="mr-2" />
              Create New Post
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-purple-600 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {post.content.substring(0, 150)}...
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 flex items-center">
                    <Calendar size={16} className="mr-1" />{" "}
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                  <Link
                    to={`/blog/${post._id}`}
                    className="text-purple-600 hover:text-purple-800 flex items-center"
                  >
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                {user && user._id === post.author && (
                  <div className="flex items-center mt-4">
                    <Link
                      to={`/blog/edit/${post._id}`}
                      className="text-blue-600 hover:text-blue-800 mr-2"
                    >
                      <Edit size={20} />
                    </Link>
                    <button
                      onClick={() => deletePost(post._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash size={20} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
