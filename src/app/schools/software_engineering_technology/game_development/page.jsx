import CareerOpprtunity from '../components/CareerOpprtunity';
import CourseOutline from '../components/CourseOutline';
import Description from '../components/Description';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Requirements from '../components/Requirements';
import Terms from '../components/Terms';

export const metadata = {
  title: 'School of Game Development',
  description:
    'Find more about what we have to offer you for a successful career.',
};

export default function GameDevelopment() {
  const feData = {
    head: 'School of Game Development',
    description:
      'Welcome to the cutting-edge realm of the School of Game Development. We transcend the boundaries of convectional learning. Here, knowledge meets creativity, and curiosity fuels a journey of digital discovery.',
    image: 'image9',
    title: 'About the program',
    outline: [
      'Master the art of creating websites that adopt seamlessly to different screen sizes and devices, ensuring an optimal user experience.',
      'Learn about web sockets and real-time communications to enable live updates and interactivity in your applications.',
      'Gain insights into popular game development frameworks, enabling you to build robust and interactive web applications.',
      'Successfully deploy Backend applications to various hosting platforms and understand the deployment process.',
      'Learn how to communicate with server-side APIs to fetch and display data on your web applications.',
      'Acquire insights into industry standards, coding conventions, and code review process to ensure code quality and collaboration.',
      'Explore techniques to enhance website performance, reduce loading times, and imporve user experience.',
      'Prepare for Game Development job interview by honing your skills and building a strong profile of projects.',
    ],
    packageData: [
      {
        index: 'string1',
        packageHead: 'One off payment',
        packagePrice: '$ 300',
        packageList: ['10% discount', '1 hr mentorship session'],
      },
      {
        index: 'string2',
        packageHead: 'One off payment',
        packagePrice: '$ 300',
        packageList: ['10% discount', '1 hr mentorship session'],
      },
      {
        index: 'string3',
        packageHead: 'One off payment',
        packagePrice: '$ 300',
        packageList: ['10% discount', '1 hr mentorship session'],
      },
    ],
    careerParagraph: 'Get ready to step into a role of a Game Developer',
    careerList: [
      'Showcase your skills through portfolio-ready projects',
      'Achieve your Diploma Certificate',
      'Become eligible for sought-after positions as Game Developer',
    ],
  };

  return (
    <div className="bg-gray-100">
      <Hero data={feData} />
      <Terms />
      <Description data={feData} />
      <Requirements />
      <CourseOutline data={feData} />
      <Pricing data={feData} />
      <CareerOpprtunity data={feData} />
    </div>
  );
}
