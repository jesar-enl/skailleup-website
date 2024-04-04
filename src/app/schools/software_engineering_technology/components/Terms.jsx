import { AiFillSafetyCertificate } from 'react-icons/ai';
import { FaBriefcase, FaCalendarDay } from 'react-icons/fa6';
import { MdLocationPin } from 'react-icons/md';
import { GiPathDistance } from 'react-icons/gi';

export default function Terms() {
  const terms = [
    {
      icon: AiFillSafetyCertificate,
      head: 'Certification',
      desc: 'Diploma',
    },
    {
      icon: FaBriefcase,
      head: 'Administration fee',
      desc: '$30 per term',
    },
    {
      icon: GiPathDistance,
      head: 'Program length',
      desc: '3 months',
    },
    {
      icon: FaCalendarDay,
      head: 'Start Date',
      desc: '30-Jun-2024',
    },
    {
      icon: MdLocationPin,
      head: 'Location',
      desc: 'Online',
    },
  ];
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center -mt-16 ">
      {terms.map(({ icon: Icon, head, desc }) => (
        <div
          key={head}
          className="bg-white flex flex-col items-center jsutify-center p-6 shadow-lg gap-3 rounded-xl w-auto"
        >
          <div className="text-s-blue text-sm md:text-lg flex items-center gap-2">
            <span className="border-s-blue">
              <Icon className="text-2xl" />
            </span>
            <p>{head}</p>
          </div>
          <hr className="h-px bg-s-text border-0" />
          <p className="text-center text-gray-800">{desc}</p>
        </div>
      ))}
    </div>
  );
}
