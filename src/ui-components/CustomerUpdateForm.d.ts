/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Customer } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CustomerUpdateFormInputValues = {
    firstname?: string;
    surname?: string;
    email?: string;
    mobile?: string;
    address?: string;
    dob?: string;
    isactive?: boolean;
    ipaddress?: string;
};
export declare type CustomerUpdateFormValidationValues = {
    firstname?: ValidationFunction<string>;
    surname?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    dob?: ValidationFunction<string>;
    isactive?: ValidationFunction<boolean>;
    ipaddress?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerUpdateFormOverridesProps = {
    CustomerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstname?: PrimitiveOverrideProps<TextFieldProps>;
    surname?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    dob?: PrimitiveOverrideProps<TextFieldProps>;
    isactive?: PrimitiveOverrideProps<SwitchFieldProps>;
    ipaddress?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customer?: Customer;
    onSubmit?: (fields: CustomerUpdateFormInputValues) => CustomerUpdateFormInputValues;
    onSuccess?: (fields: CustomerUpdateFormInputValues) => void;
    onError?: (fields: CustomerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerUpdateFormInputValues) => CustomerUpdateFormInputValues;
    onValidate?: CustomerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerUpdateForm(props: CustomerUpdateFormProps): React.ReactElement;
