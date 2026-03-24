type FormContainerProps = {
  title: string;
  formComponent: React.ReactNode;
  subTitle?: string;
};

/**
 * A reusable container component for displaying forms with a consistent layout.
 * It provides a standardized wrapper with a main title and an optional subtitle,
 * ensuring uniform styling across various form pages (e.g., login, registration).
 *
 * @param props - The properties for the FormContainer.
 * @param props.title - The main heading text displayed at the top.
 * @param  props.formComponent - The actual form element to render inside the container.
 * @param [props.subTitle] - An optional subheading displayed below the main title.
 * @returns The rendered form container layout.
 */
export default function FormContainer({
  title,
  subTitle,
  formComponent,
}: FormContainerProps) {
  return (
    <>
      {/* SubTitle */}
      {subTitle && (
        <p className="mb-5 font-baloo-thambi text-2xl text-white text-center capitalize">
          {subTitle}
        </p>
      )}

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-white font-baloo-thambi mb-4 capitalize text-center">
        {title}
      </h1>

      {/* Form Container */}
      <div className="form-container p-10 border border-gray-300 rounded-[3.125rem] flex justify-center">
        {/* Form will render here */}
        {formComponent}
      </div>
    </>
  );
}
