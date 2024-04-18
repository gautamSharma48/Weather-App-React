import React from "react";

const SearchList = ({ data, setSelectedCity, setSearchResult }) => {
  return (
    <div className="absolute top-10 p-3 ml-4 mt-3 w-full h-60 overflow-auto bg-white rounded-xl">
      {data?.map((element, index) => (
        <div
          key={index}
          onClick={() => {
            const obj = {
              city: `${element?.name} ${element?.countryCode}`,
              latitude: element?.lat,
              longitude: element?.lng,
              countryCode: element?.countryCode,
              country: element?.name,
            };

            setSelectedCity(obj);
            setSearchResult("");
          }}
          className="w-full p-1 border-b-2 cursor-pointer"
        >
          <p key={index}>{element.toponymName}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
