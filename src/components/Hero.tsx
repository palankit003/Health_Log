import Style from "./Hero.module.css"
const Hero = () => {
  return (
    <main className={Style.main}>
    <p>
      Welcome to Health Log, your one-stop destination for all your health and
      fitness needs!
      {/* Our website is designed to provide you with expert advice
      and guidance on leading a healthy lifestyle, as well as access to a
      variety of health-related products and services. */}
    </p>
    <button>
      Login
    </button>
    <button>
      Sign Up
    </button>
    </main>
  );
};

export default Hero;
