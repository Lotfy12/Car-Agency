function Title({ title, subtitle, style }) {
  return (
    <div className="relative my-6 text-center w-full flex items-center justify-center">
      <h1 className="font-bold uppercase opacity-20 text-5xl sm:text-7xl xl:text-9xl tracking-wider">
        {title}
      </h1>
      <h2
        className="absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl capitalize font-bold pointer-events-none"
        style={style}
      >
        {subtitle}
      </h2>
    </div>
  );
}

export default Title;
