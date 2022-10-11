import React, { useState } from "react";
import "../../body/about/about.css";
// import nameAudio from "/Users/srishtipalani/Desktop/React-Portfolio-main/src/assets/SrishtiPalaniPronunciation.mp3";
import 'antd/dist/antd.css';
import { SoundOutlined, MailOutlined, TwitterOutlined, GoogleOutlined, FilePdfOutlined, UpOutlined, GithubOutlined, VideoCameraOutlined, LaptopOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Tooltip, Row, Col, Card, Divider, Tag, BackTop} from 'antd';


function Projects() {
  
  return (
    
    <div className="projects">
      {/* <Divider /> */}
    {/* Research Highlights Page */}
    <span className="info-name"> <strong>Research Highlights</strong> </span>
    {/* <Tabs items={items} />; */}

    <Card title="Studying Creative Cognition and Process">
    <Card 
      type="inner"
      title="'I don't want to feel like I'm working in a 1960s factory': The Practitioner Perspective on Creativity Support Tool Adoption"
      // extra={<a href="#">More</a>} 
      // cover={<img alt="example" src="/Users/srishtipalani/Desktop/React-Portfolio-main/src/assets/CoNotateImg.png" />}
    >
    <Row>
      <Col span={15}>
        <a href="#" style={{color: "#8a64d6", textAlign: "right"}}><strong> 🏆 Best Paper Award: Honorable Mention @ CHI'22</strong></a>
        <h4>Srishti Palani, <a href="#" target="_blank"> David Ledo</a>, <a href="#" target="_blank"> George Fitzmaurice</a>, <a href="#" target="_blank"> Fraser Anderson</a></h4>
      </Col>
      <Col span={9} push={6}>
        <Tooltip title="PDF">
              <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="#" target="_blank"/>
          </Tooltip>
          <Tooltip title="Talk">
            <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="#" target="_blank" />
          </Tooltip>
          <Tooltip title="Cite it">
            <Button type="text" shape="circle" icon={<ShareAltOutlined />} href="#" target="_blank" />
          </Tooltip>
      </Col>
    </Row>
      <Row>
        <Col span={13}>
        <p> With the rapid development of creativity support tools, creative practitioners (e.g., designers, artists, architects) have to constantly explore and adopt new tools into their practice. While HCI research has focused on developing novel creativity support tools, little is known about creative practitioner's values when exploring and adopting these tools. We collect and analyze 23 videos, 13 interviews, and 105 survey responses of creative practitioners reflecting on their values to derive a value framework. We find that practitioners value the tools’ functionality, integration into their current workflow, performance, user interface and experience, learning support, costs and emotional connection, in that order. They largely discover tools through personal recommendations. To help unify and encourage reflection from the wider community of CST stakeholders (e.g., systems creators, researchers, marketers, educators), we situate the framework within existing research on systems, creativity support tools and technology adoption.</p>
        </Col>
        <Col span={11}>
        <img src={require("../../../assets/PractitionerValueFramework.jpeg")} alt="" style={{width: "100%", alignItems: "right"}}/>
        </Col>
      </Row>
      <Tag color="green">Systematic Literature Review</Tag>
        <Tag color="cyan">Thematic Analysis</Tag>
        <Tag color="blue">Video Analysis</Tag>
        <Tag color="geekblue">Interviews</Tag>
        <Tag color="purple">Surveys</Tag>   
    </Card>
    <></>
    <Card type="inner" title='The "Active Search" Hypothesis: How Search Strategies Relate to Creative Learning' 
    style={{
      marginTop: 16,
    }}
    // extra={<a href="#">More</a>}
    >
    <Row>
      <Col span={15}>
      <h4>Srishti Palani, <a href="#" target="_blank"> Zijian "Jason" Ding</a>, <a href="#" target="_blank"> Stephen MacNeil</a>, <a href="#" target="_blank">Steven P. Dow</a></h4>
      </Col>
      <Col span={9} push={6}>
      <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="#" target="_blank"/>
        </Tooltip>
        <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} href="#" target="_blank" />
        </Tooltip>
        </Col>
    </Row>
    
    <Row>
      <Col span={12}>
      <p> While research shows that web search plays a role throughout the creative process, less is known about about how people use web search to learn and frame their thinking about an open problem. People need web search to gather information about a problem area, but this can also influence the rest of the creative process. To understand how web search affects early-stage design, we collected and analyzed search log and self-report data from 34 students in a project-based design class. Participants reported struggling with scoping broad, ill-defined information goals into queries, learning domain-specific language, and assessing the usefulness of information. Analysis found that more active and diverse search behavior (i.e. issuing more frequent and diverse queries, and opening more webpages) related to more progress in early-stage design (i.e. gathering more facts, articulating more insights, and developing better problem frames). Based on these findings, we discuss implications for designing search tools to support peoples' creative processes.</p> 
      </Col>
      <Col span={12} push={3}>
      <img src={require("../../../assets/ActiveSearch.png")} alt="" style={{width: "80%"}}/>
      </Col>
    </Row>
    <Tag color="blue">Log Analysis</Tag>
        <Tag color="geekblue">User Study</Tag>
        <Tag color="purple">Novices</Tag>  
    </Card>

  </Card>


  <Card title="Designing & developing tools to support exploration & synthesis of complex information, and augment creativity!"
  style={{
    marginTop: 16,
  }}>
    <Card type="inner" title="CoNotate: Suggesting Qeries Based on Notes Promotes Knowledge Discovery" style={{whiteSpace: 'pre-line'}}>
    <Row>
      <Col span={12}>
      <h4>Srishti Palani, <a href="#" target="_blank">Zijian "Jason" Ding</a>, <a href="#" target="_blank">  Austin Nguyen</a>, <a href="#" target="_blank"> Andrew Chuang</a> <a href="#" target="_blank"> Steven P. Dow</a></h4>
      </Col>
      <Col span={12} push={7}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="#" target="_blank"/>
        </Tooltip>
        <Tooltip title="Code">
          <Button type="text" shape="circle" icon={<GithubOutlined/>} href="#" target="_blank"/>
        </Tooltip>
        <Tooltip title="Demo">
          <Button type="text" shape="circle" icon={<LaptopOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} href="#" target="_blank" />
        </Tooltip>
        </Col>
    </Row>
    <Row>
        <Col span={12}>
        <p> When exploring a new domain through web search, people often struggle to articulate queries because they lack domain-specific language and well-defined informational goals. Perhaps search tools rely too much on the query to understand what a searcher wants. Towards expanding this contextual understanding of a user during exploratory search, we introduce a novel system, CoNotate, which offers query suggestions based on analyzing the searcher's notes and previous searches for patterns and gaps in information. To evaluate this approach, we conducted a within-subjects study where participants (n=38) conducted exploratory searches using a baseline system (standard web search) and the CoNotate system. The CoNotate approach helped searchers issue significantly more queries, and discover more terminology than standard web search. This work demonstrates how search can leverage user-generated content to help people get started when exploring complex, multi-faceted information spaces.</p> 
        </Col>
        <Col span={12}>
        <img src={require("../../../assets/CoNotateImg.png")} alt="" style={{width: "110%", alignItems: "right"}}/>   
        </Col>
        <Tag color="cyan">Chrome Extension</Tag>
        <Tag color="blue">Log Analysis</Tag>
        <Tag color="geekblue">ReactJS web development</Tag>
        <Tag color="purple">User Study</Tag>     
      </Row>
    </Card>
    <Card type="inner" title="InterWeave: Presenting Search Suggestions in Context Scaffolds Information Search and Synthesis"
      style={{marginTop: 16}}>
    <Row>
      <Col span={15}>
      <h4>Srishti Palani, <a href="#" target="_blank">Yingyi "Emily" Zhou</a>, <a href="#" target="_blank">  Sheldon Zhu</a>, <a href="#" target="_blank"> Steven P. Dow</a></h4>
      </Col>
      <Col span={9} push={4}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="#" target="_blank"/>
        </Tooltip>
        <Tooltip title="Code">
          <Button type="text" shape="circle" icon={<GithubOutlined/>} href="#" target="_blank"/>
        </Tooltip>
        <Tooltip title="Demo">
          <Button type="text" shape="circle" icon={<LaptopOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} href="#" target="_blank" />
        </Tooltip>
        </Col>
    </Row>
    <Row>
        <Col span={12}>
        <p>Web search is increasingly used to satisfy complex, exploratory information goals. Exploring and synthesizing information into knowledge can be slow and cognitively demanding due to a disconnect between search tools and sense-making workspaces. Our work explores how we might integrate contextual query suggestions within a person's sensemaking environment. We developed InterWeave a prototype that leverages a human wizard to generate contextual search guidance and to place the suggestions within the emergent structure of a searchers’ notes. To investigate how weaving suggestions into the sensemaking workspace affects a user's search and sensemaking behavior, we ran a between-subjects study (n=34) where we compare InterWeave's in context placement with a conventional list of query suggestions. InterWeave's approach not only promoted active searching, information gathering and knowledge discovery, but also helped participants keep track of new suggestions and connect newly discovered information to existing knowledge, in comparison to presenting suggestions as a separate list. These results point to directions for future work to interweave contextual and natural search guidance into everyday work.</p>
        
        </Col>
        <Col span={12}>
        <img src={require("../../../assets/InterWeave.png")} alt="" style={{width: "100%", alignItems: "right", objectFit: "cover"}}/>   
        </Col>
      </Row>
      <Tag color="green">Wizard-of-Oz Prototyping</Tag>
        <Tag color="cyan">Chrome Extension</Tag>
        <Tag color="blue">Log analysis</Tag>
        <Tag color="geekblue">ReactJS web development</Tag>
        <Tag color="purple">User study</Tag>     
    </Card>
    </Card>

    <Card title="Designing systems to alleviate accessibility issues"
    style={{
      marginTop: 16,
    }}>
    <Card type="inner" title="An Eye Tracking Study of Web Search by People with and without Dyslexia">
    <Row>
      <Col span={15}>
      <h4>Srishti Palani, <a href="#" target="_blank">Adam Fourney</a>, <a href="#" target="_blank">  Shane Williams</a>, <a href="#" target="_blank"> Kevin Larson</a>, <a href="#" target="_blank"> Irina Spiridonova</a>, <a href="#" target="_blank"> Meredith Ringel Morris</a></h4>
      </Col>
      <Col span={9} push={4}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="#" target="_blank"/>
        </Tooltip>
        <Tooltip title="Code">
          <Button type="text" shape="circle" icon={<GithubOutlined/>} href="#" target="_blank"/>
        </Tooltip>
        <Tooltip title="Demo">
          <Button type="text" shape="circle" icon={<LaptopOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} href="#" target="_blank" />
        </Tooltip>
        </Col>
    </Row>
    <Row>
        <Col span={14}>
        <p> Web search is a key digital literacy skill that can be particularly challenging for people with dyslexia, a common learning disability that affects reading and spelling skills in about 15% of the English-speaking population. In this paper, we collected and analyzed eye-tracking, search log, and self-report data from 27 participants (14 with dyslexia) to confirm that searchers with dyslexia struggle with all stages of the search process and have markedly different gaze patterns and search behavior that reflect the strategies used and challenges faced. Based on these findings, we discuss design implications to improve the cognitive accessibility of web search.</p>
        
        </Col>
        <Col span={10}>
        <img src={require("../../../assets/Eyetracking_Dyslexia.jpeg")} alt="" style={{width: "100%", alignItems: "right"}}/>   
        </Col>
      </Row>
      <Tag color="blue">Log analysis</Tag>
        <Tag color="geekblue">Eyetracking analysis</Tag>
        <Tag color="purple">user study</Tag>     
    </Card>
    
    <Card type="inner" title="'Who's There?': Designing Sensor-Aided Wearable Assistive Technology for the Visually-Impaired"
    style={{marginTop: 16}}>
    <Row>
      <Col span={12}>
      <a href="#" style={{color: "#8a64d6", textAlign: "right"}}><strong> 🏆 CRA Outstanding Undergraduate Researcher Award: Finalist</strong> <strong> 🏆 Best Paper Award: CCSCNE'18</strong></a>
      <h4>Srishti Palani, <a href="https://www.barbara-lerner.com/" target="_blank">Barbara Lerner</a> </h4> </Col>
      <Col span={12} push={8}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="#" target="_blank"/>
        </Tooltip>        
        <Tooltip title="Demo">
          <Button type="text" shape="circle" icon={<LaptopOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Talk Slides">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} href="#" target="_blank" />
        </Tooltip>
        </Col>
    </Row>
    <Row>
        <Col span={10}>
        </Col>
        <Col span={14} push={2}>
        <img src={require("../../../assets/AssistiveWearable.png")} alt="" style={{width: "80%", alignItems: "right"}}/>   
        </Col>
      </Row>
      <Tag color="lime">Wearable technology</Tag>
      <Tag color="cyan">Assistive technology</Tag>
        <Tag color="blue">iOS programming</Tag>
        <Tag color="geekblue">Embedded systems</Tag>
        <Tag color="purple">User studies</Tag>  
    </Card>
    </Card>
    </div>
  );
}

export default Projects;