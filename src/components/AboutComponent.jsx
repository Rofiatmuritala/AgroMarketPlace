import logo from "../assets/Hero pics/GREcyio_LIGHT__1_-removebg-preview.png";

function AboutComponent() {
  return (
    <section className="bg-slate-100 py-10">
      <div className="mx-auto w-4/5">
        <h2 className="font-semibold text-2xl text-center mb-3 text-gray-800">
          About Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mx-auto lg:w-2/3 flex items-center">
            <img src={logo} alt="" />
          </div>
          <p className="text-center flex items-center">
            Surround Yourself With all natural and beautiful plants. You are
            worth it! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus soluta sit, nam magnam alias suscipit incidunt labore ipsam
            praesentium modi sapiente itaque illum earum ad unde. Autem
            temporibus quam inventore!
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
