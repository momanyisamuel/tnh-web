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
  id: string;
  title: string;
  image: string;
  description: string[];
};

export const teamMembers: TeamMember[] = [
  {
    name: "Mr. Felix Osano",
    id: "felix-osano",
    title: "Ag Chief Executive Officer",
    image:
      "https://cms.thenairobihosp.org/uploads/Mr_Felix_Osano_Ag_CEO_b5891a43c6.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },

  {
    name: "Mr Samuel Odede, OGW",
    id: "samuel-odede",
    title: "Director Medical Services & Research",
    image: "https://cms.thenairobihosp.org/uploads/Dr_Odede_2_b1effe5313.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Margret Muiyoro",
    id: "Margret-Muiyoro",
    title: "Ag Director Nursing Services",
    image:
      "https://cms.thenairobihosp.org/uploads/1564555500151_551663a6ed.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Nicodemus Odongo",
    id: "Nicodemus-Odongo",
    title: "Director, Strategy & Innovation",
    image: "https://cms.thenairobihosp.org/uploads/wewewewewewe_08530ced1b.png",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Nicodemus Odongo",
    id: "Nicodemus-Odongo",
    title: "Ag. Director Supply Chain & Distribution",
    image: "https://cms.thenairobihosp.org/uploads/wewewewewewe_08530ced1b.png",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "William Masita",
    id: "William-Masita",
    title: "Director, Finance",
    image:
      "https://cms.thenairobihosp.org/uploads/Finance_resized_431f70bc53.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Dr. Magdalyne Wambui Kamande",
    id: "Dr-Magdalyne-Wambui-Kamande",
    title: "Director, Transformation services and ICT",
    image: "https://cms.thenairobihosp.org/uploads/ICT_resized_b7588b3ff0.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Gilbert Nyamweya",
    id: "Gilbert-Nyamweya",
    title: "Company Secretary",
    image:
      "https://cms.thenairobihosp.org/uploads/Mr_Gilbert_Nyamweya_6b9036ce5e.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Dr. Margaret Sirima, PhD",
    id: "Dr.Margaret-Sirima",
    title: "Principal College of Health Sciences",
    image:
      "https://cms.thenairobihosp.org/uploads/Mrs_Margret_Sirima_4f4e7d6b3c.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Weldon Rotich",
    id: "Weldon-Rotich",
    title: "Head of Internal Audit & Controls",
    image:
      "https://cms.thenairobihosp.org/uploads/Mr_Weldon_Rotich_063fe2f2c7.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Antipas Nyambok",
    id: "Antipas-Nyambok",
    title: "Head of Operations",
    image: "https://cms.thenairobihosp.org/uploads/antipas_5785a30bf6.PNG",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Major (Rtd) Guido Aido Leariwala",
    id: "Major-Rtd-Guido-Aido-Leariwala",
    title: "Chief Security Officer",
    image:
      "https://cms.thenairobihosp.org/uploads/placeholderimg_ba7e82b9c0.png",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
  {
    name: "Trevour Adudah",
    id: "Trevour-Adudah",
    title: "Ag Head of Engineering",
    image: "https://cms.thenairobihosp.org/uploads/Trevour1_b2bcca5ab0.jpg",
    description: [
      "Psychologists play a crucial role in promoting mental health, understanding human behavior, and contributing to various fields, including healthcare, education, business, and research. They work to enhance the well-being of individuals and communities through their expertise in psychology.",
      "Throughout her illustrious career, Emily Smith has specialized in cognitive-behavioral therapy (CBT) and has been a trailblazer in developing innovative therapeutic approaches. Her research, published in leading psychology journals, focuses on the intersection of technology and mental health, exploring how digital tools can enhance therapeutic interventions.",
      "As a compassionate advocate for mental health awareness, Emily Smith actively contributes to community outreach programs, conducting workshops on stress management, resilience, and the importance of seeking psychological support. Her commitment to destigmatizing mental health has made her a sought-after speaker at conferences and events.",
      "Emily Smith serves as the head of the Psychology Department at Unity Wellness Center, where she leads a team of dedicated professionals in providing comprehensive mental health services. Her client-centered approach emphasizes empathy, collaboration, and evidence-based practices to empower individuals on their journey to psychological well-being.",
      "Beyond her clinical work, Emily Smith is a dedicated mentor, guiding aspiring psychologists and contributing to the next generation of mental health professionals. Her vision extends to leveraging technology to make mental health resources more accessible to diverse populations, ultimately striving for a world where mental health is prioritized and supported.",
    ],
  },
];

const SeniorManagement: FC<TeamPageProps> = () => {
  return (
    <>
      <Navbar />
      {/* <NavigationTabs /> */}
      <TeamPage
        title="Senior Management Team"
        description=""
        members={teamMembers}
      />
      <Footer />
    </>
  );
};

export default SeniorManagement;
