import React, { useState } from "react";
import "./CardStyles.css";

import MarketingSVGIcon from './svgDic/marketingSVG'
import BusinessIcon from './svgDic/BusinessIcon'
import ManagementIcon from './svgDic/ManagementIcon'
import SuplyIcon from './svgDic/SuplyIcon'
import CompanyIcon from './svgDic/CompanyIcon'
import NetworkIcon from './svgDic/NetworkIcon'
import RewardIcon from './svgDic/RewardIcon'
import EngIcon from './svgDic/EngIcon'
import PianoIcon from './svgDic/PianoIcon'
import OfficeIcon from './svgDic/OfficeIcon'
import PythonIcon from './svgDic/PythonIcon'

const CardContainer = () => {
  const [isHoveredA, setIsHoveredA] = useState(false);
  const [isHoveredF, setIsHoveredF] = useState(false);
  const [isHoveredS, setIsHoveredS] = useState(false);

  return (
    <div className="card-container">
      <div className="main-card-box">
        <div
          className={`main-card`}
          onMouseEnter={() => setIsHoveredA(true)}
          onMouseLeave={() => setIsHoveredA(false)}
        >
          <p className="heading">
            悉尼科技大学
          </p>
        </div>
        <div
          className={`main-card`}
          onMouseEnter={() => setIsHoveredF(true)}
          onMouseLeave={() => setIsHoveredF(false)}
        >
          <p className="heading">
            上海大学
          </p>
        </div>
      </div>
      <div className="sub-card-box" style={{marginTop: '50px'}}>
        <div className={`card sub-card card-b ${isHoveredA ? "hover-1" : "reverse-1"}`}>
          <MarketingSVGIcon></MarketingSVGIcon>
          <p className="card-text">Marketing Foundations</p>
          <p className="card-text-content">Brand management, Product strategy, customer analytics</p>
        </div>
        <div className={`card sub-card card-c ${(isHoveredA || isHoveredF) ? "hover-2" : "reverse-2"}`}>
          <RewardIcon/>
          <p className="card-text">23-24年度 优秀学生奖学金二等奖</p>
          <p className="card-text">上海大学"未来合伙人"挑战赛 创新之星</p>
        </div>
        <div className={`card sub-card card-h ${isHoveredF ? "hover-4" : "reverse-4"}`}>
          <CompanyIcon/>
          <p className="card-text">企业经营综合模拟</p>
          <p className="card-text-content">Strategic planning, Financial management, Dynamic market environment</p>
        </div>
        {/* <div className={`card sub-card card-d ${isHoveredA ? "hover-3" : "reverse-3"}`}>D</div>
        <div className={`card sub-card card-e ${isHoveredA ? "hover-4" : "reverse-4"}`}>E</div> */}
      </div>
      <div className="sub-card-box">
        <div className={`card sub-card card-g ${isHoveredF ? "hover-1" : "reverse-1"}`}>
          <SuplyIcon/>
          <p className="card-text">全球运营与供应链管理</p>
          <p className="card-text-content">Logistics management, Production planning, Supply chain design</p>
        </div>
        <div className={`card sub-card card-d ${isHoveredA ? "hover-3" : "reverse-3"}`}>
          <BusinessIcon/>
          <p className="card-text">Econ. of Business</p>
          <p className="card-text-content">Cost & Revenue, Business strategy, Pricing mechanism</p>
        </div>
        {/* <div className={`card sub-card card-h ${isHoveredF ? "hover-2" : "reverse-2"}`}>H</div> */}
        <div className={`card sub-card card-i ${isHoveredF ? "hover-3" : "reverse-3"}`}>
          <NetworkIcon/>
          <p className="card-text">网络与新媒体营销</p>
          <p className="card-text-content">Digital marketing, E-commerce, Content marketing</p>
        </div>
        <div className={`card sub-card card-e ${isHoveredA ? "hover-4" : "reverse-4"}`}>
          <ManagementIcon/>
          <p className="card-text">Management Capstone</p>
          <p className="card-text-content">Strategic management, Data-Driven decision making, Case study analysis</p>
        </div>
        {/* <div className={`card sub-card card-j ${isHoveredF ? "hover-4" : "reverse-4"}`}>J</div> */}
      </div>
      <div className="sub-card-box">
        <div className={`card sub-card card-w ${isHoveredS ? "hover-1" : "reverse-1"}`}>
          <EngIcon/>
          <p className="card-text">CET - 4, CET - 6</p>
          <p className="card-text">IELTS: 5.5/7.5/6.0/5.5/6.0</p>
          <p className="card-text">熟练的书面与口头英语</p>
        </div>
        <div className={`card sub-card card-x ${isHoveredS ? "hover-2" : "reverse-2"}`}>
          <PianoIcon/>
          <p className="card-text">钢琴九级</p>
        </div>
        <div className={`card sub-card card-y ${isHoveredS ? "hover-3" : "reverse-3"}`}>
          <OfficeIcon/>
          <p className="card-text">熟练使用：</p>
          <p className="card-text">Word, Excel, Powerpoint</p>
        </div>
        <div className={`card sub-card card-z ${isHoveredS ? "hover-4" : "reverse-4"}`}>
          <PythonIcon/>
          <p className="card-text">熟悉Vlookup的使用</p>
        </div>

      </div>
      <div
          className={`main-card`}
          style={{marginTop: '50px'}}
          onMouseEnter={() => setIsHoveredS(true)}
          onMouseLeave={() => setIsHoveredS(false)}
        >
          <p className="heading">
            基本技能
          </p>
        </div>
    </div>
  );
};

export default CardContainer;
