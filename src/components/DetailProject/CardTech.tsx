
interface Props {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const cardTech: React.FC<Props> = ({ title, subtitle, ...rest }) => {
  return (
    <div
      className="rounded h-[240px] w-full flex flex-col justify-center items-center bg-white dark:bg-dark-blue dark:drop-shadow-[0px_5px_10px_rgba(74,104,240,0.4)] drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] p-6"
    >
      <div
        className="h-16 w-16 aspect-square rounded-lg bg-gray-100 dark:bg-black dark:shadow-[inset_0px_0px_36px_rgba(74,104,240,0.4)] shadow-[inset_0px_0px_10px_rgba(0,0,0,0.1)] border dark:border-blue-violet border-gray-200"
      >
        {rest.icon}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 grow">
        <p className="text-xl font-semibold line-clamp-2">{title}</p>
        <p className="line-clamp-2 text-xs text-gray-600">{subtitle}</p>
      </div>
    </div >
  );
}

export default cardTech;
