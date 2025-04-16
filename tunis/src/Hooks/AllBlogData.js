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
      title: "Building Responsive Websites with Flexbox",
      commentor: "Surya Theja",
      date: "10 January 2024",
      tag: `HTML, CSS, Flexbox, Responsive Design`,
      description1:
        "Explore the power of Flexbox for creating responsive layouts. Learn how to implement flexible design patterns that adapt seamlessly to different screen sizes and devices.",
      description2:
        "Understanding the core Flexbox properties is essential for modern web development. Master flex-direction, justify-content, align-items, and flex-wrap to create sophisticated layouts.",
      description3:
        "Combining Flexbox with media queries enables truly responsive designs. Discover techniques for creating mobile-first layouts that scale elegantly to larger screens.",
      description4:
        "Performance optimization is crucial for responsive websites. Learn best practices for optimizing Flexbox layouts to ensure smooth rendering across all devices.",
    },
    {
      id: 2,
      img: img2,
      title: "Modern JavaScript Essentials for Web Development",
      commentor: "Surya Theja",
      date: "15 March 2024",
      tag: `JavaScript, ES6, Web Development, Frontend`,
      description1:
        "JavaScript continues to evolve with powerful features that enhance developer productivity. Explore essential modern JavaScript concepts that every web developer should know.",
      description2:
        "Arrow functions, destructuring, and template literals have transformed how we write JavaScript. Learn how to leverage these features for cleaner, more maintainable code.",
      description3:
        "Asynchronous JavaScript is fundamental to modern web applications. Master Promises, async/await, and fetch API for efficient data handling and API integration.",
      description4:
        "JavaScript modules and bundlers help organize and optimize code. Discover best practices for structuring your JavaScript applications for scalability and performance.",
    },
    {
      id: 3,
      img: img3,
      title: "Full Stack Development with Node.js",
      commentor: "Surya Theja",
      date: "20 June 2024",
      tag: `Node.js, Express, Backend, API Development`,
      description1:
        "Node.js has revolutionized server-side JavaScript development. Learn how to build robust backend systems using Node.js and Express.",
      description2:
        "API development is a core skill for full stack developers. Explore RESTful API design principles and implementation strategies using Express.",
      description3:
        "Database integration is essential for most applications. Master connecting Node.js applications to SQL and NoSQL databases for efficient data persistence.",
      description4:
        "Authentication and security are critical concerns for web applications. Learn how to implement secure user authentication and authorization in Node.js applications.",
    },
    {
      id: 4,
      img: img4,
      title: "Python for Web Development and Data Processing",
      commentor: "Surya Theja",
      date: "5 September 2024",
      tag: `Python, Django, Flask, Data Processing`,
      description1:
        "Python has become a versatile language for web development and data processing. Explore how Python can enhance your full stack development toolkit.",
      description2:
        "Web frameworks like Django and Flask simplify Python web development. Learn how to choose the right framework for your project needs and development style.",
      description3:
        "Data processing capabilities make Python invaluable for modern applications. Discover techniques for efficient data manipulation, analysis, and visualization.",
      description4:
        "Integrating Python backends with JavaScript frontends creates powerful applications. Master strategies for building cohesive full stack systems with Python and JavaScript.",
    },
    {
      id: 5,
      img: img5,
      title: "Building Dynamic Web Applications with React",
      commentor: "Surya Theja",
      date: "1 December 2024",
      tag: `React, Frontend, JavaScript, Web Applications`,
      description1:
        "React has transformed frontend development with its component-based architecture. Learn how to build dynamic, interactive user interfaces with React.",
      description2:
        "State management is crucial for complex React applications. Explore different approaches, from useState and useReducer to context API and external libraries.",
      description3:
        "Hooks have simplified React development by enabling functional components to use state and lifecycle features. Master React hooks for cleaner, more maintainable code.",
      description4:
        "Performance optimization ensures smooth user experiences. Discover techniques for identifying and resolving performance bottlenecks in React applications.",
    },
    {
      id: 6,
      img: img6,
      title: "Database Design for Modern Web Applications",
      commentor: "Surya Theja",
      date: "20 December 2024",
      tag: `SQL, Databases, Web Development, Backend`,
      description1:
        "Database design fundamentally impacts application performance and scalability. Learn principles for designing efficient database schemas for web applications.",
      description2:
        "SQL remains essential for data operations in many applications. Master advanced SQL techniques for complex queries, transactions, and data manipulation.",
      description3:
        "NoSQL databases offer flexibility for certain use cases. Explore when and how to use document, key-value, and graph databases effectively.",
      description4:
        "Database security is non-negotiable for protecting sensitive data. Learn best practices for securing your database systems against common vulnerabilities and attacks.",
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
