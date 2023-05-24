import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-5xl mx-auto px-10 py-5 flex justify-between">
      <Link to="/" className="font-bold">
        Blog
      </Link>
      <nav className="">
        <ul className="flex gap-5">
          <li>
            <NavLink to="/register">Registrar</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/createPost">Criar Post</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
