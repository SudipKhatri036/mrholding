import "./Overview.css";

function Overview({ overviewRef }) {
  return (
    <section className="overview" ref={overviewRef}>
      <h2 className="section-heading">JAPAN AI Business Overview</h2>
      <p className="overview__content">
        JAPAN AI develops and provides various AI products to improve the
        productivity of Japanese companies and revitalize industry.
        <span className="overview__span">We</span>
      </p>
      <p className="overview__content">
        also conduct research and development of AI, focusing on various
        large-scale language models such as ChatGPT and Generative AI.
      </p>
    </section>
  );
}

export default Overview;
