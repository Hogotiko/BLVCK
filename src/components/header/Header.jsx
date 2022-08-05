import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <div className="header astro-TV4I7BUF">
      <div className="content-head">
        <div className="container astro-3BICBB64" id="header-links">
          <a
            href="https://instagram.com/black"
            target="_blank"
            rel="noreferrer"
            className="item astro-3BICBB64"
          >
            <img
              src="/images/icon_instagram.png"
              alt="instagram-logo"
              width="32"
              className="astro-3BICBB64"
            />
          </a>
          <a
            href="https://twitter.com/blvckparis"
            target="_blank"
            rel="noreferrer"
            className="item astro-3BICBB64"
          >
            <img
              src="/images/icon_twitter.png"
              alt="twitter-logo"
              width="32"
              className="astro-3BICBB64"
            />
          </a>
          <a
            href="https://opensea.io/collection/blvckgenesis"
            target="_blank"
            rel="noreferrer"
            className="item astro-3BICBB64"
          >
            <img
              src="/images/icon_opensea.png"
              alt="opensea-logo"
              width="32"
              className="astro-3BICBB64"
            />
          </a>
          <a
            href="https://discord.gg/blvckparis"
            target="_blank"
            rel="noreferrer"
            className="item astro-3BICBB64"
          >
            <img
              src="/images/icon_discord.png"
              alt="discord-logo"
              width="36"
              className="astro-3BICBB64"
            />
          </a>
        </div>
      </div>

      <img className="mainLogo" src="/images/blvck_logo_white@2x.png" alt="" />

      <div className="content-head">
        <div className="user-avatar" id="user-avatar">
          <img
            src="/images/user-avatar-icon.png"
            alt="user-avatar"
            width="30"
          />
        </div>
      </div>
    </div>
  );
};
