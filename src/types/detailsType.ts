export interface DetailsResponse {
  Message: null;
  Success: boolean;
  Content: Content;
}

export interface Content {
  ID: number;
  Name: string;
  ImageUrl: string;
  RawImageUrl: null;
  Description: null;
  Url: null;
  IsLowPrice: boolean;
  SubProducts: SubProduct[];
  InStock: boolean;
  Count: number;
  Accept: boolean;
  Publish: boolean;
  Usages: Usage[];
  View: number;
  RegisterPerson: null;
  Register_IdPersonal: number;
  RegisterDate: Date;
  UsagesTitle: string;
  LastEdit_Person: null;
  LastEdit_Person_ID: null;
  LastEditDate: null;
  Category: Category;
  PCategory_ID: number;
  SubProductsID: string;
  CustomMade: string;
  OrderIDs: string;
  WebsitePublishDate: Date;
  Brand: null;
  BrandID: null;
  SumSubProductWeight: number;
  SumSubProductPrice: number;
  FirstCustomMade: number;
  CoverImages: string[];
}

export interface Category {
  ID: number;
  PersianTitle: string;
  EnglishTitle: string;
  RegisterPerson: null;
  RegisterPerson_ID: number;
  RegisterDate: Date;
  SubProducts: any[] | null;
  SecondTitle: null;
  ImageUrl: null;
  MidCategory: null;
  MidCategoryID: number;
  IsSpecial: boolean;
  SizeGuide: null;
  SizeGuide_ID: null;
}

export interface SubProduct {
  ID: number;
  Rate: Rate;
  Category: Category;
  Category_ID: number;
  Product_ID: number;
  Title: string;
  Length: number;
  Width: number;
  Size: number;
  PriceOfMaterial: number;
  PriceOfSizeAndRepair: number;
  StonePricedollar: number;
  StoneWeight: number;
  StonePrice: number;
  StoneMadePrice: number;
  Weight: number;
  GoldType: null;
  GoldType_ID: number;
  Price: number;
  CustomMade: number;
  SubBrand: SubBrand;
  SubBrand_ID: number;
  Level: Level;
  Level_ID: number;
  Images: Image[];
  FirstSubProductImage: string;
  InStock: boolean;
  Description: null;
  Register_Person: null;
  RegisterPerson_ID: number;
  RegisterDate: Date;
  CopyFromFather_ID: number;
  OrderDetails: null;
  IsCreateForOrder: boolean;
  BarcodeIsPrinted: boolean;
  PrintCount: number;
  PrintedPerson: null;
  PrintedPerson_ID: number;
  LastPrintedDatetime: Date;
  LastPersianPrintedDate: string;
  PrintDescription: null;
  CartSubProduct: null;
  tags: string;
}

export interface Image {
  ID: number;
  ImageURL: string;
  SubProduct_ID: number;
}

export interface Level {
  ID: number;
  Title: string;
  CustomMadePerGram: number;
  CustomMadeBuyPerGram: number;
  RegisterPerson: null;
  RegisterPerson_ID: number;
  RegisterDate: Date;
  FullTitle: string;
}

export interface Rate {
  ID: number;
  Date: Date;
  Mazaneh: number;
  Gold18: number;
  DollarofGold: number;
  Dirham: number;
  Euro: number;
  Pound: number;
  Yuan: number;
  TamamSekkeh: number;
  NimSekkeh: number;
  RobSekkeh: number;
  Ons: number;
  Dollar: number;
  IsManual: boolean;
}

export interface SubBrand {
  ID: number;
  Title: string;
  Father: null;
  Father_ID: number;
  PercentageCustom: number;
  RegisterPerson: null;
  RegisterPerson_ID: number;
  RegisterDate: Date;
}

export interface Usage {
  ID: number;
  Title: string;
  Products: any[];
  Themes: null;
}
