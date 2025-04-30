import React from "react";
import { Link } from "react-router";
import { Link } from "react-router";

type TeamPageProps = {
  title: string;
  description: string;
  members: TeamMember[];
};

type TeamMember = {
  name: string;
  id?: string;
  title: string;
  image: string;
  id?: string;
};

// layout for the whole page
const TeamPage: React.FC<TeamPageProps> = ({ title, description, members }) => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-red-900 mb-2">{title}</h2>
        <hr className=" h-1 bg-red-900 rounded-full mb-6" />
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
const TeamCard: React.FC<TeamMember> = ({ name, title, id, image }) => (
  <div className="bg-grey-300 rounded-lg overflow-hidden text-center p-3">
    <Link to={`/member-page/${id}`}>
      <img
        src={image}
        alt={name}
        className="w-70 h-70 shadow-md mx-auto p-4 object-cover rounded-lg mb-4 hover:scale-[1.02] hover:-translate-y-1 transition-transform"
      />
      <h3 className="mt-4 font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500">{title}</p>
    </Link>
  </div>
);

export default TeamPage;
