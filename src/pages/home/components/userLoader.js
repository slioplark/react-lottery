import { UserLoaderWrapper } from '../style';

const UserLoader = () => {
  return (
    <UserLoaderWrapper>
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
    </UserLoaderWrapper>
  );
}

export default UserLoader;