import useFetch from '../hooks/useFetch'; // Import the custom hook

const Home = () => {
  // Use the custom hook to fetch data from the server
  const { data, isLoading, error } = useFetch("http://localhost:5000/admin/approvedExperts");

  // Log the fetched data to inspect its structure
  console.log("Data fetched:", data);

  return (
    <div className="page">
      <section className="about-site">
        <h2>About Our Site</h2>
        <p>
          Safe Space is dedicated to raising awareness and providing resources to combat challenges such as
          cyberbullying, sexual harassment, and eating disorders. Our goal is to create a supportive community
          where everyone feels safe and empowered by receiving help from trusted professionals.
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

        {isLoading && <p>Loading experts...</p>}
        {error && <p className="error">{error}</p>}

        <div className="expert-profiles">
          {data && data.data ? (
            data.data.map(expert => (
              <div className="expert" key={expert._id}>
                <h3>{expert.expertName}</h3>
                <p>{expert.about}</p>
              </div>
            ))
          ) : (
            <p>No experts available at the moment.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
