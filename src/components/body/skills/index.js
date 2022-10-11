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
    <Card style={{marginTop: 16}}>
   
    <p><strong>Designing Human-AI Systems for Creativity and Beyond <a href="https://designlab.ucsd.edu/events-all/design-at-large/">Design @ Large Seminar</a>, Instructor & Organizer</strong>, Scheduled for Winter 2023</p>
    <Row>
    <Col span={14}>
    <p><strong>Course blurb:</strong> Imagine a computer that could finish your sentences, or compose music that sounds as if you wrote it, or dance with your moves or solve a problem by creating hundreds of lines of code - leaving you to focus on a task that is even harder, augmenting your creative ability and pushing you to reach your creative potential. In a sense, that computer is merely the descendant of the power looms or the steam engine of the Industrial Revolution. But it also belongs to a new class of machine, because it grasps the symbols in language, music and programming and uses them in a way that seems creative, seems human. These “Generative AI” models represent a breakthrough in artificial intelligence, creativity and design. 

      This speaker series invites you to engage in the promise and perils of the next big thing in machine intelligence. We invite speakers from the worlds of art, design, technology and policy to discuss these impressive new capabilities, its limitations and how we, as designers and students, could harness it to reach new heights in art, music, dance, architecture, fashion, creative writing and programming. 
    </p>
    </Col>
      <Col span={10}>
        <img src={require("../../../assets/GenAICourse.png")} alt="" style={{width: "95%", alignItems: "right"}}/>   
      </Col>
    </Row>
    </Card>
    <Card style={{marginTop: 16}}>
    <p><strong><a href="https://cogsci.ucsd.edu/">Department of Cognitive Science</a>, Head TA</strong>, 2020-21</p>
      <ul>
      <li> Assist professors, instructors, and TAs across the department with online lesson plans and
technology for remote learning; and organize discussion roundtables to share experiences</li>
      <li> Liaison between the department and the School of Social Sciences </li>
    </ul>
    </Card>

    <Card
      title="Human-Centered Design Courses"
      // extra={<a href="#">More</a>}
      style={{marginTop: 16}}>
    <p ><a href="https://startupstudio.ucsd.edu/">COGS122: Startup Studio</a> with <a href="https://spdow.ucsd.edu/">Prof. Steven Dow</a>, TA, UCSD, Fall 2020</p>
      <p><a href="https://civicdesign.ucsd.edu/">DSGN 160: Civic Design</a> with <a href="https://spdow.ucsd.edu/">Prof. Steven Dow</a>, TA, UCSD, Winter 2020</p>
      <p><a href="https://socialcomputing.ucsd.edu/">COGS 123: Social Computing</a> with <a href="https://spdow.ucsd.edu/">Prof. Steven Dow</a>, TA, UCSD, Fall 2019</p>
      <p><a href="https://design100.ucsd.edu/">DSGN 100: Prototyping</a> with <a href="https://spdow.ucsd.edu/">Prof. Steven Dow</a>, TA, UCSD, Spring 2019</p>
      <p><a href="https://catalog.ucsd.edu/courses/COGS.html">COGS126: Human Computer Interaction</a> with <a href="http://hci.ucsd.edu/hollan/">Prof. Jim Hollan</a>, TA, UCSD, Winter 2019</p>
      
    </Card>

    <Card
      title="Computer Science Courses"
      // extra={<a href="#">More</a>}
      style={{marginTop: 16}}>
      <p>CS 334: Intelligent Information Retrieval with <a href="https://www.mtholyoke.edu/directory/faculty-staff/lisa-ballesteros">Prof. Lisa Ballasteros</a>, TA, Mount Holyoke College, Spring 2018</p>
      <p>CS 343: Programming Language Design with <a href="https://vbarr4.github.io/">Prof. Valerie Barr</a>, TA, Mount Holyoke College, Fall 2017</p>
      <p>CS 101: Object Oriented Programming with <a href="https://www.mtholyoke.edu/directory/faculty-staff/audrey-st-john">Prof. Audrey St. John</a>, TA, Mount Holyoke College, Fall 2016</p>
    </Card>
  </div>
 );
}

export default Skills;