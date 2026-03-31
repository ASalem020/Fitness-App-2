interface KycHeaderProps {
  title: string;
  subtitle: string;
}

export default function KycHeader({ title, subtitle }: KycHeaderProps) {
  return (
    <div className="capitalize">
      <h1 className="text-center text-4xl font-extrabold text-white md:text-5xl">
        {title}
      </h1>
      <p className="text-center text-lg text-gray-200 opacity-90">{subtitle}</p>
    </div>
  );
}
