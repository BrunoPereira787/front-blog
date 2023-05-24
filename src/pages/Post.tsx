import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="max-w-5xl mx-auto px-10 py-5">
      <div className="text-center flex flex-col gap-2 items-center py-4">
        <h1 className="font-bold text-3xl">
          Venha para a praia aqui da PQP, e curta nos
        </h1>
        <p className="font-medium text-zinc-500 text-sm">2023-01-07 11:03:14</p>
        <span className="block font-bold text-zinc-950">Bruno</span>
        <Link
          className="text-center max-w-max cursor-pointer px-6 py-2 rounded-md bg-black text-slate-50"
          to={"/editpost:id"}
        >
          Editar Post
        </Link>
      </div>
      <img className="" src="/hoia.jpg" alt="" />
      <p className="text-zinc-950">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis autem
        minus nemo at temporibus accusamus libero numquam quos saepe, deserunt
        eveniet beatae tempora ducimus. Nisi illum voluptas molestias iusto
        enim? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel,
        dolores voluptatem vero reprehenderit aperiam optio. Pariatur quis
        reprehenderit fuga, error facilis ratione inventore saepe consequatur
        voluptate recusandae nam nobis numquam. Lorem ipsum dolor sit, amet
        <br />
        <br />
        consectetur adipisicing elit. Omnis, quis nostrum nobis delectus illum
        suscipit quos quia. Nam sint, iste, exercitationem omnis tenetur
        molestias quas dolore maxime, molestiae similique possimus! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Harum doloremque quasi
        nemo fugit deleniti eius, minus quaerat at voluptate officia assumenda
        laboriosam eum rem ab odio aut libero excepturi magni? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Nobis autem minus nemo at
        temporibus accusamus libero numquam quos saepe, deserunt eveniet beatae
        tempora ducimus. Nisi illum voluptas molestias iusto enim? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Vel, dolores voluptatem
        vero reprehenderit aperiam optio. Pariatur quis reprehenderit fuga,
        error facilis ratione inventore saepe consequatur voluptate recusandae
        nam nobis numquam. Lorem ipsum dolor sit, amet
        <br />
        <br />
        consectetur adipisicing elit. Omnis, quis nostrum nobis delectus illum
        suscipit quos quia. Nam sint, iste, exercitationem omnis tenetur
        molestias quas dolore maxime, molestiae similique possimus! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Harum doloremque quasi
        nemo fugit deleniti eius, minus quaerat at voluptate officia assumenda
        laboriosam eum rem ab odio aut libero excepturi magni? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Nobis autem minus nemo at
        temporibus accusamus libero numquam quos saepe, deserunt eveniet beatae
        tempora ducimus. Nisi illum voluptas molestias iusto enim? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Vel, dolores voluptatem
        vero reprehenderit aperiam optio. Pariatur quis reprehenderit fuga,
        error facilis ratione inventore saepe consequatur voluptate recusandae
        nam nobis numquam. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Omnis, quis nostrum nobis delectus illum
        <br />
        <br />
        suscipit quos quia. Nam sint, iste, exercitationem omnis tenetur
        molestias quas dolore maxime, molestiae similique possimus! Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Harum doloremque quasi
        nemo fugit deleniti eius, minus quaerat at voluptate officia assumenda
        laboriosam eum rem ab odio aut libero excepturi magni? Lorem ipsum dolor
        sit amet, consectetur adipisicing elit. Nobis autem minus nemo at
        temporibus accusamus libero numquam quos saepe, deserunt eveniet beatae
        tempora ducimus. Nisi illum voluptas molestias iusto enim? Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Vel, dolores voluptatem
        vero reprehenderit aperiam optio. Pariatur quis reprehenderit fuga,
        error facilis ratione inventore saepe consequatur voluptate recusandae
        nam nobis numquam. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Omnis, quis nostrum nobis delectus illum suscipit quos quia. Nam
        sint, iste, exercitationem omnis tenetur molestias quas dolore maxime,
        molestiae similique possimus! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Harum doloremque quasi nemo fugit deleniti eius, minus
        quaerat at voluptate officia assumenda laboriosam eum rem ab odio aut
        libero excepturi magni?
      </p>
    </div>
  );
};

export default Post;
