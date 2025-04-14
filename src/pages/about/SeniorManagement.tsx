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
      name: "Mr. Felix Osano",
      title: "Ag Chief Executive Officer",
      image: "https://cms.thenairobihosp.org/uploads/Mr_Felix_Osano_Ag_CEO_b5891a43c6.jpg",
    },
    {
      name: "Mr Samuel Odede, OGW",
      title: "Director Medical Services & Research",
      image: "https://cms.thenairobihosp.org/uploads/Dr_Odede_2_b1effe5313.jpg",
    },
    {
      name: "Margret Muiyoro",
      title: "Ag Director Nursing Services",
      image: "https://cms.thenairobihosp.org/uploads/1564555500151_551663a6ed.jpg",
    },
    {
      name: "Nicodemus Odongo",
      title: "Director, Strategy & Innovation",
      image: "https://cms.thenairobihosp.org/uploads/wewewewewewe_08530ced1b.png",
    },
    {
      name: "Nicodemus Odongo",
      title: "Ag. Director Supply Chain & Distribution",
      image: "https://cms.thenairobihosp.org/uploads/wewewewewewe_08530ced1b.png",
    },
    {
      name: "William Masita",
      title: "Director, Finance",
      image: "https://cms.thenairobihosp.org/uploads/Finance_resized_431f70bc53.jpg",
    },
    {
        name: "Dr. Magdalyne Wambui Kamande",
        title: "Director, Transformation services and ICT",
        image: "https://cms.thenairobihosp.org/uploads/ICT_resized_b7588b3ff0.jpg",
      },
      {
        name: "Gilbert Nyamweya",
        title: "Company Secretary",
        image: "https://cms.thenairobihosp.org/uploads/Mr_Gilbert_Nyamweya_6b9036ce5e.jpg",
      },
      {
        name: "Dr. Margaret Sirima, PhD",
        title: "Principal College of Health Sciences",
        image: "https://cms.thenairobihosp.org/uploads/Mrs_Margret_Sirima_4f4e7d6b3c.jpg",
      },
      {
        name: "Weldon Rotich",
        title: "Head of Internal Audit & Controls",
        image: "https://cms.thenairobihosp.org/uploads/Mr_Weldon_Rotich_063fe2f2c7.jpg",
      },
      {
        name: "Antipas Nyambok",
        title:"Head of Operations",
        image: "https://cms.thenairobihosp.org/uploads/antipas_5785a30bf6.PNG",
      },
      {
        name: "Major (Rtd) Guido Aido Leariwala",
        title: "Chief Security Officer",
        image: "https://cms.thenairobihosp.org/uploads/placeholderimg_ba7e82b9c0.png",
      },
      {
        name: "Trevour Adudah",
        title: "Ag Head of Engineering",
        image: "https://cms.thenairobihosp.org/uploads/Trevour1_b2bcca5ab0.jpg",
      },
  ];

const SeniorManagement: FC<TeamPageProps> = () => {
  return ( 
    <>
      <Header />
      {/* <NavigationTabs /> */}
      <TeamPage title="Senior Management Team"
                description=""
                members={teamMembers}/>
      <Footer />
    </>
  );
};

export default SeniorManagement;
