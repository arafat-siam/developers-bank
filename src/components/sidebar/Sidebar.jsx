const Sidebar = (props) => {
  return (
    <div
      style={{
        height: "100%",
        padding: "0px 5px 0px 0px",
        flexBasis: "10%",
        // marginRight: "50px",
      }}
    >
      <ul>{props.children}</ul>
    </div>
  );
};

export default Sidebar;
