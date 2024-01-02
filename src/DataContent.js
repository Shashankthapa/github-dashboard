const Datacontent = () => {
	return (
		<div id="container">
			<div id="div-left">
				<div class = "search-repository-heading">
					<span class="heading-search-repo">Top Repositories</span>
					<div class="new-repo-container">
						<i class="new-repo-image fa-solid fa-floppy-disk"></i>
						<input class="new-repo-button" type="button" value="new"></input>
					</div>
				</div>
				<input id="find-repo-text" type="text" placeholder="Find a repository.." />
				<div class="links">
					
					<img class = "demo-img" src = "https://avatars.githubusercontent.com/u/77850077?s=40&v=4"></img>
					<a href="https://www.google.com">Shashankthapa/demo-repo</a>
				</div>
				<div>
					<div id = "recent-activity-heading">Recent Activity</div>
					<div class = "recent-activity-border-box">
					When you take actions across GitHub, we’ll provide links to that activity here.
					</div>
				</div>

			</div>
			<div class="home-updates-container">
				<div class="heading">
					<div id="heading-m">Home</div>
					<div class="feedback-container" href="">
						<div class = "feedback-link">Send feedback</div>
					</div>
					<div class = "filter-container">
						<img class = "filter-img" src = {require("./images/filter-img.png")}></img>
						<input class = "filter-button" type = "submit" value = "Filter"></input>
						<img class = "notification-img" src = {require("./images/notification-no.png")}></img>
					</div>
				</div>
				<div class="updates-homepage-feed">
					<div class ="updates-heading">Updates to your homepage feed..</div>
					<div class = "updates-desc">We've combined the power of the Following feed with the For you feed so there’s one place to discover content on GitHub. There’s improved filtering so you can customize your feed exactly how you like it, and a shiny new visual design. ✨</div>
					<div class = "updates-link">Learn More</div>
				</div>
				<div class="user-updates">
					<div class = "user-heading-container">
						<img class = "face" src = "https://avatars.githubusercontent.com/u/76707560?s=80&v=4"></img>
						<div class ="user-heading">Shashank thapa <span id = "user-heading-small">shared a repository.</span></div>
					</div>
					<div class = "user-content-container">
						<div id = "user-content-heading-container">
							<div id = "user-content-heading">
								<img class = "demo-img" src = "https://avatars.githubusercontent.com/u/77850077?s=40&v=4"></img>
								<div class ="user-content-heading">Shashankthapa/stats</div>
								<div class = "user-content-star">
									<div class = "user-content-star-container">
										<i class="star-icon fa-regular fa-star"></i>
										<div class = "user-star-button">Star</div>
										<select class = "user-content-star-select">
										</select>
									</div>
								</div>
							</div>
							<div class = "user-content-desc">
								Valorant statistics bot built with Discord.js using MongoDB
							</div>
							<div class = "user-content-footer">
								<img class = "demo-img" src = "https://avatars.githubusercontent.com/u/77850077?s=40&v=4"></img>
								<div id = "language-desc">Javascript</div>
								<i class="star-icon-footer fa-regular fa-star"></i>
								<div class ="rating-no">49</div>
							</div>
						</div>
				</div>
				</div>
				<div class="trending-updates">	
					<div class = "trending-updates-one">
						<div class = "trending-updates-heading">
							<img id = "trending-img" src = {require("./images/trending.png")}></img>
							<div id = "trending-heading">Trending repositories . </div>
							<a id = "trending-see-more" href = "">See more</a>
							<div class = "activity-container">
								<div class = "activity"></div>
							</div>
						</div>
						<div class = "trending-updates-heading">
							<img class = "demo-img" src = "https://avatars.githubusercontent.com/u/77850077?s=40&v=4"></img>
							<div class ="user-content-heading">Frooodle/Stirling-PDF</div>
							<div class = "user-content-star">
								<div class = "user-content-star-container">
									<i class="star-icon fa-regular fa-star"></i>
									<div class = "user-star-button">Star</div>
									<select class = "user-content-star-select">
									</select>
								</div>
							</div>
						</div>
						<div class = "trending-updates-desc">
							locally hosted web application that allows you to perform various operations on PDF files
						</div>	
						<div class = "user-content-footer">
							<img class = "demo-img" src = "https://avatars.githubusercontent.com/u/77850077?s=40&v=4"></img>
							<div id = "language-desc">Javascript</div>
							<i class="star-icon-footer fa-regular fa-star"></i>
							<div class ="rating-no">49</div>
						</div>
						</div>
					<div class = "line"></div>
					<div class = "trending-updates-one">
						<div class = "trending-updates-heading">
							<img id = "trending-img" src = {require("./images/trending.png")}></img>
							<div id = "trending-heading">Trending repositories . </div>
							<a id = "trending-see-more" href = "">See more</a>
							<div class = "activity-container">
								<div class = "activity"></div>
							</div>
						</div>
						<div class = "trending-updates-heading">
							<img class = "demo-img" src = "https://avatars.githubusercontent.com/u/77850077?s=40&v=4"></img>
							<div class ="user-content-heading">Frooodle/Stirling-PDF</div>
							<div class = "user-content-star">
								<div class = "user-content-star-container">
									<i class="star-icon fa-regular fa-star"></i>
									<div class = "user-star-button">Star</div>
									<select class = "user-content-star-select">
									</select>
								</div>
							</div>
						</div>
						<div class = "trending-updates-desc">
							locally hosted web application that allows you to perform various operations on PDF files
						</div>	
						<div class = "user-content-footer">
							<img class = "demo-img" src = "https://avatars.githubusercontent.com/u/77850077?s=40&v=4"></img>
							<div id = "language-desc">Javascript</div>
							<i class="star-icon-footer fa-regular fa-star"></i>
							<div class ="rating-no">49</div>
						</div>
					</div>
				</div>

				<div id="footer-center">
					<div class = "github-footer-icon-logo">
						<i class="fa-brands fa-github"></i>
						<p class = "copyright-icon">© 2023 Github, Inc.</p>
					</div>
          <div class = "footer-links-wrapper">
            <div class = "footer-links">
              <div class="links">Blog</div>
              <div class="links">About</div>
              <div class="links">Shop</div>
              <div class="contact-github-link">Contact Github</div>
              <div class="links">Pricing</div>
            </div>
            <div class = "footer-links">
              <div class ="links">API</div>
              <div class ="links">Training</div>
              <div class ="links">Status</div>
              <div class ="links">Security</div>
            </div>
            <div class = "footer-links">
              <div class = "links">Privacy</div>
              <div class = "links">Terms</div>
              <div class = "links">Docs</div>
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

					<p class="learning-desc">Unlock the full power of GitHub! Gain expertise and insights from top organizations through guided tutorials, boosting productivity, enhancing security, and enabling seamless collaboration.</p>

					<button class="learning-button">Start Learning</button>
				</section>

				<section class = "latest-changes-container">
          <h4 class = "latest-changes-heading">Latest Changes</h4>		
          <div class = "list-changes">
            <div class = "changes">
              <div class = "changes-heading">
                <div class = "dot"></div>
                <div class = "changes-week">Last Week</div>
              </div>
              <div class = "changes-desc">Canva is now a GitHub secret scanning partner</div>
            </div>
            <div class = "changes">
              <div class = "changes-heading">
                <div class = "dot"></div>
                <div class = "changes-week">Last Week</div>
              </div>
              <div class = "changes-desc">
                Codespaces host image upgrades Docker and compose
              </div>
            </div>
            <div class = "changes">
              <div class = "changes-heading">
                <div class = "dot"></div>
                <div class = "changes-week">Last Week</div>
              </div>
              <div class = "changes-desc">
                Code scanning is now more adaptable to your codebase with CodeQL threat model settings for Java (beta)
              </div>
            </div>
          </div>
				</section>


				<section class="explore-repo">
					<div class="explore-repo-heading">Explore repository</div>
					<div class="list-repo">
						<div class="list-repo-heading-container">
							<i class="fa-brands fa-microsoft"></i>
							<a class="list-repo-heading-link" href="">microsoft/winget-pkgs</a>
						</div>
						<div class="list-repo-desc">
							<p>The Microsoft community Windows Package Manager manifest repository</p>
							<a class = "list-repo-desc-link" href="">Learn more</a>
						</div>
						<div class = "list-repo-footer">
							<i class="star-icon-footer fa-regular fa-star"></i>
							<div class ="rating-no">2.5k</div>
							<div class = "lang-img"></div>
							<div class = "lang">C++</div>
						</div>
          </div>

					<div class = "repo-line"></div>
					
					<div class="list-repo">
						<div class="list-repo-heading-container">
							<i class="fa-brands fa-microsoft"></i>
							<a class="list-repo-heading-link" href="">microsoft/winget-pkgs</a>
						</div>
						<div class="list-repo-desc">
							<p>The Microsoft community Windows Package Manager manifest repository</p>
							<a class = "list-repo-desc-link" href="">Learn more</a>
						</div>
						<div class = "list-repo-footer">
							<i class="star-icon-footer fa-regular fa-star"></i>
							<div class ="rating-no">2.5k</div>
							<div class = "lang-img"></div>
							<div class = "lang">Java</div>
						</div>
          </div>
						
          <div class = "repo-line"></div>
					
					<div class="list-repo">
						<div class="list-repo-heading-container">
							<i class="fa-brands fa-microsoft"></i>
							<a class="list-repo-heading-link" href="">microsoft/winget-pkgs</a>
						</div>
						<div class="list-repo-desc">
							<p>The Microsoft community Windows Package Manager manifest repository</p>
							<a class = "list-repo-desc-link" href="">Learn more</a>
						</div>
						<div class = "list-repo-footer">
							<i class="star-icon-footer fa-regular fa-star"></i>
							<div class ="rating-no">2.5k</div>
							<div class = "lang-img"></div>
							<div class = "lang">Python</div>
						</div>
						<div class = "repo-line"></div>
					</div>
				</section>

			</div>
		</div>
	);
}

export default Datacontent;