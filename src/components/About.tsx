const imgUrl = './icon.svg';

const About = () => {
  return (
    <>
      <h2 className="aboutTitle ml-12 mb-8 text-4xl">About</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-8 mb-9">
        <div className="flex justify-center content-start">
          <img src={imgUrl} alt="Artist" className="image object-contain h-96 rounded-2xl" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-gray-200 uppercase text-xl">xmov</span>
          <span className="text-gray-200 uppercase text-l">stencil artist</span>
        </div>
      </div>
    </>
  );
}

export default About;