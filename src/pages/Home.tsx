import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-10 py-5 flex flex-col gap-5">
      <Link to="/post" className="flex flex-wrap gap-5">
        <div className="flex-auto max-w-sm max-h-56">
          <img
            className="w-full h-full bg-cover object-cover"
            src="/hoia.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="font-bold text-2xl">
            Venha para a praia aqui da PQP, e curta nos
          </h2>
          <p className="text-zinc-500">
            <span className="font-bold text-zinc-950">Bruno</span> 2023-01-07
            11:03:14
          </p>
          <p className="text-zinc-950">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            autem minus nemo at temporibus accusamus libero numquam quos saepe,
            deserunt eveniet beatae tempora ducimus. Nisi illum voluptas
            molestias iusto enim?
          </p>
        </div>
      </Link>

      <div className="flex flex-wrap gap-5">
        <div className="flex-auto max-w-sm max-h-56">
          <img
            className="w-full h-full bg-cover object-cover"
            src="/hoia.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="font-bold">
            Venha para a praia aqui da PQP, e curta nos
          </h2>
          <p className="text-zinc-500">
            <span className="font-bold text-zinc-950">Bruno</span> 2023-01-07
            11:03:14
          </p>
          <p className="text-zinc-950">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            autem minus nemo at temporibus accusamus libero numquam quos saepe,
            deserunt eveniet beatae tempora ducimus. Nisi illum voluptas
            molestias iusto enim?
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <div className="flex-auto max-w-sm max-h-56">
          <img
            className="w-full h-full bg-cover object-cover"
            src="/hoia.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="font-bold">
            Venha para a praia aqui da PQP, e curta nos
          </h2>
          <p className="text-zinc-500">
            <span className="font-bold text-zinc-950">Bruno</span> 2023-01-07
            11:03:14
          </p>
          <p className="text-zinc-950">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            autem minus nemo at temporibus accusamus libero numquam quos saepe,
            deserunt eveniet beatae tempora ducimus. Nisi illum voluptas
            molestias iusto enim?
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-5">
        <div className="flex-auto max-w-sm max-h-56">
          <img
            className="w-full h-full bg-cover object-cover"
            src="/hoia.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <h2 className="font-bold">
            Venha para a praia aqui da PQP, e curta nos
          </h2>
          <p className="text-zinc-500">
            <span className="font-bold text-zinc-950">Bruno</span> 2023-01-07
            11:03:14
          </p>
          <p className="text-zinc-950">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            autem minus nemo at temporibus accusamus libero numquam quos saepe,
            deserunt eveniet beatae tempora ducimus. Nisi illum voluptas
            molestias iusto enim?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
