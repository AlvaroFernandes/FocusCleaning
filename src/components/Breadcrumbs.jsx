import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const generateBreadcrumbs = (routePath) => {
  const route = routePath.split("/");
  const currPath = route[2];
  const idSlug = route[3];
  let path;

  if (currPath === "about") {
    return (path = {
      title: "About us",
      img: "about",
      bread: "About us"
    });
  }

  if (currPath === "contact") {
    return (path = {
      title: "Contact us",
      img: "contact",
      bread: "Contact us"
    });
  }

  if (currPath === "services" && idSlug === undefined) {
    return (path = {
      title: "Services",
      img: "sercices",
      bread: "Services"
    });
  } else if (currPath === "services" && idSlug === "basic") {
    return (path = {
      title: "Basic Cleaning",
      img: "basic",
      bread: (
        <>
          <Link to="/services">Services</Link> / Basic Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "commercial") {
    return (path = {
      title: "Commercial Cleaning",
      img: "commercial",
      bread: (
        <>
          <Link to="/services">Services</Link> / Commercial Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "construction") {
    return (path = {
      title: "Construction Cleaning",
      img: "construction",
      bread: (
        <>
          <Link to="/services">Services</Link> / Construction Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "premiun") {
    return (path = {
      title: "Premiun Cleaning",
      img: "premiun",
      bread: (
        <>
          <Link to="/services">Services</Link> / Premiun Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "endoflease") {
    return (path = {
      title: "End of Lease Cleaning",
      img: "endoflease",
      bread: (
        <>
          <Link to="/services">Services</Link> / End of Leasing Cleaning
        </>
      )
    });
  } else if (currPath === "services" && idSlug === "spring") {
    return (path = {
      title: "Spring Cleaning",
      img: "spring",
      bread: (
        <>
          <Link to="/services">Services</Link> / Spring Cleaning
        </>
      )
    });
  }
};

const Breadcrumbs = () => {
  const location = useLocation();
  const routePath = location.pathname;

  const path = generateBreadcrumbs(routePath);

  return (
    <div className={`breadcrumb-area dark-bg breadcrumb-img-${path.img}`}>
      <div className="breadcrumb-inner">
        <h2 className="text-white">{path.title}</h2>
        <h6 className="text-white">
          <Link to="/">Home</Link> / {path.bread}
        </h6>
      </div>
    </div>
  );
};

export default Breadcrumbs;
