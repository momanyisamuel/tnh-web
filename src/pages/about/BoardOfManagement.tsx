import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { FC } from "react";
import TeamPage from "./TeamPage";

type TeamPageProps = {
  title: string;
  description: string;
  members: TeamMember[];
};

type TeamMember = {
  name: string;
  title: string;
  image: string;
  id: string; // Added id property for routing
  description: string[]; // Optional property to avoid errors for other members
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dr. Barcley Onyambu",
    title: "Chairman of the Board of Management",
    id: "Dr Barcley Onyambu",
    image:
      "https://cms.thenairobihosp.org/uploads/4_Dr_Barcley_Onyambu_Board_Member_49cf114418.jpg",
      description: [
        "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
        "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
        "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
        "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
        "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
      ],
  },
  {
    name: "Mr. Samson Mbuthia Kinyanjui",
    title: "Vice Chairman of the Board of Management",
    id: "Mr Samson Mbuthia Kinyanjui",
    image:
      "https://cms.thenairobihosp.org/uploads/9_Mr_Samson_Kinyanjui_Board_Member_ded7ccd788.jpg",
      description: [
        "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
        "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
        "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
        "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
        "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
      ],
  },
  {
    name: "Dr. Magdalene Muthoka, PhD",
    title: "Board Member",
    id: "Dr Magdalene Muthoka",
    image:
      "https://cms.thenairobihosp.org/uploads/3_Dr_Magdalene_Muthoka_Ph_D_Board_Member_d0770f31e5.jpg",
      description: [
        "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
        "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
        "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
        "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
        "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
      ],
  },
  {
    name: "Dr. Fred Kambuni, MBS",
    title: "Chairman, Medical Advisory Committee",
    id: "Dr Fred Kambuni",
    image:
      "https://cms.thenairobihosp.org/uploads/7_Dr_Fred_Kambuni_MBS_Board_Member_27c105a3de.jpg",
      description: [
        "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
        "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
        "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
        "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
        "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
      ],
  },
  {
    name: "Dr. Mbira Gikonyo",
    id: "Dr Mbira Gikonyo",
    title: "Vice Chairman, Medical Advisory Committee",
    image:
      "https://cms.thenairobihosp.org/uploads/Dr_Mbira_Gikonyo_8ccc6c9562.jpg",
      description: [
        "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
        "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
        "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
        "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
        "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
      ],
  },
  {
    name: "Prof. Herman Manyora",
    id: "Prof Herman Manyora",
    title: "Board Member",
    image:
      "https://cms.thenairobihosp.org/uploads/8_Prof_Herman_Manyora_Board_Member_c0a468d2b4.jpg",
      description: [
        "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
        "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
        "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
        "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
        "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
      ],
  },
  {
    name: "Hon. Dr. Chris M. N. Bichage, PhD",
    title: "Board Member",
    id: "Hon Dr Chris M N Bichage",
    image:
      "https://cms.thenairobihosp.org/uploads/1_Hon_Dr_Chris_M_N_Bichage_Ph_D_Chairman_c89abc07fa.jpg",
      description: [
        "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
        "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
        "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
        "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
        "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
      ],
  },
  {
    name: "Ms. Valerie Gaya",
    title: "Board Member",
    id: "Ms Valerie Gaya",
    image:
      "https://cms.thenairobihosp.org/uploads/10_Ms_Valerie_Gaya_Board_Member_e847fa8d3d.jpg",
      description: [
        "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
        "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
        "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
        "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
        "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
      ],
  },
  {
    name: "Prof. Eng. John Mwero",
    title: "Board Member",
    id: "Prof Eng John Mwero",
    image: "@assets/board images/Dr_Barcley_Onyambu_Board_Member.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
];

const BoardOfManagement: FC<TeamPageProps> = () => {
  return (
    <>
      <Navbar />
      {/* <NavigationTabs /> */}
      <TeamPage
        title="Board of Management"
        description="The Nairobi Hospital Board of Management is in charge of the hospital’s corporate governance and is accountable to the Kenya Hospital Association which ensures the hospital’s compliance with the law while maintaining the highest standards of corporate governance and business ethics. The board members attach great importance to the need to conduct the hospital’s business operations with integrity and in accordance with generally accepted corporate practice. They also endorse the internationally developed principles of good corporate governance.  The Nairobi Hospital Board complies with the 2/3 gender rule, with 34% female and 64% male members."
        members={teamMembers}
      />
      <Footer />
    </>
  );
};

export default BoardOfManagement;
