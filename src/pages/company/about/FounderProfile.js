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
  MDBIcon,
} from "mdb-react-ui-kit";
import grvPhoto from "../../../assets/gaurav.jpeg"

export default function FounderProfile() {
  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src={grvPhoto}
                    
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4">Gaurav Gautam Shakya</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  @Engineer <span className="mx-2">|</span>{" "}
                  <a href="https://grvnotes.com">grvNotes.com</a>
                </MDBCardText>
                {/* <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div> */}
                {/* <MDBBtn >
                  <a href="https://www.linkedin.com/in/gaurav0563/">Linkedin</a>
                </MDBBtn> */}
                <button className="btn"><a href="https://www.linkedin.com/in/gaurav0563/" target="_blank">Linkedin</a></button>
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">
                      <a
                        href="https://script.google.com/macros/s/AKfycbwLUg0iBOzX5VnD1W8hKDQbCIYmgv3ynyZCII4b0U99qu38pAlI5njl5poqC49MqaIl/exec"
                      >
                        QuizAI
                      </a>
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Project{" "}
                    </MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">
                      <a href="https://rise.synapticagi.com/">Healthchain</a>
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Project
                    </MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">
                      <a href="https://synapticagi.com/">SynapticAGI</a>
                    </MDBCardText>
                    <MDBCardText className="small text-muted mb-0">
                      Project
                    </MDBCardText>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
