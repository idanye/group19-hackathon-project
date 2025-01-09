
const Home = () => {
  return (
      <div className="page">
          <section className="about-site">
              <h2>About Our Site</h2>
              <p>
                  Safe Space is dedicated to raising awareness and providing resources to combat challenges such as
                  cyberbullying, sexual harassment, and eating disorders. Our goal is to create a supportive community
                  where everyone feels safe and empowered by receiving help by trusted professionals.
              </p>
          </section>

          <section className="about-team">
              <h2>About Us</h2>
              <p>We are four Computer Science graduates taking part in the QueenB X AppsFlyer - BeSafe Hackathon
                  2025</p>
              <div className="team-members">
                  <div className="team-member">
                      <h3>Tal Cohen
                          <a href="https://www.linkedin.com/in/talcohen98/" target="_blank" rel="noopener noreferrer"
                             className="linkedin-icon">
                              <i className="fab fa-linkedin"></i>
                          </a>
                      </h3>
                  </div>
                  <div className="team-member">
                      <h3>Idan Yehiel
                          <a href="https://www.linkedin.com/in/idan-yehiel1/" target="_blank" rel="noopener noreferrer"
                             className="linkedin-icon">
                              <i className="fab fa-linkedin"></i>
                          </a>
                      </h3>
                  </div>
                  <div className="team-member">
                      <h3>Etti Revach
                          <a href="https://www.linkedin.com/in/etti-revach/" target="_blank" rel="noopener noreferrer"
                             className="linkedin-icon">
                              <i className="fab fa-linkedin"></i>
                          </a>
                      </h3>
                  </div>
                  <div className="team-member">
                      <h3>Gal Itzhak
                          <a href="https://www.linkedin.com/in/gal-itzhak-358203278/" target="_blank"
                             rel="noopener noreferrer"
                             className="linkedin-icon">
                              <i className="fab fa-linkedin"></i>
                          </a>
                      </h3>
                  </div>
              </div>
          </section>
          <section className="about-experts">
              <h2>About Our Experts</h2>
              <div className="expert-profiles">
                  <div className="expert">
                      <h3>Dr. Emma Carter</h3>
                      <p>Psychologist with 15 years of experience in counseling individuals affected by cyberbullying
                          and mental health challenges.</p>
                  </div>
                  <div className="expert">
                      <h3>Prof. Michael Adams</h3>
                      <p>Renowned sociologist specializing in the societal impacts of sexual harassment and advocacy for
                          systemic change.</p>
                  </div>
                  <div className="expert">
                      <h3>Dr. Olivia Taylor</h3>
                      <p>Nutritionist and author focusing on eating disorders and body positivity, with a passion for
                          promoting healthy lifestyles.</p>
                  </div>
              </div>
          </section>
      </div>
  );
};

export default Home;
