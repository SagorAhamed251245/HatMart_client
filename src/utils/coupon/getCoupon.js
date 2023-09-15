

const getCoupon = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APIS}/coupon`, {
    cache: "no-cache",
  });
  res.json();
};

export default getCoupon;
