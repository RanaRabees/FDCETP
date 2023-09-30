/* eslint-disable @next/next/no-img-element */
import config from "../../config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  return (
    <Link
      href={base_url}
      className="navbar-brand block"
      style={{
        height: logo_height.replace("px", "") + "px",
        width: logo_width.replace("px", "") + "px",
      }}
    >
      {src || logo ? (
        <img src={src ? src : logo} alt={title} priority />
        // <Image
        //   width={logo_width.replace("px", "") * 1}
        //   height={logo_height.replace("px", "") * 1}
        //   src={src ? src : logo}
        //   alt={title}
        //   priority
        // />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
