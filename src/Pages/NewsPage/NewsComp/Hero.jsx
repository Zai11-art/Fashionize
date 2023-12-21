import axios from "axios";
import { useState, useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import NewsHeader from "./NewsHeader";

function NewsSect() {
  let article = [
    {
      title: "POP Fashion: Latest Styles for Women",
      excerpt:
        "Introduction Fashion is ever-evolving, and staying on-trend can be a challenge. That's where POP Fashion comes in, offering the latest styles for women to help them look their best. Whether you're…",
      author: "Ali Bajwa",
      link: "https://filmdaily.co/fashion/pop-fashion-latest-styles-for-women/",
      image:
        "https://filmdaily.co/wp-content/uploads/2023/03/Screenshot-2023-03-21-193243.png",
    },
    {
      title: "7 TikTok Fashion Trends That Will Be Everywhere This Spring",
      excerpt:
        "Spring is here and these TikTok trends are already everywhere. The millions of views they've racked up prove my point.",
      author: "Sierra Mayhew",
      link: "https://www.whowhatwear.com/spring-tiktok-trends-2023",
      image:
        "https://cdn.cliqueinc.com/posts/306226/spring-tiktok-trends-2023-306226-1679447773976-fb.700x0c.jpg",
    },
    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },

    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },

    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },
    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },
    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },
    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },
    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },
    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },
    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },
    {
      title: "Five spring and summer fashion trends to look out for",
      excerpt:
        "With the arrival of Spring, it's time to start weaving the fashion trends of 2023 into your closet. Influenced by the fashion shows from New York, London, Milan and Paris,",
      author: "Ali B22ajwa",
      link: "https://richmond.com/lifestyles/fashion-and-style/five-spring-and-summer-fashion-trends-to-look-out-for/video_ab7ccd39-0c3e-5216-a228-6817484da298.html",
      image:
        "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/assets/v3/editorial/a/b7/ab7ccd39-0c3e-5216-a228-6817484da298/6418ac136780f.image.jpg?crop=320%2C168%2C0%2C5&resize=320%2C168&order=crop%2Cresize",
    },
  ];

  // const [news, setNews] = useState([]);

  // useEffect( () => {

  //     const options = {
  //     method: 'GET',
  //     url: 'https://api.newscatcherapi.com/v2/search',
  //     params: {q: 'Fashion trends', lang: 'en', sort_by: 'relevancy', page: '1'},
  //     headers: {
  //         'x-api-key': 'V5x_wE6NiFOzmAqPzz5z4cPKaPoMOsgJwLuLwJBm_TM'
  //     }
  //     };

  //     axios.request(options).then(function (response) {
  //         const data = response.data.articles
  //         console.log(data)
  //         setNews([...data])

  //     }).catch(function (error) {
  //         console.error(error);
  //     });

  // },[])

  return (
    <div className=" glass-component ">
      <NewsHeader></NewsHeader>
      <div className="cta-card flex flex-col items-center pt-[50px]  pb-[200px]">
        <h1 className="text-5xl text-white mb-10">
          <i>Browse the Latest News</i>{" "}
        </h1>
        {article.slice(0, 11).map((article) => {
          return (
            // <div className="my-3 flex flex-col items-center">
            //     <h1 className="text-xl py-2">{article.title}</h1>
            //     <img src={article.media} alt="" />
            //     <h2 className="">{article.excerpt}</h2>
            //     <p className="">{article.author}</p>
            //     <p className="">{article.summary}</p>
            //     <span>Source: <a href={article.link}></a> </span>
            // </div>
            <AnimationOnScroll
              animateOnce={true}
              animatePreScroll
              animateIn="animate__fadeInLeft"
            >
              <div
                className=" lg:w-[900px] md:w-[750px] w-[400px] lg:h-[300px] md:h-[300px] h-[600px] bg-[white]  p-2  mt-5 border-[3px] drop-shadow-2xl 
                        flex md:flex-row flex-col md:flex-nowrap flex-wrap rounded-xl  opacity-95"
              >
                <div className="lg:w-[430px] md:w-[330px] w-[377.5px] lg:h-[300px] md:h-[278px] h-[290px] rounded-lg">
                  <img
                    className="lg:w-[430px] md:w-[330px] w-[377.5px] lg:h-[280px] md:h-[278px] h-[290px] rounded-lg"
                    src={article.image}
                    alt=""
                  />
                </div>
                <div className="lg:w-[430px] md:w-[330px]  w-[377.5px] flex flex-col md:mx-4 mx-1 px-2">
                  <h1 className="md:text-3xl text-xl md:pt-2 pt-3">
                    {article.title}
                  </h1>
                  <h2 className=" md:pt-2 pt-3">
                    {" "}
                    <i> {article.excerpt}</i>
                  </h2>
                  <div className="lg:pt-[70px] md:pt-[20px] pt-[40px]  pb-2 flex-row flex justify-between">
                    <span className="">
                      <i> - {article.author}</i>
                    </span>
                    <span className="span-material underline">
                      <a href={article.link} className="">
                        Read more.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          );
        })}
        {/* <div className=" lg:w-[900px] md:w-[750px] w-[400px] lg:h-[400px] md:h-[400px] h-[700px] bg-[white]  p-2  mt-5 border-[3px] drop-shadow-2xl 
                flex md:flex-row flex-col md:flex-nowrap flex-wrap rounded-xl  opacity-95">
                    <div className="lg:w-[430px] md:w-[330px] w-[377.5px] lg:h-[400px] h-[290px] rounded-lg" ><img className="lg:w-[430px] md:w-[330px] w-[377.5px] lg:h-[380px] md:h-[380px] h-[290px] rounded-lg" src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg" alt="" /></div>
                    <div className="lg:w-[430px] md:w-[330px]  w-[377.5px] flex flex-col md:ml-6 ml-1" >
                        <h1 className="md:text-3xl text-xl md:pt-2 pt-3">hehehe nice the one and the last</h1>
                        <h2 className=" md:pt-2 pt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, magnam unde quis enim architecto voluptas nam tempora recusandae itaque at officiis reiciendis fugiat. Iusto nesciunt ut ducimus molestias voluptas. Beatae?</h2>
                        <p className=" md:pt-2 pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quo quos reprehenderit autem qui accusamus eum dicta perspiciatis</p> 
                        <div className="lg:pt-[75px] pt-2 flex-row flex justify-between">
                            <span className=""><i> - author</i></span>
                            <span className="span-material underline"><a href="" className="">Read more.</a></span>
                        </div>
                    </div>
                </div> */}
      </div>
    </div>
  );
}

export default NewsSect;
