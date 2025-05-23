export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex flex-col bg-white text-black m-auto min-h-[110vh] justify-center items-center gap-8"
    >
      <h1 className="text-5xl w-1/2 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <p className="w-1/2 text-lg text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        necessitatibus debitis quasi? Nostrum quo culpa iste illo possimus non
        doloribus, illum, vel, quisquam perferendis tempora libero aliquam
        quidem dolores at! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatem necessitatibus debitis quasi? Nostrum quo culpa iste
        illo possimus non doloribus, illum, vel, quisquam perferendis tempora
        libero aliquam quidem dolores at!
      </p>
      <div className="flex gap-18 mt-8">
        <div className=" h-32 w-32 font-bold hover:shadow-xl  hover:scale-[1.1] transition-all duration-200 ease-in-out">
          Menu
        </div>
        <div className="h-32 w-32 font-bold hover:shadow-xl hover:scale-[1.1] transition-all duration-200 ease-in-out">
          Ambientes
        </div>
        <div className="h-32 w-32  font-bold hover:shadow-xl hover:scale-[1.1] transition-all duration-200 ease-in-out">
          Service
        </div>
      </div>
    </section>
  );
}
