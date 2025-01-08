import './Hero.css';

const Hero = () => {
  return <section className="hero-container">
    <div className="hero-content">
    <h2>Building Digital Experiences that Inspire</h2>
    <p>
        Passionate Frontend Developer | Transforming Ideas into Seamless and 
        Visually Stunning Web Solution
    </p>
    </div>
    <div className="hero-img">
        <div>
            <div className="tech-icon">
                <img src="https://i.pinimg.com/736x/d6/11/0b/d6110bcec86d1c22c11105456324f7e4.jpg" alt="" />
            </div>
            <img src="https://i.pinimg.com/736x/f8/82/79/f88279ca98f7cbba74d9f68e89700c44.jpg" alt="" />
        </div>
        <div>
            <div className="tech-icon">
                <img src="https://i.pinimg.com/736x/5f/cf/5e/5fcf5e85b1e3ed4afcb17aa38d774a31.jpg" alt="" />
            </div>

            <div className="tech-icon">
                <img src="https://i.pinimg.com/736x/a0/de/c1/a0dec1f29c4c65fc3cc6a4546095d72c.jpg" alt="" />
            </div>
            <div className="tech-icon">
                <img src="https://i.pinimg.com/736x/79/9d/07/799d0731d1aa0a3cf96847b0221a9df3.jpg" alt="" />
            </div>
        </div>
    </div>
  </section>
};

export default Hero;