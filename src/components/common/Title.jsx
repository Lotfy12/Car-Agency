function Title({ title, subtitle, style }) {
  return (
    <div className="relative  my-6 text-center">
      <h1 className="font-bold uppercase opacity-20 sm:text-7xl xl:text-9xl">
        {title}
      </h1>
      <h2
        className="translate-x-(-50%) translate-y-(50%)  absolute bottom-0 left-1/3 transform text-4xl capitalize"
        style={style}
      >
        {subtitle}
      </h2>
    </div>
  );
}

export default Title;
