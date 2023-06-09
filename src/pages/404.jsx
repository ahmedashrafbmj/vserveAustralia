import Image from "next/image";
import Link from "next/link";
  

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="error_page">
          <Link aria-label="Vserve" href="/">
            <Image quality={20}
              placeholder="image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="vserve"
              src="/assets/img/404.webp"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
