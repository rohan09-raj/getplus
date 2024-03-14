import Image from "next/image";
import ArticleCard from "./cards/ArticleCard";
import CustomCarousel from "./reusables/Carousel";

export default function Mentions() {
  const mentions = [
    "https://storage.googleapis.com/getplus.in/images/timeapplaud.png",
    "https://storage.googleapis.com/getplus.in/images/yourstory.png",
    "https://storage.googleapis.com/getplus.in/images/vccircle.png",
    "https://storage.googleapis.com/getplus.in/images/startuplogo.png",
  ];

  const articles = [
    {
      image: "https://plusgold.in/images/india_today_news_article.png",
      title: "Unlocking the Potential of Gold Investment...",
      logo: "https://plusgold.in/images/indiaTodayLogo.png",
      link: "https://www.indiatoday.in/impact-feature/story/unlocking-the-potential-of-gold-investment-plus-gold-shines-bright-on-shark-tank-india-2509330-2024-03-01",
    },
    {
      image: "https://plusgold.in/images/plusGoldNewsArticle.png",
      title: "Plus launches a new savings app with exclusive and...",
      logo: "https://plusgold.in/images/passionateInMarketingLogo.png",
      link: "https://www.passionateinmarketing.com/plus-launches-a-new-savings-app-with-exclusive-and-attractive-offers-for-indias-jewellery-purchasers/",
    },
    {
      image: "https://plusgold.in/images/outlookStartUpArticle.png",
      title: "Evolvex invests in jewellery savings app plus...",
      logo: "https://plusgold.in/images/outlookStartUpLogo.png",
      link: "https://startup.outlookindia.com/sector/saas/jewellery-savings-app-plus-catches-attention-of-evolvex-raises-350k-in-seed-round-news-9148",
    },
    {
      image: "https://plusgold.in/images/startupnewArticle.png",
      title: "India’s First Jewellery Savings App Plus raises...",
      logo: "https://plusgold.in/images/startUpNewsLogo.png",
      link: "https://startupnews.fyi/2023/08/18/indias-first-jewellery-savings-app-plus-raises-usd-350k-in-its-seed-round/",
    },
    {
      image: "https://plusgold.in/images/enteprenurNewsArticle.png",
      title: "Jewellery Savings App Plus Raises $350,000 In...",
      logo: "https://plusgold.in/images/enterprenurNewsLogo.png",
      link: "https://www.entrepreneur.com/en-in/news-and-trends/jewellery-savings-app-plus-raises-350000-in-seed-funding/457594",
    },
    {
      image: "https://plusgold.in/images/enTracker.png",
      title: "Jewellery savings app Plus raises $350K in seed...",
      logo: "https://plusgold.in/images/entrackrLogo.png",
      link: "https://entrackr.com/2023/08/jewellery-savings-app-plus-raises-350k-in-seed-round/",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-10">
      <h1 className="text-4xl text-[#868E96] font-bold mt-8 text-center md:text-3xl">
        Golden buzz about Plus
      </h1>
      <div className="flex flex-wrap w-full justify-between items-center gap-6 md:justify-center">
        {mentions.map((mention, index) => (
          <Image
            key={index}
            src={mention}
            width={220}
            height={200}
            alt="Organization"
          />
        ))}
      </div>
      <section className="w-full">
        <CustomCarousel>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              image={article.image}
              title={article.title}
              logo={article.logo}
              link={article.link}
            />
          ))}
        </CustomCarousel>
      </section>
    </section>
  );
}
