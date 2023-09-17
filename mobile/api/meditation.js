export const createMeditation = async (data) => {
  let response = await fetch(
    `${process.env.EXPO_PUBLIC_SERVER_URL}/api/meditation`
  );
  return { status: response.status };
};
