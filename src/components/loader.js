import { LoaderWrapper } from './style';

const Loader = () => {
  return (
    <LoaderWrapper>
      <section>
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-paragraph"></div>
      </section>
      <section>
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-paragraph"></div>
      </section>
      <section>
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-paragraph"></div>
      </section>
      <section>
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-paragraph"></div>
      </section>
      <section>
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-paragraph"></div>
      </section>
    </LoaderWrapper>
  );
}

export default Loader;