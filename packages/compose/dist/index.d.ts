import { MachineConfig } from "xstate";
declare type AnyMachineConfig = MachineConfig<any, any, any>;
/**
 * merge multiple xstate config into a single one
 * @param configs the xstate machine config to merge
 */
export declare const composeConfigs: (...configs: AnyMachineConfig[]) => AnyMachineConfig;
export {};
