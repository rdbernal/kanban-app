type Props = {
  label: string;
  type: string;
};

export default function CustomInput({ label, type }: Props) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label>{label}</label>
      <input className="p-2 outline-none rounded" type={`${type}`} />
    </div>
  );
}
