import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const About: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="paragraph">
            Ideja iza ove jednostavne aplikacije je nastala na osnovu mojih
            kud-i-kamo lutanja po ulicama glavnog bh grada a u kojima sam često
            sebe znao pitati: "A šta krije ova ulica još?" ili "A đe je Boga ti
            ona kafana Istra da sad odem i da se...". Kao posljedica toga i kao
            omaž na sve što Dario znači ovom gradu i njegovim čitateljima, na
            ovoj adresi možete pronaći mapu Sarajeva sa obilježenim lokacijama
            iz njegovih priča. Ova aplikacija korisniku omogućuje da klikom na
            određenu lokaciju dobije sve odlomke iz priča gdje se ta lokacija
            spominjala a klikom na odlomak, dobija priliku da pročita cijelu
            priču. Želim da se zahvalim Darijevim kćerkama: Neveni i Vesni
            kojima se ideja svidjela i koje su mi dopustile korištenje njegovih
            priča i Darijevoj sestri Mirni koja je bila posrednik i upoznala me
            sa nositeljicama prava na priče.
          </p>
          <p className="paragraph">
            <ul>
              <li>
                Molio bih fotografa ove slike da me kontaktira u vezi dozvole za
                njenu upotrebu na ovoj stranici.
              </li>
              <li>
                Aplikacija će vremenom biti ažurirana sa novim lokacijama.
              </li>
            </ul>
          </p>
          <p className="paragraph">
            Za sve prijedloge i kritike, kontaktirajte me na:
            amer.kovac.pmf@gmail.com
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
