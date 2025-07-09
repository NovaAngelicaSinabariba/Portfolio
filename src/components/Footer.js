import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/NOVA1.png";
import navIcon1 from "../assets/img/github.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://github.com/NovaAngelicaSinabariba"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/share/1Bvg6NioqM/?mibextid=wwXIfr"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/novaangelicas?igsh=MTNsMGhzcG53Mm53aQ=="><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Nova cantik baik hati. Muach</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
