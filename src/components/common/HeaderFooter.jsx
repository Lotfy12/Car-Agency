function HeaderFooter({ thirdHeader, thirdParagraph }) {
  return (
    <div>
      <h3 className="text-3xl font-medium text-red-800 ">{thirdHeader}</h3>
      <p className="pt-5 pb-3 mx-auto leading-6">
        {thirdParagraph}
      </p>
    </div>
  );
}

export default HeaderFooter;
