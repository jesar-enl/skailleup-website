export default function Description({data}) {
  const { title } = data;
  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center my-6 pt-4 pb-4 mx-4">
      <div className="w-full md:w-2/3 m-3 p-3">
        <h1 className="text-s-blue font-semibold tracking-wider text-2xl md:text-4xl mb-6">
          {title}
        </h1>
        <p className="text-sm tracking-wider">
          The school of Software and Technology provides a diverse array of
          in-depth technical courses meticulously crafted to empower students
          with the essential skills and knowledge necessary to launch their
          careers and excel globally. Our curriculum encompasses a variety of
          technical courses designed to prepare you for initiating,
          transitioning, or enhancing your career in the tech industry. To
          ensure comprehensive support, we have integrated dynamic self-paced
          learning, live classes, and peer-to-peer training, fostering an
          immersive educational environment for our students.
        </p>
      </div>
      <div className="w-full md:w-1/3 my-auto h-full flex justify-center items-center m-3 p-3">
        <iframe
          width="600"
          height="350"
          src="https://www.youtube.com/embed/STKObkUuvf4?si=bvUb6sTi2GTIzGpH"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
