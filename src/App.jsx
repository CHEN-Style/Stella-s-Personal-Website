import { useState } from 'react'
import './App.css'

import TiltedCard from './assets/TitledCard'
import SplitText from './assets/SplitText'
import ClickSpark from './assets/ClickSpark'
import ShinyText from './assets/ShinyText'
import Threads from './assets/Threads'
import ScrollFloat from './assets/ScrollFloat'
import CardContainer from './assets/CardStyles'
import Carousel from './assets/Carousel'
import InfiniteScroll from './assets/InfiniteScroll'
import RotatingText from './assets/RotatingText'
import CircularText from './assets/CircularText'
import NotificationPopup from './assets/NotificationPopup'

import MyIcon from './image/邮箱.svg'
import reactLogo from './image/react.svg'
import viteLogo from './image/vite.svg'




function App() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const handleOpenGithub = () => {
    window.open("https://github.com/CHEN-Style/Stella-s-Personal-Website", "_blank");
  };

  const items = [
    { content: "实践经历" },
    { content: 
      <div>
        <p className='badge'>2019.06</p>
        <p>上海青少年科学创新实践工作站</p>
        <p>上海市第十人民医院关于肿瘤的研究</p>
      </div>
     },
    { content: "实践经历" },
    { content:
      <div>
      <p className='badge'>2020.04</p>
      <p>上海中学生2019年“进馆有益”征文三等奖</p>
      <p>中国传统艺术之青花瓷上的“兽中龙呈祥”</p>
    </div>
    },
    { content: "实践经历" },
    { content:
      <div>
      <p className='badge'>2024.05</p>
      <p>嘉创行 Mini-MBA第三期</p>
      <p>AIGC专项创新创业训练营三等奖</p>
    </div>
    },
    { content: "实践经历" },
    { content:
      <div>
      <p className='badge'>2024.09</p>
      <p>嘉定镇团委课题</p>
      <p>“青年创新创业者参与社区治理全过程”</p>
      <p>三方联动草案编写</p>
    </div>
    },
  ];

  return (
    <>
      <ClickSpark
        sparkColor='#D98481'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        className='clickBox'
      >
      </ClickSpark>
      <div className='box1'>
        <SplitText
          text="Hi, 很高兴能认识你! 我是唐欣悦"
          className="text-2xl font-semibold text-center GeneralTitle"
          delay={100}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <ShinyText text="您可以继续向下浏览来了解更多有关我的信息" disabled={false} speed={5} className='custom-class' />
        <div className='profileCard'>
          <TiltedCard
            imageSrc="src\image\profileCardImg.jpg"
            altText="Profile Cover"
            captionText="Profile Cover"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text">
                Profile Cover
              </p>
            }
          />
        </div>
      </div>
      <div style={{ width: '100%', height: '200px', position: 'relative' }}>
        <Threads
          amplitude={3}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      <div className='box2'>
        <SplitText
          text="教育经历与基本技能"
          className="text-2xl font-semibold text-center InternshipTitle"
          delay={100}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className='aboutMe'>
          <div className='aboutMe-title'>关于我</div>
          <div className='cutline'></div>
          <div className='aboutMe-content'>
            <p>上海大学悉尼工商学院在读, 预计2025.07获得悉尼科技大学 (University of Technology Sydney) 学学士学位证书。</p>
            <p>大学四年期间, 接受<span className='badge'>全英文授课</span>, 多次获得4.0绩点, 参与多个创新创业项目并落地实施, 与团队策划<span className='badge'>公司管理</span>相关内容。</p>
            <p></p>
            <p></p>
            <p>领导开展“虎丘茶非遗文化进校园”、“社区学校共创舞蹈房”项目，联系企业家与负责人，落实后续工作。</p>
            <p>有不断学习的<span className='badge'>上进心</span>，和良好的沟通能力，在先前的学习和实习经历中锻炼出了优秀的<span className='badge'>团队合作和领导能力</span>，对任何挑战都有积极的态度。</p>
          </div>
        </div>
        <div className='box2-midTitile'>📚同时学习与参与两个学校的课程和活动📚</div>
        <CardContainer></CardContainer>
      </div>
      <div style={{ width: '100%', height: '200px', position: 'relative' }}>
        <Threads
          amplitude={3}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      <div className='box3'>
        <SplitText
          text="实习经历与实践经历"
          className="text-2xl font-semibold text-center InternshipTitle"
          delay={100}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <Carousel></Carousel>

      </div>
      <div style={{marginTop: '200px'}}></div>
      <div style={{height: '500px', position: 'relative'}}>
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection='left'
          autoplay={true}
          autoplaySpeed={0.5}
          autoplayDirection="up"
          pauseOnHover={true}
        />
      </div>
      <div style={{ width: '100%', height: '200px', position: 'relative' }}>
        <Threads
          amplitude={3}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>
      <div style={{marginTop: '50px'}}></div>
      <div className='box5'>
        <CircularText
          text="联系我*CONTACT*ME*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
        <div className='emailBox'>
          <img src={MyIcon} alt="emailIcon" />
          <div className='email'>2931036711@qq.com</div>
        </div>
      </div>
      {/* <div className='box4'>
        <SplitText
          text="关于我"
          className="text-2xl font-semibold text-center InternshipTitle box4-position-1"
          delay={100}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <div className='about-me-box'>
          <p className='rotateText'>我具有</p>
          <div className='rotating-text-box'>
            <RotatingText
              texts={['努力', '责任心', '团队合作', '认真仔细']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg rotateText"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div> */}

      <div className='TEST'>
        <div className='powerBox'>
          <p className='power-text'>Powered by</p>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <p className='power-text'>+</p>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>

        <div className='githubBox'>
          <p className='power-text'>View source code on Github</p>
          <button className="Btn" onClick={handleOpenGithub}>
            <span className="svgContainer">
              <svg fill="white" viewBox="0 0 496 512" height="1.4em"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </span>
            <span className="BG"></span>
          </button>
        </div>
        <NotificationPopup />
      </div>
    </>
  )
}

export default App
