import BenefitList from "../components/Benefit/BenefitList";
import Intro from "../components/Intro";
import Layout from "../components/Layout/Layout";
import TestimonialSlider from "../components/Testimonials/TestimonialSlider";

const ManagePage = () => {
  return (
    <Layout>
      <Intro />
      <BenefitList />
      <TestimonialSlider />
    </Layout>
  );
};

export default ManagePage;
