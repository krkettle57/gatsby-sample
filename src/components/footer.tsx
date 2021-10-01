import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer: React.VFC = () => (
  <footer className="text-white bg-primary">
    <div className="flex items-center justify-center">
      <ul className="flex items-center justify-center overflow-hidden list-none m-4">
        <li>
          <a className="mx-2" href="https://twitter.com/krkettle">
            <FontAwesomeIcon icon={faTwitter} size="3x" />
          </a>
        </li>
        <li>
          <a className="mx-2" href="https://github.com/krkettle57">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
        </li>
      </ul>
    </div>
    <div className="container flex items-center justify-center pb-2 mx-auto">
      © {new Date().getFullYear()} krkettle
    </div>
  </footer>
);

export default Footer;
