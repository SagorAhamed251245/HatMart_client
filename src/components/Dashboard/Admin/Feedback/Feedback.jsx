import AllFeedbackTable from "./AllFeedbackTable";
import FeedbackStatics from "./FeedbackStatics";

const Feedback = () => {
  return (
    <>
      <section className="px-4 mx-auto sm:px-8 mt-5">
        <h3 className="text-3xl font-bold mb-5">Feedback</h3>
        <FeedbackStatics></FeedbackStatics>
        <AllFeedbackTable></AllFeedbackTable>
      </section>
    </>
  );
};

export default Feedback;
