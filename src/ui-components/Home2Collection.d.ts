/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Home2Props } from "./Home2";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Home2CollectionOverridesProps = {
    Home2Collection?: PrimitiveOverrideProps<CollectionProps>;
    Home2?: Home2Props;
} & EscapeHatchProps;
export declare type Home2CollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => Home2Props;
} & {
    overrides?: Home2CollectionOverridesProps | undefined | null;
}>;
export default function Home2Collection(props: Home2CollectionProps): React.ReactElement;
