import React from "react";

const SocialProof = () => {
  // Fake testimonials data
  const testimonials = [
    {
      id: 1,
      quote: "This product changed my workflow completely!",
      name: "Alex Johnson",
      role: "Product Designer",
      rating: 5,
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      quote: "Best decision we made for our team. Worth every penny!",
      name: "Sam Wilson",
      role: "CTO, TechStart",
      rating: 5,
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      quote: "The results speak for themselves. 10/10!",
      name: "Taylor Smith",
      role: "Marketing Director",
      rating: 4,
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  // Fake press logos
  const pressLogos = [
    { name: "TechCrunch", logo: "techcrunch" },
    { name: "Forbes", logo: "forbes" },
    { name: "Wired", logo: "wired" },
    { name: "The Verge", logo: "the-verge" },
  ];

  // Fake stats
  const stats = [
    { value: "10K+", label: "Happy Users" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "50+", label: "5-Star Reviews" },
  ];

  return (
    <div className=" bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Floating headline */}
      <div className="max-w-7xl mx-auto text-center mb-16 pt-4">
        <h2 className="px-2 py-2 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl pt-2">
          <span className="block pt-4">Trusted by</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            innovators worldwide
          </span>
        </h2>
      </div>

      {/* Animated stats */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3 mb-20">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <p className="text-5xl font-extrabold text-blue-600 mb-2 animate-countup">
              {stat.value}
            </p>
            <p className="text-lg font-medium text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Press logos - 3D tilt effect */}
      <div className="max-w-7xl mx-auto mb-20">
        <p className="text-center text-gray-500 mb-8 text-lg">As featured in</p>
        <div className="flex flex-wrap justify-center gap-12">
          {pressLogos.map((press, index) => (
            <div
              key={index}
              className="transform transition-all duration-300 hover:scale-110 hover:rotate-3"
            >
              <div className="text-4xl font-bold text-gray-800 opacity-80 hover:opacity-100">
                {press.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial bubbles */}
      <div className="max-w-7xl mx-auto relative h-96 mb-20 overflow-hidden">
        {/* Background bubbles */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={`absolute rounded-full opacity-20 bg-blue-${i}00`}
              style={{
                width: `${i * 80}px`,
                height: `${i * 80}px`,
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
                animation: `float ${6 + i * 2}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="relative grid gap-8 sm:grid-cols-3 z-10">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
