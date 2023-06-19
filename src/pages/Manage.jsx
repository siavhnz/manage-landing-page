import BenefitList from "../components/Benefit/BenefitList";
import Intro from "../components/Intro";
import Layout from "../components/Layout/Layout";
import Simplify from "../components/Simplify";
import TestimonialSlider from "../components/Testimonials/TestimonialSlider";

const ManagePage = () => {
  return (
    <Layout>
      <Intro />
      <BenefitList />
      <TestimonialSlider />
      <Simplify />
    </Layout>
  );
};

export default ManagePage;
