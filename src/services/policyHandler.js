const DEVICE_CONTROL_CENTER = "https://34.173.231.180:8051";
const REST_API_ENUM_PROPERTIES = "/api/policy/admin/v1/properties/enum";
const REST_API_SET_PROPERTIES = "/api/policy/admin/v1/properties/set";
const REST_API_DELETE_PROPERTIES = "/api/policy/admin/v1/properties/delete";
/**
 * Get All Proporties
 * @param {*}
 */
export async function getAllProperties() {
  console.log("run getAllProperties");
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_ENUM_PROPERTIES,
    {
      method: "POST",
      mode: "same-origin", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      body: "{\n}",
    }
  );
  const jsonData = await response.json();
  console.log(jsonData);
  return jsonData;
}

/**
 * Set a property value
 * @param {object} prop Object containing property value to be set
 */
export async function setProperty(prop) {
  console.log("run setProperty");
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_SET_PROPERTIES,
    {
      method: "POST",
      mode: "same-origin", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify([prop], null, 2),
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
export async function deleteProperty(prop) {
  console.log("run deleteProperty");
  const response = await fetch(
    DEVICE_CONTROL_CENTER + REST_API_DELETE_PROPERTIES,
    {
      method: "POST",
      mode: "same-origin", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify([prop], null, 2),
    }
  );
  const jsonData = await response.json();
  return jsonData;
}

// To do Add Delete function.
