
export type IPluginOptions = {
  /**
   * Which blocks to add.
   * @default ['quote', 'text-basic']
   */
  blocks?: string[];
};

export type IRequiredPluginOptions = Required<IPluginOptions>;
