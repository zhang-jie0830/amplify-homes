/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DonationinfoCreateFormInputValues = {
    address?: string;
    photo_url?: string;
    username?: string;
    trackid?: number;
    date?: string;
    deliverycompany?: string;
    type?: string;
    weight?: number;
};
export declare type DonationinfoCreateFormValidationValues = {
    address?: ValidationFunction<string>;
    photo_url?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    trackid?: ValidationFunction<number>;
    date?: ValidationFunction<string>;
    deliverycompany?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    weight?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DonationinfoCreateFormOverridesProps = {
    DonationinfoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    photo_url?: PrimitiveOverrideProps<TextFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    trackid?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    deliverycompany?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    weight?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DonationinfoCreateFormProps = React.PropsWithChildren<{
    overrides?: DonationinfoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DonationinfoCreateFormInputValues) => DonationinfoCreateFormInputValues;
    onSuccess?: (fields: DonationinfoCreateFormInputValues) => void;
    onError?: (fields: DonationinfoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DonationinfoCreateFormInputValues) => DonationinfoCreateFormInputValues;
    onValidate?: DonationinfoCreateFormValidationValues;
} & React.CSSProperties>;
export default function DonationinfoCreateForm(props: DonationinfoCreateFormProps): React.ReactElement;
