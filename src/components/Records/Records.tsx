import { useState } from "react";
import Record from "../Record/Record";
import records from "./data/records";

import "./assets/Records.css";

const Records = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentRecord, setCurrentRecord] = useState("");

  const handleClick = (recordName: string) => {
    setIsPlaying(!isPlaying);
    if (currentRecord === "") {
      setCurrentRecord(recordName);
    } else {
      setCurrentRecord("");
    }
  };

  return (
    <div id="records-div">
      {records.map((record) => (
        <Record
          key={record.name}
          record={record}
          isPlaying={isPlaying}
          currentRecord={currentRecord}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default Records;
