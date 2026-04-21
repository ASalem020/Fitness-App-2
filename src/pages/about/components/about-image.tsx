import image1 from'../../../assets/images/image-about1.png'
import image2 from'../../../assets/images/image-about2.png'
import image3 from'../../../assets/images/image-about3.png'

export default function AboutImages() {
  return (
    <div className="relative h-screen z-10 ">

      {/* الصورة الكبيرة فوق */}
      <img
        src={image1}
        className="absolute top-20 lg:top-0 left-4 lg:left-0 w-52 lg:w-96 h-80 lg:h-[33.87rem] object-cover rounded-2xl"
      />

      {/* الصورة الصغيرة */}
      <img
        src={image2}
        className="absolute top-[8rem] lg:top-10 left-[14.5rem] lg:left-[25rem] w-32 lg:w-56 h-28 lg:h-48 object-cover rounded-2xl"
      />

      {/*الصورة الكبيرة تحت */}
      <img
        src={image3}
        className="absolute top-[15.5rem] bottom-0 left-[10rem] lg:left-[17rem] lg:top-64 w-52 lg:w-[22.3rem] h-64 lg:h-[28.25rem] object-cover rounded-2xl "
      />

    </div>
  );
}