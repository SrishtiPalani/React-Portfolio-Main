import React, { useState } from "react";
import "./about.css";
import nameAudio from "/Users/srishtipalani/Desktop/React-Portfolio-main/src/assets/SrishtiPalaniPronunciation.mp3";
import 'antd/dist/antd.css';
import { SoundOutlined, MailOutlined, TwitterOutlined, GoogleOutlined, FilePdfOutlined, UpOutlined, GithubOutlined, VideoCameraOutlined, LaptopOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Tooltip, Row, Col, Card, Divider, Tag, BackTop} from 'antd';

function About() {
  const audio = new Audio(nameAudio);
  audio.loop = true;
 
    return (
    <div className="about">
      <div className="about-top">
      <Row align="middle">
      <Col span={6} xs={{
          order: 1,
        }}
        sm={{
          order: 1,
        }}
        md={{
          order: 1,
        }}
        lg={{
          order: 1,
        }}>
        <div className="about-photo">
            <img 
              // to make the image responsive
              // srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
              src={require("../../../assets/SrishtiPalaniPhoto.png")}
              alt="Srishti Palani -- a female researcher smiling warmly into the camera"
              className="picture"
            />
        </div>
        </Col>
       
       <Col span={8} pull={2} xs={{
          order: 2,
        }}
        sm={{
          order: 2,
        }}
        md={{
          order: 2,
        }}
        lg={{
          order: 2,
        }}>
        <div className="about-info">
          Hello World!           
         <br /> I'm  <strong><span className="info-name"> Srishti Palani</span></strong>!
        
         <Tooltip title="pronunciation">
            <Button type="text"  icon={<SoundOutlined />}
                onClick={() => {
                    audio.loop = false;
                    audio.play();
                }}>
          </Button>
        </Tooltip>
        </div>
        <Tooltip title="Mail">
            <Button type="text" shape="circle" icon={<MailOutlined/>}  href="mailto:srishti@ucsd.edu" />
        </Tooltip>
        <Tooltip title="Twitter">
          <Button type="text" shape="circle" icon={<TwitterOutlined />} href="https://twitter.com/srishtipalani?lang=en" target="_blank"/>
        </Tooltip>
        <Tooltip title="Google Scholar">
          <Button type="text" shape="circle" icon={<GoogleOutlined />} href="https://scholar.google.com/citations?user=VQV7AYUAAAAJ&hl=en" target="_blank" />
        </Tooltip>
        
      </Col>

    
      <Col span={10} push={3} 
        xs={{
          order: 3,
        }}
        sm={{
          order: 3,
        }}
        md={{
          order: 3,
        }}
        lg={{
          order: 3,
        }}>
          <h3 style={{fontSize: '18px'}}>PhD Researcher, <a href="https://designlab.ucsd.edu" target="_blank" rel="noreferrer" style={{color: '#8860d0'}}> Design Lab</a>
            <br /> <a href="https://cogsci.ucsd.edu" target="_blank" rel="noreferrer" style={{color: '#8860d0'}}> Department of Cognitive Science </a>
            <br /><a href="https://ucsd.edu" target="_blank" rel="noreferrer" style={{color: '#8860d0'}}> University of California, San Diego</a>
          </h3>
      </Col>
    </Row>
    </div>
   
    <></>
    <Row justify="center"  align="top">
    <Card 
    style={{ 
      borderBottomStyle: 'inset',
      borderLeftStyle: 'hidden',
      borderRightStyle: 'hidden',
      borderTopStyle: 'hidden',
      borderRadius: '2px',
      // paddingBottom: '-15px', 
      }}>
       
          <p style={{ fontSize: '15px'}}>
          I study how people think and learn during complex critical information tasks 
          (such as exploring, making sense of lots of information and being creative), and design, develop, and deploy hybrid human-AI 
          intelligent interactive systems based on principles from cognitive psychology to augment human intelligence during these complex critical information tasks.
          <br /> <br /> 
          My doctoral research is supported by the <a href="https://research.google/outreach/phd-fellowship/" target="_blank" rel="noreferrer">Google Ph.D. Fellowship</a> and <a href="https://www.aspirations.org/award-programs/aic-collegiate-award" target="_blank">NCWIT Collegiate Award</a>.
          I have also collaborated with researchers at the <a href="https://www.microsoft.com/en-us/research/group/ability/" target="_blank" rel="noreferrer">Ability</a> and <a href="https://www.microsoft.com/en-us/research/group/productivity-and-intelligence/" target="_blank" rel="noreferrer">Information and Data Sciences</a> groups at <a href="https://www.microsoft.com/en-us/research/" target="_blank" rel="noreferrer">Microsoft Research</a>, 
          the <a href="https://www.autodesk.com/research/overview" target="_blank" rel="noreferrer">HCI and Visualization Research Group at Autodesk Research</a>, and <a href="https://www.semanticscholar.org/research/research-team" target="_blank" rel="noreferrer">Semantic Scholar Research</a> team at the <a href="https://allenai.org/about" target="_blank" rel="noreferrer">Allen Institute for AI</a>. 

          <br /> <br /> Before PhD, I graduated <i>summa cum laude</i> from <a href="https://www.mtholyoke.edu" target="_blank" rel="noreferrer">Mount Holyoke College</a> with a bachelors degree, double majoring in <a href="https://www.mtholyoke.edu/directory/departments-offices-centers/computer-science" target="_blank" rel="noreferrer">Computer Science</a> and <a href="https://www.mtholyoke.edu/directory/departments-offices-centers/psychology-and-education" target="_blank" rel="noreferrer">Psychology</a> (specializing in <a href="https://www.fivecolleges.edu/academics/cognitive-neuroscience" target="_blank" rel="noreferrer">Cognitive Neuroscience</a>). 
          I conducted research with <a href="https://sites.google.com/mtholyoke.edu/mbreen/home" target="_blank" rel="noreferrer">Prof. Mara Breen</a> in Cognitive Linguistics and <a href="https://www.barbara-lerner.com"  target="_blank" rel="noreferrer">Prof. Barbara Lerner</a> on wearables, ubiquitous computing and accessibility for older adults with disabilities.
          <br /> <br /> 
          Outside of research, I am passionate about establishing <a href="#" target="_blank">mentorship programs</a> to bridge the gender gap in technology, and 
          <a href="#" target="_blank"> teaching</a> design and computational thinking courses. In my free time, I love playing squash, and exploring new beaches and hiking trails with my puppy.
          </p>
        
      </Card>
    </Row> 
{/*     

    <Divider />
    <span className="info-name"> <a href = {"https://drive.google.com/file/d/1lwzgM2oB0-Ba8w2mZ7ZCn5AUeSbU2FYQ/view?usp=sharing"} target = "_blank"><strong>CV </strong> </a> </span> */}

  </div>
  );
}

export default About;