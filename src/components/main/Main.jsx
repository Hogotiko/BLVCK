import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./main.css";

export const Main = () => {
  const [checkedBg, setCheckedBg] = useState("images/blvck_avatar.png");
  const [iframeView, setIframeView] = useState(false);

  return (
    <main>
      <section
        className="container section-hero astro-MYW3J2YU"
        style={{
          background:
            "#000 url(/images/bg_hero@2x.jpg) center / cover no-repeat",
        }}
        id="hero"
      >
        <div className="container section-hero astro-NPQH3IAU">
          <div className="content content-top astro-AAZAQM37">
            <img
              className="main-logo"
              style={{ width: "130px" }}
              src="/images/blvck_logo_white@2x.png"
              alt=""
            />
          </div>
          <div className="content content-center astro-AAZAQM37">
            <div className="astro-2Q7GAYXT">
              <h1 className="section-hero astro-2Q7GAYXT">
                Blvck Members-Only Experience: Phygital, Fashion &amp; Events.
              </h1>
            </div>
            <NavLink
              to="/dashboard"
              className="form-button inline astro-AAZAQM37"
            >
              Membership Dashboard
            </NavLink>
          </div>
          <div className="content content-bottom astro-AAZAQM37">
            <a
              target="_blank"
              rel="noreferrer"
              className="link btn-fill-grey astro-NHSX5LZV"
              href="https://discord.gg/blvckparis"
            >
              Join the Discord
            </a>
            <div className="social astro-X5IW3DTJ">
              <a
                target="_blank"
                rel="noreferrer"
                className="link  astro-HFYL4P3C"
                href="https://instagram.com/black"
              >
                <img
                  src="/images/social_instagram.png"
                  alt="icon"
                  width="auto"
                  height="40"
                  className=" astro-EY3R7A52"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="link  astro-HFYL4P3C"
                href="https://twitter.com/blvckparis"
              >
                <img
                  src="/images/social_twitter.png"
                  alt="icon"
                  width="auto"
                  height="40"
                  className=" astro-EY3R7A52"
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="link  astro-HFYL4P3C"
                href="https://opensea.io/collection/blvckgenesis"
              >
                <img
                  src="/images/social_opensea.png"
                  alt="icon"
                  width="auto"
                  height="40"
                  className=" astro-EY3R7A52"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container section-roadmap leading-lg astro-MYW3J2YU"
        style={{
          background:
            "#000 url(/images/bg_roadmap@2x.jpg) center / cover no-repeat",
        }}
        id="roadmap"
      >
        <div className="container astro-S2U7YMFI">
          <div className="astro-2Q7GAYXT">
            <h2 className="undefined astro-2Q7GAYXT">Roadmap</h2>
          </div>
          <div className="subtitle astro-S2U7YMFI">
            <div className="astro-2Q7GAYXT">
              <h3 className=" astro-2Q7GAYXT">
                Every owner of a Blvck Genesis NFT gains member access to a
                world of exclusive merch, benefits, airdrops & more.
              </h3>
            </div>
          </div>
          <div className="grid astro-S2U7YMFI">
            <div className="timeline-container astro-S2U7YMFI">
              <div className="container astro-DH4DD74X">
                <div className="item astro-DH4DD74X">
                  <h3 className="title undefined astro-N4WNZWOJ">
                    PRE-MINT PHASE - BLVCK GENESIS NFT
                  </h3>
                  <span className="date astro-DH4DD74X">Date: Q2 2022</span>
                  <ul className="list astro-DH4DD74X">
                    <li className="list-item astro-DH4DD74X">
                      Major NFT projects collaborations by Blvcking out avatars
                    </li>
                    <li className="list-item astro-DH4DD74X">
                      Partnerships with WEB2 brands with a claim to limited
                      edition physical products to be paired with their avatars
                      for rare Blvck Genesis NFT holders.
                    </li>
                    <li className="list-item astro-DH4DD74X">
                      Launch of the first Blvckverse event in one of the Blvck
                      stores
                    </li>
                  </ul>
                  <span className="note astro-DH4DD74X"></span>
                </div>
                <div className="item astro-DH4DD74X">
                  <h3 className="title undefined astro-N4WNZWOJ">
                    MINT phase - BLVCK membership
                  </h3>
                  <span className="date astro-DH4DD74X">Date: Q3 2022</span>
                  <ul className="list astro-DH4DD74X">
                    <li className="list-item astro-DH4DD74X">
                      Web3 implementation on Blvck.com. Holders will be able to
                      connect their wallet to unlock Blvck Alpha Membership.
                    </li>
                    <li className="list-item astro-DH4DD74X">
                      Holders of Blvck Alpha Membership will get discounts on
                      blvck.com &amp; in-store, limited edition physical
                      products and fashion collaborations as well as regular
                      airdrops.
                    </li>
                    <li className="list-item astro-DH4DD74X">
                      First access to WL spots for identified high-potential
                      collections, AMA’s with well-known entrepreneurs, founders
                      &amp; artists of the NFT Space and also from reputable
                      Web2 brands.
                    </li>
                  </ul>
                  <span className="note astro-DH4DD74X"></span>
                </div>
                <div className="item astro-DH4DD74X">
                  <h3 className="title undefined astro-N4WNZWOJ">
                    Blvck verse
                  </h3>
                  <span className="date astro-DH4DD74X">Date: 2023</span>
                  <ul className="list astro-DH4DD74X">
                    <li className="list-item astro-DH4DD74X">
                      Land acquisition in the Web3 Space, launch of Blvck’s
                      first digital store
                    </li>
                    <li className="list-item astro-DH4DD74X">
                      Hiring and teaming up with experts and utilizing the work
                      of in-house developers, 3D artists, creating our own
                      Metaverse, but in Blvck.
                    </li>
                  </ul>
                  <span className="note astro-DH4DD74X"></span>
                </div>
              </div>
            </div>
            <div className="image-container astro-S2U7YMFI"></div>
          </div>
        </div>
      </section>

      <section
        className="container section-tabs tide-title text-left astro-MYW3J2YU"
        id="tabs"
        style={{
          background: `url(${checkedBg}) center / cover no-repeat`,
        }}
      >
        <div id="bg-img" className="bg-img astro-EQ235FEL">
          <div className="container astro-EQ235FEL">
            <div className="tabs astro-EQ235FEL">
              <div className="tabs-header astro-EQ235FEL">
                <button
                  className="tab-control visible astro-EQ235FEL"
                  onClick={() => setCheckedBg("images/blvck_avatar.png")}
                  style={{
                    color:
                      checkedBg === "images/blvck_avatar.png"
                        ? "white"
                        : "#a3a3a3",
                  }}
                >
                  Act I
                </button>
                <button
                  className="tab-control visible astro-EQ235FEL"
                  onClick={() => setCheckedBg("images/video_act_ii.png")}
                  style={{
                    color:
                      checkedBg === "images/video_act_ii.png"
                        ? "white"
                        : "#a3a3a3",
                  }}
                >
                  Act II
                </button>
                <button
                  disabled
                  className="tab-control pending astro-EQ235FEL"
                  onClick={() =>
                    setCheckedBg("images/Video_act_i_Background.jpg")
                  }
                  style={{
                    color:
                      checkedBg === "images/Video_act_i_Background.jpg"
                        ? "white"
                        : "#a3a3a3",
                  }}
                >
                  Act III
                </button>
              </div>
              <div className="tab-content astro-EQ235FEL">
                <div
                  id="tab-1"
                  className="tab-container astro-EQ235FEL"
                  style={{
                    display:
                      checkedBg === "images/blvck_avatar.png"
                        ? "block"
                        : "none",
                  }}
                >
                  <div
                    id="tab-copy-tab-1"
                    className="tab-copy copy-container active astro-EQ235FEL"
                  >
                    <div className="title astro-EQ235FEL">
                      <div className="astro-2Q7GAYXT">
                        <h2 className="section-tabs tide-title text-left astro-2Q7GAYXT">
                          Blvck Phantoms
                        </h2>
                      </div>
                    </div>
                    <p className="tab-description astro-EQ235FEL">
                      Introducing the rarest 10% of the Blvck Genesis NFT
                      collection, the Blvck Phantoms. Characterised by their
                      wings made of light and shining grey skin, the 999
                      Phantoms roam freely in Blvck City. Blvck Phantoms remain
                      emotionless and live without feelings.
                    </p>
                    <button
                      className="play-button astro-EQ235FEL"
                      onClick={() => setIframeView(true)}
                    >
                      <img
                        className="play-icon astro-EQ235FEL"
                        src="images/play-button.svg"
                        alt=""
                      />
                      <span className="astro-EQ235FEL">Play Now</span>
                    </button>
                  </div>
                  <div
                    id="tab-video-tab-1"
                    className="video-container astro-EQ235FEL"
                    style={{ display: iframeView ? "block" : "none" }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/D0_JszR9cuA"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="astro-EQ235FEL"
                    ></iframe>
                    <button
                      className="close-button astro-EQ235FEL"
                      onClick={() => setIframeView(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
                <div
                  id="tab-2"
                  className="tab-container astro-EQ235FEL"
                  style={{
                    display:
                      checkedBg === "images/video_act_ii.png"
                        ? "block"
                        : "none",
                  }}
                >
                  <div
                    id="tab-copy-tab-2"
                    className="tab-copy copy-container active astro-EQ235FEL"
                  >
                    <div className="title astro-EQ235FEL">
                      <div className="astro-2Q7GAYXT">
                        <h2 className="section-tabs tide-title text-left astro-2Q7GAYXT">
                          Blvck Shadows
                        </h2>
                      </div>
                    </div>
                    <p className="tab-description astro-EQ235FEL">
                      Introducing the rarest 1% of Blvck Genesis, the Shadows.
                      There are only 99 of them, characterised by their metallic
                      dark skin and can be found in the depths of Blvck Land.
                      Blvck Shadows are the firstborns of the Blvck Realm, their
                      immortality is under threat in a world tainted by myths.
                      &lt;br/&gt;&lt;br/&gt; Act II depicts the rebellion of the
                      Shadows against the Phantoms to claim what was once
                      theirs. The rise of the Shadows has began.
                    </p>
                    <button
                      className="play-button astro-EQ235FEL"
                      onClick={() => setIframeView(true)}
                    >
                      <img
                        className="play-icon astro-EQ235FEL"
                        src="images/play-button.svg"
                        alt=""
                      />
                      <span className="astro-EQ235FEL">Play Now</span>
                    </button>
                  </div>
                  <div
                    id="tab-video-tab-2"
                    className="video-container astro-EQ235FEL"
                    style={{ display: iframeView ? "block" : "none" }}
                  >
                    <iframe
                      src="https://www.youtube.com/embed/gfmhF5YN4W4"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="astro-EQ235FEL"
                    ></iframe>
                    <button
                      className="close-button astro-EQ235FEL"
                      onClick={() => setIframeView(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
                <div
                  id="tab-3"
                  className="tab-container astro-EQ235FEL"
                  style={{
                    display:
                      checkedBg === "images/Video_act_i_Background.jpg"
                        ? "block"
                        : "none",
                  }}
                >
                  <div
                    id="tab-copy-tab-3"
                    className="tab-copy copy-container active astro-EQ235FEL"
                  >
                    <div className="title astro-EQ235FEL">
                      <div className="astro-2Q7GAYXT">
                        <h2 className="section-tabs tide-title text-left astro-2Q7GAYXT">
                          Blvck Phantoms III
                        </h2>
                      </div>
                    </div>
                    <p className="tab-description astro-EQ235FEL">
                      Introducing the rarest 10% of the Blvck Genesis NFT
                      collection, the Blvck Phantoms. Characterised by their
                      wings made of light and shining grey skin, the 999
                      Phantoms roam freely in Blvck City. Blvck Phantoms remain
                      emotionless and live without feelings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container section-traits centered p-center p-margin-bottom tide-title astro-MYW3J2YU"
        style={{
          background:
            "#000 url(/images/bg_traits.jpg) center / cover no-repeat",
          padding: "0 1rem,0 2rem,0 3rem,0 4rem",
        }}
        id="traits"
      >
        <div className="container section-traits centered p-center p-margin-bottom tide-title astro-NPQH3IAU">
          <div className="container section-traits centered p-center p-margin-bottom tide-title astro-ZT7R6LMX">
            <div className="astro-2Q7GAYXT">
              <h2 className="section-traits centered p-center p-margin-bottom tide-title astro-2Q7GAYXT">
                The Darker, the rarer.
              </h2>
            </div>
            <p className="section-traits centered p-center p-margin-bottom tide-title astro-GIFJMWXA">
              With over 250 High Fashion traits.
            </p>
            <div className="container astro-NRDQPE6A">
              <div className="icon astro-NRDQPE6A">
                <div className="img-container astro-NRDQPE6A">
                  <img
                    src="/images/traits_outfit.png"
                    alt="icon..."
                    width="56"
                    height="42"
                    className="astro-NRDQPE6A"
                  />
                </div>
                <span className="title astro-NRDQPE6A">Outfit</span>
              </div>
              <div className="icon astro-NRDQPE6A">
                <div className="img-container astro-NRDQPE6A">
                  <img
                    src="/images/traits_league.png"
                    alt="icon..."
                    width="56"
                    height="56"
                    className="astro-NRDQPE6A"
                  />
                </div>
                <span className="title astro-NRDQPE6A">League</span>
              </div>
              <div className="icon astro-NRDQPE6A">
                <div className="img-container astro-NRDQPE6A">
                  <img
                    src="/images/traits_tattoo.png"
                    alt="icon..."
                    width="66"
                    height="50"
                    className="astro-NRDQPE6A"
                  />
                </div>
                <span className="title astro-NRDQPE6A">Tattoo</span>
              </div>
              <div className="icon astro-NRDQPE6A">
                <div className="img-container astro-NRDQPE6A">
                  <img
                    src="/images/traits_haircut.png"
                    alt="icon..."
                    width="49"
                    height="54"
                    className="astro-NRDQPE6A"
                  />
                </div>
                <span className="title astro-NRDQPE6A">Haircut</span>
              </div>
              <div className="icon astro-NRDQPE6A">
                <div className="img-container astro-NRDQPE6A">
                  <img
                    src="/images/traits_more.png"
                    alt="icon..."
                    width="55"
                    height="16"
                    className="astro-NRDQPE6A"
                  />
                </div>
                <span className="title astro-NRDQPE6A">More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container section-about centered astro-MYW3J2YU"
        style={{ background: "undefined", padding: "undefined" }}
        id="about"
      >
        <div className="container section-about centered astro-NPQH3IAU">
          <div className="container section-about centered astro-ZT7R6LMX">
            <div className="astro-2Q7GAYXT">
              <h2 className="section-about centered astro-2Q7GAYXT">About</h2>
            </div>
            <p className="section-about centered astro-GIFJMWXA">
              The project is led by Blvck Paris, global lifestyle fashion brand
              founded in 2017 by French designer, Julian O’hayon, endorsed and
              supported by an engaged community with millions of social media
              followers and customers worldwide. Blvck is known for its ‘All
              Black’ clothing, accessories and digital goods. From visual
              content to merchandise, Blvck strives to pioneer an aspirational
              lifestyle pursuing quality and design. In 2021, the brand opened
              stores worldwide in Tokyo, Miami, Taipei, Taichung, Hong Kong and
              Macau and collaborated with tech giant, CASETiFY. In the NFT
              space, Blvck previously introduced three NFT drops on MakersPlace
              and held an event on Decentraland. 
            </p>
          </div>
        </div>
      </section>

      <section
        className="container section-featured height-normal astro-MYW3J2YU"
        style={{ background: "undefined", padding: "undefined" }}
        id="featured"
      >
        <div className="container section-featured height-normal astro-NPQH3IAU">
          <div className="container astro-KCGUJLSS">
            <h2 className="title astro-KCGUJLSS">As seen on</h2>
            <div className="partners astro-KCGUJLSS">
              <img
                key="forbes"
                className="partners-logo-global partners-logo partners-logo-forbes astro-KCGUJLSS"
                src="/images/featured_forbes.png"
                alt="Forbes icon"
                width="111"
                height="28"
              />
              <img
                key="hypebeast"
                className="partners-logo-global partners-logo partners-logo-hypebeast astro-KCGUJLSS"
                src="/images/featured_hypebeast.png"
                alt="Hypebeast icon"
                width="148"
                height="19"
              />
              <img
                key="decentraland"
                className="partners-logo-global partners-logo partners-logo-decentraland astro-KCGUJLSS"
                src="/images/featured_decentraland.png"
                alt="Decenraland icon"
                width="190"
                height="24"
              />
              <img
                key="entrepreneur"
                className="partners-logo-global partners-logo partners-logo-entrepreneur astro-KCGUJLSS"
                src="/images/featured_entrepreneur.png"
                alt="Entrepreneur icon"
                width="192"
                height="38"
              />
              <img
                key="vogue"
                className="partners-logo-global partners-logo partners-logo-vogue astro-KCGUJLSS"
                src="/images/featured_vogue.png"
                alt="Vogue icon"
                width="107"
                height="28"
              />
              <img
                key="makersplace"
                className="partners-logo-global partners-logo partners-logo-makersplace astro-KCGUJLSS"
                src="/images/featured_makersplace.png"
                alt="Makersplace icon"
                width="197"
                height="34"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="container  astro-MYW3J2YU"
        style={{ background: "undefined", padding: "undefined" }}
        id="carousel"
      >
        <astro-root uid="1UNGjH"></astro-root>
      </section>

      <section
        className="container section-team centered astro-MYW3J2YU"
        style={{ background: "undefined", padding: "undefined" }}
        id="team"
      >
        <div className="container section-team centered astro-NPQH3IAU">
          <div className=" astro-TAW5LHPT">
            <div className="astro-2Q7GAYXT">
              <h2 className="undefined astro-2Q7GAYXT">Team</h2>
            </div>
            <div className="item astro-TAW5LHPT">
              <img
                className="item-img astro-TAW5LHPT"
                src="/images/avatars/avatar_01.jpg"
                alt="Julian O’hayon"
              />
              <span className="item-name astro-TAW5LHPT">Julian O’hayon</span>
              <span className="item-role astro-TAW5LHPT">
                Founder & Designer of Blvck
              </span>
            </div>
            <div className="social-wrapper astro-TAW5LHPT">
              <div className="social astro-X5IW3DTJ">
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="link  astro-HFYL4P3C"
                  href="https://instagram.com/anckor"
                >
                  <img
                    src="/images/social_instagram.png"
                    alt="icon"
                    width="auto"
                    height="40"
                    className="undefined astro-EY3R7A52"
                  />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="link  astro-HFYL4P3C"
                  href="https://makersplace.com/blvck/"
                >
                  <img
                    src="/images/social_mp.png"
                    alt="icon"
                    width="auto"
                    height="40"
                    className="undefined astro-EY3R7A52"
                  />
                </a>
              </div>
            </div>
            <div className="items-grid astro-TAW5LHPT">
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_02.jpg"
                  alt="Goran"
                />
                <span className="item-name astro-TAW5LHPT">Goran</span>
                <span className="item-role astro-TAW5LHPT">
                  Chief Metaverse
                </span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_03.jpg"
                  alt="Thomas"
                />
                <span className="item-name astro-TAW5LHPT">Thomas</span>
                <span className="item-role astro-TAW5LHPT">Strategy</span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_04.jpg"
                  alt="Yukai"
                />
                <span className="item-name astro-TAW5LHPT">Yukai</span>
                <span className="item-role astro-TAW5LHPT">
                  Asia Distribution
                </span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_05.jpg"
                  alt="Axel"
                />
                <span className="item-name astro-TAW5LHPT">Axel</span>
                <span className="item-role astro-TAW5LHPT">
                  Discord Manager
                </span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_06.jpg"
                  alt="Drako"
                />
                <span className="item-name astro-TAW5LHPT">Drako</span>
                <span className="item-role astro-TAW5LHPT">
                  Community Manager
                </span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_07.jpg"
                  alt="Steffi"
                />
                <span className="item-name astro-TAW5LHPT">Steffi</span>
                <span className="item-role astro-TAW5LHPT">
                  Community Manager
                </span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_08.jpg"
                  alt="Zoran"
                />
                <span className="item-name astro-TAW5LHPT">Zoran</span>
                <span className="item-role astro-TAW5LHPT">
                  Head of Cinematic
                </span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_09.jpg"
                  alt="Ludo"
                />
                <span className="item-name astro-TAW5LHPT">Ludo</span>
                <span className="item-role astro-TAW5LHPT">
                  Unreal Engine Dev
                </span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_10.jpg"
                  alt="Jonathan"
                />
                <span className="item-name astro-TAW5LHPT">Jonathan</span>
                <span className="item-role astro-TAW5LHPT">Marketing</span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_11.jpg"
                  alt="Vic"
                />
                <span className="item-name astro-TAW5LHPT">Vic</span>
                <span className="item-role astro-TAW5LHPT">3D Designer</span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_12.jpg"
                  alt="Diorele"
                />
                <span className="item-name astro-TAW5LHPT">Diorele</span>
                <span className="item-role astro-TAW5LHPT">Illustrator</span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="/images/avatars/avatar_13.jpg"
                  alt="Richard"
                />
                <span className="item-name astro-TAW5LHPT">Richard</span>
                <span className="item-role astro-TAW5LHPT">Legal</span>
              </div>
              <div className="item astro-TAW5LHPT">
                <img
                  className="item-img astro-TAW5LHPT"
                  src="https://img.seadn.io/files/a4b954ebab8a6806729f4ef32bd0d3f1.png?fit=max&#38;w=320"
                  alt="Remy Bigot"
                />
                <span className="item-name astro-TAW5LHPT">Remy Bigot</span>
                <span className="item-role astro-TAW5LHPT">
                  Community Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="container section-coinsilium centered astro-MYW3J2YU"
        style={{
          background:
            "linear-gradient(20deg, rgba(85,91,103,1) 0%, rgba(17,19,23,1) 80%)",
          padding: "undefined",
        }}
        id="coinsilium"
      >
        <div className="container section-coinsilium centered astro-NPQH3IAU">
          <div className="container section-coinsilium centered astro-ZT7R6LMX">
            <div className="astro-2Q7GAYXT">
              <h2 className="section-coinsilium centered astro-2Q7GAYXT">
                <span className="small-title">BACKED BY</span>
                <br />
                <img
                  src="/images/logo_coinsilium@2x.png"
                  alt="Coinsilium logo"
                  width="230"
                />
              </h2>
            </div>
            <p className="section-coinsilium centered astro-GIFJMWXA">
              Coinsilium is a focused Blockchain venture operator based in
              Gibraltar. In 2015, Coinsilium became the first blockchain company
              to IPO. The Company is a highly regarded innovator with proven
              technological and commercial expertise and development
              capabilities in the NFT arena and also within Open Finance.
            </p>
          </div>
        </div>
      </section>

      <section
        className="container section-horagames leading-lg astro-MYW3J2YU"
        id="horagames"
      >
        <div className="container section-horagames leading-lg astro-NPQH3IAU">
          <div className="container section-horagames leading-lg astro-ZT7R6LMX">
            <div className="astro-2Q7GAYXT">
              <h2 className="section-horagames leading-lg astro-2Q7GAYXT">
                <img
                  src="/images/blvck_x_horagames.png"
                  alt="Blvck x Hora Games logo"
                  width="100%"
                  style={{ maxWidth: "500px" }}
                />
              </h2>
            </div>
            <p className="section-horagames leading-lg astro-GIFJMWXA">
              To make this collection truly unique & a next-level experience,
              Blvck partnered up with Hora Games, who established themselves as
              one of the pioneers in the play-to-earn (P2E) gaming genre. Their
              project Crypto Idle Miner propelled them into a casual gaming
              sphere with a never-seen-before concept, rewarding players based
              on their leaderboard position. Hora Games is one of the first P2E
              companies that successfully launched their project on Google Play
              & App Store in 2019. Today, they have over 700,000 downloads on
              both platforms!
            </p>
            <p className="section-horagames leading-lg astro-GIFJMWXA">
              Now, we are expanding their metaverse experience to include NFT
              playable content, making this collaboration even more innovative,
              exciting, and exclusive!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
