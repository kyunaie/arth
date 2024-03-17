import React from "react";

const members = [
    {
      imgURL: "https://source.unsplash.com/150x150/?person",
      name: "John Doe",
      skill: "Master Barista",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?portrait",
      name: "Jane Smith",
      skill: "Coffee Roasting Specialist",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?face",
      name: "Alex Johnson",
      skill: "Espresso Artisan",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?people",
      name: "Emily Brown",
      skill: "Latte Art Expert",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?woman",
      name: "Sarah Williams",
      skill: "Cappuccino Connoisseur",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?man",
      name: "Michael Jones",
      skill: "Mocha Maestro",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?portrait,smile",
      name: "Olivia Garcia",
      skill: "Pour Over Perfectionist",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?person,closeup",
      name: "William Brown",
      skill: "Cold Brew Specialist",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?portrait,headshot",
      name: "Emma Davis",
      skill: "Aeropress Artist",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?portrait,professional",
      name: "Daniel Wilson",
      skill: "Chemex Champion",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?person,portrait",
      name: "Sophia Lee",
      skill: "French Press Aficionado",
    },
    {
      imgURL: "https://source.unsplash.com/150x150/?portrait,portrait",
      name: "James Martinez",
      skill: "V60 Virtuoso",
    }
  ];
  

function TeamGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 m-6">
      {members.map((member) => (
        <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={member.imgURL} alt={member.name} className="w-full h-auto rounded-full mb-4" />
      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
      <p className="text-gray-600">{member.skill}</p>
    </div>
      ))}
    </div>
  );
}

export default TeamGrid;
