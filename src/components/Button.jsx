const Button = ({text}) => {
  return (
    <button className="px-8 py-4 mx-auto rounded-md border-solid border-[2px] border-blue-400 bg-slate-950 blueShadow duration-200">
        <p>{text}</p>
    </button>
  )
}

export default Button
