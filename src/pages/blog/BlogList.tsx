 import {motion} from "framer-motion";

 const slideUp = {
   hidden: { opacity: 0, y: 50 },
   visible: { opacity: 1, y: 0 },
 };
 
 const blogPosts = [
   {
     id: 1,
     title: "Understanding Cognitive Biases",
     description: "Learn how cognitive biases affect decision-making.",
     category: "Psychology",
     image: "/images/cognitive-biases.jpg",
   },
   {
     id: 2,
     title: "The Science of Happiness",
     description: "Explore the factors that contribute to happiness.",
     category: "Wellness",
     image: "/images/science-of-happiness.jpg",
   },
   {
     id: 3,
     title: "Mindfulness Techniques",
     description: "Discover effective mindfulness practices.",
     category: "Meditation",
     image: "/images/mindfulness-techniques.jpg",
   },
 ];

 const bloglist = () => {
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
     
      </motion.div>
    </section>
   )
 }
 
 export default bloglist