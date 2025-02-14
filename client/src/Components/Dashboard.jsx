export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <div className="company-info">
          <h2>About Us</h2>
          <p>
            We are a leading company offering high-quality services in
            Cybersecurity, Networking, and Web & App Development. Our mission is
            to provide top-notch solutions to safeguard your digital presence,
            optimize network performance, and build innovative applications.
          </p>
        </div>

        <div className="services-info">
          <h3>Our Services</h3>
          <div className="service-cards">
            <div className="service-card">
              <h4>Cybersecurity</h4>
              <p>
                Protect your business from online threats and ensure a secure
                digital environment.
              </p>
            </div>
            <div className="service-card">
              <h4>Networking</h4>
              <p>
                Optimize your network and improve connectivity for better
                business performance.
              </p>
            </div>
            <div className="service-card">
              <h4>Web & App Development</h4>
              <p>
                Build custom websites and mobile applications tailored to your
                business needs.
              </p>
            </div>
          </div>
        </div>

        <div className="images-section">
          <h3>Our Work</h3>
          <div className="images-container">
            <div className="image-item">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Cybersecurity"
              />
              <p>Cybersecurity Solutions</p>
            </div>
            <div className="image-item">
              <img src="https://via.placeholder.com/300x200" alt="Networking" />
              <p>Networking Solutions</p>
            </div>
            <div className="image-item">
              <img src="https://via.placeholder.com/300x200" alt="Web & App" />
              <p>Web & App Development</p>
            </div>
          </div>
        </div>

        <div className="moving-text">
          <h3>
            We provide cutting-edge Cybersecurity, Networking, and Web & App
            Development services to help your business grow and thrive in the
            digital age.
          </h3>
        </div>
      </div>
    </>
  );
}
