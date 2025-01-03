import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const data = await client.fetch(`
    *[_type == "product"]{
      name,
      price,
      image,
      description
    }[0]
  `);

  console.log(data);

  return (
    <div>
      <h1>{data?.name}</h1>
      {data?.image && (
        <img
          src={urlFor(data.image).url()}
          alt={data.name}
          width={200}
          height={200}
        />
      )}
      <p>Price: ${data?.price}</p>
      <p>{data?.description}</p>
    </div>
  );
}
