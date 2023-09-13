import Feedback from "@/components/Dashboard/Admin/Feedback/Feedback";
import getFeedbacks from "@/utils/getFeedbacks";

const FeedbackPage = async () => {
  const { allReview } = await getFeedbacks();
  return (
    <>
      <Feedback feedbacks={allReview} />
    </>
  );
};

export default FeedbackPage;
