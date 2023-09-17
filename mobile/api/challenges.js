export const getChallenges = async () => {
  let response = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_URL}/api/challenges`
  );
  const data = await response.json();
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
