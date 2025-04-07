import React, { useState, useRef } from "react";

export const NavigationTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("about");

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);
  const boardRef = useRef<HTMLDivElement | null>(null);
  const trusteesRef = useRef<HTMLDivElement | null>(null);
  const managementRef = useRef<HTMLDivElement | null>(null);
  const accreditationRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleTabClick = (
    tab: string,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    setActiveTab(tab); // Set the active tab
    scrollToSection(ref); // Scroll to the section
  };

  return (
    <div className="container mx-auto px-4 py-4">
      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-200">
        <TabItem
          title="About Us"
          onClick={() => handleTabClick("about", aboutRef)}
        />
        <TabItem
          title="History"
          onClick={() => handleTabClick("history", historyRef)}
        />
        <TabItem
          title="Board of Management"
          onClick={() => handleTabClick("board", boardRef)}
        />
        <TabItem
          title="Board of Trustees"
          onClick={() => handleTabClick("trustees", trusteesRef)}
        />
        <TabItem
          title="Senior Management Team"
          onClick={() => handleTabClick("management", managementRef)}
        />
        <TabItem
          title="Accreditation & Certification"
          onClick={() => handleTabClick("accreditation", accreditationRef)}
        />
      </div>

      {/* Sections */}
      <div className="mt-6 space-y-16">
        {activeTab === "about" && (
          <Section
            ref={aboutRef}
            title="About Us"
            content="Details about us..."
          />
        )}
        {activeTab === "history" && (
          <Section ref={historyRef} title="History" content="Our history..." />
        )}
        {activeTab === "board" && (
          <Section
            ref={boardRef}
            title="Board of Management"
            content="Meet our board..."
          />
        )}
        {activeTab === "trustees" && (
          <Section
            ref={trusteesRef}
            title="Board of Trustees"
            content="Our trustees..."
          />
        )}
        {activeTab === "management" && (
          <Section
            ref={managementRef}
            title="Senior Management Team"
            content="Meet our senior team..."
          />
        )}
        {activeTab === "accreditation" && (
          <Section
            ref={accreditationRef}
            title="Accreditation & Certification"
            content="Our certifications..."
          />
        )}
      </div>
    </div>
  );
};

interface TabItemProps {
  title: string;
  onClick: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="pb-3 px-1 font-medium text-sm text-gray-600 hover:text-gray-800"
    >
      {title}
    </button>
  );
};

interface SectionProps {
  title: string;
  content: string;
}

// Fixing the typing issue in forwardRef
const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ title, content }, ref) => {
    return (
      <div ref={ref} className="py-8 border-b border-gray-300">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="mt-2 text-gray-700">{content}</p>
      </div>
    );
  }
);
