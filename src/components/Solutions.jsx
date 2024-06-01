import useIntersectionObserver from "./useIntersectionObserver";
import { useRef, useState } from "react";
import "./Solutions.css";
import Implementation from "./Implementation";
import TheProblem from "./TheProblem";
import TheTech from "./TheTech";
import Optimizing from "./Optimizing";
import KeyBenefits from "./KeyBenefits";
import HowItWorks from "./HowItWorks";
import KeyBenefitsPredictive from "./KeyBenefits_predictive";
import KeyMetrics from "./KeyMetrics";
import bg from "../img/background.jpg";
import emailjs from "emailjs-com";

const Solutions = ({ theme, language }) => {
  const sectionRef = useRef();
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.03 });
  const [showForm, setShowForm] = useState(false);
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(serviceId, templateId, e.target, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };

  return (
    <div className={`${isVisible ? "fade-in" : "fade-out"}`} ref={sectionRef}>
      <div className={`solutions-section ${theme}`} id="predictive">
        {language == "en" ? (
          <>
            <div className="call-to-action-section">
              <div className="call-to-action-section-col-left">
                {" "}
                <p>
                  Coddi empowers industrial companies with cutting-edge
                  AI-driven predictive maintenance and condition monitoring
                  solutions, minimizing downtime, reducing costs, and maximizing
                  equipment reliability and operational efficiency.
                </p>
              </div>

              {showForm == false ? (
                <div className="call-to-action-section-col-right">
                  <h1>Coddi AI Solutions</h1>
                  <button onClick={() => setShowForm(true)}>
                    Request a Demo
                  </button>
                </div>
              ) : (
                <div className="call-to-action-section-col-right">
                  <form className="formContainer" onSubmit={handleOnSubmit}>
                    <h2>Request a Demo</h2>
                    <div className="formElement">
                      <label for="from_name">Name</label>
                      <input
                        type="text"
                        id="from_name"
                        name="from_name"
                        placeholder="Your name.."
                        required
                      />
                    </div>

                    <div className="formElement">
                      <label>E-mail</label>
                      <input
                        type="email"
                        id="from_email"
                        name="from_email"
                        placeholder="Your email.."
                        required
                      />
                    </div>

                    <div className="formElement">
                      <label for="message">Message</label>
                      <textarea
                        name="message"
                        rows="8"
                        cols="30"
                        placeholder="Your message.."
                        required
                      />
                    </div>
                    <button type="submit" className="formButton">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <p>
              Coddi empodera a las empresas con soluciones de mantenimiento
              predictivo y monitoreo de condiciones impulsadas por IA de última
              generación, minimizando tiempos detenidos, reduciendo costos y
              maximizando la confiabilidad de los activos y la eficiencia
              operativa.
            </p>
          </>
        )}{" "}
      </div>

      <Implementation theme={theme} language={language} />
      <TheProblem theme={theme} language={language} />
      <KeyBenefitsPredictive theme={theme} language={language} />
      <TheTech theme={theme} language={language} />
      <div className={`solutions-section ${theme}`} id="condition"></div>
      <Optimizing theme={theme} language={language} />
      <KeyBenefits theme={theme} language={language} />
      <KeyMetrics theme={theme} language={language} />
      <HowItWorks theme={theme} language={language} />
    </div>
  );
};

export default Solutions;
