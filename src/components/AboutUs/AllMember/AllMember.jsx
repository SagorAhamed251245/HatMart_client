import React from "react";
import MemberCard from "./MemberCard";
import teamMember from "@/data/teamMember";

const AllMember = () => {
  return (
    <div className="mt-30">
      <h2 className="text-center dark:text-white text-2xl font-bold mt-10 mb-10">
        Our Team Member
      </h2>
      <div className="flex flex-wrap justify-center gap-6 dark:text-white">
        {teamMember.slice(0, 3).map((member) => (
          <MemberCard key={member.id} member={member}></MemberCard>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-6 dark:text-white">
        {teamMember.slice(3, 5).map((member) => (
          <MemberCard key={member.id} member={member}></MemberCard>
        ))}
      </div>
    </div>
  );
};

export default AllMember;
