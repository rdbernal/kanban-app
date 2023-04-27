type Props = {
  label: string;
  placeholder: string;
  type: string;
};

export default function CustomInput({ label, placeholder, type }: Props) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label>{label}</label>
      <input className="p-2 outline-none rounded" placeholder={placeholder} type={type} />
    </div>
  );
}
