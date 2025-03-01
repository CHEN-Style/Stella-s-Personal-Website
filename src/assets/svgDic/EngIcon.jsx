const EngIcon = ({ width = 24, height = 24, fill1 = "#000", fill2 = "#000" }) => (
  <svg
    className="icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
  >
    <path d="M359.894033 460.497836v51.988984c0 5.12 0.637902 8.67882 1.913705 10.659672a10.575738 10.575738 0 0 0 5.338229 4.263869c2.26623 0.839344 5.825049 1.275803 10.642885 1.275803h156.000525c5.12 0 10.441443 1.846557 15.981115 5.539672 5.539672 3.693115 8.897049 9.803541 10.02177 18.331279 1.141508 8.527738-1.494033 14.990689-7.889836 19.388852-6.379016 4.414951-12.422295 6.614033-18.113049 6.614033H358.61823c-6.261508 0-13.563803-0.839344-21.957246-2.551607s-15.124984-5.405377-20.244984-11.079344c-5.12-5.707541-8.175213-11.448656-9.165639-17.273705-0.990426-5.825049-1.494033-14.000262-1.494033-24.508852V349.67082c0-8.813115 0.721836-16.484721 2.131934-22.998033 1.426885-6.546885 4.482098-11.952262 9.16564-16.216131 4.700328-4.263869 10.575738-7.520525 17.693377-9.803541 7.100852-2.26623 14.772459-3.407738 23.014819-3.407738h171.343738c5.690754 0 11.230426 2.131934 16.619016 6.395803 5.405377 4.263869 8.175213 10.793967 8.309509 19.607082 0.151082 8.813115-2.904131 14.923541-9.16564 18.331279-6.244721 3.407738-11.499016 5.103213-15.762885 5.103213h-151.316984c-6.815475 0-11.146492 0.788984-12.993049 2.350164a13.261639 13.261639 0 0 0-3.844196 4.901771c-0.587541 1.426885-0.923279 4.028852-1.024 7.822688l-0.033574 49.286295h103.575082c5.405377 0 11.079344 1.77941 17.055475 5.33823 5.959344 3.542033 9.014557 9.736393 9.148853 18.532721 0.151082 8.813115-2.769836 15.276066-8.729181 19.405639-5.976131 4.112787-11.80118 6.177574-17.475147 6.177574h-103.575082z" fill={fill1} />
    <path d="M823.262426 98.018623a100.721311 100.721311 0 0 1 100.721312 100.721311v654.688525a100.721311 100.721311 0 0 1-100.721312 100.721311h-587.540983a100.721311 100.721311 0 0 1-100.721312-100.721311v-654.688525a100.721311 100.721311 0 0 1 100.721312-100.721311h587.540983z m0 67.147541h-587.540983a33.57377 33.57377 0 0 0-33.573771 33.57377v654.688525a33.57377 33.57377 0 0 0 33.573771 33.573771h587.540983a33.57377 33.57377 0 0 0 33.573771-33.573771v-654.688525a33.57377 33.57377 0 0 0-33.573771-33.57377z" fill={fill2} />
    <path d="M345.89377 753.328262h369.311476a33.57377 33.57377 0 1 0 0-67.147541h-369.311476a33.57377 33.57377 0 1 0 0 67.147541z" fill={fill1} />
  </svg>
);

export default EngIcon;
