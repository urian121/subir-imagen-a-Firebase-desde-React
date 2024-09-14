function ListImg({ imageList }) {
  return (
    <div className="col-md-8">
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
    </div>
  );
}

export default ListImg;
