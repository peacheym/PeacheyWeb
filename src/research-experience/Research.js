import React from "react";
import { Container } from "react-bootstrap";
import "../App.css";
import ResearchPaper from "./ResearchPaper";

export default function Research() {
  return (
    <>
      <Container className="research-jumbo grad-header" fluid>
        <Container>
          <h1 className="researchH1">Research Experience</h1>
          <p>
            Thanks to my interest in academic research, I have long aspired to
            pursue graduate studies following the completion of my Bachelor of
            Computer Science degree. In order to gain experience as an
            independent researcher, I have actively pursued research
            opportunities during my undergraduate degree. I have been fortunate
            enough to work with the GEM Lab as both a USRA recipient as well as
            an honours student. I have been working with various teams at GEM
            Lab since early 2020, and have contributed to several exciting and
            multi-disciplinary projects in that time.
          </p>
          <p>
            I am currently working under the supervision of{" "}
            <a
              padding="0px"
              href="https://www.dal.ca/faculty/computerscience/faculty-staff/joseph-malloch.html"
            >
              Dr. Joseph Malloch
            </a>{" "}
            towards the completion of an undergraduate honours thesis. For this
            project, we are exploring computer vision based hand-tracking
            technologies and how to best represent the data they produce. We are
            not looking for a singular best way, but rather looking to represent
            the data in such a manner that as many use cases can be easily
            implemented with one structure. This work is currently ongoing, and
            this page will be updated appropriately as progress is made.
          </p>
          <br />

          <p>
            Please see below for links to publications that I have contributed
            to.
          </p>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
      <Container>
        <h2 className="exph2">Selected Publications</h2>

        <ResearchPaper
          title="MoveBox: Democratizing MoCap for the Microsoft Rocketbox
          Avatar Library"
          venue="2020 - IEEE International Conference on Artificial
          Intelligence and Virtual Reality (AIVR)"
          authors="Mar Gonzalez-Franco, Zelia Egan, Matthew Peachey, Angus Antley, Tanmay
          Randhavane, Payod Panda, Yaying Zhang, Cheng Yao Wang, Derek
          F. Reilly, Tabitha C Peck, Andrea Stevenson Won, Anthony Steed
          and Eyal Ofek."
          url="https://www.microsoft.com/en-us/research/publication/movebox-democratizing-mocap-for-the-microsoft-rocketbox-avatar-library/"
          preprint={false}
        />

        <hr style={{ width: "60%", marginTop: "30px", marginBottom: "50px" }} />

        <ResearchPaper
          title="Using Space Syntax to Enable Walkable AR Experiences"
          venue="2020 - IEEE International Symposium on Mixed and Augmented
          Reality (ISMAR)"
          authors="Derek Reilly, Joseph Malloch, Abbey Singh, Issac Fresia,
          Shivam Mahajan, Jake Moore and Matthew Peachey"
          url="https://ieeexplore.ieee.org/document/9288424"
          preprint={false}
        />

        <hr style={{ width: "60%", marginTop: "30px", marginBottom: "50px" }} />

        <ResearchPaper
          title="Story CreatAR: a Toolkit for Spatially-Adaptive AR Storytelling"
          venue="2021 - IEEE Virtual Reality (VR)"
          authors="Abbey Singh, Ramanpreet Kaur, Peter Haltner,
          Matthew Peachey, Mar Gonzalez-Franco, Joseph
          Malloch and Derek Reilly"
          url="http://ieeevr.org/2021/"
          preprint={true}
        />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </Container>
    </>
  );
}
