import React from 'react';
import TeamGrid from '../components/TeamGrid';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to Arth</h1>
        <p className="text-lg mb-6">
          At Arth, we're passionate about coffee. It's more than just a beverage to us; it's a way of life. Our journey began with a simple love for the rich aromas and complex flavors of freshly brewed coffee, and it has since grown into a thriving coffee community dedicated to sharing that love with others.
        </p>
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-lg mb-6">
          Founded in 2024, Arth started as a small coffee roastery with big dreams. Over the years, we've honed our craft, experimenting with different beans, blends, and brewing methods to create the perfect cup of coffee. Each step of our journey has been guided by a commitment to quality, sustainability, and the pursuit of excellence.
        </p>
        <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg mb-6">
          Behind every great cup of coffee is a passionate team of individuals dedicated to their craft. From our expert roasters to our friendly baristas, everyone at Arth shares a deep love for coffee and a commitment to delivering the best possible experience to our customers.
        </p>
        <TeamGrid/>
      </div>
    </div>
  );
}

export default About;
