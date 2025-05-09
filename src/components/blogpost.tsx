import { motion } from "framer-motion";
import { Link } from "react-router";



const blogPosts = [
  {
    id: 1,
    category: "Viruses",
    title: "Covid-19",
    description:
      "Covering insights into understanding mental processes and practical ways to manage them.",
    image:
      "https://images.unsplash.com/photo-1592671977183-b306d0e37a20?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    category: "Diet",
    title: "Healthy Food Choices",
    description:
      "Exploring deeper layers of the mind and offering tools for mental and emotional growth.",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    category: "Therapy",
    title: "Wellness and Therapy",
    description:
      "Examining relationships through therapy and offering advice on emotional connection.",
    image:
      "https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

const blogpost = () => {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
        <motion.div
    variants={slideUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }} 
    >
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest Blog Posts
          </h2>
          <p className="text-2xl md:text-gray-600 mt-2">
            Stay informed about the latest research in psychology.
          </p>
        </div>
        <button className=" md:bg-red-900 text-white px-5 py-2 rounded-md hover:bg-yellow-600">
          View All Posts
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-lg overflow-hidden shadow hover:shadow-md transition"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 rounded-lg transform transition duration-300 hover:scale-105 hover:brightness-90 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-red-900 font-semibold">
                {post.category}
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mt-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{post.description}</p>
              <a
                href="#"
                className="inline-flex items-center text-red-900 font-medium mt-4 hover:underline"
              >
                Read More <span className="ml-1">→</span>
              </a>
              
            </div>
          </div>
          
        ))}

      </div>
      
      <Link to="/bloglist" className=" bg-red-900 flex mt-10 ml-25 text-white px-5 py-2 rounded-md hover:bg-yellow-600 md:hidden">
        View All Posts
      </Link>

      </motion.div>
    </section>
  );
};

export default blogpost;
