import { getClientSettings, setClientSettings } from "./policyHandler";
let g_Cities = [];

export const initSettings = async () => {
  console.log("init settings");
  if (g_Cities.length === 0) {
    const settings = await getClientSettings({
      key: "cities_devices",
      ns: "ux::static",
    });
    if (settings && settings.length > 0) {
      g_Cities = JSON.parse(settings[0].value);
    }
  }
};

export const getCities = () => {
  if (g_Cities.length === 0) {
    console.log("Cities not initialized yet!");
  }
  return g_Cities;
};

export function getAreaName(areaId) {
  const result = g_Cities.filter((city) => city.user_area_id === areaId);
  if (result && result.length > 0) {
    return result[0].city;
  }
}

export function getAreaIds() {
  const cities = getCities();
  return cities.map((e) => e.user_area_id);
}

export const getModels = () => {
  const models = ["MBOXH4", "747MEG", "PDS2140"];
  return models;
};

export const getSoftwareVersion = () => {
  const softwareVersion = "126";
  return softwareVersion;
};

export function getNumberOfDevices(coverage, areaIds, models) {
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
  return totalCount * coverage;
}
