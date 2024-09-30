import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

const Workout = ({ workout, id }) => {
  return (
    <SectionWrapper
      id={'workout'}
      header={"welcome to"}
      title={["The", "DANGER", "zone"]}
    >
      <div className="flex flex-col gap-4 ">
        {workout.map((exercise, i) => {
          return <ExerciseCard key={i} i={i} exercise={exercise} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
