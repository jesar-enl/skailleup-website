export default function CourseOutline({ data }) {
  const { outline } = data;

  return (
    <div className="flex flex-col mt-4 items-center justify-center gap-4 p-6 text-s-blue">
      <h2 className="text-xl md:text-2xl font-semibold mb-2 tracking-wider">
        Course Outline
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-3">
        {outline.map((course) => (
          <div
            key={course}
            className="border border-s-blue p-3 text-s-blue text-sm md:text-lg bg-white h-max my-auto tracking-wider leading-relaxed rounded-lg shadow-xl"
          >
            {course}
          </div>
        ))}
      </div>
    </div>
  );
}
