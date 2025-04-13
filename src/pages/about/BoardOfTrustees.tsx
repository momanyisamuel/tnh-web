import Footer from "@/components/footer";
import Header from "@/components/header";
import { FC } from "react";
import { NavigationTabs } from "./NavigationTabs";
import TeamPage from "./TeamPage"


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
  
const teamMembers: TeamMember[] = [
    {
      name: "Prof. Githu Muigai",
      title: "Trustee Member",
      image: "https://cms.thenairobihosp.org/uploads/Prof_Githu_Muigai_Senior_Counsel_63b852fa65.png",
    },
    {
      name: "Dr. Richard Baraza",
      title: "Trustee Member",
      image: "https://cms.thenairobihosp.org/uploads/Dr_Richard_Baraza_Consultant_General_Surgeon_4400eb3fcb.png",
    },
    {
      name: "Dr. Jane Nyakang'o",
      title: "Trustee Member",
      image: "https://cms.thenairobihosp.org/uploads/Dr_Jane_Nyakang_o_Environmental_and_Social_Safeguards_Specialist_f5801dcbe5.png",
    },
    {
      name: "Mrs. Cecilia Ngalyuka",
      title: "Trustee Member",
      image: "https://cms.thenairobihosp.org/uploads/gladwell_bcb00de3c7.jpg",
    },
    {
      name: "Dr. Meshach Ong'uti",
      title: "Trustee Member",
      image: "https://cms.thenairobihosp.org/uploads/Dr_Meshach_Onguti_Consultant_Specialist_Reconstructive_Maxillofacial_and_Craniofacial_Surgeon_82ee2f698a.jpg",
    },
    {
      name: "Prof. Donald Orinda",
      title: "Trustee Member",
      image: "https://cms.thenairobihosp.org/uploads/Prof_Donald_Orinda_Professor_of_Clinical_and_Chemical_Pathology_e7c18d2780.jpg",
    },
  ];

const BoardOfTrustees: FC<TeamPageProps> = () => {
  return ( 
    <>
      <Header />
      {/* <NavigationTabs /> */}
      <TeamPage title="Board of Trustees"
                description="The Nairobi Hospital Board of Management is in charge of the hospital’s corporate governance and is accountable to the Kenya Hospital Association which ensures the hospital’s compliance with the law while maintaining the highest standards of corporate governance and business ethics. The board members attach great importance to the need to conduct the hospital’s business operations with integrity and in accordance with generally accepted corporate practice. They also endorse the internationally developed principles of good corporate governance.  The Nairobi Hospital Board complies with the 2/3 gender rule, with 34% female and 64% male members."
                members={teamMembers}/>
      <Footer />
    </>
  );
};

export default BoardOfTrustees;
