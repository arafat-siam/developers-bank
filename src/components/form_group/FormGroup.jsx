const FormGroup = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: props.margin,
      }}
    >
      <label htmlFor={props.name} className="text-black font-bold text-sm mb-2">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className="bg-slate-100 border-slate-100 focus:border-none focus:outline-none px-4 py-2 rounded-md"
      />
    </div>
  );
};

export default FormGroup;
