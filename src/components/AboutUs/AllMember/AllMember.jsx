import React from "react";
import MemberCard from "./MemberCard";
import teamMember from "@/data/teamMember";

const AllMember = () => {
  return (
    <div>
      <h2 className="text-center text-2xl font-bold mt-10 mb-10">
        Our Team Member
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {teamMember.map((member) => (
          <MemberCard key={member.id} member={member}></MemberCard>
        ))}
      </div>
    </div>
  );
};

export default AllMember;
