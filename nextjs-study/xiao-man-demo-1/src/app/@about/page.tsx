const getData = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 2000);
  });
};          
export default async function AboutLoading() {
  const data = await getData();
  return <div>About Page</div>;
}