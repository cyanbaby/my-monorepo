const getData = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data");
    }, 5000);
  });
};          
export default async function AboutLoading() {
  const data = await getData();
  return <div>About</div>;
}