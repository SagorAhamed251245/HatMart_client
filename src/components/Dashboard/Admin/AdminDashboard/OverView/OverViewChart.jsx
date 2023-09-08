import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    amount: 2400,
  },
  {
    name: "Feb",
    amount: 2210,
  },
  {
    name: "Mar",
    amount: 2290,
  },
  {
    name: "Apr",
    amount: 2000,
  },
  {
    name: "May",
    amount: 2181,
  },
  {
    name: "June",
    amount: 1900,
  },
  {
    name: "Jul",
    amount: 1950,
  },
  {
    name: "Aug",
    amount: 2300,
  },
  {
    name: "Sep",
    amount: 3000,
  },
  {
    name: "Oct",
    amount: 2900,
  },
  {
    name: "Nov",
    amount: 3200,
  },
  {
    name: "Dec",
    amount: 3300,
  },
];
const OverViewChart = () => {
  return (
    <div className="w-full lg:w-[60%] border border-gray-300  rounded-md p-3">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
          barSize={30}
        >
          <XAxis
            dataKey="name"
            scale="amount"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar
            name="Amount"
            dataKey="amount"
            fill="#8884d8"
            background={{ fill: "#eee" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverViewChart;
