import '../styles/styles.css';

export default function Modal({largePicture}) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={largePicture} alt="" />
      </div>
    </div>
  );
}
