function SectionTitle(props) {
  return (
    <div className="overflow-x-hidden w-full pt-5 mt-20">
      <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold text-[#fcfcfc] mb-10 pt-4 md:pt-0 md:w-max">
        {props.title}
      </h2>
    </div>
  );
}

export default SectionTitle;
