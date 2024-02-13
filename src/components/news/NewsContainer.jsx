import LeftNewsContainer from "./left/LeftNewsContainer";
import RightNewsContainer from "./right/RightNewsContainer";

const NewsContainer = () => {
  return (
    <main className="my-10 lg:my-14">
      <div className="container mx-auto grid grid-cols-12 gap-8">
        <LeftNewsContainer />
        <RightNewsContainer />
      </div>
    </main>
  );
};

export default NewsContainer;
