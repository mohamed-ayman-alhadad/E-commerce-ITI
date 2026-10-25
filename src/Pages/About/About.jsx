import { Link } from "react-router-dom";
import rightSide from "../../assets/Images/rightSide.png";
import services from "../../assets/Images/Services.png";
import delivery from "../../assets/Images/Services (1).png";
import support from "../../assets/Images/headphone.png";

function About() {
  return (
    <div className="page-container py-10">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
        <Link to="/" className="text-inherit no-underline hover:underline">Home</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-gray-900">About</span>
      </nav>

      <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16" aria-labelledby="story-title">
        <div>
          <p className="eyebrow mb-2">Our story</p>
          <h1 id="story-title" className="max-w-lg text-4xl font-semibold tracking-tight sm:text-5xl">
            Shopping should feel simple, personal, and worth the visit.
          </h1>
          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            Exclusive brings a broad range of everyday products together in one place. Browse at your own pace, discover something new, and find the details you need before you decide.
          </p>
          <Link to="/products" className="primary-action mt-4">Explore the collection</Link>
        </div>
        <img src={rightSide} alt="Shoppers discovering products together" className="w-full rounded-lg object-cover" />
      </section>

      <section className="mt-14 border-y border-gray-200 py-10" aria-labelledby="experience-title">
        <p className="eyebrow mb-2">The experience</p>
        <h2 id="experience-title" className="section-heading">Made to make shopping easier</h2>
        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { image: services, title: "A considered selection", description: "Browse a range of products organized to make discovery straightforward." },
            { image: delivery, title: "Delivery information", description: "Review the available delivery details as you move through checkout." },
            { image: support, title: "Contact", description: "The contact form is visible, but message sending is not connected yet." },
          ].map((item) => (
            <article key={item.title} className="rounded-lg border border-gray-200 p-5">
              <img src={item.image} alt="" className="mb-4 h-12 w-12 object-contain" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mb-0 mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;
