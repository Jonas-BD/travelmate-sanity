export type CountryInfo = {
  language: string;
  name: string;
  description: string;
};

export type Country = {
  id: number;
  code: string;

  image: {
    asset: {
      url: string;
    };
  };

  infos: CountryInfo[];
};