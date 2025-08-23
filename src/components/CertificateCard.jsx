const CertificateCard = ({ img, title, issuer, link }) => (
    <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r from-indigo to-storm hover:bg-royal hover-animation">
      <img className="rounded-md mb-4" src={img} alt={title} />
      <figcaption className="text-white font-bold text-lg">{title}</figcaption>
      <p className="text-white/50 text-sm">{issuer}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-aqua hover:underline"
        >
          View Certificate
        </a>
      )}
    </figure>
  );
  