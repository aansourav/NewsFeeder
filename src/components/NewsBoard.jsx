import { NewsContext, useNews } from "../context/newsContext";
import NewsItem from "./NewsCard";
import NotFound from "./NotFound";

export default function NewsBoard() {
  const { data } = useNews(NewsContext);
  const leftData = data.slice(1, data.length / 2);
  const rightData = data.slice(data.length / 2, data.length);

  return (
    <main className="my-10 lg:my-14">
      {data.length > 0 ? (
        <div className="container mx-auto grid grid-cols-12 gap-8 ">

          <div className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8">
            {leftData.map((item, index) => (
              <NewsItem
                key={index}
                {...item}
                className={
                  index === 0
                    ? "col-span-12 grid grid-cols-12 gap-4"
                    : "col-span-12 md:col-span-6 lg:col-span-4"
                }
                dir={"left"}
              />
            ))}
          </div>
          <div className="col-span-12 self-start xl:col-span-4">
            <div className="space-y-6 divide-y-2 divide-[#D5D1C9]">
              {rightData.map((item, index) => (
                <NewsItem key={index} {...item} className={"col-span-12 mb-6 md:col-span-8 "} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </main>
  );
}
