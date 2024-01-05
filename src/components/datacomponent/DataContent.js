import arrow_image from "../../images/arrow.png";
import filter_image from "../../images/filter-img.png";
import notification_image from "../../images/notification-no.png";
import trending_image from "../../images/trending.png";

const Datacontent = () => {
  return (
    <div class="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
      <div class="all-repository-container flex flex-col">
        <div class="search-repository-heading">
          <div class="heading-search-repo-wrapper">
            <span class="heading-search-repo">Top Repositories</span>
          </div>
          <div class="new-repo-container-wrapper">
            <div class="new-repo-container pl-1 pr-1">
              <i class="fa-solid fa-floppy-disk m-1 "></i>
              <input
                class="new-repo-button text-xs"
                type="button"
                value="New"
              ></input>
            </div>
          </div>
        </div>
        <input
          class="mt-5 p-2 text-sm bg-black"
          id="find-repo-text"
          type="text"
          placeholder="Find a repository.."
        />
        <div class="repo-links">
          <img
            class="demo-img"
            src="https://avatars.githubusercontent.com/u/77850077?s=40&v=4"
          ></img>
          <a href="https://www.google.com">Shashankthapa/demo-repo</a>
        </div>
        <div>
          <div id="recent-activity-heading">Recent Activity</div>
          <div class="recent-activity-border-box">
            When you take actions across GitHub, we’ll provide links to that
            activity here.
          </div>
        </div>
      </div>

      <div class="home-updates-container col-span-2">
        <div class="heading flex items-center">
          <div class="text-md p-2 font-bold">Home</div>

          <div class="flex w-full justify-end">
            <div class="pr-2">Send feedback</div>
          </div>

          <div class="filter-container">
            <img class="filter-img" src={filter_image}></img>
            <input class="filter-button" type="submit" value="Filter"></input>
            <img class="notification-img" src={notification_image}></img>
          </div>
        </div>

        <div class="updates-homepage-feed">
          <div class="updates-heading">Updates to your homepage feed..</div>
          <div class="updates-desc">
            We've combined the power of the Following feed with the For you feed
            so there’s one place to discover content on GitHub. There’s improved
            filtering so you can customize your feed exactly how you like it,
            and a shiny new visual design. ✨
          </div>
          <div class="updates-link">Learn More</div>
        </div>

        <div class="user-updates">
          <div class="user-heading-container">
            <img
              class="face"
              src="https://avatars.githubusercontent.com/u/76707560?s=80&v=4"
            ></img>
            <div class="user-heading">
              Shashank thapa{" "}
              <span id="user-heading-small">shared a repository.</span>
            </div>
          </div>
          <div class="user-content-container">
            <div id="user-content-heading-container">
              <div id="user-content-heading">
                <img
                  class="demo-img"
                  src="https://avatars.githubusercontent.com/u/77850077?s=40&v=4"
                ></img>
                <div class="user-content-heading">Shashankthapa/stats</div>
                <div class="user-content-star">
                  <div class="user-content-star-container">
                    <i class="star-icon fa-regular fa-star"></i>
                    <div class="user-star-button">Star</div>
                    <select class="user-content-star-select"></select>
                  </div>
                </div>
              </div>
              <div class="user-content-desc">
                Valorant statistics bot built with Discord.js using MongoDB
              </div>
              <div class="user-content-footer">
                <img
                  class="demo-img"
                  src="https://avatars.githubusercontent.com/u/77850077?s=40&v=4"
                ></img>
                <div id="language-desc">Javascript</div>
                <i class="star-icon-footer fa-regular fa-star"></i>
                <div class="rating-no">49</div>
              </div>
            </div>
          </div>
        </div>

        <div class="trending-updates">
          <div class="trending-updates-one">
            <div class="trending-updates-heading">
              <img id="trending-img" src="{trending_image}"></img>
              <div id="trending-heading">Trending repositories . </div>
              <a id="trending-see-more" href="">
                See more
              </a>
              <div class="activity-container">
                <div class="activity"></div>
              </div>
            </div>
            <div class="trending-updates-heading">
              <img
                class="demo-img"
                src="https://avatars.githubusercontent.com/u/77850077?s=40&v=4"
              ></img>
              <div class="user-content-heading">Frooodle/Stirling-PDF</div>
              <div class="user-content-star">
                <div class="user-content-star-container">
                  <i class="star-icon fa-regular fa-star"></i>
                  <div class="user-star-button">Star</div>
                  <select class="user-content-star-select"></select>
                </div>
              </div>
            </div>
            <div class="trending-updates-desc">
              locally hosted web application that allows you to perform various
              operations on PDF files
            </div>
            <div class="user-content-footer">
              <img
                class="demo-img"
                src="https://avatars.githubusercontent.com/u/77850077?s=40&v=4"
              ></img>
              <div id="language-desc">Javascript</div>
              <i class="star-icon-footer fa-regular fa-star"></i>
              <div class="rating-no">49</div>
            </div>
          </div>

          <div class="line"></div>

          <div class="trending-updates-one">
            <div class="trending-updates-heading">
              <img id="trending-img" src={trending_image}></img>
              <div id="trending-heading">Trending repositories . </div>
              <a id="trending-see-more" href="">
                See more
              </a>
              <div class="activity-container">
                <div class="activity"></div>
              </div>
            </div>
            <div class="trending-updates-heading">
              <img
                class="demo-img"
                src="https://avatars.githubusercontent.com/u/77850077?s=40&v=4"
              ></img>
              <div class="user-content-heading">Frooodle/Stirling-PDF</div>
              <div class="user-content-star">
                <div class="user-content-star-container">
                  <i class="star-icon fa-regular fa-star"></i>
                  <div class="user-star-button">Star</div>
                  <select class="user-content-star-select"></select>
                </div>
              </div>
            </div>
            <div class="trending-updates-desc">
              locally hosted web application that allows you to perform various
              operations on PDF files
            </div>
            <div class="user-content-footer">
              <img
                class="demo-img"
                src="https://avatars.githubusercontent.com/u/77850077?s=40&v=4"
              ></img>
              <div id="language-desc">Javascript</div>
              <i class="star-icon-footer fa-regular fa-star"></i>
              <div class="rating-no">49</div>
            </div>
          </div>
        </div>

        <div class="footer-center">
          <div class="github-footer-icon-logo">
            <i class="fa-brands fa-github"></i>
            <p class="copyright-icon">© 2023 Github, Inc.</p>
          </div>
          <div class="footer-links-wrapper">
            <div class="footer-links">
              <div class="links">Blog</div>
              <div class="links">About</div>
              <div class="links">Shop</div>
              <div class="contact-github-link">Contact Github</div>
              <div class="links">Pricing</div>
            </div>
            <div class="footer-links">
              <div class="links">API</div>
              <div class="links">Training</div>
              <div class="links">Status</div>
              <div class="links">Security</div>
            </div>
            <div class="footer-links">
              <div class="links">Privacy</div>
              <div class="links">Terms</div>
              <div class="links">Docs</div>
            </div>
          </div>
        </div>
      </div>

      <div class="features-container">
        <section class="learning-container">
          <div id="learning-heading-main">
            <i class="fa-brands fa-github"></i>
            <span id="heading-pathway">Learning Pathways</span>
          </div>

          <p class="learning-heading">Learn from the best</p>

          <p class="learning-desc">
            Unlock the full power of GitHub! Gain expertise and insights from
            top organizations through guided tutorials, boosting productivity,
            enhancing security, and enabling seamless collaboration.
          </p>

          <button class="learning-button">Start Learning</button>
        </section>

        <section class="latest-changes-container">
          <h4 class="latest-changes-heading">Latest Changes</h4>
          <div class="list-changes">
            <div class="changes">
              <div class="changes-heading">
                <div class="dot"></div>
                <div class="changes-week">Last Week</div>
              </div>
              <div class="changes-desc">
                Canva is now a GitHub secret scanning partner
              </div>
            </div>
            <div class="changes">
              <div class="changes-heading">
                <div class="dot"></div>
                <div class="changes-week">Last Week</div>
              </div>
              <div class="changes-desc">
                Codespaces host image upgrades Docker and compose
              </div>
            </div>
            <div class="changes">
              <div class="changes-heading">
                <div class="dot"></div>
                <div class="changes-week">Last Week</div>
              </div>
              <div class="changes-desc">
                Code scanning is now more adaptable to your codebase with CodeQL
                threat model settings for Java (beta)
              </div>
              <div class="changes-link-wrapper">
                <a id="changes-link" href="#">
                  View changelog
                </a>
                <img class="invert-[.5] w-4" src={arrow_image} />
              </div>
            </div>
          </div>
        </section>

        <section class="explore-repo">
          <div class="explore-repo-heading">Explore repository</div>
          <div class="list-repo">
            <div class="my-5 ml-3 flex items-center">
              <i class="fa-brands fa-microsoft "></i>
              <a class="list-repo-heading-link" href="">
                microsoft/winget-pkgs
              </a>
              <div class="list-repo-star flex justify-center px-3 py-1 lg:ml-15 md:ml-10 sm:ml-96">
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div class="list-repo-desc">
              <p>
                The Microsoft community Windows Package Manager manifest
                repository
              </p>
              <a class="list-repo-desc-link" href="">
                Learn more
              </a>
            </div>
            <div class="list-repo-footer">
              <i class="star-icon-footer fa-regular fa-star"></i>
              <div class="rating-no">2.5k</div>
              <div class="lang-img"></div>
              <div class="lang text-xs">C++</div>
            </div>
          </div>

          <div class="repo-line"></div>

          <div class="list-repo">
            <div class="my-5 ml-3 flex items-center">
              <i class="fa-brands fa-microsoft"></i>
              <a class="list-repo-heading-link" href="">
                microsoft/winget-pkgs
              </a>
              <div class="list-repo-star flex justify-center px-3 py-1 lg:ml-10 md:ml-10 sm:ml-96">
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div class="list-repo-desc">
              <p>
                The Microsoft community Windows Package Manager manifest
                repository
              </p>
              <a class="list-repo-desc-link" href="">
                Learn more
              </a>
            </div>
            <div class="list-repo-footer">
              <i class="star-icon-footer fa-regular fa-star"></i>
              <div class="rating-no">2.5k</div>
              <div class="lang-img"></div>
              <div class="lang text-xs">Java</div>
            </div>
          </div>

          <div class="repo-line"></div>

          <div class="list-repo">
            <div class="my-5 ml-3 flex items-center">
              <i class="fa-brands fa-microsoft"></i>
              <a class="list-repo-heading-link" href="">
                microsoft/winget-pkgs
              </a>

              <div class="list-repo-star flex justify-center px-3 py-1 lg:ml-10 md:ml-10 sm:ml-96">
                <i class="fa-regular fa-star"></i>
              </div>
            </div>
            <div class="list-repo-desc">
              <p>
                The Microsoft community Windows Package Manager manifest
                repository
              </p>
              <a class="list-repo-desc-link" href="">
                Learn more
              </a>
            </div>
            <div class="list-repo-footer">
              <i class="star-icon-footer fa-regular fa-star"></i>
              <div class="rating-no">2.5k</div>
              <div class="lang-img"></div>
              <div class="lang text-xs">Python</div>
            </div>
            <div class="list-repo-explore flex items-center py-2">
              <a class="text-sm mb-3 ml-5 mr-2" href="#">
                Explore more
              </a>
              <img class="mb-2 w-3 invert" src={arrow_image} />
            </div>
          </div>
        </section>

        <div class="footer-center-breakpoint text-white flex mt-10 items-center">
          <div class="github-footer-icon-logo">
            <i class="fa-brands fa-github"></i>
            <p class="copyright-icon">© 2023 Github, Inc.</p>
          </div>
          <div class="footer-links-wrapper">
            <div class="footer-links">
              <div class="links">Blog</div>
              <div class="links">About</div>
              <div class="links">Shop</div>
              <div class="contact-github-link">Contact Github</div>
              <div class="links">Pricing</div>
            </div>
            <div class="footer-links">
              <div class="links">API</div>
              <div class="links">Training</div>
              <div class="links">Status</div>
              <div class="links">Security</div>
            </div>
            <div class="footer-links">
              <div class="links">Privacy</div>
              <div class="links">Terms</div>
              <div class="links">Docs</div>
            </div>
          </div>
        </div>

        <div class="repo-line-last w-100 m-4"></div>
      </div>
    </div>
  );
};

export default Datacontent;
