import React, { ReactElement } from 'react';

export interface GetLayout {
    getLayout?: (page: ReactElement) => React.ReactNode
  }

export interface allDataTypes {
    mens: {
        id: number;
        image: string;
        name: string;
        price: string;
        description: string;
    }[]
} 

export interface Welcome {
    results: Result[];
}

export interface Result {
    code:                  string;
    name:                  string;
    stock:                 Stock;
    price:                 Price;
    images:                GalleryImage[];
    categories:            any[];
    pk:                    string;
    sellingAttributes?:    SellingAttribute[];
    whitePrice:            Price;
    articles:              Article[];
    markers?:              Marker[];
    visible:               boolean;
    concept:               Concept[];
    numbersOfPieces:       number;
    defaultArticle:        Article;
    sale:                  boolean;
    variantSizes:          VariantSize[];
    swatches:              any[];
    articleCodes:          string[];
    ticket:                string;
    searchEngineProductId: string;
    dummy:                 boolean;
    linkPdp:               string;
    categoryName:          CategoryName;
    rgbColors:             string[];
    articleColorNames:     string[];
    ecoTaxValue:           number;
    swatchesTotal:         number;
    collection?:           Collection;
    showPriceMarker:       boolean;
    redirectToPdp:         boolean;
    mainCategoryCode:      string;
    comingSoon:            boolean;
    brandName:             BrandName;
    galleryImages:         GalleryImage[];
}

export interface Article {
    code:               string;
    name:               string;
    images:             GalleryImage[];
    pk:                 string;
    sellingAttributes?: SellingAttribute[];
    whitePrice:         Price;
    logoPicture:        GalleryImage[];
    normalPicture:      GalleryImage[];
    markers?:           Marker[];
    visible:            boolean;
    numbersOfPieces:    number;
    ticket:             string;
    dummy:              boolean;
    ecoTaxValue:        number;
    redirectToPdp:      boolean;
    comingSoon:         boolean;
    color:              Color;
    rgbColor:           string;
    genArticle?:        string;
    turnToSku:          string;
    videoId?:           string;
    campaignMedia?:     CampaignMedia;
}

export interface CampaignMedia {
    url:    string;
    id:     string;
    author: string;
    type:   string;
}

export interface Color {
    code:        string;
    text:        string;
    filterName?: string;
    hybrisCode:  string;
}

export interface GalleryImage {
    url: string;
}

export interface Marker {
    text: Collection;
    type: MarkerType;
}

export enum Collection {
    Essentials = "ESSENTIALS",
}

export enum MarkerType {
    Collection = "COLLECTION",
}

export enum SellingAttribute {
    NewArrival = "New Arrival",
}

export interface Price {
    currencyIso:    CurrencyISO;
    value:          number;
    priceType:      PriceTypeEnum;
    formattedValue: FormattedValue;
    type:           PriceType;
}

export enum CurrencyISO {
    Usd = "USD",
}

export enum FormattedValue {
    The2499 = "$ 24.99",
    The2999 = "$ 29.99",
    The3499 = "$ 34.99",
    The3999 = "$ 39.99",
    The4999 = "$ 49.99",
    The7499 = "$ 74.99",
}

export enum PriceTypeEnum {
    Buy = "BUY",
}

export enum PriceType {
    White = "WHITE",
}

export enum BrandName {
    HM = "H&M",
}

export enum CategoryName {
    Men = "Men",
}

export enum Concept {
    HMMan = "H&M MAN",
}

export interface Stock {
    stockLevel: number;
}

export interface VariantSize {
    orderFilter: number;
    filterCode:  string;
}

export interface Product {
    code: string;
    name: string;
    description: string;
    whitePrice: {
        price:         number;
        currency:      string;
        referenceFlag: boolean;
        startDate:     number;
        endDate:       number;
    }
}

// export interface WhitePrice {
//     price:         number;
//     currency:      string;
//     referenceFlag: boolean;
//     startDate:     number;
//     endDate:       number;
// }
