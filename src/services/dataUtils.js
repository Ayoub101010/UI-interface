export const getCities = () => {
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
};

export function getAreaName(areaId) {
  const result = getCities().filter((city) => city.user_area_id === areaId);
  if (result && result.length > 0) {
    return result[0].city;
  }
}

export function getAreaIds() {
  return getCities().map((e) => e.user_area_id);
}

export const getModels = () => {
  const models = ["MBOXH4", "747MEG", "PDS2140"];
  return models;
};

export const getSoftwareVersion = () => {
  const softwareVersion = "126";
  return softwareVersion;
};

export function getNumberOfDevices(areaIds, models) {
  let totalCount = 0;
  const cities = getCities();
  for (const item of cities) {
    if (areaIds.includes(item.user_area_id)) {
      for (const device of item.device_models) {
        if (models.includes(device.model)) {
          totalCount += parseInt(device.device_count);
        }
      }
    }
  }
  return totalCount;
}
