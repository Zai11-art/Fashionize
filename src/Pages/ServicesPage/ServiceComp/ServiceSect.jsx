function ServiceSect(props) {
  let contents = [
    {
      icon: <ion-icon name="search-circle-outline"></ion-icon>,
      h1: "Search Fashion",
      p: "Fashion is an ever-changing landscape, with trends and styles constantly evolving. From the runway to the streets, fashion lovers are always on the lookout for the latest and greatest in clothing, accessories, and beauty. Whether you're searching for the perfect pair of jeans or the hottest new handbag, fashion search engines can help you find exactly what you're looking for. With the click of a button, you can browse through a vast selection of products from top designers and brands, filter by style, color, size, and price, and even compare prices across different retailers. Whether you're a fashionista or just looking to update your wardrobe, fashion search engines can make the search for your next favorite piece a breeze.",
    },
    {
      icon: <ion-icon name="star-half-outline"></ion-icon>,
      h1: "Rate Trends",
      p: "Rating trends refer to the changes in the perceived quality of a product, service, or experience over time. These trends are often analyzed using customer feedback and reviews, which can provide valuable insights into the strengths and weaknesses of a business. By examining rating trends, companies can identify areas for improvement and take steps to enhance their offerings. Rating trends can also help consumers make informed purchasing decisions, as they can gauge the overall satisfaction of other customers with a particular product or service. As such, rating trends are a crucial component of modern business strategy and can have a significant impact on the success of a company in today's competitive market.",
    },
    {
      icon: <ion-icon name="share-social-outline"></ion-icon>,
      h1: "Share Trends",
      p: "Sharing fashion trends refer to the growing trend of sharing clothes, accessories, and other fashion items with friends, family, and even strangers. This trend is driven by a desire to reduce waste, save money, and promote sustainability. Many people are now turning to sharing fashion as a way to refresh their wardrobe without contributing to the fast fashion industry's negative environmental impact. Sharing fashion also allows people to try out new styles and experiment with different looks without committing to purchasing new items. ",
    },
    {
      icon: <ion-icon name="create-outline"></ion-icon>,
      h1: "Create.",
      p: "Fashion trends are constantly evolving and changing, and staying up-to-date with the latest trends is crucial for fashion enthusiasts. Creating fashion trends is a complex process that involves a combination of art, culture, and consumer demand. Fashion designers and trendsetters draw inspiration from a variety of sources, such as art, music, and pop culture. They experiment with different fabrics, colors, and designs to create unique and innovative styles that capture the attention of consumers. Once a new trend emerges, it is often picked up by fashion influencers and celebrities, who showcase the trend on social media and in public appearances.",
    },
  ];

  return (
    <div className=" glass-component h-full w-full">
      <div className=" cta-card w-full z-[1] h-screen flex flex-row items-center justify-center m-0  flex-wrap">
        {contents.map((content) => (
          <div
            className="z-[2] md:w-[320px] w-[320px] h-[550px] bg-[white] z-[5] mx-5   border-[3px] drop-shadow-2xl 
                flex flex-col text-center  rounded-xl items-center opacity-95 ctacard hover:scale-[1.02] duration-200 ease-in-out"
          >
            <span className="mt-5 text-4xl">{content.icon}</span>
            <h1 className="span-material text-2xl">{content.h1}</h1>
            <p className="text-[14px] p-5 text-justify italic">{content.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSect;
