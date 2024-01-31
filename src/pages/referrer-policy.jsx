import GoBack from "../components/go-back";

const ReferrerPolicy = () => {
  return (
    <>
      <h3>Referrer Policy - Check Browser URL</h3>
      <p>
        <button><a href="https://www.pixeledge.io" referrerpolicy="origin-when-cross-origin">Visit PixelEdge</a></button>
        <GoBack />
      </p>
    </>
  );
};

export default ReferrerPolicy;
