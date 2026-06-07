"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  audienceServiceCatalog,
  ServiceCategory,
  serviceCategories,
} from "@/lib/service-catalog";

const reviews = [
  {
    name: "Ananya S.",
    text:
      "I went for laser hair reduction and the team explained every step before starting. Sessions were comfortable and I could see visible reduction after a few visits.",
    rating: "5.0",
  },
  {
    name: "Megha R.",
    text:
      "Hydrafacial and BB Glow were done very neatly and my skin looked fresh without feeling heavy. They gave simple aftercare that was easy to follow.",
    rating: "4.9",
  },
  {
    name: "Ritika M.",
    text:
      "I appreciated that consultation was honest and they did not push unnecessary services. The plan was practical for my budget and timeline.",
    rating: "5.0",
  },
  {
    name: "Pooja K.",
    text:
      "I started with acne scar sessions and noticed smoother texture over time. Staff is polite, punctual, and very patient with questions.",
    rating: "4.9",
  },
];


export default function Home() {
  const [audience] = useState(audienceServiceCatalog);
  const [categories] = useState<ServiceCategory[]>(serviceCategories);

  const audienceImageByService: Record<string, string> = {
    "laser hair reduction": "/images/laserhairreduction.png",
    "aloe laser reduction": "/images/aleolaserreduction.png",
    "carbon laser peel": "/images/carbonlaserpeel.png",
    "acne scar laser": "/images/acnescarlaser.png",
    "laser skin resurfacing": "/images/laserskinresurfacing.png",
    hifu: "/images/hifu.png",
  };

  const audienceTiles = useMemo(() => {
    const categoryList = audience.women;
    return categoryList
      .flatMap((category) =>
        category.services.map((service) => ({
          ...service,
          id: `${category.categoryName}-${service.serviceName}`,
        }))
      )
      .slice(0, 6);
  }, [audience]);

  const extraFocusCards = useMemo(() => {
    const skinCategory = audience.women.find((category) => category.categoryName === "Skin");
    if (!skinCategory) {
      return [];
    }

    const wanted = [
      "Micro Needling",
      "BB Glow",
      "Mole Removal",
      "Hydrafacial",
    ];

    return wanted
      .map((name) => skinCategory.services.find((service) => service.serviceName === name))
      .filter((service): service is NonNullable<typeof service> => Boolean(service));
  }, [audience]);

  const skinImageByService: Record<string, string> = {
    "micro needling": "/images/microneedling.png",
    "bb glow": "/images/bbglow.png",
    "mole removal": "/images/moleremoval.png",
    hydrafacial: "/images/hydrafacial.png",
  };

  const focusImageClassByService: Record<string, string> = {
    "carbon laser peel": "scale-[1.35] object-center",
    "bb glow": "scale-[4.6] object-[50%_46%]",
    "mole removal": "scale-[4.8] object-[52%_45%]",
  };

  const focusCards = useMemo(() => {
    return [
      ...audienceTiles,
      ...extraFocusCards.map((service) => ({
        ...service,
        id: `Skin-${service.serviceName}`,
      })),
    ];
  }, [audienceTiles, extraFocusCards]);

  const portfolioCategories = useMemo(() => {
    const wanted = new Set(["Laser", "Skin", "Regrowth", "Wellness", "Packages"]);
    return categories.filter((category) => wanted.has(category.categoryName));
  }, [categories]);

  const portfolioCategoryImageByName: Record<string, string> = {
    Laser: "/images/laser.png",
    Skin: "/images/skinimg.png",
    Regrowth: "/images/regrowth.png",
    Wellness: "/images/wellness.png",
    Packages: "/images/package.png",
  };

  const serviceDetailByName: Record<string, { what: string; who: string }> = {
    "Laser Hair Reduction": {
      what:
        "A laser-based method that gradually weakens hair follicles to reduce regrowth over sessions. It helps make skin feel smoother with less frequent shaving or waxing.",
      who:
        "Best for clients with unwanted body or facial hair who want long-term reduction. Great for people who get irritation, bumps, or ingrown hair from regular hair removal.",
    },
    "Aloe Laser Reduction": {
      what:
        "A comfort-focused laser protocol with soothing support during treatment. It is designed to deliver hair reduction while keeping sessions gentle on sensitive skin.",
      who:
        "Ideal for first-time laser clients or those with low pain tolerance. Useful for people who want a calmer treatment feel without compromising consistency.",
    },
    "Carbon Laser Peel": {
      what:
        "A laser-assisted peel that targets dullness, excess oil, and rough texture. It helps refresh skin tone and gives a cleaner, brighter look over repeated sessions.",
      who:
        "Suitable for clients with oily skin, enlarged pores, or uneven texture. Good for anyone wanting a quick glow-up before events with minimal downtime.",
    },
    "Acne Scar Laser": {
      what:
        "A targeted laser resurfacing approach that works on scar depth and irregular texture. It supports collagen remodeling to gradually smooth post-acne marks.",
      who:
        "Recommended for clients with old acne scars and uneven skin surface. Helpful for those seeking visible texture improvement through a planned treatment cycle.",
    },
    "Laser Skin Resurfacing": {
      what:
        "A precision laser treatment that refines rough skin layers and improves tone. It promotes renewal for a smoother appearance and better light reflection on skin.",
      who:
        "Great for clients with texture concerns, fine lines, or sun-damaged skin. Best for people ready to follow aftercare for stronger long-term skin quality.",
    },
    HIFU: {
      what:
        "A non-surgical ultrasound-based tightening treatment that supports deeper tissue lift. It helps improve firmness and contour gradually over the following weeks.",
      who:
        "Ideal for clients noticing mild skin laxity around jawline, cheeks, or neck. Good for people wanting lifting support without injectables or surgery.",
    },
    Toning: {
      what:
        "A clarity-focused skin treatment to improve brightness and reduce unevenness. It supports a more balanced complexion with regular sessions and maintenance.",
      who:
        "Suitable for clients with tan, patchy tone, or dull skin. Best for people wanting steady glow improvement rather than one-time temporary results.",
    },
    "Micro Needling": {
      what:
        "A collagen-stimulating treatment using controlled micro-channels to improve texture. It helps skin recover smoother and firmer with progressive sessions.",
      who:
        "Recommended for clients with open pores, mild acne marks, or uneven texture. Ideal for people who prefer natural collagen-based skin improvement.",
    },
    "Micro Needling + PRP": {
      what:
        "An advanced version of microneedling combined with PRP for stronger repair support. It can improve healing response and enhance overall skin quality gains.",
      who:
        "Best for clients wanting deeper rejuvenation than basic needling alone. Good for texture, early aging signs, and post-acne recovery plans.",
    },
    "Mole Removal": {
      what:
        "A clinic-led procedure to remove selected benign moles with proper assessment. The approach focuses on safety, precision, and cleaner cosmetic outcome.",
      who:
        "Suitable for clients with cosmetically unwanted benign moles after evaluation. Ideal for those seeking a medically guided removal instead of home methods.",
    },
    "Stretch Mark Removal": {
      what:
        "A texture-correction protocol that works on stretch mark visibility and skin quality. It aims to blend contrast and improve smoothness over multiple sessions.",
      who:
        "Helpful for clients with stretch marks after weight changes or pregnancy. Best for those expecting gradual improvement rather than instant complete removal.",
    },
    "Warts Removal": {
      what:
        "A medical removal service for warts using safe, clinic-based techniques. It is planned to clear lesions while protecting surrounding healthy skin.",
      who:
        "Recommended for clients with persistent or spreading warts. Ideal for anyone wanting hygienic treatment and lower recurrence risk with guidance.",
    },
    "Chemical Peels": {
      what:
        "A controlled exfoliation treatment that removes damaged surface layers for fresher skin. It supports brighter tone, smoother texture, and cleaner pore appearance.",
      who:
        "Great for clients with dullness, tanning, mild pigmentation, or rough skin. Suitable for people who can follow sun protection and post-peel care.",
    },
    "Yellow Peel": {
      what:
        "A targeted brightening peel designed for stubborn dullness and uneven complexion. It helps improve skin clarity while supporting a more even overall tone.",
      who:
        "Best for clients with pigmentation-prone or tired-looking skin. Useful for those seeking deeper brightening under professional supervision.",
    },
    Hydrafacial: {
      what:
        "A multi-step cleansing, extraction, and hydration facial for instant freshness. It improves skin comfort, glow, and smoothness with minimal downtime.",
      who:
        "Suitable for almost all skin types including sensitive event-prep clients. Perfect for people who want quick visible radiance and hydration boost.",
    },
    "BB Glow": {
      what:
        "A tone-refining glow treatment that improves skin luminosity and soft-focus finish. It helps skin look fresher and more camera-ready with repeated sessions.",
      who:
        "Ideal for clients seeking dewy, even-looking skin for social events or content. Good for those who want glow enhancement without heavy makeup dependence.",
    },
    "Anti Ageing": {
      what:
        "A skin-support program focused on firmness, texture, and early line management. It combines clinic care and maintenance planning for healthier aging skin.",
      who:
        "Recommended for clients noticing dullness, fine lines, or loss of elasticity. Best for people wanting prevention and gradual correction together.",
    },
    "Face Tightening": {
      what:
        "A firmness-focused facial treatment to improve contour definition and skin hold. It supports a lifted look through collagen-friendly stimulation methods.",
      who:
        "Suitable for clients with mild sagging around cheeks or jawline. Great for people wanting non-surgical tightening support over time.",
    },
    "QR678 Treatment": {
      what:
        "A growth-factor based scalp protocol designed to support healthier hair cycles. It helps improve root environment for stronger and fuller-looking hair.",
      who:
        "Best for clients with thinning patterns or early hair fall concerns. Ideal for those seeking a medically guided non-surgical regrowth plan.",
    },
    "Hair PRP": {
      what:
        "A platelet-rich plasma scalp therapy using your own growth factors for support. It helps nourish follicles and can improve thickness over scheduled sessions.",
      who:
        "Recommended for clients with diffuse hair fall or reduced density. Great for people committed to repeat sessions and follow-up scalp care.",
    },
    "Hair GFC": {
      what:
        "A concentrated growth factor treatment focused on scalp revitalization and root health. It supports better hair quality and stronger strand development.",
      who:
        "Suitable for clients with weak roots, shedding, or reduced volume. Useful for those wanting advanced injectable regrowth support.",
    },
    "Face PRP": {
      what:
        "A regenerative facial procedure using PRP to improve texture and vitality. It supports collagen activity and overall skin quality over multiple sessions.",
      who:
        "Best for clients wanting natural rejuvenation for dull or tired skin. Good for those preferring bio-based treatments over synthetic fillers.",
    },
    "Face GFC": {
      what:
        "A growth factor facial therapy aimed at repair, firmness, and smooth texture. It helps improve skin resilience and a healthier overall appearance.",
      who:
        "Recommended for clients with early aging changes or post-stress skin fatigue. Ideal for people seeking structured regenerative facial care.",
    },
    "Glutathione IV": {
      what:
        "An intravenous wellness support treatment used for recovery and brightening goals. It is administered in a monitored setting with personalized planning.",
      who:
        "Suitable for clients looking for supervised wellness add-ons in their routine. Best for those who value medical oversight and realistic expectation setting.",
    },
    "Bridal Package": {
      what:
        "A customized pre-bridal roadmap combining skin and grooming sessions by timeline. It is structured in phases to improve readiness without last-minute stress.",
      who:
        "Perfect for brides who want planned results before key events and functions. Also useful for clients needing coordinated care for photos and ceremonies.",
    },
  };

  return (
    <main className="pb-24">
      <section className="section-shell pt-8 sm:pt-12">
        <div className="glass card-shadow fade-up curve-panel relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-14">
          <div className="curve-wave" aria-hidden="true" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(180,83,109,0.22),_transparent_65%)]" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(15,118,110,0.18),_transparent_65%)]" />

          <div className="relative z-10 mb-10 border-b border-[#d2e3de] pb-6">
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div>
                <p className="brand-mark text-3xl sm:text-4xl">Glowo Aesthetics</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#0f766e]">
                  Skin Hair Laser Body
                </p>
              </div>
              <nav className="flex flex-wrap gap-2 text-sm font-semibold text-[#2b3d40]">
                <a className="rounded-full bg-white/70 px-4 py-2 hover:bg-white" href="#about">
                  About
                </a>
                <a className="rounded-full bg-white/70 px-4 py-2 hover:bg-white" href="#audience">
                  Most Taken
                </a>
                <a className="rounded-full bg-white/70 px-4 py-2 hover:bg-white" href="#services">
                  Services
                </a>
                <a className="rounded-full bg-white/70 px-4 py-2 hover:bg-white" href="#booking">
                  Booking
                </a>
                <a className="rounded-full bg-white/70 px-4 py-2 hover:bg-white" href="#reviews">
                  Reviews
                </a>
              </nav>
            </div>
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl leading-tight text-[#1b2a2d] sm:text-5xl lg:text-6xl">
                Become the best version of yourself, gently.
              </h1>
              <p className="max-w-xl text-base leading-7 text-[#4d5a5d] sm:text-lg">
                Beauty should feel freeing, not stressful. We design skin, hair, laser and body
                care plans that celebrate your natural features while helping you feel confident
                every day.
              </p>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">
                Hair. Skin. Laser. Body positivity, always.
              </p>
              <a
                href="#services"
                className="inline-flex rounded-full border border-[#1f2a2c33] bg-white/70 px-6 py-3 text-sm font-semibold text-[#1f2a2c] transition hover:bg-white"
              >
                Explore Services
              </a>
            </div>

            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/glowoaesthetic.png"
                  alt="Glowo Aesthetics hero"
                  width={1200}
                  height={800}
                  className="h-[340px] w-full object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-2xl bg-white p-3">
                  <p className="text-2xl font-semibold text-[#0f766e]">{audienceTiles.length}+</p>
                  <p className="text-[#5b6769]">Most Chosen</p>
                </div>
                <div className="rounded-2xl bg-white p-3">
                  <p className="text-2xl font-semibold text-[#0f766e]">{categories.length}</p>
                  <p className="text-[#5b6769]">Care Categories</p>
                </div>
                <div className="rounded-2xl bg-white p-3">
                  <p className="text-2xl font-semibold text-[#0f766e]">Premium</p>
                  <p className="text-[#5b6769]">Clinic Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-16" id="about">
        <div className="glass card-shadow rounded-3xl p-6 sm:p-8">
          <span className="pill">About</span>
          <h2 className="mt-3 text-3xl text-[#1f2a2c] sm:text-4xl">Why clients choose Glowo</h2>
          <div className="mt-3 max-w-3xl space-y-3 text-[#5d696b]">
            <p>
              At Glowo, we combine modern clinical techniques with warm, personalized guidance so
              every client feels heard, informed, and confident at every step.
            </p>
            <p>
              Your treatment plan is built around your skin goals, comfort level, and timeline,
              with practical recommendations that focus on visible, natural-looking progress.
            </p>
            <p>
              We believe aesthetics should enhance your confidence, not create pressure. That is
              why we focus on honest consultations, realistic outcomes, and long-term skin and hair
              health you can truly sustain.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell mt-16" id="audience">
        <div className="glass card-shadow overflow-hidden rounded-3xl">
          <div className="border-b border-[#d2e0df] px-6 py-6 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="pill">Most Taken Services</span>
                <h2 className="mt-3 text-3xl text-[#1b2a2d] sm:text-4xl">Popular Focus Areas</h2>
              </div>
            </div>
          </div>

          <div className="space-y-5 p-6 sm:p-8">
            <h3 className="text-4xl leading-tight text-[#12383c]">Most Chosen Treatments</h3>
            <p className="text-base font-semibold text-[#0f766e]">Trusted by regular clients</p>
            <p className="text-[#4d5e61]">
              A quick snapshot of the services clients book most often for visible, reliable
              results.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {focusCards.map((service) => {
                const serviceKey = service.serviceName.toLowerCase();

                return (
                  <article key={service.id} className="rounded-2xl border border-[#d6e1dd] bg-white p-2">
                    <div className="h-24 w-full overflow-hidden rounded-xl bg-[#e7ece9]">
                      <Image
                        src={
                          audienceImageByService[serviceKey] ??
                          skinImageByService[serviceKey] ??
                          service.imagePath
                        }
                        alt={service.serviceName}
                        width={500}
                        height={500}
                        className={`h-full w-full rounded-xl object-cover ${
                          focusImageClassByService[serviceKey] ?? ""
                        }`}
                      />
                    </div>
                    <p className="mt-2 text-xs font-semibold text-[#243437]">{service.serviceName}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-16" id="services">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="pill">Treatments</span>
            <h2 className="mt-3 text-3xl text-[#1b2a2d] sm:text-4xl">Service Portfolio</h2>
          </div>
        </div>

        <div className="space-y-6">
          {portfolioCategories.map((category) => (
            <div key={category.categoryName} className="glass card-shadow rounded-3xl p-5 sm:p-6">
              <div className="mb-4 grid gap-4 sm:grid-cols-[220px_1fr] sm:items-center">
                <Image
                  src={portfolioCategoryImageByName[category.categoryName] ?? category.categoryImagePath}
                  alt={category.categoryName}
                  width={1200}
                  height={700}
                  className="h-28 w-full rounded-2xl object-cover object-center"
                />
                <div>
                  <h3 className="text-2xl text-[#1f2a2c]">{category.categoryName}</h3>
                  <p className="text-sm text-[#596669]">{category.categoryDescription}</p>
                </div>
              </div>

              <div className="space-y-3">
                {category.services.map((service) => (
                  <details
                    key={`${category.categoryName}-${service.serviceName}`}
                    className="rounded-2xl border border-[#d9e3df] bg-white p-4"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-[#233438]">
                      {service.serviceName}
                    </summary>
                    <div className="mt-2 space-y-2 text-sm text-[#5f6a6d]">
                      <p>
                        <span className="font-semibold text-[#3f4f52]">What it is:</span>{" "}
                        {(serviceDetailByName[service.serviceName]?.what ?? service.description)}
                      </p>
                      <p>
                        <span className="font-semibold text-[#3f4f52]">Who should take it:</span>{" "}
                        {(serviceDetailByName[service.serviceName]?.who ??
                          "Suitable for clients looking for guided, clinic-based treatment based on their goals.")}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell mt-16" id="reviews">
        <div className="mb-6">
          <span className="pill">Reviews</span>
          <h3 className="mt-3 text-3xl text-[#1f2a2c] sm:text-4xl">What clients say</h3>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <article key={review.name} className="glass card-shadow rounded-3xl p-5">
              <p className="text-sm leading-7 text-[#455457]">&quot;{review.text}&quot;</p>
              <p className="mt-4 font-semibold text-[#1d2b2f]">{review.name}</p>
              <p className="text-sm text-[#0f766e]">{review.rating} / 5</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-16" id="booking">
        <div className="glass card-shadow rounded-3xl p-6 sm:p-8">
          <span className="pill">Booking</span>
          <h3 className="mt-3 text-3xl text-[#1f2a2c] sm:text-4xl">Book your appointment</h3>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#d8e5e0] bg-white/60 p-5 sm:p-6">
              <p className="text-lg font-semibold text-[#243437]">For booking, please contact</p>
              <p className="mt-2 text-sm leading-7 text-[#405154] sm:text-base">
                Phone: +917317637755 (10:00 AM to 7:00 PM)
              </p>
              <p className="text-sm leading-7 text-[#405154] sm:text-base">
                You can message us on WhatsApp or Instagram, or walk in directly.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://wa.me/917317637755?text=Hi%20Glowo%20Aesthetics%2C%20I%20want%20to%20book%20an%20appointment."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full border border-[#0f766e33] bg-white px-4 py-2 text-sm font-semibold text-[#0f766e] hover:bg-[#eff8f5]"
                >
                  WhatsApp: Book Directly
                </a>
                <a
                  href="tel:+917317637755"
                  className="inline-block rounded-full border border-[#1f2a2c22] bg-white px-4 py-2 text-sm font-semibold text-[#1f2a2c] hover:bg-[#f8fbfa]"
                >
                  Call Now
                </a>
              </div>

              <a
                href="https://www.instagram.com/_glowoaesthetics?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm font-medium text-[#2e4144] hover:text-[#0f766e]"
              >
                Instagram: _glowoaesthetics
              </a>
            </div>

            <div className="rounded-2xl border border-[#d8e5e0] bg-white/60 p-5 sm:p-6">
              <p className="text-lg font-semibold text-[#243437]">Visit us</p>
              <p className="mt-2 text-sm leading-7 text-[#405154] sm:text-base">
                93/1 Hosur Main road, Kudlu Gate, Singasandra post, Bangalore 560068
              </p>
              <p className="text-sm leading-7 text-[#405154] sm:text-base">
                Next to SBI Bank Singasandra Branch
              </p>
              <p className="mt-2 text-sm font-medium text-[#2f4447]">Walk-ins are welcome.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="section-shell mt-16">
        <div className="glass card-shadow rounded-3xl px-6 py-8 sm:px-8">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <p className="text-2xl text-[#1f2a2c]">Glowo Aesthetics</p>
              <p className="mt-2 max-w-md text-sm text-[#5a686b]">
                Helping every client look refreshed, feel confident, and grow into their best
                version with science-led, compassionate care.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <a
                href="#services"
                className="rounded-xl border border-[#d7e3de] bg-white px-3 py-2 text-center font-medium text-[#34484b] hover:border-[#0f766e55] hover:text-[#0f766e]"
              >
                Services
              </a>
              <a
                href="#about"
                className="rounded-xl border border-[#d7e3de] bg-white px-3 py-2 text-center font-medium text-[#34484b] hover:border-[#0f766e55] hover:text-[#0f766e]"
              >
                About
              </a>
              <a
                href="#booking"
                className="rounded-xl border border-[#d7e3de] bg-white px-3 py-2 text-center font-medium text-[#34484b] hover:border-[#0f766e55] hover:text-[#0f766e]"
              >
                Booking
              </a>
              <a
                href="#reviews"
                className="rounded-xl border border-[#d7e3de] bg-white px-3 py-2 text-center font-medium text-[#34484b] hover:border-[#0f766e55] hover:text-[#0f766e]"
              >
                Reviews
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
