const getData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 5000);
  });
};

export default async function About() {
  const data = await getData(); // 演示 loading
  // const data = await getData2(); // 演示 error
  return <div>About</div>;
}