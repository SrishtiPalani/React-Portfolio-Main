import React from "react";
import "./about.css";
import nameAudio from "/Users/srishtipalani/Desktop/React-Portfolio-main/src/assets/SrishtiPalaniPronunciation.mp3";
import 'antd/dist/antd.css';
import { SoundOutlined, MailOutlined, TwitterOutlined, FileSearchOutlined, FilePdfOutlined, GithubOutlined, VideoCameraOutlined, ShareAltOutlined, LinkedinOutlined, PlaySquareOutlined } from '@ant-design/icons';
import { Button, Tooltip, Row, Col, Card, Divider, Tag} from 'antd';

function About() {
  const audio = new Audio(nameAudio);
  audio.loop = true;


  var ActiveSearch = "@inproceedings{palani2021active,\n title={The'Active Search' Hypothesis: How Search Strategies Relate to Creative Learning}, \n author={Palani, Srishti and Ding, Zijian and MacNeil, Stephen and Dow, Steven P}, \n booktitle={Proceedings of the 2021 Conference on Human Information Interaction and Retrieval}, \n pages={325--329}, \n year={2021} \n}"
  
  function myFunctionActiveSearch() {
    navigator.clipboard.writeText(ActiveSearch);
    alert("Copied the text: " + ActiveSearch);
  }

  var conotate = "@inproceedings{palani2021conotate, \n title={CoNotate: Suggesting Queries Based on Notes Promotes Knowledge Discovery}, \n author={Palani, Srishti and Ding, Zijian and Nguyen, Austin and Chuang, Andrew and MacNeil, Stephen and Dow, Steven P}, \n booktitle={Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems}, \n pages={1--14}, \n year={2021} \n }"

  function myFunctionconotate() {
    navigator.clipboard.writeText(conotate);
    alert("Copied the text: " + conotate);
  }

  var interweave = "@inproceedings{palani2022interweave, \n title={InterWeave: Presenting Search Suggestions in Context Scaffolds Information Search and Synthesis}, \n author={Palani, Srishti and Zhou, Yingyi and Zhu, Sheldon and Dow, Steven P}, \n booktitle={Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology}, \n pages={1--16},\n year={2022}\n }"

  function myFunctioninterweave() {
    navigator.clipboard.writeText(interweave);
    alert("Copied the text: " + interweave);
  }

  var sensecape = "@article{suh2023sensecape,\n title={Sensecape: Enabling Multilevel Exploration and Sensemaking with Large Language Models}, \n author={Suh, Sangho and Min, Bryan and Palani, Srishti and Xia, Haijun}, \n journal={arXiv preprint arXiv:2305.11483}, \n year={2023} \n}"

  function myFunctionsensecape() {
    navigator.clipboard.writeText(sensecape);
    alert("Copied the text: " + sensecape);
  }

  var relatedly = "@inproceedings{palani2023relatedly, \n address = {Hamburg, Germany},\n  series = {{CHI} '23},\n title = {Relatedly: Scaffolding Literature Reviews with Existing Related Work Sections}, \n booktitle = {Proceedings of the 2023 CHI Conference on Human Factors in Computing Systems}, \n publisher = {Association for Computing Machinery}, \n author = {Palani, Srishti and Naik, Aakanksha and Downey, Doug and Zhang, Amy X and Bragg, Jonathan and Chang, Joseph Chee}, \n  year = {2023},\n keywords = {Literature Review, Scientific Discovery, Exploratory Search, Sensemaking}, \n }"

  function myFunctionRelatedly() {
    navigator.clipboard.writeText(relatedly);
    alert("Copied the text: " + relatedly);
  }

  var adrd = "@article{Yarmand2021AdjacentDO, \n title={Adjacent Display of Relevant Discussion Helps Resolve Confusion}, \n author={Matin Yarmand and Srishti Palani and Scott R. Klemmer}, \n journal={Proceedings of the ACM on Human-Computer Interaction},\n year={2021}, \n volume={5}, \n pages={1 - 11}, \n url={https://api.semanticscholar.org/ \n CorpusID:233354193} \n}"

  function myFunctionADRD() {
    navigator.clipboard.writeText(adrd);
    alert("Copied the text: " + adrd);
  }

  var practitioner = "@inproceedings{palani2021active,\n title={The'Active Search' Hypothesis: How Search Strategies Relate to Creative Learning}, \n author={Palani, Srishti and Ding, Zijian and MacNeil, Stephen and Dow, Steven P}, \n booktitle={Proceedings of the 2021 Conference on Human Information Interaction and Retrieval}, \n pages={325--329}, \n year={2021} \n}"

  function myFunctionpractitioner() {
    navigator.clipboard.writeText(practitioner);
    alert("Copied the text: " + practitioner);
  }

 
    return (
    <div className="about">
      <div className="about-top">
      <Row gutter={[16,8]}>
      <Col xs={24} xl={6} justify='start' align='middle'>
        <div className="about-photo">
            <img 
              // to make the image responsive
              // srcSet={`${imageSmall} 320w, ${imageMedium} 680w, ${imageLarge}   960w, ${imageXLarge} 1980w`}
              src={require("../../../assets/SrishtiPalani.jpeg")}
              alt="Srishti Palani -- PhD Researcher, UC San Diego"
              className="picture"
            />
        </div>
        </Col>
       
       <Col xs={10} xl={8} justify={{'xs': 'space-between', 'xl': 'start'}} align={{'xs': 'middle', 'xl': 'top'}}>
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
        <Tooltip title="Google Scholar Publications">
          <Button type="text" shape="circle" icon={<FileSearchOutlined />} href="https://scholar.google.com/citations?user=VQV7AYUAAAAJ&hl=en" target="_blank" />
        </Tooltip>
        <Tooltip title="Twitter">
          <Button type="text" shape="circle" icon={<TwitterOutlined />} href="https://twitter.com/srishtipalani?lang=en" target="_blank"/>
        </Tooltip>
        <Tooltip title="Github">
          <Button type="text" shape="circle" icon={<GithubOutlined />} href="https://github.com/SrishtiPalani" target="_blank" />
        </Tooltip>
        <Tooltip title="LinkedIn">
          <Button type="text" shape="circle" icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/srishti-palani/" target="_blank" />
        </Tooltip>        
      </Col>

    
      <Col xs={14} xl={10} justify={{'xs': 'center', 'xl': 'start'}} align={{'xs': 'middle', 'xl': 'top'}}>
          <h3 style={{fontSize: '18px'}}> Human-AI Interaction Researcher 
            <br />PhD Candidate, <a href="https://designlab.ucsd.edu" target="_blank" rel="noreferrer" style={{color: '#8860d0'}}> Design Lab</a>
            <br /><a href="https://ucsd.edu" target="_blank" rel="noreferrer" style={{color: '#8860d0'}}>University of California, San Diego</a>
          </h3>
      </Col>
    </Row>
    </div>
   
    <></>
    <Divider />
    
    <Row justify={{'xs': 'center', 'xl': 'start'}} align={{'xs': 'middle', 'xl': 'top'}} gutter={[16, 16]}>
    {/* <Card 
    style={{ 
      borderBottomStyle: 'inset',
      borderLeftStyle: 'hidden',
      borderRightStyle: 'hidden',
      borderTopStyle: 'hidden',
      }}> */}
      <Col xs={24} xl={16}>
      <Card bordered size='small' style={{fontSize: '15px',  borderRadius: '10px', boxShadow: '5px 5px #f9f0ff'}}> 
          🚀 <strong> News: I'm looking for Academic and Industry Research roles this year!</strong> Please reach out if you think there is a good fit. I would be happy to share more about my Research Agenda, Teaching Philosophy, and Diversity and Inclusion Initiatives.
          {/* <br /> */}
          {/*  */}
      </Card>
      <br />
          <p style={{ fontSize: '15px'}}>
          I research in the areas of Human-AI Interaction, Cognitive Science, Intelligent Information Retrieval,and Human-Centered AI. I conduct mixed-methods studies to deepen our understanding of how people search, synthesize, and create using large amounts of disparate information on the Web and using Large Language Models. Based on this understanding of user behaviors and challenges, I design and develop interactive intelligent systems that augment human cognitive abilities, particularly discovery, sensemaking and creativity! 
          <br /> <br /> 
          I regularly publish my research at top-tier HCI and IR venues (e.g. ACM CHI, UIST, CSCW, CHIIR, SIGIR).  My work has been recognized with several prestigious research awards, including best paper awards and nominations. My doctoral research is supported by the <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png" alt="Google" width="14px"></img> <a href="https://research.google/outreach/phd-fellowship/" target="_blank" rel="noreferrer"> Google Ph.D. Fellowship</a> and <img src=" https://csteachers.org/wp-content/uploads/2023/02/image1_20220921-153433.png" alt="Google" width="19px"></img> <a href="https://www.aspirations.org/award-programs/aic-collegiate-award" target="_blank" rel="noreferrer">NCWIT Collegiate Award</a>. During my PhD, I worked in the Human Understanding and Empathy, Ability, and Information and Data Sciences groups at <span></span>
          {/* <a href="https://www.microsoft.com/en-us/research/group/human-understanding-and-empathy/" target="_blank" rel="noreferrer">Human Understanding and Empathy</a>, <a href="https://www.microsoft.com/en-us/research/group/ability/" target="_blank" rel="noreferrer">Ability</a>, and <a href="https://www.microsoft.com/en-us/research/group/productivity-and-intelligence/" target="_blank" rel="noreferrer">Information and Data Sciences</a> groups at <span></span>*/} 
           <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png" alt="Microsoft" width="14px"></img>
          <a href="https://www.microsoft.com/en-us/research/" target="_blank" rel="noreferrer">  Microsoft Research</a>, 
          HCI and Visualization Research team at
          the<a href="https://www.autodesk.com/research/overview" target="_blank" rel="noreferrer"> 
          <img src="https://brand.autodesk.com/app/uploads/2021/04/symbol-1.svg" alt="Autodesk" width="28px"></img>Autodesk Research</a>, and
          Semantic Scholar Research team at the 
          <span></span> <img src="https://allenai.org/_next/static/images/AI2_Logo_Square_Gradients-dcd989f39f9f4248b53105719ca2af20.png" alt="AI2" width="28px"></img><a href="https://allenai.org/about" target="_blank" rel="noreferrer"> Allen Institute for AI.</a>
          <br /><br /> Before PhD, I graduated <i>summa cum laude</i> double majoring in <a href="https://www.mtholyoke.edu/directory/departments-offices-centers/computer-science" target="_blank" rel="noreferrer">Computer Science</a> and <a href="https://www.mtholyoke.edu/directory/departments-offices-centers/psychology-and-education" target="_blank" rel="noreferrer">Psychology</a> (specializing in <a href="https://www.fivecolleges.edu/academics/cognitive-neuroscience" target="_blank" rel="noreferrer">Cognitive Neuroscience</a>) from <a href="https://www.mtholyoke.edu" target="_blank" rel="noreferrer"> Mount Holyoke College.</a> 
          
          {/* I conducted research with <a href="https://sites.google.com/mtholyoke.edu/mbreen/home" target="_blank" rel="noreferrer">Prof. Mara Breen</a> in Cognitive Linguistics and <a href="https://www.barbara-lerner.com"  target="_blank" rel="noreferrer">Prof. Barbara Lerner</a> on wearables, ubiquitous computing and accessibility for older adults with disabilities. */}
          <br /> <br /> 
          Outside of research, I actively contribute to establishing <a href="#dei">diversity and inclusion programs</a> to overcome stereotype bias and make tech more diverse; and <a href="#teaching">teach</a> computational and design thinking courses. In my free time, I love playing squash and going for runs with my dog.
          </p>
      </Col>

      <Col xs={24} xl={8} style={{fontSize: '12px'}}>
      
      <h3 className="info-name"> <strong> Talk Schedule </strong> </h3>
        <Tag color="purple" style={{borderRadius: '5px', fontSize: '11px'}}>March 2024</Tag>Invited Talk at <a href="https://www.mpi-sws.org"> Max Planck Institute for Software Systems, Germany</a>
        <br /> <br />
        <Tag color="purple" style={{borderRadius: '5px', fontSize: '11px'}}>March 2024</Tag>Invited Talk at <a href="https://www.cics.umass.edu"> CS @ UMass Amherst</a>
        <br /> <br />
        <Tag color="purple" style={{borderRadius: '5px', fontSize: '11px'}}>Feb 2024</Tag>Invited Talk at <a href="https://ai.google/discover/research/"> Google AI Research </a>
        <br /> <br />
        <Tag color="purple" style={{borderRadius: '5px', fontSize: '11px'}}>Feb 2024</Tag>Invited Talk at <a href="https://www.microsoft.com/en-us/research/"> Microsoft Research, Redmond </a>
        <br /> <br />
        <Tag color="purple" style={{borderRadius: '5px', fontSize: '11px'}}>Feb 2024</Tag>Invited to present <a href="https://cogsci.ucsd.edu/research/Cognition%20At%20the%20Shore.html"> Cognition at Shore Lecture</a>
        <br /> <br />
        <Tag color="purple" style={{borderRadius: '5px', fontSize: '11px'}}>Jan 2024</Tag>Invited Talk at <a href="https://www.tableau.com/research"> Tableau Research</a>
        <br /> <br />
        {/* <Tag  style={{borderRadius: '5px', fontSize: '11px'}}>Dec 2023</Tag>Invited Talk at <a href="https://computerscience.emory.edu/index.html" style={{color: 'gray'}}> Emory University</a>, Atlanta
        <br /> <br /> */}
        <Tag style={{borderRadius: '5px', fontSize: '11px'}}>Dec 2023</Tag>Invited Talk at <a href="https://cse.ucsd.edu" style={{color: 'gray'}}> Computer Science and Engineering</a>, UC San Diego
        <br /> <br />
        <Tag  style={{borderRadius: '5px', fontSize: '11px'}}>Dec 2023</Tag>Invited Talk at <a href="https://courses.ucsd.edu/coursemain.aspx?section=318365" style={{color: 'gray'}}> COGS 100: Introduction to Cognitive Science</a>, UC San Diego
        <br /> <br />
        <Tag style={{borderRadius: '5px', fontSize: '11px'}}>Dec 2023</Tag>Invited to <a href="https://eecsrisingstars2023.cc.gatech.edu" style={{color: 'gray'}}>EECS Rising Stars</a>, Atlanta
        <br />  <br />
        <Tag style={{borderRadius: '5px', fontSize: '11px'}}>Oct 2023</Tag>Presenting and Demo-ing <a href="https://dl.acm.org/doi/10.1145/3586183.3606756" style={{color: 'gray'}}> Sensecape</a> at <a href="https://uist.acm.org/2023/" style={{color: 'gray'}}>ACM UIST 2023</a>, San Francisco
        <br /> <br />
        <Tag style={{borderRadius: '5px', fontSize: '11px'}}>Oct 2023</Tag>Invited Talk at <a href="https://www.cics.umass.edu/event/20231018/rising-stars-beyond-search-bar-transforming-information-discovery-synthesis-and" style={{color: 'gray'}}>CS Rising Stars Lecture Series, UMass Amherst</a>
        <br /> <br />
        {/* <Tag style={{borderRadius: '5px', fontSize: '11px'}}>Oct 2023</Tag>Invited Talk at <a href="https://www.mtholyoke.edu/directory/departments-offices-centers/computer-science" style={{color: 'gray'}}>Computer Science, Mount Holyoke College</a>, MA
        <br /> <br /> */}
        <Tag style={{borderRadius: '5px', fontSize: '11px'}}>Sept 2023</Tag>Invited Talk as a Young Researcher at <a href="https://www.heidelberg-laureate-forum.org" style={{color: 'gray'}}> Heidelberg Laureate Forum, Germany</a>
        {/* <br />  */}


      </Col>
    </Row> 
    <Divider />
    <section id="research">
    <h1 className="info-name"> <strong> Research Highlights</strong> </h1>
    {/* <p>
     Whether innovating new products, developing effective public policy, or conducting scientific research — online search and exploration are integral to how we learn, work, and create. The Web was originally envisioned as a “cognitive boost to empower intelligence”. However, today, we are drowning in information. It is hard to discover insights and make breakthroughs beyond our narrow perspectives while making sense of information across a fragmented ecosystem of resources, apps, and work sessions. 
    </p> */}

<h3> <strong > Intelligent Computational and Interaction Techniques to Augment  Exploration, Sensemaking and Creativity</strong></h3>
    {/* <br /> <br /> */}
    {/* <strong>How might we enhance the Web experience to augment human learning, decision-making, and creativity, rather than simply consuming information? </strong>  */}
    <Row gutter={16}>
    <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', borderRadius: '14px', padding: '10px' }}
              src={require("../../../assets/conotate-screenshot.png")}
              alt="CoNotate screenshot"
              className="picture"
            />
    } style={{ borderRadius: '14px'}}>
    <h4> CoNotate: Suggesting Queries Based on Notes Promotes Knowledge Discovery | <strong> CHI 2021</strong>  </h4>
     <p style={{fontSize: '12px'}}>CoNotate offers query suggestions based on analyzing the searcher's notes and previous searches for patterns and gaps in information. This approach helped searchers issue significantly more queries, and discover more domain-specific terms than standard web search. This demonstrates how search can leverage user-generated content to help people get started when exploring complex, multi-faceted information spaces.</p>
   
   {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="https://dl.acm.org/doi/pdf/10.1145/3411764.3445618" target="_blank"> PDF </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<PlaySquareOutlined/>} href="https://youtu.be/vH3htoAq0Ck?si=YMh34qWImy2p_SlY" target="_blank"> Demo </Button> <span></span> 
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<VideoCameraOutlined />} href="https://youtu.be/rNjWK91hucA?si=OBfVM5qvFNyImGb3" target="_blank"> Talk </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<GithubOutlined />} href="https://github.com/creativecolab/CHI2021-CoNotate" target="_blank"> Code </Button> <span></span> 
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<ShareAltOutlined />} onClick={myFunctionconotate} target="_blank"> Cite </Button> <span></span> 
    </Card>
  </Col>


    <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', borderRadius: '14px', padding: '10px', alignItems: 'center' }}
              src={require("../../../assets/interweave-screenshot.png")}
              alt="InterWeave screenshot"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <h4> InterWeave: Presenting Suggestions in Context Scaffolds Information Search and Synthesis | <strong>UIST 2022</strong></h4> 
    <p style={{fontSize: '12px'}}> InterWeave mines the emergent structure of a searchers' notes and places contextual search guidance suggestions within this structure. This approach helped search actively, gather information, and connect newly discovered information to existing knowledge, compared to current search. This demonstrates how search can leverage user-generated content and structure to help people explore and make sense of complex information spaces.</p>
  
    {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="https://dl.acm.org/doi/pdf/10.1145/3526113.3545696" target="_blank"> PDF </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<VideoCameraOutlined />} href="https://www.youtube.com/live/txM-TuZawx8?si=Ty1NndzQw9kA3t2T&t=11520" target="_blank"> Talk </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<GithubOutlined/>} href="https://github.com/creativecolab/IntegratedSearch.git" target="_blank"> Code </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<ShareAltOutlined />} onClick={myFunctioninterweave} target="_blank"> Cite </Button> <span></span> 
 </Card>
    </Col>
   
   
    <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', padding: '10px' }}
              src={require("../../../assets/sensecape.png")}
              alt="InterWeave screenshot"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <h4> Sensecape: Enabling Multilevel Exploration and Sensemaking with Large Language Models | <strong> UIST 2023 </strong> </h4> 
    {/* <h5> <a href="https://programs.sigchi.org/chi/2022/awards/honorable-mentions" style={{color: "#8a64d6", textAlign: "right"}}>🏆 Honorable Mention, Best Paper Award</a> </h5> */}
    <p style={{fontSize: '12px'}}> Sensecape is an interactive system designed to support complex information tasks with an LLM by enabling users to manage the complexity of information through multilevel abstraction and switch seamlessly between foraging and sensemaking. Sensecape empowers users to explore more topics and structure their knowledge hierarchically, thanks to the externalization of levels of abstraction. </p>
    <br />
    {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="https://dl.acm.org/doi/10.1145/3586183.3606756" target="_blank"> PDF </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<PlaySquareOutlined/>} href="https://youtu.be/MIfhunAwZew" target="_blank"> Demo </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<ShareAltOutlined />} onClick={myFunctionsensecape} target="_blank"> Cite </Button> <span></span>
     </Card>
    </Col>
  </Row>
  <br></br>
  <Row gutter={16}>
    <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', borderRadius: '14px', padding: '5px' }}
              src={require("../../../assets/relatedly.png")}
              alt="Relatedly screenshot"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <h4> Relatedly: Scaffolding Literature Reviews with Existing Related Work Sections| <strong> CHI 2023 </strong></h4>
    {/* <h5>Srishti Palani, <a href="https://jason-ding.com" target="_blank" rel="noreferrer"> Zijian "Jason" Ding</a>, <a href="http://stevemacn.github.io" target="_blank" rel="noreferrer"> Stephen MacNeil</a>, <a href="https://spdow.ucsd.edu" target="_blank" rel="noreferrer">Steven P. Dow</a></h5> */}
   <p style={{fontSize: '12px'}}> Relatedly mines the existing structuring of knowledge on the Web to generate topic substructures and summaries. Scholars using Relatedly explored twice as many scientific papers and subtopics, producing more coherent and insightful topic outlines compared to standard scholarly search engines within the same time. </p>
   
   {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="https://dl.acm.org/doi/pdf/10.1145/3544548.3580841" target="_blank"> PDF </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<PlaySquareOutlined/>} href="https://youtu.be/VvgRQm82Vlw?si=XmfjdzC0l1i_6RYk" target="_blank"> Demo </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<VideoCameraOutlined/>} href="https://www.youtube.com/watch?v=bJYviga1_d0" target="_blank"> Talk </Button> <span></span>
   <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<ShareAltOutlined />} onClick={myFunctionRelatedly} target="_blank"> Cite </Button> <span></span>
       </Card>
  </Col>

  <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', borderRadius: '14px', padding: '5px' }}
              src={require("../../../assets/polymath.png")}
              alt="PolyMath screenshot"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
      <br />
      <br />
      <br />
    <h4> PolyMath: Augmenting Creative Processes By Enabling References to User-Generated Context </h4>
    <p style={{fontSize: '12px'}}> To better align foundation model outputs to user intentions, the user can explicitly or implicitly refer to relevant contexts present in the many artifacts generated across their process. Relevant project context can be user-level (e.g., emotions, design preferences), project-level (e.g., project goal, to-do list), or external (e.g., shared files or information on the Web). 
 </p>
   
   {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
   <Button disabled size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="#" target="_blank"> PDF </Button> <span></span>
   </Card>
  </Col>

  <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', borderRadius: '14px', padding: '10px' }}
              src={require("../../../assets/adrd.png")}
              alt="ADRD screenshot"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
  
    <h4> Adjacent Display of Relevant Discussion Helps Resolve Confusion | <strong> CSCW 2021 </strong></h4>
    <p style={{fontSize: '12px'}}> Adjacent Display of Relevant Discussion (ADRD) displays threaded comments in a panel adjacent to the video and dynamically updates the content of the panel based on when a video is paused. In a between-subjects lab study, ADRD helped participants resolve confusion points, skim and read comments, and encouraged video interaction.</p>
   
    {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="https://dl.acm.org/doi/pdf/10.1145/3449217" target="_blank"> PDF </Button> <span></span>   
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<ShareAltOutlined />} onClick={myFunctionADRD} target="_blank"> Cite </Button> <span></span>
    </Card>
  </Col>
  
  </Row>
  <br/>
    <h3><strong>Emperical Studies of How People Explore, Make Sense of, and Create Using the Web and Generative AI </strong></h3>
    <Row gutter={16}>
    <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '100%', borderRadius: '14px', padding: '10px' }}
              src={require("../../../assets/active-search.png")}
              alt="a person actively searching many different webpages"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <h4> The 'Active Search' Hypothesis: How Search Strategies Relate to Creative Learning | <strong> CHIIR 2021 </strong> </h4>
    {/* <h5>Srishti Palani, <a href="https://jason-ding.com" target="_blank" rel="noreferrer"> Zijian "Jason" Ding</a>, <a href="http://stevemacn.github.io" target="_blank" rel="noreferrer"> Stephen MacNeil</a>, <a href="https://spdow.ucsd.edu" target="_blank" rel="noreferrer">Steven P. Dow</a></h5> */}
   <p style={{fontSize: '12px'}}>To understand how web search affects early-stage design, we collected and analyzed search log and self-report data from 34 students in a project-based design class. Analysis found active and diverse search behavior (more frequent and diverse queries, and opening more webpages) correlated with more progress in early-stage design (gathering more facts, articulating insights, and developing concrete framings of problems).</p>
   
   {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="https://dl.acm.org/doi/pdf/10.1145/3406522.3446046" target="_blank"> PDF </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<VideoCameraOutlined />} href="https://docs.google.com/presentation/d/1YF1XVExGH6BiIaxkvvldGSIC_-iVCbE9JzsTcQELrFo/edit?usp=sharing" target="_blank"> Slides </Button> <span></span>
    <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<ShareAltOutlined />} onClick={myFunctionActiveSearch} target="_blank"> Cite </Button> <span></span>

   </Card>
  </Col>


    <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '93%', borderRadius: '14px', padding: '10px', alignItems: 'center' }}
              src={require("../../../assets/longitudinal.png")}
              alt="study setup and screenshot of logs captured"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <h4> Evolution of User Context During Complex Information Workflows </h4> 
    <p style={{fontSize: '12px'}}> In a longitudinal study observing 15 knowledge workers (startup founders, researchers, policy advisors, journalists, novelists), we collected and analyzed application logs from search and work documents over the course of 1-6 months. Participants exhibited Distributed Cognition by searching the Web throughout all stages of their work, from project definition to ideation and delivery, revealing rich contextual information encoded in artifacts along their iterative creative journeys.</p>
   
   {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
  <Button disabled size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="#" target="_blank"> PDF </Button> <span></span>
    </Card>
    </Col>
   
   
    <Col xs={24} xl={8}>
    <Card hoverable={true} size="small" bordered={true}  cover={<img style={{ width: '85%', padding: '3px' }}
              src={require("../../../assets/PractitionerValueFramework.jpeg")}
              alt="practitioner value framework"
              className="picture"
            />
    } style={{ borderRadius: '14px' }}>
    <h4> Practitioner Perspectives on Creativity Support Tool Adoption |  <strong>CHI 2022</strong></h4> 
    <h5> <a href="https://programs.sigchi.org/chi/2022/awards/honorable-mentions" style={{color: "#8a64d6", textAlign: "right"}}>🏆 Honorable Mention, Best Paper Award</a> </h5>
    <p style={{fontSize: '12px'}}> Analyzing 23 videos, 13 interviews, and 105 survey responses, we derived a framework, revealing practitioners prioritize adopting tools based on functionality, integration with workflow, performance, user interface, learning support, costs, and emotional connection, with personal recommendations being the main discovery channel. The framework aims to foster reflection and collaboration among creativity support stakeholders.</p>
   
   {/* <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FolderOutlined/>} href="#" target="_blank"> Project </Button> <span></span> */}
  <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<FilePdfOutlined/>} href="https://dl.acm.org/doi/pdf/10.1145/3491102.3501933" target="_blank"> PDF </Button> <span></span>
  <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<VideoCameraOutlined/>} href="https://www.youtube.com/watch?v=zx7_HakKcA8" target="_blank"> Talk </Button> <span></span>
  <Button size='small' style={{borderRadius:'5px', fontSize: '12px'}} icon={<ShareAltOutlined />} onClick={myFunctionpractitioner} target="_blank"> Cite </Button> <span></span>

    </Card>
    </Col>
  </Row>
    </section>
  </div>
  );
}

export default About;