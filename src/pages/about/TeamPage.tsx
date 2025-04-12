import React from "react";

type TeamPageProps = {
    title: string;
    description: string;
    members: TeamMember[];
  };

type TeamMember = {
  name: string;
  title: string;
  image: string;
};

// layout for the whole page
const TeamPage: React.FC<TeamPageProps> = ({title, description, members}) => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <hr />
        <p className="text-gray-600 mb-10 mt-4">{description} </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

//layout for cards
const TeamCard: React.FC<TeamMember> = ({ name, title, image }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-4">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{title}</p>
    </div>
  );

export default TeamPage;
