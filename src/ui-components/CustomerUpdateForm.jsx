/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { Customer } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function CustomerUpdateForm(props) {
  const {
    id: idProp,
    customer: customerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstname: "",
    surname: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    isactive: false,
    ipaddress: "",
  };
  const [firstname, setFirstname] = React.useState(initialValues.firstname);
  const [surname, setSurname] = React.useState(initialValues.surname);
  const [email, setEmail] = React.useState(initialValues.email);
  const [mobile, setMobile] = React.useState(initialValues.mobile);
  const [address, setAddress] = React.useState(initialValues.address);
  const [dob, setDob] = React.useState(initialValues.dob);
  const [isactive, setIsactive] = React.useState(initialValues.isactive);
  const [ipaddress, setIpaddress] = React.useState(initialValues.ipaddress);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = customerRecord
      ? { ...initialValues, ...customerRecord }
      : initialValues;
    setFirstname(cleanValues.firstname);
    setSurname(cleanValues.surname);
    setEmail(cleanValues.email);
    setMobile(cleanValues.mobile);
    setAddress(cleanValues.address);
    setDob(cleanValues.dob);
    setIsactive(cleanValues.isactive);
    setIpaddress(cleanValues.ipaddress);
    setErrors({});
  };
  const [customerRecord, setCustomerRecord] = React.useState(customerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Customer, idProp)
        : customerModelProp;
      setCustomerRecord(record);
    };
    queryData();
  }, [idProp, customerModelProp]);
  React.useEffect(resetStateValues, [customerRecord]);
  const validations = {
    firstname: [],
    surname: [],
    email: [{ type: "Email" }],
    mobile: [{ type: "Phone" }],
    address: [],
    dob: [],
    isactive: [],
    ipaddress: [{ type: "IpAddress" }],
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
          firstname,
          surname,
          email,
          mobile,
          address,
          dob,
          isactive,
          ipaddress,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Customer.copyOf(customerRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CustomerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Firstname"
        isRequired={false}
        isReadOnly={false}
        value={firstname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname: value,
              surname,
              email,
              mobile,
              address,
              dob,
              isactive,
              ipaddress,
            };
            const result = onChange(modelFields);
            value = result?.firstname ?? value;
          }
          if (errors.firstname?.hasError) {
            runValidationTasks("firstname", value);
          }
          setFirstname(value);
        }}
        onBlur={() => runValidationTasks("firstname", firstname)}
        errorMessage={errors.firstname?.errorMessage}
        hasError={errors.firstname?.hasError}
        {...getOverrideProps(overrides, "firstname")}
      ></TextField>
      <TextField
        label="Surname"
        isRequired={false}
        isReadOnly={false}
        value={surname}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              surname: value,
              email,
              mobile,
              address,
              dob,
              isactive,
              ipaddress,
            };
            const result = onChange(modelFields);
            value = result?.surname ?? value;
          }
          if (errors.surname?.hasError) {
            runValidationTasks("surname", value);
          }
          setSurname(value);
        }}
        onBlur={() => runValidationTasks("surname", surname)}
        errorMessage={errors.surname?.errorMessage}
        hasError={errors.surname?.hasError}
        {...getOverrideProps(overrides, "surname")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              surname,
              email: value,
              mobile,
              address,
              dob,
              isactive,
              ipaddress,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Mobile"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={mobile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              surname,
              email,
              mobile: value,
              address,
              dob,
              isactive,
              ipaddress,
            };
            const result = onChange(modelFields);
            value = result?.mobile ?? value;
          }
          if (errors.mobile?.hasError) {
            runValidationTasks("mobile", value);
          }
          setMobile(value);
        }}
        onBlur={() => runValidationTasks("mobile", mobile)}
        errorMessage={errors.mobile?.errorMessage}
        hasError={errors.mobile?.hasError}
        {...getOverrideProps(overrides, "mobile")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              surname,
              email,
              mobile,
              address: value,
              dob,
              isactive,
              ipaddress,
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
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              surname,
              email,
              mobile,
              address,
              dob: value,
              isactive,
              ipaddress,
            };
            const result = onChange(modelFields);
            value = result?.dob ?? value;
          }
          if (errors.dob?.hasError) {
            runValidationTasks("dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("dob", dob)}
        errorMessage={errors.dob?.errorMessage}
        hasError={errors.dob?.hasError}
        {...getOverrideProps(overrides, "dob")}
      ></TextField>
      <SwitchField
        label="Isactive"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isactive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstname,
              surname,
              email,
              mobile,
              address,
              dob,
              isactive: value,
              ipaddress,
            };
            const result = onChange(modelFields);
            value = result?.isactive ?? value;
          }
          if (errors.isactive?.hasError) {
            runValidationTasks("isactive", value);
          }
          setIsactive(value);
        }}
        onBlur={() => runValidationTasks("isactive", isactive)}
        errorMessage={errors.isactive?.errorMessage}
        hasError={errors.isactive?.hasError}
        {...getOverrideProps(overrides, "isactive")}
      ></SwitchField>
      <TextField
        label="Ipaddress"
        isRequired={false}
        isReadOnly={false}
        value={ipaddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstname,
              surname,
              email,
              mobile,
              address,
              dob,
              isactive,
              ipaddress: value,
            };
            const result = onChange(modelFields);
            value = result?.ipaddress ?? value;
          }
          if (errors.ipaddress?.hasError) {
            runValidationTasks("ipaddress", value);
          }
          setIpaddress(value);
        }}
        onBlur={() => runValidationTasks("ipaddress", ipaddress)}
        errorMessage={errors.ipaddress?.errorMessage}
        hasError={errors.ipaddress?.hasError}
        {...getOverrideProps(overrides, "ipaddress")}
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
          isDisabled={!(idProp || customerModelProp)}
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
              !(idProp || customerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
