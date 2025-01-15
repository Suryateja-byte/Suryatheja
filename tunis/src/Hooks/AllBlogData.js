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
      title: "Building Scalable Android Applications with Kotlin",
      commentor: "Surya Theja",
      date: "10 January 2023",
      tag: `Kotlin, Android, Mobile Development, Jetpack Compose`,
      description1:
        "Kotlin has emerged as one of the most powerful languages for Android development. Discover the best practices for building scalable and efficient Android applications using Jetpack Compose.",
      description2:
        "The transition to Jetpack Compose marks a significant evolution in Android UI development. It allows developers to build UIs declaratively, making the process more intuitive and less error-prone.",
      description3:
        "Adopting modern libraries and frameworks like Jetpack Compose ensures applications are future-proof and maintainable.",
      description4:
        "Scalable architectures, efficient database interactions with Room, and leveraging Kotlin's coroutines for concurrency are crucial for Android developers today.",
    },
    {
      id: 2,
      img: img2,
      title: "Integrating RESTful APIs into Android Applications",
      commentor: "Surya Theja",
      date: "15 March 2023",
      tag: `API, Android Development, Kotlin, RESTful APIs`,
      description1:
        "RESTful APIs are a cornerstone of modern Android applications. Learn how to efficiently integrate APIs to deliver real-time features to your users.",
      description2:
        "Tools like Retrofit make API integration seamless and reduce the boilerplate code significantly, enabling faster development cycles.",
      description3:
        "Best practices for error handling, caching, and performance optimization ensure a smooth user experience.",
      description4:
        "Ensure secure API communication using HTTPS and OAuth 2.0, and optimize data fetching to save bandwidth and battery life.",
    },
    {
      id: 3,
      img: img3,
      title: "Understanding Multi-Threading in Android",
      commentor: "Surya Theja",
      date: "20 June 2023",
      tag: `Kotlin, Multithreading, Android SDK`,
      description1:
        "Learn how to manage concurrency effectively in Android applications using Kotlin's coroutines and structured concurrency.",
      description2:
        "Discover common pitfalls in multithreaded programming and how to avoid them to build responsive and crash-free apps.",
      description3:
        "Efficient multithreading ensures applications remain smooth and responsive, even during intensive operations.",
      description4:
        "Understand how to use tools like WorkManager and Executors to handle background tasks efficiently.",
    },
    {
      id: 4,
      img: img4,
      title: "Optimizing Android Applications for Performance",
      commentor: "Surya Theja",
      date: "5 September 2023",
      tag: `Performance, Android, Optimization`,
      description1:
        "Performance optimization is critical for maintaining a high-quality user experience. Learn how to identify and resolve bottlenecks in Android applications.",
      description2:
        "Tools like Android Profiler help developers gain insights into memory usage, CPU utilization, and network activity.",
      description3:
        "Leverage Kotlin's immutability and scoped functions to write efficient, maintainable code.",
      description4:
        "Optimize image loading and caching with libraries like Glide or Coil to improve app performance on resource-constrained devices.",
    },
    {
      id: 5,
      img: img5,
      title: "Creating Beautiful UI with Material Design",
      commentor: "Surya Theja",
      date: "1 December 2023",
      tag: `UI Design, Android, Material Design`,
      description1:
        "Material Design principles provide a consistent user experience across applications. Explore how to implement these principles effectively in Android applications.",
      description2:
        "Learn about advanced UI components and how to customize them to meet unique user needs.",
      description3:
        "Adopting Material Design ensures your application looks modern and is aligned with Google's design philosophy.",
      description4:
        "Responsive and adaptive UIs play a significant role in enhancing usability across different devices and screen sizes.",
    },
    {
      id: 6,
      img: img6,
      title: "Unit Testing Android Applications",
      commentor: "Surya Theja",
      date: "20 December 2023",
      tag: `Testing, Android, JUnit`,
      description1:
        "Unit testing ensures application logic remains robust and error-free. Learn how to write and execute effective unit tests in Android.",
      description2:
        "Explore libraries like JUnit and Mockito for comprehensive testing coverage.",
      description3:
        "Writing testable code from the start ensures a smoother development process and easier maintenance.",
      description4:
        "Automated tests help detect issues early, reducing the time and cost of debugging.",
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
