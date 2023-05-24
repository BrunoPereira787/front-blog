import { Link } from "react-router-dom";

type IRequest = {
  children: string;
};

const Button = ({ children }: IRequest) => {
  return (
    <Link
      className="text-center max-w-max cursor-pointer px-6 py-2 rounded-md bg-black text-slate-50"
      to={"/editpost:id"}
    >
      {children}
    </Link>
  );
};

export default Button;
