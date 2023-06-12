export const getCities = () => {
  // Code pour obtenir la liste des villes
  const citiesData = [
    {
      city: "Guanajuato",
      user_area_id: "1",
      device_models: [
        { model: "PDS2140", device_count: "14101" },
        { model: "MBOXH4", device_count: "11670" },
        { model: "747MEG", device_count: "17980" },
      ],
    },
    
    {
      city: "Guadalajara",
      user_area_id: "3",
      device_models: [
        { model: "PDS2140", device_count: "12636" },
        { model: "MBOXH4", device_count: "8455" },
        { model: "747MEG", device_count: "13134" },
      ],
    },
    {
      city: "Zacatecas",
      user_area_id: "4",
      device_models: [
        { model: "PDS2140", device_count: "25540" },
        { model: "MBOXH4", device_count: "32024" },
        { model: "747MEG", device_count: "11995" },
      ],
    },
    {
      city: "Zamora",
      user_area_id: "5",
      device_models: [
        { model: "PDS2140", device_count: "26868" },
        { model: "MBOXH4", device_count: "5379" },
        { model: "747MEG", device_count: "20317" },
      ],
    },
    {
      city: "Querétaro",
      user_area_id: "6",
      device_models: [
        { model: "PDS2140", device_count: "23249" },
        { model: "MBOXH4", device_count: "19407" },
        { model: "747MEG", device_count: "9423" },
      ],
    },
  ];
  return citiesData;

  return citiesData.map((e)=>(e.user_area_id));
};

export const getModels = () => {
  // Code pour obtenir la liste des modèles
  const models = ["MBOXH4", "747MEG", "PDS2140"];
  return models;
};
export const getSoftwareVersion = () => {
  const softwareVersion = "126";
  return softwareVersion;
};

export function getNumberOfDevices(city, model) {
  let totalCount = 0;
  for (const item of city) {
    if (item.user_area_id === city && item.device_models.includes(model)) { 
      for (const device of item.device_models) {
        if (device.model === model) {
          totalCount += parseInt(device.device_count);
        }
      }
    }
  }
  return totalCount;
}


