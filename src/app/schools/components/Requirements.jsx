export default function Requirements() {
  const requirements = [
    {
      title: 'Educational Background',
      lists: [
        'A certificate is not prerequisite for enrollment to the diploma course; we welcome all persons to apply to this course.',
      ],
    },
    {
      title: 'Language Proficiency',
      lists: [
        'As the course is conducted in English language, applicants should possess a fundamental grasp of all the language to actively participate in curriculum activities and discussions.',
      ],
    },
    {
      title: 'Assessment',
      lists: [
        'Every participant will undergo an assessment, and a study kit will be provided to aid in preparation for the examination.',
        'The entrance exam aims at evaluating the problem-solving abilitiy of the applicant.',
      ],
    },
  ];
  return (
    <div className="bg-s-blue h-96 text-white flex flex-col items-center justify-center">
      <div className="my-4 flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-3xl font-semibold tracking-wider leading m-3">
          Admission Requirements
        </h2>
        <div className="flex gap-2 flex-col md:flex-row m-6">
          {requirements.map(({ title, lists }, index) => (
            <div
              key={title}
              className="border border-s-white p-4 w-full md:w-1/3 "
            >
              <p className="text-sm md:text-base mb-4">{title}</p>
              {lists.map((list) => (
                <ul key={index} className="ml-8 list-disc">
                  <li className="mb-2 text-sm tracking-wider leading-snug">
                    {list}
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
