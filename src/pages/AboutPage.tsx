import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";

const About: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col>
          <p className="paragraph">
            Ideja Mape Sarajeva povezane sa pričama Darija Džamonje nastala je
            mojim čestim lutanjima po Sarajevu i čitanjem Darijevih priča.
            Koliko god puta da je Dario spomenuo "Istru" ili neki drugu lokaciju
            (najčešće je to bila neka kafana), ja sam se pitao gdje li je to
            tačno bilo u Sarajevu. Kao posljedica tih pitanja, nastala je ova
            jednostavna aplikacija kao neka vrsta omaža Dariju a ostavljena
            ljudima koji vole njegove priče.
          </p>
          <p className="paragraph">
            <div> Disklejmeri:</div>
            <br></br>
            <ul>
              <li>
                1. Ukoliko osoba koja polaže pravo na ovu fotografiju ne želi
                fotografiju na stranici, voljan sam je ukloniti po zahtjevu.
                Ukoliko je uredu da ova slika bude na naslovnici, ako želi neka
                se javi da je dodam kao kontributora.
              </li>
              <li>
                2. Postoji još mnogo lokacija koje nisam uspio unijeti u mapu.
                Većinom su to mjesta kojih više nema ali ukoliko neko poznaje
                nekoga ko je živio u vrijeme Darijevog pisanja i poznaje
                Sarajevo iz tog vremena, bilo bi mi drago ukoliko bi bio spreman
                da pomogne.
              </li>
              <li>
                3. Copyrights © nasljednice Darija Džamonje. Ukoliko osobe koje
                polažu prava na priče Darija Džamonje ne žele da ova stranica
                bude dostupna, voljan sam je ukloniti po zahtjevu.
              </li>
            </ul>
          </p>
          <p className="paragraph"> Kontakt: amer.kovac.pmf@gmail.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
