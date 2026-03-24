import image1 from'../../../assets/images/image-about1.png'
import image2 from'../../../assets/images/image-about2.png'
import image3 from'../../../assets/images/image-about3.png'

export default function AboutImages() {
  return (
    <div className="relative h-screen z-10">

      {/* الصورة الكبيرة فوق */}
      <img
        src={image1}
        className="absolute top-0 left-0 w-96  h-[33.87rem] object-cover rounded-2xl"
      />

      {/* الصورة الصغيرة */}
      <img
        src={image2}
        className="absolute top-10 -right-6 w-56 h-48 object-cover rounded-2xl"
      />

      {/*الصورة الكبيرة تحت */}
      <img
        src={image3}
        className="absolute bottom-0 left-[18.9rem] top-64  w-80 h-[28.25rem] object-cover rounded-2xl "
      />

    </div>
  );
}