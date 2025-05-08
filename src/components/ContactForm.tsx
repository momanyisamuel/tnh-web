const ContactForm = () => {
  return (
    <div className="bg-gray-100 rounded-lg mx-auto p-10 w-full max-w-4xl shadow-md mt-8">
      <h2 className="text-center text-2xl font-semibold mb-2">
        Feel free to contact us.
      </h2>

      <form className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-[#133f3f]"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-[#133f3f]"
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-3 border rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-[#133f3f]"
        />
        <textarea
          placeholder="Message"
          rows={5}
          className="p-3 border rounded-md focus:outline-none focus:ring-2 bg-white focus:ring-[#133f3f]"
        />
        <button
          type="submit"
          className="bg-red-900 text-white py-3 px-6 rounded-md cursor-pointer hover:bg-yellow-600 hover:text- transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
