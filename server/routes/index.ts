export default eventHandler((event) => {
  console.log("Before", JSON.stringify(process.env));

  return "Start by editing <code>server/routes/index.ts</code>.";
});
