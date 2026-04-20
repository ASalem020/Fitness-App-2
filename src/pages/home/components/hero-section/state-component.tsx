type prpos = {
  title: string;
  text: string;
};

export default function StateComponent({ title, text }: prpos) {
  return (
    <div className=" space-y-2">
      <h3 className="text-2xl font-bold dark:text-white text-neutral-800">
        {title}
      </h3>
      <p className="dark:text-white text-gray-800 font-normal">{text}</p>
    </div>
  );
}
