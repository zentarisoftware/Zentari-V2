"use client";
import React from "react";
import Nav from "../Components/Layout/Nav";
import ContactHero from "../Components/Contact/ContactHero";
import ContactForm from "../Components/Contact/ContactForm";
import ContactInfo from "../Components/Contact/ContactInfo";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />
      <ContactHero />

      <section className="pb-32" data-scroll-section>
        <div className="container px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Column: Form (Dominant) */}
            <div className="w-full lg:w-2/3">
              <ContactForm />
            </div>

            {/* Right Column: Info (Side Content) */}
            <div className="w-full lg:w-1/3">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
