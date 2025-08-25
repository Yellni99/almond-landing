import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import almondImg from "../assets/almond.png";
import boritems from "../assets/보리템즈.png";
import cookie  from "../assets/쿠키.png";
import macaron from"../assets/마카롱.png";
import financier from "../assets/휘낭시에.png";

export default function LandingPage() {
  const benefits = [
    { title: "아몬드 97%", desc: "천연 아몬드를 97% 사용하여 고소하고 진한 풍미를 그대로!", icon: "🌰" },
    { title: "다양한 활용", desc: "홈베이킹, 쿠키, 케이크, 요리 등 어디에나 OK", icon: "🍰" },
    { title: "풍부한 영양", desc: "비타민E, 식이섬유, 단백질까지 풍부해 건강 챙기기 좋아요", icon: "💪" },
  ];

  const recipes = [
    { img: cookie, title: "쿠키", tip: "버터 대신 아몬드가루로 고소함 UP" },
    { img: financier, title: "휘낭시에", tip: "홈카페 감성 그대로, 간편하게 만들기" },
    { img: macaron, title: "마카롱", tip: "바삭하고 고소한 식감 완벽!" },
  ];

  const reviews = [
    { name: "이*린", comment: "홈베이킹 해보려고 샀는데 다른 제품보다 더 고소한거 같아요!", img: "이미지 첨부예정1" },
    { name: "고*이", comment: "휘낭시에에 빠져서 만들어보려고 지인추천 받아서 샀는데 좋아요~", img: "이미지 첨부예정2" },
    { name: "김*지", comment: "다쿠와즈 만들 떄 사용했는데 식감이 훨씬 부드러운거 같아요.", img: "이미지 첨부예정3" },
  ];

  return (
    <>
    <Helmet>
     
        <title>보리템즈 아몬드나라 아몬드가루 97%</title>
        <meta name="description" content="아몬드가루 97%, 건강한 재료로 만든 베이킹" />
        <meta property="og:title" content="보리템즈 아몬드나라 아몬드가루 97%" />
        <meta property="og:description" content="아몬드가루 97%, 건강한 재료로 만든 베이킹" />
        <meta property="og:image" content="almond-landing-git-main-yellnis-projects.vercel.app/boritems.png" />
        <meta property="og:url" content="almond-landing-git-main-yellnis-projects.vercel.app/" />
        <meta property="og:type" content="website" />
     
      </Helmet>
    <div className="bg-white text-gray-900 font-sans">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-yellow-50 to-yellow-100 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
        
        {/* 로고 */}
        <a
            href="https://smartstore.naver.com/boritems"
            target="_blank"
            rel="noopener noreferrer"
          >
        <img
          src={boritems}
          alt="보리템즈 로고"
          className="w-20 h-20 object-contain mt-4 drop-shadow-lg"
        />
  
        </a>

        <motion.img
          src={almondImg}
          alt="아몬드가루 메인 이미지"
          className="w-80 h-80 object-contain mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          아몬드나라 아몬드가루 97%
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          고소하고 영양 가득한 아몬드가루! <br/>홈베이킹, 요리에 다양하게 활용해보세요.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <a
            href="https://smartstore.naver.com/boritems/products/12070956367"
            target="_blank"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-2xl shadow-lg mb-10"
          >
            스마트스토어에서 구매하기
            
          </a>
        </motion.div>
      </section>

      {/* 장점 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-2xl shadow-md hover:shadow-xl bg-yellow-50"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 아몬드가루 설명 */}
      <section className="py-20 px-6 bg-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">왜 아몬드나라 아몬드가루인가?</h2>
          <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
            천연 아몬드만을 엄선하여 고형분 97%로 만든 아몬드가루입니다. <br/>
            고소한 풍미와 건강한 영양을 동시에 챙길 수 있어, 매일의 간식과 요리에 딱 맞습니다.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div className="p-6 bg-white rounded-2xl shadow-md" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }}>
              <h3 className="text-xl font-semibold mb-2">엄선된 아몬드</h3>
              <p className="text-gray-700">신선하고 질 좋은 아몬드로 <br/> 성분 걱정없이!</p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-2xl shadow-md" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ delay: 0.2 }}>
              <h3 className="text-xl font-semibold mb-2">높은 고형분</h3>
              <p className="text-gray-700">97% 아몬드 고형분으로<br/> 진한 풍미와 고소함</p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-2xl shadow-md" whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 40 }} transition={{ delay: 0.4 }}>
              <h3 className="text-xl font-semibold mb-2">건강한 영양</h3>
              <p className="text-gray-700">비타민E, 식이섬유, 단백질 등<br/> 풍부한 영양소</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 관련 디저트 소개 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">관련 디저트</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recipes.map((recipe, idx) => (
              <motion.div
                key={idx}
                className="overflow-hidden rounded-2xl shadow-md bg-yellow-50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                  <p className="text-gray-700">{recipe.tip}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 리뷰 */}
      <section className="py-20 px-6 bg-yellow-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">구매자 후기</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <img src={review.img} alt={review.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-semibold mb-2">{review.name}</h3>
                <p className="text-gray-700">"{review.comment}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 구매 유도 */}
      <section className="py-20 bg-gradient-to-r from-yellow-100 to-yellow-200 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">아몬드나라 아몬드가루로 건강한 하루를 시작하세요!</h2>
        <a
          href="https://smartstore.naver.com/boritems/products/12070956367"
          target="_blank"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 px-8 mt-10 rounded-2xl shadow-lg"
        >
          지금 바로 구매하기
        </a>
      </section>

      {/* footer */}
      <footer className="py-10 text-center bg-white text-gray-500">
        <p>© 2025 보리템즈. All rights reserved.</p>
      </footer>

    </div>
    </>
  );
}
