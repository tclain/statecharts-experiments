import { MachineConfig } from "xstate";

type AnyMachineConfig = MachineConfig<any, any, any>;

/**
 * merge multiple xstate config into a single one
 * @param configs the xstate machine config to merge
 */
export const composeConfigs = (
  ...configs: AnyMachineConfig[]
): AnyMachineConfig => configs[0];
