import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type DonationinfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerDonationinfo = {
  readonly id: string;
  readonly address?: string | null;
  readonly photo_url?: string | null;
  readonly username?: string | null;
  readonly trackid?: number | null;
  readonly date?: string | null;
  readonly deliverycompany?: string | null;
  readonly type?: string | null;
  readonly weight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDonationinfo = {
  readonly id: string;
  readonly address?: string | null;
  readonly photo_url?: string | null;
  readonly username?: string | null;
  readonly trackid?: number | null;
  readonly date?: string | null;
  readonly deliverycompany?: string | null;
  readonly type?: string | null;
  readonly weight?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Donationinfo = LazyLoading extends LazyLoadingDisabled ? EagerDonationinfo : LazyDonationinfo

export declare const Donationinfo: (new (init: ModelInit<Donationinfo, DonationinfoMetaData>) => Donationinfo) & {
  copyOf(source: Donationinfo, mutator: (draft: MutableModel<Donationinfo, DonationinfoMetaData>) => MutableModel<Donationinfo, DonationinfoMetaData> | void): Donationinfo;
}