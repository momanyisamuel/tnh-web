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
      name: "Dr. Barcley Onyambu",
      title: "Chairman of the Board of Management",
      image: "https://cms.thenairobihosp.org/uploads/4_Dr_Barcley_Onyambu_Board_Member_49cf114418.jpg",
    },
    {
      name: "Mr. Samson Mbuthia Kinyanjui",
      title: "Vice Chairman of the Board of Management",
      image: "https://cms.thenairobihosp.org/uploads/9_Mr_Samson_Kinyanjui_Board_Member_ded7ccd788.jpg",
    },
    {
      name: "Dr. Magdalene Muthoka, PhD",
      title: "Board Member",
      image: "https://cms.thenairobihosp.org/uploads/3_Dr_Magdalene_Muthoka_Ph_D_Board_Member_d0770f31e5.jpg",
    },
    {
      name: "Dr. Fred Kambuni, MBS",
      title: "Chairman, Medical Advisory Committee",
      image: "https://cms.thenairobihosp.org/uploads/7_Dr_Fred_Kambuni_MBS_Board_Member_27c105a3de.jpg",
    },
    {
      name: "Dr. Mbira Gikonyo",
      title: "Vice Chairman, Medical Advisory Committee",
      image: "https://cms.thenairobihosp.org/uploads/Dr_Mbira_Gikonyo_8ccc6c9562.jpg",
    },
    {
      name: "Prof. Herman Manyora",
      title: "Board Member",
      image: "https://cms.thenairobihosp.org/uploads/8_Prof_Herman_Manyora_Board_Member_c0a468d2b4.jpg",
    },
    {
      name: "Hon. Dr. Chris M. N. Bichage, PhD",
      title: "Board Member",
      image: "https://cms.thenairobihosp.org/uploads/1_Hon_Dr_Chris_M_N_Bichage_Ph_D_Chairman_c89abc07fa.jpg",
    },
    {
      name: "Ms. Valerie Gaya",
      title: "Board Member",
      image: "https://cms.thenairobihosp.org/uploads/10_Ms_Valerie_Gaya_Board_Member_e847fa8d3d.jpg",
    },
    {
      name: "Prof. Eng. John Mwero",
      title: "Board Member",
      image: "https://cms.thenairobihosp.org/uploads/6_Prof_Eng_John_Mwero_Board_Member_890810fa51.jpg",
    },   
  ];

const BoardOfManagement: FC<TeamPageProps> = () => {
  return ( 
    <>
      <Header />
      {/* <NavigationTabs /> */}
      <TeamPage title="Board of Management"
                description="The Nairobi Hospital Board of Management is in charge of the hospital’s corporate governance and is accountable to the Kenya Hospital Association which ensures the hospital’s compliance with the law while maintaining the highest standards of corporate governance and business ethics. The board members attach great importance to the need to conduct the hospital’s business operations with integrity and in accordance with generally accepted corporate practice. They also endorse the internationally developed principles of good corporate governance.  The Nairobi Hospital Board complies with the 2/3 gender rule, with 34% female and 64% male members."
                members={teamMembers}/>
      <Footer />
    </>
  );
};

export default BoardOfManagement;
