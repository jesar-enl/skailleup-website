import Description from './components/Description';
import Empowerment from './components/Empowerment';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Programs from './components/Programs';
import Skills from './components/Skills';
import World from './components/World';

export const metadata = {
  title: 'Software Engineering & Technology',
  description:
    'Find more about what we have to offer you for a successful career.',
};

export default function SoftwareEngineeringTechnology() {
  const setData = {
    head: 'School of Software & Technology',
    description:
      'Welcome to the cutting-edge realm of the School of Software and Technology. We transcend the boundaries of convectional learning. Here, knowledge meets creativity, and curiosity fuels a journey of digital discovery.',
    image: 'image1',
    title: 'School of Software & Technology',
  };

  return (
    <div className="bg-gray-100">
      <Hero data={setData} />
      <Description data={setData} />
      <Programs />
      <Skills />
      <World />
      <Partners />
      <Empowerment />
    </div>
  );
}
