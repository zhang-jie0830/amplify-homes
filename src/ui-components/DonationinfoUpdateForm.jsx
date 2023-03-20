/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Donationinfo } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DonationinfoUpdateForm(props) {
  const {
    id: idProp,
    donationinfo,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    address: "",
    photo_url: "",
    username: "",
    trackid: "",
    date: "",
    deliverycompany: "",
    type: "",
    weight: "",
  };
  const [address, setAddress] = React.useState(initialValues.address);
  const [photo_url, setPhoto_url] = React.useState(initialValues.photo_url);
  const [username, setUsername] = React.useState(initialValues.username);
  const [trackid, setTrackid] = React.useState(initialValues.trackid);
  const [date, setDate] = React.useState(initialValues.date);
  const [deliverycompany, setDeliverycompany] = React.useState(
    initialValues.deliverycompany
  );
  const [type, setType] = React.useState(initialValues.type);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = donationinfoRecord
      ? { ...initialValues, ...donationinfoRecord }
      : initialValues;
    setAddress(cleanValues.address);
    setPhoto_url(cleanValues.photo_url);
    setUsername(cleanValues.username);
    setTrackid(cleanValues.trackid);
    setDate(cleanValues.date);
    setDeliverycompany(cleanValues.deliverycompany);
    setType(cleanValues.type);
    setWeight(cleanValues.weight);
    setErrors({});
  };
  const [donationinfoRecord, setDonationinfoRecord] =
    React.useState(donationinfo);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Donationinfo, idProp)
        : donationinfo;
      setDonationinfoRecord(record);
    };
    queryData();
  }, [idProp, donationinfo]);
  React.useEffect(resetStateValues, [donationinfoRecord]);
  const validations = {
    address: [],
    photo_url: [],
    username: [],
    trackid: [],
    date: [],
    deliverycompany: [],
    type: [],
    weight: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          address,
          photo_url,
          username,
          trackid,
          date,
          deliverycompany,
          type,
          weight,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Donationinfo.copyOf(donationinfoRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DonationinfoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address: value,
              photo_url,
              username,
              trackid,
              date,
              deliverycompany,
              type,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Photo url"
        isRequired={false}
        isReadOnly={false}
        value={photo_url}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              photo_url: value,
              username,
              trackid,
              date,
              deliverycompany,
              type,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.photo_url ?? value;
          }
          if (errors.photo_url?.hasError) {
            runValidationTasks("photo_url", value);
          }
          setPhoto_url(value);
        }}
        onBlur={() => runValidationTasks("photo_url", photo_url)}
        errorMessage={errors.photo_url?.errorMessage}
        hasError={errors.photo_url?.hasError}
        {...getOverrideProps(overrides, "photo_url")}
      ></TextField>
      <TextField
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              photo_url,
              username: value,
              trackid,
              date,
              deliverycompany,
              type,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Trackid"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={trackid}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              photo_url,
              username,
              trackid: value,
              date,
              deliverycompany,
              type,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.trackid ?? value;
          }
          if (errors.trackid?.hasError) {
            runValidationTasks("trackid", value);
          }
          setTrackid(value);
        }}
        onBlur={() => runValidationTasks("trackid", trackid)}
        errorMessage={errors.trackid?.errorMessage}
        hasError={errors.trackid?.hasError}
        {...getOverrideProps(overrides, "trackid")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              photo_url,
              username,
              trackid,
              date: value,
              deliverycompany,
              type,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.date ?? value;
          }
          if (errors.date?.hasError) {
            runValidationTasks("date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("date", date)}
        errorMessage={errors.date?.errorMessage}
        hasError={errors.date?.hasError}
        {...getOverrideProps(overrides, "date")}
      ></TextField>
      <TextField
        label="Deliverycompany"
        isRequired={false}
        isReadOnly={false}
        value={deliverycompany}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              photo_url,
              username,
              trackid,
              date,
              deliverycompany: value,
              type,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.deliverycompany ?? value;
          }
          if (errors.deliverycompany?.hasError) {
            runValidationTasks("deliverycompany", value);
          }
          setDeliverycompany(value);
        }}
        onBlur={() => runValidationTasks("deliverycompany", deliverycompany)}
        errorMessage={errors.deliverycompany?.errorMessage}
        hasError={errors.deliverycompany?.hasError}
        {...getOverrideProps(overrides, "deliverycompany")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              address,
              photo_url,
              username,
              trackid,
              date,
              deliverycompany,
              type: value,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              address,
              photo_url,
              username,
              trackid,
              date,
              deliverycompany,
              type,
              weight: value,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || donationinfo)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || donationinfo) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
