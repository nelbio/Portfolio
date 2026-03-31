interface TitleProps {
    title : string
}

const Title = ({title} : TitleProps) => {
  return (
    <h1 className="uppercase font-bold mb-10 text-center  
    text-3">
        {title}
    </h1>
  )
}

export default Title 