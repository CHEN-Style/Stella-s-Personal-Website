import { useState } from 'react'
import './App.css'

import TiltedCard from './assets/TitledCard'
import SplitText from './assets/SplitText'
import ClickSpark from './assets/ClickSpark'
import ShinyText from './assets/ShinyText'
import FlowingMenu from './assets/FlowingMenu'

function App() {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const demoItems = [
    { link: '#', text: 'Mojave', image: 'https://picsum.photos/600/400?random=1' },
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
        <ShinyText text="我是一位来自上海的小姑娘, 您可以继续向下浏览来了解有关我的更多信息" disabled={false} speed={5} className='custom-class' />
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
      
        <div className='TEST'></div>
        <div className='TEST'></div>
    </>
  )
}

export default App
