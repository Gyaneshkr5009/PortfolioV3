import React from 'react'
import { useState } from 'react'
import { MapPin } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;
  return (
    <div className='p-6 md:p-10 bg-white text-gray-800'>
      <header className="mb-8">
        <h2 className="text-4xl font-bold border-b-4 border-indigo-500 inline-block pb-2">
          Contact
        </h2>
      </header>
      <h3 className="text-2xl font-semibold border-b-2 border-indigo-200 inline-block mb-6">
        Where I Am Today
      </h3>

      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          {/* Location Info */}
          <div className="flex items-center gap-3 p-4 rounded-xl border border-indigo-100 bg-indigo-50 text-gray-800 shadow-sm">
            <MapPin className="text-indigo-600 w-6 h-6" />
            <h1 className="text-lg font-semibold">North West Delhi, Delhi, India</h1>
          </div>


          {/* Google Map */}
          <div className="w-full h-[270px] rounded-xl overflow-hidden shadow-lg border border-gray-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-300">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=new%20Delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              className="w-full h-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>


        {/* Contact Form */}
        <div className="flex justify-center items-center from-gray-50 to-gray-200">
          <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl p-8 transition-all duration-300 bg-[url('./public/anime.jpg')] bg-cover bg-center bg-no-repeat">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Me</h2>
            
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="flex flex-col gap-6"
              onSubmit={() => setIsSubmitting(true)}
            >
              <input type="hidden" name="access_key" value={accessKey} />

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full name"
                  required
                  className="w-full p-3 rounded-xl border border-white/30 bg-white/60 backdrop-blur-md placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full p-3 rounded-xl border border-white/30 bg-white/60 backdrop-blur-md placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-xl border border-white/30 bg-white/60 backdrop-blur-md placeholder-gray-700 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 text-lg font-medium bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-200 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* My Original Work Copyright Field */}
      <footer className="w-full mt-16 py-4 border-t border-gray-200 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Gyanesh Kumar. All rights reserved.
      </footer>
    </div>
  )
}

export default Contact