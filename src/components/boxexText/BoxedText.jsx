const BoxedText = ({ children, text, shortText }) => {
  return (
    <div className="flex justify-center items-start rounded-md px-5 py-3">
      <div
        className="icon bg-gray-100"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "100%",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          marginRight: "5px",
        }}
      >
        {children}
      </div>
      <div
        className="text  flex"
        style={{
          color: "#000",
          fontWeight: "500",
          fontSize: "25px",
          flexDirection: "column",
        }}
      >
        <span
          style={{
            margin: "0px",
          }}
        >
          {text}
        </span>
        <span
          style={{
            fontSize: "13px",
          }}
        >
          {shortText}
        </span>
      </div>
    </div>
  );
};

export default BoxedText;
