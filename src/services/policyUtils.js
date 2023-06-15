import { getAreaIds, getModels } from "./dataUtils";
import { getClientSettings, setClientSettings } from "./policyHandler";

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
    const config = { tag: key, permitted_hours: {} };
    const areaIds = new Set();
    const models = new Set();
    groupedData[key].forEach((element) => {
      if (
        element.key === "OtaDailyUpgradeWindowStart" ||
        element.key === "OtaDailyUpgradeWindowEnd" ||
        element.key === "OtaRefusedVersion"
      ) {
        if (!config.coverage && element.coverage) {
          config.coverage = element.coverage * 100;
        }
        if (!config.sw_version && element.key === "OtaRefusedVersion") {
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
        const areaId = element?.filter?.device?.user_area_id;
        if (areaId) {
          areaIds.add(areaId);
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
    config.areaIds = areaIds.size ? Array.from(areaIds) : getAreaIds();
    // if no model is found in all properties that means that the config is for all models
    config.models = models.size ? Array.from(models) : getModels();
    configs.push(config);
  });
  return configs;
};

const getOtaProps = (config) => {
  const props = [];

  //Specific accept policies
  const allAreasSelected = config.areaIds.length === getAreaIds().length;
  const allModelsSelected = config.models.length === getModels().length;
  let prop = {
    comment: null,
    coverage: config.coverage / 100,
    coverage_seed: 0,
    enabled: true,
    expires_by: null,
    key: "OtaRefusedVersion",
    not_after: null,
    not_before: config.not_before,
    ns: "sysdl",
    tag: config.tag,
    value: null,
  };

  for (const areaId of config.areaIds) {
    for (const model of config.models) {
      if (allAreasSelected && allModelsSelected) {
        // props.push(prop);
        return props;
      } else if (allAreasSelected) {
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
              user_area_id: areaId,
            },
          },
        });
      } else {
        props.push({
          ...prop,
          filter: {
            device: {
              user_area_id: areaId,
              device_model: model,
            },
          },
        });
      }
    }
  }
  //Global refuse policy
  props.push({
    coverage: config.coverage / 100,
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
    coverage: config.coverage / 100,
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
    coverage: config.coverage / 100,
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

export const savePreset = async (title, config) => {
  const result = await setClientSettings([
    {
      expires_by: null,
      key: title,
      ns: "ux::perset",
      value: JSON.stringify(config),
    },
  ]);
  return result
};

export const loadPresets = async () => {
  const result = await getClientSettings(
    {

      ns: "ux::perset",

    }
  );
  return result
};