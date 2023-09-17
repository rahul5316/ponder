export const getChallenges = async () => {
  console.log("process.env.SERVER_URL:", process.env.EXPO_PUBLIC_SERVER_URL);
  let response = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_URL}/api/challenges`
  );
  const data = response.status === 200 ? await response.json() : [];
  return { status: response.status, data };
};

export const updateChallenge = async (id, data) => {
  let response = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_URLL}/api/challenges/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }
  );
  return response.status === 200;
};
