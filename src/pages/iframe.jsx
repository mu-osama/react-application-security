import GoBack from "../components/go-back";

const Iframe = () => {
  return (
    <>
      <h3>iFrame Protection</h3>
      <GoBack />
      {/* not protected */}
      <h5>BDC Collateral - Not Protected</h5>
      <iframe
        src="https://www.bdccollateral.com/"
        width={900}
        height={500}
      ></iframe>

      <h5>Google - Protected</h5>
      {/* protected */}
      <iframe src="https://www.google.com/" width={900} height={500}></iframe>
    </>
  );
};

export default Iframe;
