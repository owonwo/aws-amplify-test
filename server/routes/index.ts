export default eventHandler((event) => {
  const config = useRuntimeConfig(event);
  console.log("Before", JSON.stringify(process.env),
    // @ts-expect-error
    env,
    JSON.stringify(config)
  );

  return "Start by editing <code>server/routes/index.ts</code>.";
});
