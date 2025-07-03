export   const displayTech = (tech) => {
    switch (tech) {
      case "react":
        return <i className="devicon-react-original"></i>;
      case "symfony":
        return <i className="devicon-symfony-original"></i>;
      case "mysql":
        return <i className="devicon-mysql-plain-wordmark"></i>;
      case "sass":
        return <i className="devicon-sass-original"></i>;
      case "nextjs":
        return <i className="devicon-nextjs-original"></i>;
      default:
        return null;
    }
  };