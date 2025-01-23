import { IUser } from "../../interface/IUser.js";

const mockUsers: IUser[] = [
    {
      id: 1,
      name: 'John Doe',
      avatar: '../../../../public/images/9286c820b0386e71f0ad7fec5f59c7c4.jpg',
      age: 30,
      gender: 'Male',
      bio: 'he/him',
      description: `I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024-2026), with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for enhancing backend efficiency by 25%.

I have developed Python-based analytics tools during internships and drove a 20% rise in donations through strategic social media campaigns. Certified in SQL, Python, Java, and IoT, I have also delivered impactful projects like a ReactJS prototype for accessibility and a QR-based attendance system. My achievements in national contests showcase both my technical expertise and creative problem-solving.`,
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: '../../../../public/images/5ba24e7f672e1629c968d371.webp',
      age: 28,
      gender: 'Female',
      bio: 'she/her',
      description: `I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024-2026), with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for enhancing backend efficiency by 25%.

I have developed Python-based analytics tools during internships and drove a 20% rise in donations through strategic social media campaigns. Certified in SQL, Python, Java, and IoT, I have also delivered impactful projects like a ReactJS prototype for accessibility and a QR-based attendance system. My achievements in national contests showcase both my technical expertise and creative problem-solving.`,
    },
    {
      id: 3,
      name: 'Sunil Smith',
      avatar: '../../../../public/images/memoji-vision-pro.webp',
      age: 28,
      gender: 'Male',
      bio: 'he/him',
      description: `I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024-2026), with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for enhancing backend efficiency by 25%.

I have developed Python-based analytics tools during internships and drove a 20% rise in donations through strategic social media campaigns. Certified in SQL, Python, Java, and IoT, I have also delivered impactful projects like a ReactJS prototype for accessibility and a QR-based attendance system. My achievements in national contests showcase both my technical expertise and creative problem-solving.`,
    },
    {
      id: 4,
      name: 'Prithvu Raj',
      avatar: '../../../../public/images/handsome-happy-guy-white-background-emoji-memoji_826801-7032.webp',
      age: 38,
      gender: 'Male',
      bio: 'he/him',
      description: `I am Saksham Arora, a 25-year-old MBA candidate at TAPMI, Bengaluru (2024-2026), with a BTech in Electronics & Communication (CGPA 7.95). I bring 35 months of experience, including boosting system scalability by 30% and earning the Rise Insta Award at Infosys for enhancing backend efficiency by 25%.

I have developed Python-based analytics tools during internships and drove a 20% rise in donations through strategic social media campaigns. Certified in SQL, Python, Java, and IoT, I have also delivered impactful projects like a ReactJS prototype for accessibility and a QR-based attendance system. My achievements in national contests showcase both my technical expertise and creative problem-solving.`,
    },
    
  ];
  
  export default class StudentsRepository {
    findById = async (userId: number): Promise<IUser | null> => {
      return mockUsers.find((user) => user.id === userId) || null;
    };
  }