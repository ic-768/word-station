import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Skeleton = () => {
  const Line = ({ classes }: { classes: string }) => (
    <span className={`h-3 my-2 rounded ${classes} bg-zinc-500`}></span>
  );

  return (
    <div className="absolute inset-x-0 max-w-lg p-8 mx-auto bg-white rounded animate-pulse top-32 h-4/6">
      <div className="relative flex flex-col h-full overflow-y-auto text-neutral-800 max-h-max">
        <FontAwesomeIcon
          fontSize={24}
          cursor="pointer"
          icon={faHeart}
          className={`self-center w-12 text-zinc-500`}
        />
        {[1, 2].map((i) => (
          <Line key={i} classes="w-32" />
        ))}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Line key={i} classes="w-full" />
        ))}

        <Line classes="w-36" />
        {[1, 2, 3].map((i) => (
          <Line key={i} classes="w-32" />
        ))}

        <div className="sticky bottom-0 flex mx-auto mt-auto text-white w-72">
          <span className="w-24 h-10 ml-auto rounded bg-zinc-500"></span>
        </div>
        <span className="w-6 h-6 mr-auto rounded bg-zinc-500"></span>
      </div>
    </div>
  );
};

export default Skeleton;
