const DEVICE_CONTROL_CENTER = "https://34.173.231.180:8051";
const REST_API_ENUM_PROPERTIES = "/api/policy/admin/v1/properties/enum";
const REST_API_SET_PROPERTIES = "/api/policy/admin/v1/properties/set";
const REST_API_DELETE_PROPERTIES = "/api/policy/admin/v1/properties/delete";
const REST_API_ENUM_CLIENT_SETTINGS =
  "/api/policy/admin/v1/client_settings/enum";
const REST_API_SET_CLIENT_SETTINGS = "/api/policy/admin/v1/client_settings/set";
const REST_API_DELETE_CLIENT_SETTINGS =
  "/api/policy/admin/v1/client_settings/delete";

/**
 * Get proporties matching the query
 * @param Object query containing the properties to filter on
 *               empty query object means retrieving all properties
 * @returns Array of properties. Throws exception if an error happens
 * Example: getProperties({ns : "sysdl"})
 *          retuns all properties having 'ns' attribute set to "sysdl"
 */
export async function getProperties(query) {
  console.log("run getProperties");
  query = query ? query : {};
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_ENUM_PROPERTIES,
    {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow",
      body: JSON.stringify(query),
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

/**
 * Set a property value
 * @param {object} prop Object containing property value to be set
 */
export async function setProperty(prop) {
  console.log("run setProperty");
  return setProperties([prop]);
}

/**
 * Set a list of properties
 * @param {Array} props Array containing property values to be set
 */
export async function setProperties(props) {
  console.log("run setProperties");
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_SET_PROPERTIES,
    {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow",
      body: JSON.stringify(props),
    }
  );
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}

/**
 * Delete a property value
 * @param {object} prop Object containing property value to be set
 */
export function deleteProperty(prop) {
  console.log("run deleteProperty");
  return deleteProperties([prop]);
}

/**
 * Delete a property values
 * @param {object} props Array containing property values to be deleted
 */
export async function deleteProperties(props) {
  console.log("run deleteProperties");
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_DELETE_PROPERTIES,
    {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow",
      body: JSON.stringify(props),
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

/**
 * Get client setting
 * @param Object query containing the settings to filter on
 *               empty query object means retrieving all properties
 * @returns Array of settings. Throws exception if an error happens
 * Example: getClientSettings({key : "setting1"})
 *          retuns all settings having 'key' attribute set to "setting1"
 */
export async function getClientSettings(query) {
  query = query ? query : {};
  console.log("run getClientSetting:", query);
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_ENUM_CLIENT_SETTINGS,
    {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow",
      body: JSON.stringify(query),
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

/**
 * Set a list of settings
 * @param {Array} props Array containing settings to be set
 */
export async function setClientSettings(settings) {
  console.log("run setClientSettings:", settings);
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_SET_CLIENT_SETTINGS,
    {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow",
      body: JSON.stringify(settings),
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

/**
 * Delete client setting
 * @param {object} settings Array containing settings to be deleted
 */
export async function deleteClientSettings(settings) {
  console.log("run deleteClientSettings:", settings);
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_DELETE_CLIENT_SETTINGS,
    {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow",
      body: JSON.stringify(settings),
    }
  );
  const jsonData = await response.json();
  return jsonData;
}
