import React from 'react'
import Hero from '../components/Hero';
import Description from '../components/Description';
import Programs from '../components/Programs';
import Skills from '../components/Skills';
import World from '../components/World';
import Partners from '../components/Partners';
import Empowerment from '../components/Empowerment';

export const metadata = {
  title: 'Business Management',
  description:
    'Find more about what we have to offer you for a successful career.',
};

export default function BusinessManagement() {
  const businessData = {
    head: 'School of Business Management',
    description:
      'Welcome to the cutting-edge realm of the School of Business Management. We transcend the boundaries of convectional learning. Here, knowledge meets creativity, and curiosity fuels a journey of digital discovery.',
    image: 'image1',
    title: 'School of Business Management',
  };
  // TODO: new description for this school needed
  // TODO: background image is needed.

  return (
    <div className="bg-gray-100">
      <Hero data={businessData} />
      <Description data={businessData} />
      <Programs />
      <Skills />
      <World />
      <Partners />
      <Empowerment />
    </div>
  );
}
