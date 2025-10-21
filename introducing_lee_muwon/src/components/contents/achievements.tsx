import React from 'react';
import '../../style/achievement.css';

interface LinkItem {
  text: string;
  url: string;
}

interface FinalistCardProps {
  contestName: string;
  logoUrl: string;
  title: string;
  description: string;
  links: LinkItem[];
}

const FinalistCard: React.FC<FinalistCardProps> = ({
  contestName,
  logoUrl,
  title,
  description,
  links,
}) => {
  return (
    <div className="finalist-card">
      <img
        src={logoUrl}
        alt={`${contestName} Logo`}
        className="finalist-card__logo"
      />

      <h2 className="finalist-card__contest-name">{contestName}</h2>

      <h1 className="finalist-card__title">{title}</h1>

      <p className="finalist-card__description">{description}</p>

      <div className="finalist-card__link-container">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="finalist-card__link-button"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

function FinalistCardsShowcase() {
  const cardDataList: FinalistCardProps[] = [
    {
      contestName: '2023 SW·AI 교육 수기공모전',
      logoUrl: 'https://www.kosac.re.kr/_static/kofac/img/common/logo.png',
      title: '2023 SW·AI Education Essay Contest Minister Prize(MSIT)',
      description:
        'Got the Minister prize(MSIT) in the 2023 SW·AI Education Essay Contest by writing about my journey learning SW and AI.',
      links: [
        { text: 'Award Letter', url: 'https://drive.google.com/file/d/1xQ7biFyvZZdEdG-hC0uBdSUUq6xD-cdI/view?usp=sharing' }
      ],
    },
    {
      contestName: '전국 청소년비즈쿨 페스티벌',
      logoUrl: 'https://www.kised.or.kr/main/img/kor/sub/sub06/sub0604_ci_img_02.png',
      title: 'Korea Youth Biz-cool Festival Minister Prize(MSS) Rank 1',
      description:
        'Achieved Rank 1 and got the Minister prize(MSS) in the Korea Youth Biz-cool Festival',
      links: [
        { text: 'Prototype Explanation', url: 'https://blog.naver.com/lmwmason/223207244860' },
        { text: 'News Paper', url: 'https://www.ccdn.co.kr/news/articleView.html?idxno=946044' },
      ],
    },
    {
      contestName: 'NYPC 2025',
      logoUrl: 'https://news.nateimg.co.kr/orgImg/at/2023/07/10/2023071001000933300050751.jpg',
      title: 'NYPC 2025 Top 500',
      description:
        'Ranked in the Top 500 in the Nexon Youth Programming Challenge (NYPC) 2025, showcasing strong programming skills among numerous participants.',
      links: [
        { text: 'Certificate Round2 Enter', url: 'https://drive.google.com/file/d/1eV6VaE-2HbPb2MbP6-EgGFjnFGbyLtT0/view?usp=sharing' },
        { text: 'Top 500 Certificate', url: 'https://drive.google.com/file/d/1e_zJL2BxtYII6sHdIXlp5CgMDzWBNLDr/view?usp=sharing' },
      ],
    },
  ];

  return (
    <section id="achievements" className="achieve">
      <div className="ach-div">
        <h1>My Achievements! 🏆</h1>
      </div>
    <div style={{ textAlign: 'center' }}> 
      {cardDataList.map((data, index) => (
        <FinalistCard
          key={index}
          {...data}
        />
      ))}
    </div>
    </section>
  );
}

export default FinalistCardsShowcase;