import { MachineConfig } from "xstate";
declare type AnyMachineConfig = MachineConfig<any, any, any>;
export declare const composeConfig: (...configs: AnyMachineConfig[]) => AnyMachineConfig;
export {};
