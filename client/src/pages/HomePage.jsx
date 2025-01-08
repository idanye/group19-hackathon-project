
const Home = () => {
  return (
      <div className="page">
          <h1 className="headline">Stay Safe</h1>
          <section className="about-site">
              <h2>About Our Site</h2>
              <p>
                  Stay Safe is dedicated to raising awareness and providing resources to combat challenges such as
                  cyberbullying, sexual harassment, and eating disorders. Our goal is to create a supportive community
                  where everyone feels safe and empowered by receiving help by trusted professionals.
              </p>
          </section>

          <section className="about-team">
              <h2>About Us</h2>
              <p>We are 4 Computer Science graduates taking part in the QueenB X AppsFlyer - BeSafe Hackathon 2025</p>
              <div className="team-members">
                  <div className="team-member">
                      <h3>Tal Cohen
                          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"
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
                      <h3>Eti Revach
                          <a href="" target="_blank" rel="noopener noreferrer"
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
      </div>
  );
};

export default Home;
