import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "나혜",
    title: "졸업하기 싫은 학생",
    mentor: {
      name: "주현",
      title: "멋쟁이사자처럼 프론트엔드 대표",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는{person.title}
      </h1>
      <p>{person.mentor.name}</p>
    </div>
  );
}
