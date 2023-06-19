import BenefitList from "../components/Benefit/BenefitList";
import Intro from "../components/Intro";
import Layout from "../components/Layout/Layout";

const ManagePage = () => {
  return (
    <Layout>
      <Intro />
      <BenefitList />
    </Layout>
  );
};

export default ManagePage;
