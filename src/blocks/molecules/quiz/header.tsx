/* eslint-disable @next/next/no-img-element */
const QuizHeader = ({
  text,
  duration,
  totalQuestions,
  attempedQuestions,
  imageUrl,
  audioUrl,
}: any) => {
  return (
    <>
      <section className="p-5 flex rounded-xl bg-black/50 backdrop-blur-sm center">
        <div className="max-w-6xl flex flex-col md:flex-row md:gap-10 gap-3">
          <section className="h-full center">
            {imageUrl && (
              <img
                alt="image-map"
                src={imageUrl}
                className="rounded-xl xl:max-w-[400px] md:max-w-[200px] h-[150px] xl:h-[300px] border-2"
              />
            )}
          </section>
          <div className="center">
            <h1 className="xl:text-4xl md:text-3xl text-xl font-amar first-letter:uppercase font-semibold text-white">
              {text}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuizHeader;
