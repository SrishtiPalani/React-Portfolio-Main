import React from "react";
import "../../body/about/about.css";
import 'antd/dist/antd.css';
import { Row, Col, Card, Divider} from 'antd';



function Skills() {
  // const data = SkillsData;
  return (
    <div className="teaching">
    <Divider />
    <span className="info-name"> <strong>Teaching</strong> </span>
    <Row gutter={16}>
    
    <Col span={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', borderRadius: '14px', padding: '10px', alignItems: 'center' }}
              src={require("../../../assets/prototyping.jpg")}
              alt="study setup and screenshot of logs captured"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <h4> <strong> <a href="https://design100.ucsd.edu"> DSGN100 : Prototyping</a></strong> </h4> 
    <h5><strong>Instructor of Record, Summer 2023</strong></h5>
  
    <p style={{fontSize: '12px'}}> Introduction to the basic practices of interaction design through a focus on visual, physical, and digital prototyping. We follow a human-centered design process that includes research, concept generation, prototyping, testing, and refinement. Students must work effectively as individuals and in small teams to create visual designs, information systems, physical devices, and other interactive experiences. Required for Design Minor and Major.</p>
   
      </Card>
    </Col>

    <Col span={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', borderRadius: '14px', padding: '10px' }}
              src={require("../../../assets/GenAICourse.png")}
              alt="a person actively searching many different webpages"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <h4><strong><a href="https://designlab.ucsd.edu/events-all/design-at-large/">Design@Large Seminar: Designing Human-AI Systems for Creativity and Beyond</a></strong></h4>
    <h5><strong>Co-Instructor & Co-Organizer, Winter 2023</strong></h5>
  
   <p style={{fontSize: '12px'}}>This speaker series invites you to engage in the promise and perils of the next big thing in machine intelligence -- Generative AI. We invite speakers from the worlds of art, design, technology and policy to discuss these impressive new capabilities, its limitations and how we, as designers and students, could harness it to reach new heights in art, music, dance, architecture, fashion, creative writing and programming. </p>
   </Card>
  </Col>
   
   
    <Col span={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', padding: '10px' }}
              src={require("../../../assets/cogsci.png")}
              alt="practitioner value framework"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <br></br>
    <br></br>
    <br></br>
    <h4><strong><a href="https://cogsci.ucsd.edu/">Department of Cognitive Science</a>, Head TA</strong></h4> 
    <h5> 2020-21 </h5>
    <br></br>
    <p style={{fontSize: '12px'}}> Assist professors, instructors, and TAs across the department with online lesson plans and
technology for remote learning; and organize discussion roundtables to share experiences. Liaison between the department and the School of Social Sciences. </p>
<br></br>
<br></br>
   </Card>
    </Col>
  </Row>

    <Card
    hoverable={true}
      title="Computer Science Courses"
      // extra={<a href="#">More</a>}
      style={{marginTop: 16, borderRadius: '14px'}}>
      <p>CS 334: Intelligent Information Retrieval with <a href="https://www.mtholyoke.edu/directory/faculty-staff/lisa-ballesteros">Prof. Lisa Ballasteros</a>, TA, Mount Holyoke College, Spring 2018</p>
      <p>CS 343: Programming Language Design with <a href="https://vbarr4.github.io/">Prof. Valerie Barr</a>, TA, Mount Holyoke College, Fall 2017</p>
      <p>CS 101: Object Oriented Programming with <a href="https://www.mtholyoke.edu/directory/faculty-staff/audrey-st-john">Prof. Audrey St. John</a>, TA, Mount Holyoke College, Fall 2016</p>
    </Card>

    <Card
    hoverable={true}
      title="Human-Centered Design Courses"
      // extra={<a href="#">More</a>}
      style={{marginTop: 16, borderRadius: '14px'}}>
    <p ><a href="https://startupstudio.ucsd.edu/">COGS122: Startup Studio</a> with <a href="https://spdow.ucsd.edu/">Prof. Steven Dow</a>, TA, UCSD, Fall 2020</p>
      <p><a href="https://civicdesign.ucsd.edu/">DSGN 160: Civic Design</a> with <a href="https://spdow.ucsd.edu/">Prof. Steven Dow</a>, TA, UCSD, Winter 2020</p>
      <p><a href="https://socialcomputing.ucsd.edu/">COGS 123: Social Computing</a> with <a href="https://spdow.ucsd.edu/">Prof. Steven Dow</a>, TA, UCSD, Fall 2019</p>
      <p><a href="https://design100.ucsd.edu/">DSGN 100: Prototyping</a> with <a href="https://spdow.ucsd.edu/">Prof. Steven Dow</a>, TA, UCSD, Spring 2019</p>
      <p><a href="https://catalog.ucsd.edu/courses/COGS.html">COGS126: Human Computer Interaction</a> with <a href="http://hci.ucsd.edu/hollan/">Prof. Jim Hollan</a>, TA, UCSD, Winter 2019</p>
      
    </Card>
  </div>
 );
}

export default Skills;