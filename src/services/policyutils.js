import { getCities, getModels } from "./dataUtils";

export const getConfigsFromProperties = (props) => {
  // group properties by tag.
  const groupedData = props.reduce((acc, obj) => {
    const key = obj.tag;
    // ignore null tags.
    if (key) {
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
    }
    return acc;
  }, {});

  const configs = [];
  Object.keys(groupedData).forEach((key) => {
    // for each group of properties of the same tag, go through all properties
    // and collect config information
    // console.log(key, ': ',groupedData[key])
    const config = { permitted_hours: {} };
    const cities = new Set();
    const models = new Set();
    groupedData[key].forEach((element) => {
      if (
        element.key === "OtaDailyUpgradeWindowStart" ||
        element.key === "OtaDailyUpgradeWindowEnd" ||
        element.key === "OtaRefusedVersion"
      ) {
        if (!config.coverage && element.coverage) {
          config.coverage = element.coverage;
        }
        if (!config.OtaRefusedVersion && element.key === "OtaRefusedVersion") {
          config.sw_version = element.value;
        }
        if (
          !config.permitted_hours.start &&
          element.key === "OtaDailyUpgradeWindowStart"
        ) {
          config.permitted_hours.start = element.value;
        }
        if (
          !config?.permitted_hours?.end &&
          element.key === "OtaDailyUpgradeWindowEnd"
        ) {
          config.permitted_hours.end = element.value;
        }
        const city = element?.filter?.device?.user_area_id;
        if (city) {
          cities.add(city);
        }
        const hwModel = element?.filter?.device?.device_model;
        if (hwModel) {
          models.add(hwModel);
        }
        if (!config.not_after && element.not_after) {
          config.not_after = element.not_after;
        }
        if (!config.not_before && element.not_before) {
          config.not_before = element.not_before;
        }
      }
    });
    // if no city is found in all properties that means that the config is for all cities
    config.cities = cities.size ? Array.from(cities) : getCities();
    // if no model is found in all properties that means that the config is for all models
    config.models = models.size ? Array.from(models) : getModels();
    configs.push(config);
  });
  return configs;
};


const getOtaProps = (config) => {
  const props = [];

  //Specific accept policies
  const allCitiesSelected = config.cities.length === getCities().length; 
  const allModelsSelected = config.models.length === getModels().length;
  let prop = {
    comment: null,
    coverage: config.coverage,
    coverage_seed: 0,
    enabled: true,
    expires_by: null,
    key: "OtaRefusedVersion",
    not_after: null,
    not_before: config.not_before,
    ns: "sysdl",
    tag: config.tag ,
    value: null,
  };

  for (const city of config.cities) {
    for (const model of config.models) {
      if (allCitiesSelected && allModelsSelected) {
        // props.push(prop);
        return props;
      } else if (allCitiesSelected) {
        props.push({
          ...prop,
          filter: {
            device: {
              device_model: model,
            },
          },
        });
      } else if (allModelsSelected) {
        props.push({
          ...prop,
          filter: {
            device: {
              user_area_id: city,
            },
          },
        });
      } else {
        props.push({
          ...prop,
          filter: {
            device: {
              user_area_id: city,
              device_model: model,
            },
          },
        });
      }
    }
  }
    //Global refuse policy
    props.push({
      coverage: 1,
      coverage_seed: 0,
      enabled: true,
      expires_by: null,
      filter: {},
      key: "OtaRefusedVersion",
      not_after: null,
      not_before: config.not_before,
      ns: "sysdl",
      tag: config.tag,
      value: config.sw_version,
    });
  return props;
};

const getPermittedTimeProps = (config) => {
  //Permitted Upgrade Hours
  const props = [];
  props.push({
    coverage: 1,
    coverage_seed: 0,
    enabled: true,
    expires_by: null,
    filter: {},
    key: "OtaDailyUpgradeWindowEnd",
    not_after: null,
    not_before: config.not_before,
    ns: "sysdl",
    tag: config.tag,
    value: config.permitted_hours.end,
  });
  props.push({
    coverage: 1,
    coverage_seed: 0,
    enabled: true,
    expires_by: null,
    filter: {},
    key: "OtaDailyUpgradeWindowStart",
    not_after: null,
    not_before: config.not_before,
    ns: "sysdl",
    tag: config.tag,
    value: config.permitted_hours.start,
  });

  return props;
};

export const generateProps = (config) => {
  return [...getOtaProps(config), ...getPermittedTimeProps(config)];
 
};
