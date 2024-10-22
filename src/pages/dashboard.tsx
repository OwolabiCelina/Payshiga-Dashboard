import Greetings from "../features/dashboard/components/greetings";
import PageHeading from "../shared/components/page-heading";

const DashboardPage = () => {
  return (
    <>
      <PageHeading title="Dashboard" />
      <div className="px-20 w-full">
        <Greetings />
      </div>
    </>
  );
};

export default DashboardPage;
