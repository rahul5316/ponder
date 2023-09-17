export const createMeditation = async (data) => {
  let response = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_URL}/api/meditation`
  );
  const data = response.status === 200 ? await response.json() : [];
  return { status: response.status, data };
};
