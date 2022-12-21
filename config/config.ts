window.myConfig = {
  title: "Test MyApp",
  secret_data: "NO SECRET DATA HERE FOOL",
  public_data: "Everything that can leak to the net",
};

export interface IConfig {
  title: string;
  secret_data: string;
  public_data: string;
}
