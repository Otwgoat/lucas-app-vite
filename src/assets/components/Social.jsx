import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export const Social = () => {
  return (
    <div id="socialMediaContainer">
      <button>
        <a href="https://www.instagram.com/lucas_jouffroy?igsh=Mjd0cWxkcmp2NnIz&utm_source=qr">
          <InstagramLogo size={30} color="#e2e2e2" weight="regular" />
        </a>
      </button>
      <button>
        <a href="https://github.com/lucasjouff">
          <GithubLogo size={30} color="#e2e2e2" weight="regular" />
        </a>
      </button>
      <button>
        <a href="https://www.linkedin.com/in/lucas-jouffroy-dev-web">
          <LinkedinLogo size={30} color="#e2e2e2" weight="regular" />
        </a>
      </button>
    </div>
  );
};
