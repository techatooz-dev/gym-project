export const metadata = {
  title: "Contact Us | Gym",
  description: "Get in touch for inquiries, tours, and memberships.",
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-60 overflow-hidden">
        <img
          src="/Slider-01-2.jpg"
          alt="People training with EMS equipment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </section>
      <main className="container mx-auto sm:px-14 px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Section 1: Company Info */}
          <section aria-labelledby="contact-info" className="md:col-span-1">
            <h2 id="contact-info" className="text-xl font-semibold mb-4">ProEMSFitness</h2>
            <p className="text-gray-700 leading-7 mb-6">
              Electrical muscle stimulation is a revolutionary way of getting rid of extra fat it provides an integrated
              electro muscle stimulations that burns fat 20 times more efficiently than a regular workout routine.
            </p>
            <div className="space-y-3 text-gray-800">
              <p><span className="font-semibold">Address:</span> Structure gym gulberg Lahore</p>
              <p>Omc hospital jail road Lahore</p>
              <p>
                <span className="font-semibold">Email:</span> <a className="text-blue-700 hover:underline" href="mailto:hr@proemsfitness.com">hr@proemsfitness.com</a>
              </p>
              <p className="font-semibold">By appointment only</p>
              <p><span className="font-semibold">Call us :</span> 03344054112</p>
            </div>
          </section>

          {/* Section 2: Contact Form */}
          <section aria-labelledby="contact-form" className="md:col-span-2">
            <h2 id="contact-form" className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Row 1 */}
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input id="name" name="name" type="text" placeholder="Name" className="w-full h-12 px-4 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-300" />
              </div>
              <div>
                <label htmlFor="org" className="sr-only">Organization Name</label>
                <input id="org" name="organization" type="text" placeholder="Organization Name" className="w-full h-12 px-4 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-300" />
              </div>

              {/* Row 2 */}
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input id="email" name="email" type="email" placeholder="Email Address" className="w-full h-12 px-4 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-300" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone number</label>
                <input id="phone" name="phone" type="tel" required placeholder="Phone number*" className="w-full h-12 px-4 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-300" />
              </div>

              {/* Row 3 */}
              <div className="md:col-span-2">
                <label htmlFor="country" className="sr-only">Country</label>
                <input id="country" name="country" type="text" placeholder="Country" className="w-full h-12 px-4 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-300" />
              </div>

              {/* Row 4 */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={7} placeholder="Message" className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 placeholder-gray-500 border border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-300" />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 flex justify-end pt-2">
                <button type="button" className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-md shadow">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
