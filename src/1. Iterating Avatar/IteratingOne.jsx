import Avatar from "./Avatar";
import "./styles1.css";

export default function IteratingOne() {
  const data = [
    {
      id: "001",
      alt: "person with curly hair and a black T-shirt",
    },
    {
      id: "002",
      source: "https://sandpack-bundler.vercel.app/img/avatars/002.png",
      alt: "person wearing a hijab and glasses",
    },
    {
      id: "003",
      source: "https://sandpack-bundler.vercel.app/img/avatars/003.png",
      alt: "person with short hair wearing a blue hoodie",
    },
    {
      id: "004",
      source: "https://sandpack-bundler.vercel.app/img/avatars/004.png",
      alt: "person with a pink mohawk and a raised eyebrow",
    },
  ];

  return (
    <div className="avatar-set">
      {data.map(({ id, alt }) => (
        <Avatar
          key={id}
          src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`}
          alt={alt}
        />
      ))}
    </div>
  );
}
