type prpos = {
  title: string;
  text: string;
};

export default function StateComponent({ title, text }: prpos) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-neutral-800">{title}</h3>
      <p className="text-gray-800 font-normal">{text}</p>
    </div>
  );
}
