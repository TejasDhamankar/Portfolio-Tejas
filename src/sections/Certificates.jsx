import { certificates } from "../constants";
import CertificateCard from "../components/CertificateCard"

export default function Certificates() {
  return (
    <div className="items-start mt-25 md:mt-35 c-space">
      <h2 className="text-heading">My Certificates</h2>
      <div className="flex flex-wrap gap-6 mt-12 justify-start items-stretch">
        {certificates.map((cert) => (
          <CertificateCard key={cert.title} {...cert} />
        ))}
      </div>
    </div>
  );
}
