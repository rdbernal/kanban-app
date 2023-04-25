type Props = {
  children: string;
  tailwindClasses: string;
}

export default function Button({ children, tailwindClasses }: Props) {
  return (
    <button className={`${tailwindClasses}`}>
      {children}
    </button>
  )
}