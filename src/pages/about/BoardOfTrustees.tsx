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
  id: string;
  description?: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Prof. Githu Muigai",
    title: "Trustee Member",
    id: "Prof. Githu Muigai",
    image:
      "https://cms.thenairobihosp.org/uploads/Prof_Githu_Muigai_Senior_Counsel_63b852fa65.png",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Dr. Richard Baraza",
    title: "Trustee Member",
    id: "Dr. Richard Baraza",
    image:
      "https://cms.thenairobihosp.org/uploads/Dr_Richard_Baraza_Consultant_General_Surgeon_4400eb3fcb.png",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Dr. Jane Nyakang'o",
    title: "Trustee Member",
    id: "Dr. Jane Nyakang'o",
    image:
      "https://cms.thenairobihosp.org/uploads/Dr_Jane_Nyakang_o_Environmental_and_Social_Safeguards_Specialist_f5801dcbe5.png",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Mrs. Cecilia Ngalyuka",
    title: "Trustee Member",
    id: "Mrs. Cecilia Ngalyuka",
    image: "https://cms.thenairobihosp.org/uploads/gladwell_bcb00de3c7.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Dr. Meshach Ong'uti",
    title: "Trustee Member",
    id: "Dr. Meshach Ong'uti",
    image:
      "https://cms.thenairobihosp.org/uploads/Dr_Meshach_Onguti_Consultant_Specialist_Reconstructive_Maxillofacial_and_Craniofacial_Surgeon_82ee2f698a.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Prof. Donald Orinda",
    title: "Trustee Member",
    id: "Prof. Donald Orinda",
    image:
      "https://cms.thenairobihosp.org/uploads/Prof_Donald_Orinda_Professor_of_Clinical_and_Chemical_Pathology_e7c18d2780.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
];

const BoardOfTrustees: FC<TeamPageProps> = () => {
  return (
    <>
      <Navbar />
      {/* <NavigationTabs /> */}
      <TeamPage
        title="Board of Trustees"
        description=""
        members={teamMembers}
      />
      <Footer />
    </>
  );
};

export default BoardOfTrustees;
