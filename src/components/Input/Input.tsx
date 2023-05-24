type IProps = {
  name: string;
  text: string;
  type: string;
};

const Input = ({ name, text, type }: IProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-slate-950" htmlFor={name}>
        {text}
      </label>
      <input
        className=" py-2 px-2 border-2 border-slate-400 rounded-lg"
        type={type}
        id={name}
      />
    </div>
  );
};

export default Input;
