import { useState } from "react";
import "./Carousel.css";
import SplitText from './SplitText'
import BlurText from "./BlurText";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <div className="box3-1">
    {/* <div className="background-layer-0"></div> */}
    <div className="container">
      {/* 背景层 */}


      <div className="main-content-box">
        <div className={`main-content ${activeIndex === 0 ? "active" : "hidden"}`}>
          <BlurText
            text="华特迪士尼 (中国) 有限公司"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8 GeneralText"
          />
          <div className="company-role">Product Operation, TDSC</div>
          <div className="enrole-time">2024.12 - 2025.02</div>
          <ul className="job-content General-margin">
            <li>
              <p>参与<span className="badge">新季度产品</span>Blue sky的<span className="badge">创新</span>并提出个性化<span className="badge">方案</span>;</p>
              <p>编写产品亮点介绍与营销切入点，以便天猫、抖音等平台制作商品详情页。</p>
            </li>
            <li>
              <p>运用<span className="badge">Vlookup</span>公式整理Global销售情况总表;</p>
              <p>数字化整理与复核授权商发票、合同;</p>
              <p>参与参与系统审核、批准、<span className="badge">整理</span>PO订单。</p>
            </li>
            <li>
              <p>维持<span className="badge">与供应商</span>日常<span className="badge">沟通</span>，包括但不限于：复核产品信息表并上传系统、追踪订单完成进度等。</p>
            </li>
            <li>
              <p>日常工作：</p>
              <p>拍摄产品四视图并整合、登记并<span className="badge">管理</span>Pre-production sample/Shipping sample、复核并数字化保存产品的testing report;</p>
              <p>合理<span className="badge">分配</span>并<span className="badge">计划</span>节点分发样品以供陆家嘴旗舰店/抖音店铺/天猫客服等多方保留、配合售后方提供产品信息处理客诉。</p>
            </li>
          </ul>
        </div>
        <div className={`main-content ${activeIndex === 1 ? "active" : "hidden"}`}>
          <BlurText
            text="新东方国际 留学部门"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8 GeneralText"
          />
          <div className="company-role">助教</div>
          <div className="enrole-time">2022.09-2022.11</div>
          <ul className="job-content General-margin">
            <li>
              <p>负责高效<span className="badge">管理</span>学生学习环境，确保班级自习秩序，提升学习效率</p>
            </li>
            <li>
              <p>执行学生学习能力<span className="badge">评估</span>，包括批改考试与提供个性化<span className="badge">反馈</span>，对学生进行全英文<span className="badge">辅导</span></p>
            </li>  
            <li>
              <p>与团队紧密<span className="badge">合作</span>，及时提供学员学习进度的详细报告；与家长<span className="badge">沟通</span>，建立积极的家校合作关系</p>
            </li>
          </ul>
          <BlurText
            text="新东方 四六级部门"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8 GeneralText General-margin"
          />
          <div className="company-role">助教</div>
          <div className="enrole-time">2024.03 - 2024.06</div>
          <ul className="job-content General-margin">
            <li>
              <p>编写四、六级课程词测，电脑系统操作学生排课时间与教师上课时间，参与安排并布置家长会</p>
            </li>
            <li>
              <p>检索最新四六级政策，更新项目介绍，供部门同事跟进最新行情，协助市场部门开展竞争对手<span className="badge">调查</span>，<span className="badge">并制作SWOT分析</span>等报告</p>
            </li>  
            <li>
              <p>联系上海大学学生会，<span className="badge">促进</span>新东方与上海大学的进一步<span className="badge">合作</span></p>
            </li>
          </ul>
        </div>
        
        <div className={`main-content ${activeIndex === 2 ? "active" : "hidden"}`}>
          <BlurText
            text="华人运通 (高合汽车)"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-2xl mb-8 GeneralText General-margin"
          />
          <div className="company-role">HR实习生</div>
          <div className="enrole-time">2022.06-2022.08</div>
          <ul className="job-content General-margin">
            <li>
              <p>负责员工档案的精确整理和<span className="badge">高效管理</span>，包括标签编号和电子化记录，确保资料的易访问性和安全性</p>
            </li>
            <li>
              <p>实施电子档案管理系统的<span className="badge">登记</span>工作，优化档案检索效率</p>
            </li>  
            <li>
              <p>负责新员工身份认证过程，包括联系、统计并寄发工牌，确保员工身份和安全准入标准</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="company-card-box">
        <div
          className={`company-card ${activeIndex === 0 ? "active" : ""}`}
          onClick={() => setActiveIndex(0)}
        >
          <div className="company-card-image company-img-1"></div>
          <p className="company-card-title">华特迪士尼（中国）有限公司</p>
          <p className="company-card-body">Product Operation, TDSC</p>
          <p className="footer">
            <span className="by-name">就职时间 </span> on <span className="date">2024.12-2025.02</span>
          </p>
        </div>

        <div
          className={`company-card ${activeIndex === 1 ? "active" : ""}`}
          onClick={() => setActiveIndex(1)}
        >
          <div className="company-card-image company-img-2"></div>
          <p className="company-card-title">新东方国际/四六级</p>
          <p className="company-card-body">助教</p>
          <p className="footer">
            <span className="by-name">就职时间 </span> on <span className="date">2024.03-2024.06</span>
          </p>
        </div>

        <div
          className={`company-card ${activeIndex === 2 ? "active" : ""}`}
          onClick={() => setActiveIndex(2)}
        >
          <div className="company-card-image company-img-3"></div>
          <p className="company-card-title">华人运通（高合汽车）</p>
          <p className="company-card-body">HR实习生</p>
          <p className="footer">
            <span className="by-name">就职时间 </span> on <span className="date">2022.06-2022.08</span>
          </p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Carousel;

