import React from 'react'

export default function Landing() {
  return (
    <div className="min-h-screen w-full text-gray-900 bg-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center font-bold">MP</div>
            <div className="font-semibold text-lg">MarinePath Careers</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#home" className="hover:text-black">Home</a>
            <a href="#careers" className="hover:text-black">Careers</a>
            <a href="#ambassadors" className="hover:text-black">Ambassadors</a>
            <a href="#about" className="hover:text-black">About Us</a>
            <a href="#news" className="hover:text-black">News / Events</a>
            <a href="#apply" className="inline-flex items-center justify-center rounded-full border px-4 py-1.5 hover:bg-gray-50">How to Apply</a>
          </nav>
          <a href="#apply" className="md:hidden inline-flex items-center justify-center rounded-full border px-3 py-1.5 text-sm">Apply</a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Work in one of the world’s truly global industries
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-600">
              The Merchant Navy powers global trade. With MarinePath Careers, start a sea-going career that combines
              adventure, professional growth, and internationally recognised qualifications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#careers" className="rounded-full bg-black text-white px-5 py-2 text-sm md:text-base">Explore Careers</a>
              <a href="#apply" className="rounded-full border px-5 py-2 text-sm md:text-base">How to Apply</a>
            </div>
            <div className="mt-6 text-sm">
              <a href="#video" className="underline underline-offset-4">Why choose a career at sea? — watch video</a>
            </div>
          </div>
          <div className="aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gray-100 grid place-items-center">
            <div className="p-6 text-center">
              <div className="text-6xl">🌊</div>
              <p className="mt-3 text-gray-600">Hero image / video placeholder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-2xl font-bold">There’s always more to sea</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              "Mumbai","Kolkata","Chennai","Cochin","Goa","Visakhapatnam"
            ].map((city) => (
              <div key={city} className="rounded-xl bg-white border p-4 text-center shadow-sm">
                <div className="text-2xl">📍</div>
                <div className="mt-1 text-sm font-medium">{city}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Explore your options</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <article className="rounded-2xl border bg-white overflow-hidden shadow-sm">
              <div className="aspect-[16/9] bg-gray-100 grid place-items-center text-4xl">🎓</div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Officer Training</h3>
                <p className="mt-2 text-sm text-gray-600">
                  A fully sponsored 3-year pathway combining an academic diploma/degree and a Certificate of Competency.
                </p>
                <a href="#officer" className="mt-4 inline-block text-sm underline underline-offset-4">Read more</a>
              </div>
            </article>
            <article className="rounded-2xl border bg-white overflow-hidden shadow-sm">
              <div className="aspect-[16/9] bg-gray-100 grid place-items-center text-4xl">🛠️</div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Ratings Training</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Become an essential member of the Deck, Engine or Catering departments. Learn core seamanship,
                  maintenance and safety skills that keep ships operating safely.
                </p>
                <a href="#ratings" className="mt-4 inline-block text-sm underline underline-offset-4">Read more</a>
              </div>
            </article>
            <article id="ambassadors" className="rounded-2xl border bg-white overflow-hidden shadow-sm">
              <div className="aspect-[16/9] bg-gray-100 grid place-items-center text-4xl">🧭</div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">Ambassadors</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Connect with experienced seafarers who volunteer to share first-hand insights and answer your questions.
                </p>
                <a href="#ambassador-details" className="mt-4 inline-block text-sm underline underline-offset-4">Read more</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="news" className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold">Open Days</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Marine Academy – Mumbai", date: "04 Oct 2025", cta: "Read more" },
              { title: "Cochin Maritime School", date: "08 Nov 2025", cta: "Read more" },
              { title: "Virtual Open Day", date: "15 Nov 2025", cta: "Read more" },
            ].map((e, i) => (
              <article key={i} className="rounded-2xl border bg-white overflow-hidden shadow-sm">
                <div className="aspect-[16/9] bg-gray-100 grid place-items-center text-4xl">📅</div>
                <div className="p-5">
                  <h3 className="text-base font-semibold">{e.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{e.date}</p>
                  <a href="#event" className="mt-4 inline-block text-sm underline underline-offset-4">{e.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">How to apply</h2>
          <p className="mt-3 text-gray-600">
            Submit your details and documents to receive guidance on eligibility, sponsoring companies, and entrance
            tests. We’ll help you choose the right pathway and prepare for interviews and medicals.
          </p>
          <form className="mt-8 grid gap-3 md:grid-cols-3 text-left" onSubmit={(e)=>{e.preventDefault(); alert('Form submitted — demo (connect to your backend or sheet)');}}>
            <input required placeholder="Full name" className="border rounded-xl px-4 py-3" />
            <input required type="tel" placeholder="Phone" className="border rounded-xl px-4 py-3" />
            <input required type="email" placeholder="Email" className="border rounded-xl px-4 py-3 md:col-span-1" />
            <input placeholder="City" className="border rounded-xl px-4 py-3 md:col-span-1" />
            <select className="border rounded-xl px-4 py-3 md:col-span-1">
              <option>Interested in</option>
              <option>Deck Officer</option>
              <option>Engine Officer</option>
              <option>ETO</option>
              <option>Ratings</option>
            </select>
            <button type="submit" className="rounded-xl bg-black text-white px-5 py-3 md:col-span-1">Submit</button>
          </form>
          <p className="mt-3 text-xs text-gray-500">By submitting, you agree to be contacted by MarinePath Careers.</p>
        </div>
      </section>

      <section id="about" className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl bg-white border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">About MarinePath Careers</h3>
            <p className="mt-2 text-sm text-gray-600">
              We’re an independent Merchant Navy career consultancy based in India, helping students start and grow
              seafaring careers. We provide guidance on training pathways, documentation, DG Shipping norms, and
              placements with reputed companies.
            </p>
            <ul className="mt-4 text-sm list-disc list-inside text-gray-700 space-y-1">
              <li>Guidance on eligibility & sponsorships</li>
              <li>Application & interview preparation</li>
              <li>Medical & documentation checklist (India)</li>
              <li>Post-joining mentoring and alumni support</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white border p-6 shadow-sm">
            <h3 className="text-xl font-semibold">Frequently Asked Questions</h3>
            <details className="mt-3 border rounded-xl p-4">
              <summary className="font-medium">What is the Merchant Navy?</summary>
              <p className="mt-2 text-sm text-gray-600">It’s the commercial shipping industry that transports goods and people across the world.</p>
            </details>
            <details className="mt-3 border rounded-xl p-4">
              <summary className="font-medium">Minimum eligibility?</summary>
              <p className="mt-2 text-sm text-gray-600">Varies by programme; typically 10+2 with PCM for officer cadet routes, medical fitness, and age limits.</p>
            </details>
            <details className="mt-3 border rounded-xl p-4">
              <summary className="font-medium">Are programmes sponsored?</summary>
              <p className="mt-2 text-sm text-gray-600">Many intakes are fully/partially sponsored by shipping companies that also provide seatime.</p>
            </details>
          </div>
        </div>
      </section>

      <footer className="border-t py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-semibold">MarinePath Careers</div>
            <p className="mt-2 text-gray-600">Start your Merchant Navy journey.</p>
          </div>
          <div>
            <div className="font-semibold">Sections</div>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a href="#careers" className="hover:underline">Careers</a></li>
              <li><a href="#ambassadors" className="hover:underline">Ambassadors</a></li>
              <li><a href="#news" className="hover:underline">News & Events</a></li>
              <li><a href="#apply" className="hover:underline">How to Apply</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>📍 Noida, India</li>
              <li>✉️ hello@marinepathcareers.com</li>
              <li>☎️ +91-98XXXXXX</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Follow</div>
            <div className="mt-2 flex gap-3 text-2xl">
              <a href="#">👍</a>
              <a href="#">📸</a>
              <a href="#">💼</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} MarinePath Careers. All rights reserved.</div>
      </footer>
    </div>
  )
}
