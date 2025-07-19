const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Dallas, TX",
    role: "Bible Study Leader",
    content: "BibleQuizNow has transformed our weekly Bible study sessions. The quizzes are engaging, well-researched, and perfect for all skill levels. Our group loves the instant feedback and detailed explanations!",
    rating: 5,
    image: "SJ"
  },
  {
    id: 2,
    name: "Pastor Michael Chen",
    location: "Seattle, WA",
    role: "Youth Pastor",
    content: "I use these quizzes regularly with our youth group. The variety of difficulty levels means everyone can participate and learn. The explanations help reinforce biblical truths in a fun, interactive way.",
    rating: 5,
    image: "MC"
  },
  {
    id: 3,
    name: "Rebecca Martinez",
    location: "Phoenix, AZ",
    role: "Homeschool Mom",
    content: "As a homeschooling parent, I appreciate how these quizzes make Bible study engaging for my kids. The visual design is beautiful and the content is scripturally sound. Highly recommended!",
    rating: 5,
    image: "RM"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Nashville, TN",
    role: "Seminary Student",
    content: "The depth and accuracy of these quizzes is impressive. They've helped me review and retain biblical knowledge throughout my seminary studies. The hard-level quizzes are particularly challenging!",
    rating: 5,
    image: "DT"
  },
  {
    id: 5,
    name: "Linda Williams",
    location: "Orlando, FL",
    role: "Retired Teacher",
    content: "I love how easy it is to jump into a quiz anytime. No login required, instant results, and I always learn something new. It's become part of my daily devotional routine.",
    rating: 5,
    image: "LW"
  },
  {
    id: 6,
    name: "James Rodriguez",
    location: "Denver, CO",
    role: "Church Elder",
    content: "Our church small groups have been using these quizzes for months. They spark great discussions and help people engage with Scripture in a new way. The variety keeps things fresh!",
    rating: 5,
    image: "JR"
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of Bible enthusiasts who are deepening their knowledge 
            and strengthening their faith through our interactive quizzes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-sm">
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">300+</div>
              <div className="text-gray-600">Bible Quizzes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Global Access</div>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-16">
          <h3 className="text-2xl font-display font-semibold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Is login required?</h4>
              <p className="text-gray-600 text-sm">
                No, all quizzes are free and no login is needed. Just click and start learning!
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">How long does each quiz take?</h4>
              <p className="text-gray-600 text-sm">
                Typically 10-15 minutes with 20-25 questions per quiz.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Can I review my answers?</h4>
              <p className="text-gray-600 text-sm">
                Yes, correct answers and explanations are shown after submission.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Are the quizzes suitable for all ages?</h4>
              <p className="text-gray-600 text-sm">
                Yes, designed for diverse groups and skill levels from beginners to scholars.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
