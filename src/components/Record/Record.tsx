import { useEffect } from "react";

type RecordProptypes = {
  record: {
    name: string;
    src: string;
    audio: string;
  };
  isPlaying: boolean;
  currentRecord: string;
  handleClick: (recordName: string) => void;
};

const Record = (props: RecordProptypes) => {
  const { record, isPlaying, currentRecord, handleClick } = props;
  const { name, src, audio } = record;

  const shouldSpin = isPlaying && currentRecord === name;
  const song = new Audio(audio);

  const handleRecordClick = (recordName: string) => {
    if (isPlaying) {
      song.pause();
    }
    handleClick(recordName);
  };

  useEffect(() => {
    if (shouldSpin) {
      song.play();
    }
  }, [isPlaying, currentRecord]);

  return (
    <div id="record">
      <img
        src={src}
        alt={name}
        className={shouldSpin ? "record-playing" : "records"}
        onClick={() => handleRecordClick(name)}
        title="Click to Play"
      />
      <p>{name}</p>
    </div>
  );
};

export default Record;
