import React from 'react';

type CityTypes = {
	cityInput: string;

};

const getCity = async (userInput: CityTypes) => {
  const city = await fetch(`https://www.google.com/maps/search?q=${userInput}`);
  const response = await city.json();
  return response.city;
};

// export const Index = ({ params: { userInput } }: { any }) => {
//   return <div>{userInput}</div>;
// };
