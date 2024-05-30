function ListImg({ imageList }) {
  return (
    <section className="section__masonry">
      <div className="section__masonry-wrapper">
        <div className="section__masonry-wrapper__item">
          {imageList.map((url, index) => (
            <img
              key={index}
              src={url}
              alt="Imagen subida"
              className="section__masonry-wrapper__item-img"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListImg;
