import React, { useState } from "react";
import "../../body/about/about.css";
// import nameAudio from "/Users/srishtipalani/Desktop/React-Portfolio-main/src/assets/SrishtiPalaniPronunciation.mp3";
import 'antd/dist/antd.css';
import { SoundOutlined, MailOutlined, TwitterOutlined, GoogleOutlined, FilePdfOutlined, UpOutlined, GithubOutlined, VideoCameraOutlined, LaptopOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button, Tooltip, Row, Col, Card, Modal, Tag, BackTop} from 'antd';


function Projects() {
   function myFunction1() {
    navigator.clipboard.writeText(project1);
    alert("Copied the text: " + project1);
  }
  
  var project1 = "@inproceedings{palani2022don, \n  title={'I dont want to feel like Im working in a 1960s factory': The Practitioner Perspective on Creativity Support Tool Adoption},\n author={Palani, Srishti and Ledo, David and Fitzmaurice, George and Anderson, Fraser},\nbooktitle={CHI Conference on Human Factors in Computing Systems},\n pages={1--18},\n year={2022}\n}"
  
  var project2 = "@inproceedings{palani2021active,\n title={The'Active Search' Hypothesis: How Search Strategies Relate to Creative Learning}, \n author={Palani, Srishti and Ding, Zijian and MacNeil, Stephen and Dow, Steven P}, \n booktitle={Proceedings of the 2021 Conference on Human Information Interaction and Retrieval}, \n pages={325--329}, \n year={2021} \n}"
  
  function myFunction2() {
    navigator.clipboard.writeText(project2);
    alert("Copied the text: " + project2);
  }

  var project3 = "@inproceedings{palani2021conotate, \n title={CoNotate: Suggesting Queries Based on Notes Promotes Knowledge Discovery}, \n author={Palani, Srishti and Ding, Zijian and Nguyen, Austin and Chuang, Andrew and MacNeil, Stephen and Dow, Steven P}, \n booktitle={Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems}, \n pages={1--14}, \n year={2021} \n }"

  function myFunction3() {
    navigator.clipboard.writeText(project3);
    alert("Copied the text: " + project3);
  }

  var project4 ="@inproceedings{palani2020eye, \n title={An Eye Tracking Study of Web Search by People with and without Dyslexia}, \n author={Palani, Srishti and Fourney, Adam and Williams, Shane and Larson, Kevin and Spiridonova, Irina and Morris, Meredith Ringel}, \n booktitle={Proceedings of the 43rd International ACM SIGIR Conference on Research and Development in Information Retrieval}, \n  pages={729--738}, \n year={2020} \n}" 

  function myFunction4() {
    navigator.clipboard.writeText(project4);
    alert("Copied the text: " + project4);
  }

  var project5 = "@phdthesis{palani2018s, \n title={'Who's There?': Designing Sensor-Aided Wearable Assistive Technology for the Visually-Impaired}, \n author={Palani, Srishti}, \n year={2018} \n}"

  function myFunction5() {
    navigator.clipboard.writeText(project5);
    alert("Copied the text: " + project5);
  }

  var project6 = "@inproceedings{palani2023relatedly, \n address = {Hamburg, Germany},\n  series = {{CHI} '23},\n title = {Relatedly: Scaffolding Literature Reviews with Existing Related Work Sections}, \n booktitle = {Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems}, \n publisher = {Association for Computing Machinery}, \n author = {Palani, Srishti and Naik, Aakanksha and Downey, Doug and Zhang, Amy X and Bragg, Jonathan and Chang, Joseph Chee}, \n  year = {2023},\n keywords = {Literature Review, Scientific Discovery, Exploratory Search, Sensemaking}, \n }"

  function myFunction6() {
    navigator.clipboard.writeText(project6);
    alert("Copied the text: " + project6);
  }

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
        <a href="https://programs.sigchi.org/chi/2022/awards/honorable-mentions" style={{color: "#8a64d6", textAlign: "right"}}><strong> 🏆 Best Paper Award: Honorable Mention @ CHI'22</strong></a>
        <h4>Srishti Palani, <a href="https://www.davidledo.com" target="_blank"> David Ledo</a>, <a href="https://www.autodesk.com/research/people/george-fitzmaurice" target="_blank"> George Fitzmaurice</a>, <a href="http://fraseranderson.ca" target="_blank"> Fraser Anderson</a></h4>
      </Col>
      <Col span={9} push={6}>
        <Tooltip title="PDF">
              <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="https://dl.acm.org/doi/pdf/10.1145/3491102.3501933" target="_blank"/>
          </Tooltip>
          <Tooltip title="Talk">
            <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="https://www.youtube.com/watch?v=zx7_HakKcA8" target="_blank" />
          </Tooltip>
          <Tooltip title="Cite it">
            <Button type="text" shape="circle" icon={<ShareAltOutlined />} onClick={myFunction1}/>
          </Tooltip>
      </Col>
    </Row>
      <Row>
        <Col span={13}>
        <p> With the rapid development of creativity support tools, creative practitioners (e.g., designers, artists, architects) have to constantly explore and adopt new tools into their practice. While HCI research has focused on developing novel creativity support tools, little is known about creative practitioner's values when exploring and adopting these tools. We collect and analyze 23 videos, 13 interviews, and 105 survey responses of creative practitioners reflecting on their values to derive a value framework. We find that practitioners value the tools' functionality, integration into their current workflow, performance, user interface and experience, learning support, costs and emotional connection, in that order. They largely discover tools through personal recommendations. To help unify and encourage reflection from the wider community of CST stakeholders (e.g., systems creators, researchers, marketers, educators), we situate the framework within existing research on systems, creativity support tools and technology adoption.</p>
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
      <h4>Srishti Palani, <a href="https://jason-ding.com" target="_blank"> Zijian "Jason" Ding</a>, <a href="http://stevemacn.github.io" target="_blank"> Stephen MacNeil</a>, <a href="https://spdow.ucsd.edu" target="_blank">Steven P. Dow</a></h4>
      </Col>
      <Col span={9} push={6}>
      <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="https://dl.acm.org/doi/pdf/10.1145/3406522.3446046" target="_blank"/>
        </Tooltip>
        <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="https://docs.google.com/presentation/d/1YF1XVExGH6BiIaxkvvldGSIC_-iVCbE9JzsTcQELrFo/edit?usp=sharing" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} onClick={myFunction2} />
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
    <Card type="inner" title="Relatedly: Scaffolding Literature Reviews with Existing Related Work Sections" style={{whiteSpace: 'pre-line'}}>
    <Row>
      <Col span={12}>
      <h4><a href="#"> Srishti Palani</a>, <a href="https://www.cs.cmu.edu/~anaik/" target="_blank">Aakanksha Naik</a>, <a href="https://users.cs.northwestern.edu/~ddowney/" target="_blank">  Doug Downey</a>, <a href="https://homes.cs.washington.edu/~axz/" target="_blank">Amy X. Zhang</a> <a href="https://www.jonathanbragg.com">Jonathan Bragg</a>  <a href="https://joe.cat" target="_blank"> Joseph Chee Chang</a></h4>
      </Col>
      <Col span={12} push={7}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="https://drive.google.com/file/d/1PIyHLuBU9-XU-WX37fqGtFGD9WfJVQfD/view?usp=sharing" target="_blank"/>
        </Tooltip>
        <Tooltip title="Code">
          <Button type="text" shape="circle" icon={<GithubOutlined/>} href="https://github.com/allenai/lit-review-reuse" target="_blank"/>
        </Tooltip>
        <Tooltip title="Demo">
          <Button type="text" shape="circle" icon={<LaptopOutlined />} href="https://youtu.be/VvgRQm82Vlw" target="_blank" />
        </Tooltip>
        {/* <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="https://www.youtube.com/watch?v=rNjWK91hucA" target="_blank" />
        </Tooltip> */}
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} onClick={myFunction6} />
        </Tooltip>
        </Col>
    </Row> 
    <Row>
        <Col span={12}>
        <p> Scientific breakthroughs often rely upon scholars synthesizing many published work into broad overviews and rich insights to identify gaps in the current literature. However, survey articles require significant time and effort to synthesize and can quickly become outdated. Researchers in fast-paced disciplines also rely on the related work section to better understand the background when reading a paper. While related work sections also summarizes multiple prior work, they typically provide partial views of the larger research domain. Relatedly explore how a system in which users can quickly explore and read related work sections extracted across many papers can help scholars gain richer and more comprehensive overviews of fast-paced domains.</p> </Col>
        <Col span={12}>
        <img src={require("../../../assets/Relatedly.jpeg")} alt="" style={{width: "100%", alignItems: "right"}}/>   
        </Col>
        <Tag color="green">ReactJS web development</Tag>
        <Tag color="cyan">Formative User Study</Tag>
        <Tag color="blue">Lab User Evaluation Study</Tag>
        <Tag color="geekblue">Deployment Study</Tag>
        <Tag color="purple">Large-Language Models NLP</Tag>     
      </Row>
    </Card>
    <Card type="inner" title="CoNotate: Suggesting Qeries Based on Notes Promotes Knowledge Discovery" style={{whiteSpace: 'pre-line'}}>
    <Row>
      <Col span={12}>
      <h4>Srishti Palani, <a href="https://jason-ding.com" target="_blank">Zijian "Jason" Ding</a>, <a href="https://austinnguyen2001.github.io" target="_blank">  Austin Nguyen</a>, <a href="https://andrewlchuang.com" target="_blank"> Andrew Chuang</a> <a href="http://stevemacn.github.io">Stephen MacNeil</a>  <a href="https://spdow.ucsd.edu" target="_blank"> Steven P. Dow</a></h4>
      </Col>
      <Col span={12} push={7}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="https://dl.acm.org/doi/pdf/10.1145/3411764.3445618" target="_blank"/>
        </Tooltip>
        <Tooltip title="Code">
          <Button type="text" shape="circle" icon={<GithubOutlined/>} href="https://github.com/creativecolab/CHI2021-CoNotate" target="_blank"/>
        </Tooltip>
        <Tooltip title="Demo">
          <Button type="text" shape="circle" icon={<LaptopOutlined />} href="https://youtu.be/vH3htoAq0Ck" target="_blank" />
        </Tooltip>
        <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="https://www.youtube.com/watch?v=rNjWK91hucA" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} onClick={myFunction3} />
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
      <h4>Srishti Palani, <a href="https://www.linkedin.com/in/emily-zhou-448304180/" target="_blank">Yingyi "Emily" Zhou</a>, <a href="https://www.linkedin.com/in/sheldonzhu/" target="_blank">  Sheldon Zhu</a>, <a href="#" target="_blank"> Steven P. Dow</a></h4>
      </Col>
      <Col span={9} push={4}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="https://drive.google.com/file/d/1RzvIWfaEDhMpJDxCm2N7d4qya1ZAt5Xu/view?usp=sharing" target="_blank"/>
        </Tooltip>
        <Tooltip title="Code">
          <Button type="text" shape="circle" icon={<GithubOutlined/>} href="https://github.com/creativecolab/IntegratedSearch.git" target="_blank"/>
        </Tooltip>
        <Tooltip title="Demo">
          <Button type="text" shape="circle" icon={<LaptopOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="#" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} onClick={myFunction3} />
        </Tooltip>
        </Col>
    </Row>
    <Row>
        <Col span={12}>
        <p>Web search is increasingly used to satisfy complex, exploratory information goals. Exploring and synthesizing information into knowledge can be slow and cognitively demanding due to a disconnect between search tools and sense-making workspaces. Our work explores how we might integrate contextual query suggestions within a person's sensemaking environment. We developed InterWeave a prototype that leverages a human wizard to generate contextual search guidance and to place the suggestions within the emergent structure of a searchers' notes. To investigate how weaving suggestions into the sensemaking workspace affects a user's search and sensemaking behavior, we ran a between-subjects study (n=34) where we compare InterWeave's in context placement with a conventional list of query suggestions. InterWeave's approach not only promoted active searching, information gathering and knowledge discovery, but also helped participants keep track of new suggestions and connect newly discovered information to existing knowledge, in comparison to presenting suggestions as a separate list. These results point to directions for future work to interweave contextual and natural search guidance into everyday work.</p>
        
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

    <Card title="Investigating accessibility issues"
    style={{
      marginTop: 16,
    }}>
    <Card type="inner" title="An Eye Tracking Study of Web Search by People with and without Dyslexia">
    <Row>
      <Col span={15}>
      <h4>Srishti Palani, <a href="https://www.adamfourney.com" target="_blank">Adam Fourney</a>, <a href="https://www.microsoft.com/en-us/research/people/shanewil/" target="_blank">  Shane Williams</a>, <a href="https://www.microsoft.com/en-us/research/people/kevlar/" target="_blank"> Kevin Larson</a>, <a href="https://www.microsoft.com/en-us/research/people/irinasp/" target="_blank"> Irina Spiridonova</a>, <a href="#" target="_blank"> Meredith Ringel Morris</a></h4>
      </Col>
      <Col span={9} push={4}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="https://aka.ms/dyslexiasigir" target="_blank"/>
        </Tooltip>
        <Tooltip title="Talk">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="https://www.youtube.com/watch?v=nG18WVuRrzU" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} onClick={myFunction4} />
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
      <a href="#" style={{color: "#8a64d6", textAlign: "right"}}><strong> 🏆 CRA Outstanding Undergraduate Researcher Award: Finalist</strong> <strong> 🏆 Best Undergraduate Research Award: CCSCNE'18</strong></a>
      <h4>Srishti Palani, <a href="https://www.barbara-lerner.com/" target="_blank">Barbara Lerner</a> </h4> </Col>
      <Col span={12} push={8}>      
        <Tooltip title="PDF">
            <Button type="text" shape="circle" icon={<FilePdfOutlined/>}  href="https://ida.mtholyoke.edu/bitstream/handle/10166/4634/Palani_Srishti_Thesis.pdf?sequence=1" target="_blank"/>
        </Tooltip>        
        <Tooltip title="Talk Slides">
          <Button type="text" shape="circle" icon={<VideoCameraOutlined />} href="https://docs.google.com/presentation/d/1ayARA3_Nobx2XXJB5xChMPFt60XGiNjvw0vkVKeLM6g/edit?usp=sharing" target="_blank" />
        </Tooltip>
        <Tooltip title="Cite it">
          <Button type="text" shape="circle" icon={<ShareAltOutlined />} onClick={myFunction5} />
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