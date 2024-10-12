import Section01 from '../components/intro/Section01';
import Section02 from '../components/intro/Section02';
import Section03 from '../components/intro/Section03';
import Section04 from '../components/intro/Section04';
import Section05 from '../components/intro/Section05';

const Intro = () => (
  <div className="intro">
    <h1 className="sub-title"><span>회사소개</span></h1>
    <Section01 />
    <Section02 />
    <Section03 />
    <Section04 />
    <Section05 />
  </div>
);

export default Intro;
