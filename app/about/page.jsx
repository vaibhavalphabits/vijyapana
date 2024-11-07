
import React from 'react'

function page() {
  return (
    <>
    <section className="about-page bg-gradient-to-br mt-16 from-white to-gray-100 py-20 px-10 md:px-28 lg:px-48 text-gray-800">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 tracking-wide">
          Welcome to Vijyapana Advertising
        </h1>
        <p className="text-xl font-light italic text-gray-600">
          Where creativity meets precision
        </p>
      </div>

      <div className="max-w-4xl mx-auto leading-relaxed space-y-16">
        <p className="text-lg text-gray-700">
          With over <span className="font-semibold">8 years</span> of experience in the advertising industry, we specialize in delivering
          premium and luxury solutions tailored to elevate your brand. From stunning websites and social media creatives to ID cards, 
          letterheads, print media, corporate gift hampers, product and video ads, graphic design, voice-overs, and digital ads – 
          we are your one-stop solution for all advertising needs.
        </p>

        <div className="border-l-4 border-gray-700 pl-6 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700">
            Our mission is clear: we believe that every business, regardless of size or industry, deserves outstanding advertising. Superb ads shouldn’t be a luxury reserved for a few. That’s why we’re committed to creating impactful and timely ads that drive results and captivate audiences.
          </p>
          <p className="text-lg text-gray-700">
            We take pride in our creativity, attention to detail, and ability to meet deadlines, ensuring your brand always stands out in the marketplace.
          </p>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            Building Experiences
          </h2>
          <p className="text-lg text-gray-700">
            At Vijyapana Advertising, we don’t just create ads; we build experiences that resonate. Let’s work together to turn your vision into a reality!
          </p>
        </div>
      </div>
    </section>
     
      </>
  )
}

export default page
