import ProductCard from "../productCard/ProductCard";
import "./Product.css";

function Product() {
  return (
    <section className="product" style={{ marginBottom: "2rem" }}>
      <h2 className="section-heading">Product</h2>
      <ProductCard
        subtitle="Japan's cheapest corporate GPT with security and data learning capabilities"
        imgSrc="./product_chat_img.jpeg"
        bgName="chat-bg"
      />
      <ProductCard
        subtitle="A fully automated AI meeting minutes"
        imgSrc="./product_speech_img.jpeg"
        bgName="speech-bg"
        direction=" row-rev"
      />
      <ProductCard
        subtitle="including strategy formulation, analysis, and creative generation"
        imgSrc="./product_marketing_img.jpeg"
        bgName="marketing-bg"
      />
    </section>
  );
}

export default Product;
