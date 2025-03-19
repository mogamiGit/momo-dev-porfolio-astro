interface Props {
  title: string;
  description: string;
  linkImage: string;
  inHover?: boolean;
  className?: string;
}

// Hacerlo horizontal o vertical

const ImageSlide: React.FC<Props> = ({ title, description, linkImage, inHover = false, }) => {
  return (
    <div className="w-[250px]">
      <div className="w-full h-[500px]">
        <img
          className="h-full object-cover"
          src={linkImage}
          alt={title}
        />
      </div>
      <p className="font-kalnia text-3xl">{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default ImageSlide;
