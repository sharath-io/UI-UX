export const FeatureSection = ({title,description,ctaTitle,srcImg,classNames}) => {
  return (
    <div className={`mt-30 px-8 flex justify-center items-center gap-8 flex-wrap xl:gap-0 lg:justify-between ${classNames}`}>
      <div className="bg-wild-sand p-8 rounded-md">
        <img
          className="w-[28rem] h-[25rem] object-contain"
          src={srcImg}
          alt={title}
        />
      </div>

      <div className="w-[30rem] flex flex-col gap-4 items-start justify-center">
        <h2 className="text-4xl font-bold">{title}</h2>
        <p className="text-base">
          {description}
        </p>
        <button className="bg-black text-white rounded-sm px-4 py-2 cursor-pointer">
          {ctaTitle}
        </button>
      </div>
    </div>
  );
};
