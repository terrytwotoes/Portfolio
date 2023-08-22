function Contact() {
  return (
    <div
      id="Contact"
      className="pb-20  w-full px-5 flex flex-col justify-center relative"
    >
      <img className="w-30 m-auto mb-5" src="/lineBreak.svg" />
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-[#fcfcfc]">
        Interested in Working Together?
      </h2>
      <div className="self-center">
        <button className="text-[#fcfcfc] border-2 px-4 py-2 rounded-3xl hover:bg-[#fcfcfc] hover:text-[#0f0f0f] font-bold duration-300">
          <a href="mailto:chaitanyatripathi11@gmail.com">Get in Touch</a>
        </button>
      </div>
      <img className="" src="/fancyLines.svg" alt="" />
    </div>
  );
}

export default Contact;
