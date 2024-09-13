
function getRandomInt(count: number){
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const randomNum = getRandomInt(2);

  if(randomNum === 1){
    throw new Error("Error loading product")
  }
  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
}