import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import gaurav from "../../assets/gaurav.jpeg";
import "./Aboutus.css";
import asi from "../../assets/asi.png";
import healthchain from "../../assets/healthchain.png";
import q from "../../assets/Q.png";
import background from "../../assets/background.jpg";
import Footer from "../../components/Footer";

export default function Profile_template() {
  return (
    <div>
      <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <h4 style={{ textAlign: "center" }}>
                  I ❤️ simple things not easy ones !
                </h4>
                <div className="rounded-top text-white d-flex flex-row profile-template-conatiner">
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                      src={gaurav}
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                    <MDBBtn
                      outline
                      color="dark"
                      style={{ height: "36px", overflow: "visible" }}
                    >
                      Edit profile
                    </MDBBtn>
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <MDBTypography tag="h5">Gaurav Gautam Shakya</MDBTypography>

                    <MDBCardText>
                      Ambitious to engineer World's hardest problems
                    </MDBCardText>
                    <MDBCardText>Uttar Pradesh, India</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">3</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Projects
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">
                        <a
                          style={{ color: "blue" }}
                          href="https://grvnotes.com/"
                          target="_blank"
                        >
                          Website
                        </a>
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Website
                      </MDBCardText>
                    </div>
                    <div>
                      <MDBCardText className="mb-1 h5">
                        <a
                          style={{ color: "blue" }}
                          href="https://www.linkedin.com/in/gaurav0563/"
                          target="_blank"
                        >
                          Profile
                        </a>
                      </MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Linkedin
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <MDBCardText className="font-italic mb-1">
                        <p style={{ textAlign: "justify" }}>
                          My name is Gaurav Gautam Shakya. I am an Amateur
                          Artificial intelligence Researcher, Azure Certified AI
                          Engineer and AWS Cloud Practitioner. My expertise
                          particularly in Public Cloud Services, AI and their
                          accessibility opportunities, risks and challenges.
                          Combination of AI and Blockchain is disrupive. I love
                          to talk about disruption in Business and Technology. I
                          believe that Working on Artificial General
                          intelligence is the most rewarding career for me. I am
                          always interested in Physics but went to engineering
                          College. where I was exposed to computer Hardware and
                          software stuff. I fell in love with the Mind-bending
                          Complexity of Computer systems. Then I was intrigued
                          by the question "Why are engineers striving for
                          building such complex systems and Why businesses and
                          spending such big money on these systems". Now I can
                          feel the impact of these complex engineered systems
                          which empowers the individuals, SMBs, Big Business and
                          even some of the world's largest economies. I am very
                          impressed by the people who ask strategically broad
                          questions which give me food for thought. Asking or
                          listening to broad and unconventional questions seems
                          stupid or unnecessary for the first time because of
                          limited resources but they are crucial for setting the
                          vision and existential story of a company. I am
                          looking for someone who is constantly striving to
                          grasp the big picture of company, industry or Economic
                          opportunities over the course of time.
                        </p>
                      </MDBCardText>
                      {/* <MDBCardText className="font-italic mb-1">
                      Lives in New York
                    </MDBCardText>
                    <MDBCardText className="font-italic mb-0">
                      Photographer
                    </MDBCardText> */}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Projects
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </MDBCardText>
                  </div>
                  <MDBRow>
                    <MDBCol className="mb-2 images">
                      <a href="https://rise.synapticagi.com/" target="_blank">
                        <p style={{ color: "blueviolet" }}>
                          Healthchain - Patient centric Intelligent QR Code
                          Based Decentralized EHR System
                        </p>
                        <MDBCardImage
                          style={{ height: "200px" }}
                          src={healthchain}
                          alt="project 1"
                          className="w-100 rounded-3"
                        />
                      </a>
                    </MDBCol>
                    <MDBCol className="mb-2  images">
                      <a href="https://synapticagi.com/" target="_blank">
                        <p style={{ color: "blueviolet" }}>
                          SynapticAGI - Engineering Artificial Super
                          Intelligence
                        </p>
                        <p></p>
                        <MDBCardImage
                          style={{ height: "200px" }}
                          src={asi}
                          alt="project 1"
                          className="w-100 rounded-3"
                        />
                      </a>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow className="g-2">
                    <a
                      href="https://script.google.com/macros/s/AKfycbwLUg0iBOzX5VnD1W8hKDQbCIYmgv3ynyZCII4b0U99qu38pAlI5njl5poqC49MqaIl/exec"
                      target="_blank"
                    >
                      <MDBCol className="mb-2">
                        <p>QuizAI - Crafting Quiz with Gemini AI</p>
                        <MDBCardImage
                          style={{ height: "250px" }}
                          src={q}
                          alt="image 1"
                          className="w-100 rounded-3"
                        />
                      </MDBCol>
                    </a>
                    {/* <MDBCol className="mb-2">
                    <MDBCardImage
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      className="w-100 rounded-3"
                    />
                  </MDBCol> */}
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
