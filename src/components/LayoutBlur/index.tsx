interface Props {
  type: 'top' | 'lines'
}

const LayoutBlur = ({ type }: Props) => {
  switch (type) {
    case 'top':
      return (
        <div
          aria-hidden
          className="absolute left-1/4 h-64 w-3/5 translate-y-[-165%] rotate-12 rounded-r-full bg-slate-50 opacity-25 shadow-[20px_250px_300px_#4586e2] 2xl:translate-y-[-175%]"
        />
      )
    case 'lines':
      return (
        <div aria-hidden>
          <div className="absolute right-0 bottom-1/3 h-1 w-64 translate-x-40 -rotate-45 bg-sky-500 blur-lg" />
          <div className="absolute right-16 bottom-1/3 h-1 w-64 translate-x-40 -rotate-45 bg-blue-500 blur-lg" />
          <div className="absolute right-28 bottom-1/3 h-1 w-64 translate-x-40 -rotate-45 bg-blue-800 blur-lg" />
        </div>
      )
    default:
      return null
  }
}

export default LayoutBlur
