import { getCities, getModels } from "./dataUtils";

const getOtaProps = (config) => {
  const props = [];
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

  //Specific accept policies
  const allCitiesSelected = config.cities.length === getCities().length; // Toutes les villes sélectionnées
  const allModelsSelected = config.models.length === getModels().length; // Tous les modèles sélectionnés
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
    tag: config.tag,
    value: null,
  };

  for (const city of config.cities) {
    for (const model of config.models) {
      if (allCitiesSelected && allModelsSelected) {
        props.push(prop);
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
