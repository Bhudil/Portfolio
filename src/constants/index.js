import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `Meet a dynamic Bachelor of Computer Science AI & ML Enthusiast | Aspiring Data Scientist | Data Analysis | Python Programmer | 3rd Year Student at CHANDIGARH UNIVERSITY`;

export const ABOUT_TEXT = `My name is Bhudil Mallick and I am from West Bengal. I have completed my schooling from Delhi Public School, Bangalore and I am currently pursuing my bachelor's in engineering in AIML from this esteemed University.
I am an enthusiastic programmer with a relentless drive to solve real world problems. I am open to learning any technology and open to take new challenges. I am a quick learner with ability to perform best in a team.
I possess excellent communication skills and problem solving and leadership skills. I love to play football and read books during my free time. If given an opportunity, I am determined that I will produce best results within short span of time.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "BE - CSE Student",
    company: "Chandigarh University",
    description: `A dedicated and highly motivated university student pursuing a Bachelor of Computer Science, with a proven track record of expertise in web development, AI/ML engineering, and software development. Proficient in the MERN stack, Python, and Java, and experienced in IoT engineering, data analysis, and research. Possesses a strong grasp of data structures and algorithms, and is committed to continuous learning and the advancement of technology.`,
    technologies: ["IoT", "Full Stack", "Java", "Python","AI/ML","Researcher","Data Analyst"],
  },
  {
    year: "Feb 2024 - May 2024",
    role: "AI Intern",
    company: "Avkalan.ai",
    description: `As a Full-stack Web Development Trainee and Intern at DevTown, I focused on mastering the MERN stack, which includes 
                  MongoDB, Express.js, React, and Node.js and CSS technology like tailwind and bootstrap. During my tenure, I developed a 
                  solid understanding of both front-end and back-end development, enabling me to create dynamic and responsive web 
                  applications `,
    technologies: ["HTML", "CSS", "JavaScript", "React.js","Node.js","MongoDB","Express.js","BootStrap","Tailwind"],
  },
  {
    year:"Oct 2023 - Dec 2023",
    role:"AI Intern",
    company:"Coratia Technologies",
    description:"As a Liaison Officer for an event, specifically assigned to CEOs of companies, my role was to ensure that the high-level executives had a seamless and productive experience",
    technologies:["Verbal Communication","Teamwork","Office Software","Problem-Solving","Time Management","Conflict Resolution"],
  },
];

export const PROJECTS = [
  {
    link:"https://github.com/Bhudil/ML-ChatBot",
    title: "Chatbot App",
    image: project1,
    description:
      "A conversational chatbot powered by the Google Gemma pre-trained model fromHuggingFace that will resolve queries asked by the user. Retrieves data from a custom vectorbase FAISS consisting of relevant PDFs and outputs the data to the user on a webpagedeployed using Streamlit.",
    technologies: ["Python", "LangChain", "Hugging Face"],
  },
  {
    link:"https://github.com/Bhudil/Live_Emo_Det",
    title: "Real-Time Emotion Detection",
    image: project2,
    description:
      "The provided code implements an Emotion Detection system using deep learning techniques for image analysis. It utilizes a Convolutional Neural Network (CNN) architecture built with the Keras framework and TensorFlow backend to classify facial expressions into seven emotional categories: Angry, Disgust, Fear, Happy, Sad, Surprise, and Neutral. The model is trained on a dataset of grayscale facial images, and its training progress is monitored using callbacks for early stopping and model checkpointing. The code also includes a real-time emotion detection application using OpenCV, where the trained model is applied to classify emotions in live video feed from a webcam, with faces detected using Haar cascades. Also provies output of the number of faces detected in the live stream. The project demonstrates the integration of machine learning, computer vision, and deep learning to create an interactive and responsive emotion recognition system.",
    technologies: ["Python", "OpenCV", "Keras"],
  },
  {
    link:"https://github.com/Bhudil/Text_Generation",
    title: "Text Generation",
    image: project3,
    description:
      "Text Classification with LSTM and Keras This repository contains a simple implementation of text classification using a Long Short-Term Memory (LSTM) neural network built with Keras. The model is trained on a dummy dataset and can be used as a starting point for building more complex text classification tasks.",
    technologies: ["Python","Keras", "NumPy", "Pickle"],
  },
];

export const CONTACT = {
  address: "Erica-49, Ph 3, Golden Homes Liberty Acres, Indlabele, Attibele",
  phoneNo: "+917829835889",
  email: "bhudil.mallick@gmail.com",
};
