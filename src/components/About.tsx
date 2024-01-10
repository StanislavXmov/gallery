
const About = () => {
  return (
    <>
      <h2 className="aboutTitle ml-12 mb-8 text-4xl">About</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 px-8 mb-9">
        <div className="flex justify-center content-start">
          <img src="./icon.svg" alt="Artist" className="object-contain h-96" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-gray-200 uppercase text-xl">xmov</span>
          <span className="text-gray-200 uppercase text-l">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, fugit. Veritatis expedita velit ducimus nihil similique. Vitae debitis, aliquid iure mollitia quis id totam vel nemo, obcaecati ullam sapiente non dolorum adipisci beatae dolores nam hic eos deserunt? Reprehenderit numquam velit cumque doloremque perspiciatis, labore sint asperiores tempore nobis culpa quia animi hic natus eum, necessitatibus non dignissimos, inventore ea! Tempore sunt ex soluta quo est alias iure quam in harum odit laboriosam iste aperiam repellendus exercitationem veniam vitae itaque sint laborum laudantium atque.</span>
        </div>
      </div>
    </>
  );
}

export default About;