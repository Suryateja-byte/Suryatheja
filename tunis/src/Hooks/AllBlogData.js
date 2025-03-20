import { useState } from "react";
import img1 from "../assets/img/blog/blog-post-1.jpg";
import img2 from "../assets/img/blog/blog-post-2.jpg";
import img3 from "../assets/img/blog/blog-post-3.jpg";
import img4 from "../assets/img/blog/blog-post-4.jpg";
import img5 from "../assets/img/blog/blog-post-5.jpg";
import img6 from "../assets/img/blog/blog-post-6.jpg";

const AllBlogData = () => {
  const blogsData = [
    {
      id: 1,
      img: img1,
      title: "Mastering UI/UX Design Principles",
      commentor: "Surya Theja",
      date: "10 January 2024",
      tag: `UI Design, UX Design, User-Centered Design, Design Principles`,
      description1:
        "Explore the fundamental principles of UI/UX design and how they contribute to creating exceptional digital experiences. Learn how to apply these principles to build user-friendly and visually appealing interfaces.",
      description2:
        "User-centered design is at the heart of effective UI/UX. Understand how to conduct user research, create user personas, and develop empathy maps to inform your design decisions.",
      description3:
        "Information architecture plays a crucial role in organizing content and ensuring seamless navigation. Discover techniques for creating intuitive sitemaps and user flows.",
      description4:
        "Visual hierarchy, typography, and color theory are essential elements of UI design. Master these concepts to create visually stunning and engaging interfaces.",
    },
    {
      id: 2,
      img: img2,
      title: "The Art of Prototyping and Wireframing",
      commentor: "Surya Theja",
      date: "15 March 2024",
      tag: `Prototyping, Wireframing, UX Design, Design Process`,
      description1:
        "Prototyping and wireframing are essential steps in the design process. Learn how to create effective prototypes and wireframes to visualize and test your design ideas.",
      description2:
        "Explore different prototyping methods, from low-fidelity paper prototypes to high-fidelity interactive prototypes, and choose the right approach for your project.",
      description3:
        "Wireframing tools and techniques can help you quickly create and iterate on your designs. Discover best practices for creating clear and concise wireframes.",
      description4:
        "User testing is crucial for validating your prototypes and wireframes. Learn how to conduct user testing sessions and gather valuable feedback to improve your designs.",
    },
    {
      id: 3,
      img: img3,
      title: "Mastering Figma for UI/UX Design",
      commentor: "Surya Theja",
      date: "20 June 2024",
      tag: `Figma, UI Design, UX Design, Design Tools`,
      description1:
        "Figma has become a leading design tool for UI/UX designers. Learn how to leverage its powerful features to create stunning and interactive designs.",
      description2:
        "Explore Figma's collaborative capabilities and how they can streamline your design workflow and facilitate teamwork.",
      description3:
        "Master Figma's advanced features, such as components, styles, and auto layout, to create scalable and maintainable design systems.",
      description4:
        "Learn how to use Figma's prototyping tools to create interactive prototypes and test user flows.",
    },
    {
      id: 4,
      img: img4,
      title: "Effective User Research Methods",
      commentor: "Surya Theja",
      date: "5 September 2024",
      tag: `User Research, UX Design, Research Methods, User Insights`,
      description1:
        "User research is fundamental to user-centered design. Explore various user research methods and learn how to choose the right methods for your project.",
      description2:
        "Learn how to conduct user interviews, surveys, and usability testing sessions to gather valuable user insights.",
      description3:
        "Discover techniques for analyzing user data and synthesizing your findings into actionable design recommendations.",
      description4:
        "Understand how to create user personas and empathy maps to communicate user needs and goals to stakeholders.",
    },
    {
      id: 5,
      img: img5,
      title: "Creating and Maintaining Design Systems",
      commentor: "Surya Theja",
      date: "1 December 2024",
      tag: `Design Systems, UI Design, Design Management, Consistency`,
      description1:
        "Design systems are essential for creating consistent and scalable designs. Learn how to build and maintain effective design systems.",
      description2:
        "Explore the key components of a design system, such as style guides, component libraries, and design principles.",
      description3:
        "Discover best practices for documenting and communicating your design system to ensure adoption and consistency across your organization.",
      description4:
        "Learn how to use tools like Figma to create and manage your design system efficiently.",
    },
    {
      id: 6,
      img: img6,
      title: "Designing for Accessibility in UI/UX",
      commentor: "Surya Theja",
      date: "20 December 2024",
      tag: `Accessibility, UI/UX Design, Inclusive Design, Web Accessibility`,
      description1:
        "Accessibility is a critical aspect of UI/UX design. Learn how to design inclusive experiences that are accessible to users with disabilities.",
      description2:
        "Understand the Web Content Accessibility Guidelines (WCAG) and how to apply them to your designs.",
      description3:
        "Explore assistive technologies and how users with disabilities interact with digital interfaces.",
      description4:
        "Learn how to conduct accessibility audits and usability testing with users with disabilities to ensure your designs are truly inclusive.",
    },
  ];

  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  return {
    singleData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
  };
};

export default AllBlogData;
