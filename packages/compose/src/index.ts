import { MachineConfig } from "xstate";

type AnyMachineConfig = MachineConfig<any, any, any>;

export const composeConfig = (
  ...configs: AnyMachineConfig[]
): AnyMachineConfig => configs[0];
